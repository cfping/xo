// Copyright 2023 xobserve.io Team
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { HStack, Text, Tooltip } from '@chakra-ui/react'
import { PanelVariableChangeEvent, TimeChangedEvent, VariableForceReload } from 'src/data/bus-events'
import { Variable, VariableQueryType, VariableRefresh } from 'types/variable'
import useBus, { dispatch } from 'use-bus'
import storage from 'utils/localStorage'
import { memo, useEffect, useState } from 'react'
import { cloneDeep, isEqual } from 'lodash'
import PopoverSelect from 'src/components/select/PopoverSelect'
import { VarialbeAllOption, VariableSplitChar } from 'src/data/variable'
import { VariableManuallyChangedKey } from 'src/data/storage-keys'
import React from 'react'
import { useStore } from '@nanostores/react'
import { variableMsg } from 'src/i18n/locales/en'
import { getUrlParams } from 'utils/url'
import { $variables } from './store'
import { parseVariableFormat } from 'utils/format'
import { getDatasource } from 'utils/datasource'
import { isEmpty } from 'utils/validate'
import { $datasources } from '../datasource/store'
import { Datasource } from 'types/datasource'
import Loading from 'components/loading/Loading'
import { EditorInputItem } from 'components/editor/EditorItem'
import { externalDatasourcePlugins } from '../dashboard/plugins/external/plugins'
import { builtinDatasourcePlugins } from '../dashboard/plugins/built-in/plugins'
import { replaceWithBuiltinVariables } from 'utils/variable'
import { $dashboard } from '../dashboard/store/dashboard'

interface Props {
  variables: Variable[]
}

const vkey = 'variables'
const LoadVariables = ({ variables }: Props) => {
  return (
    variables.length > 0 && (
      <>
        {variables.map((v) => {
          return <SelectVariable key={v.id} v={v} />
        })}
      </>
    )
  )
}

export default LoadVariables

const SelectVariable = memo(({ v }: { v: Variable }) => {
  const datasourcs = useStore($datasources)
  const t1 = useStore(variableMsg)
  const [values, setValues] = useState<string[]>(null)
  const [loading, setLoading] = useState(false)

  // const urlKey = 'var-' + v.name
  // const varInUrl = useSearchParam(urlKey)

  useBus(
    (e) => {
      return e.type == TimeChangedEvent
    },
    (e) => {
      if (v.refresh == VariableRefresh.OnTimeRangeChange) {
        console.log('load variable values( on time change )', v.name)
        loadValues(true)
      }
    },
    [v],
  )

  useBus(
    VariableForceReload + v.id,
    () => {
      console.log('force variable to reload values', v.name)
      forceReload()
    },
    [],
  )

  useEffect(() => {
    if (!v.values) {
      // only load values when first loading
      loadValues(false)
    } else {
      setValues(v.values)
    }
  }, [])

  useEffect(() => {
    if (values) {
      loadValues(false)
    }
  }, [v.value])

  const forceReload = async () => {
    await loadValues(true)
    if (v.panelId) {
      dispatch({
        type: PanelVariableChangeEvent,
        panelId: v.panelId,
        variable: v,
      })
    } else {
      const vars = $variables.get()
      const newVars = []
      for (const v1 of vars) {
        if (v1.id == v.id) {
          newVars.push(cloneDeep(v))
        } else {
          newVars.push(v1)
        }
      }
      $variables.set(newVars)
    }
  }

  const loadValues = async (forceLoad = false) => {
    if (v.type == VariableQueryType.TextInput) {
      return
    }

    let result = []
    if (v.enableAll) {
      result.push(VarialbeAllOption)
    }

    let needQuery = true
    if (!forceLoad) {
      if (
        v.refresh == VariableRefresh.Manually ||
        v.refresh == VariableRefresh.OnTimeRangeChange
      ) {
        // load from storage first
        let vs = storage.get(VariableManuallyChangedKey)
        if (vs) {
          const vs1 = vs[v.teamId + v.id]
          if (vs1) {
            result = [...result, ...vs1]
            needQuery = false
          }
        }
      }
    }

    if (needQuery) {
      setLoading(true)
      try {
        const res = await queryVariableValues(v, datasourcs)
        setLoading(false)
        console.log('load variable values( query )', v.name, res)
        if (res.error) {
          result = []
        } else {
          res.data?.sort()
          result = [...result, ...(res.data ?? [])]
          if (
            v.refresh == VariableRefresh.Manually ||
            v.refresh == VariableRefresh.OnTimeRangeChange
          ) {
            let vs = storage.get(VariableManuallyChangedKey)
            if (!vs) {
              vs = {
                [v.teamId + v.id]: res.data,
              }
            } else {
              vs[v.teamId + v.id] = res.data
            }
            storage.set(VariableManuallyChangedKey, vs)
          }
        }
      } catch (error) {
        setLoading(false)
        return
      }
    }

    const oldSelected = v.selected
    if (!isEqual(result, v.values)) {
      if (v.selected != VarialbeAllOption) {
        if (!isEmpty(v.selected)) {
          const selected = v.selected
            .split(VariableSplitChar)
            ?.filter((s) => result.includes(s))
          if (selected.length == 0) {
            // autoSetSelected(v, result)
            v.selected = result[0]
          } else {
            v.selected = selected.join(VariableSplitChar)
          }
        } else {
          // autoSetSelected(v, result)
        }
      }
    }
    // setValue(v, v.selected)
    const vars = $variables.get()
    if (v.selected != oldSelected || v.selected == VarialbeAllOption) {
      const referVars = parseVariableFormat(v.value)
      for (const variable of vars) {
        // console.log("here33333:",v.name, variable)
        // to avoid circle refer evets:
        // A refer B : A send event to B, then B refer to A, B send event to A
        if (v.id == variable.id || referVars.includes(variable.name)) {
          continue
        }

        if (
          variable.datasource?.toString()?.indexOf('${' + v.name + '}') >= 0 ||
          variable.value?.indexOf('${' + v.name + '}') >= 0
        ) {
          // to avoid cache missing ,add a interval here
          // Two consecutive requests will miss the cache, because the result of first request has not been save to cache, but the second request has arrived
          setTimeout(() => {
            dispatch(VariableForceReload + variable.id)
          }, 100)
        }
      }
    }
    setValues(result ?? [])
    v.values = result
    if (needQuery) {
      if (v.panelId) {
        dispatch({
          type: PanelVariableChangeEvent,
          panelId: v.panelId,
          variable: v
        })
      } else {
        $variables.set([...vars])
      }
    }
  }

  const value = isEmpty(v.selected) ? [] : v.selected.split(VariableSplitChar)
  const isDashVar = v.id.toString().startsWith('d-')
  return (
    <HStack key={v.id} spacing={1}>
      <Tooltip
        openDelay={300}
        label={(isDashVar ? (v.panelId ? t1.panelScoped : t1.dashScoped) : t1.globalScoped) + ': ' + v.name}
        placement='auto'
      >
        <Text
          fontSize='0.95em'
          minWidth='max-content'
          noOfLines={1}
          fontWeight={400}
        >
          {v.name}
        </Text>
      </Tooltip>
      {!loading &&
        v.type != VariableQueryType.TextInput &&
        !isEmpty(values) && (
          <PopoverSelect
            value={value}
            size='md'
            variant='unstyled'
            onChange={(value) => {
              const vs = value.filter((v1) => values.includes(v1))
              if (isEmpty(vs)) {
                setValue(v, '')
              } else {
                setValue(v, vs.join(VariableSplitChar))
              }
            }}
            options={values.map((v) => ({ value: v, label: v }))}
            exclusive={VarialbeAllOption}
            isMulti={v.enableMulti}
            showArrow={false}
            matchWidth={isDashVar}
          />
        )}
      {v.type == VariableQueryType.TextInput && (
        <EditorInputItem
          bordered={false}
          borderedBottom
          value={v.selected}
          onChange={(v1) => {
            if (v1 != v.selected) {
              setValue(v, v1)
              setVariableValue(v, v1)
            }
          }}
          placeholder={t1.textInputTips}
        />
      )}
      {loading && <Loading size='sm' />}
    </HStack>
  )
})
export const initVariableSelected = (variables: Variable[]) => {
  const params = getUrlParams()
  const selectedInUrl = {}
  for (const k of Object.keys(params)) {
    if (k.startsWith('var-')) {
      const r = k.slice(4)
      selectedInUrl[r] = params[k]
    }
  }

  let sv0 = storage.get(vkey)
  if (!sv0) {
    sv0 = {}
  }

  for (const v of variables) {
    const sv = sv0[v.teamId]
    const selected = selectedInUrl[v.name] ?? sv?.[v.id]
    if (!selected) {
      if (v.type == VariableQueryType.TextInput) {
        v.selected = v.default ?? ''
      } else {
        v.selected = isEmpty(v.default) ? v.values && v.values[0] : v.default
      }
    } else {
      v.selected = selected
      if (selectedInUrl[v.name]) {
        setValueToStorage(v, selected)
      }
    }
  }
}

export const setVariableValue = (variable: Variable, value) => {
  // const k = 'var-' + variable.name
  // removeParamFromUrl([k])
  setValue(variable, value)
}

const setValue = (variable: Variable, value) => {
  variable.selected = value
  let vars;
  if (variable.panelId) {
    dispatch({
      type: PanelVariableChangeEvent,
      panelId: variable.panelId,
      variable: variable,
    })
    vars = $dashboard.get().data.panels.find((p) => p.id == variable.panelId).variables
  } else {
    vars = $variables.get()
    const newVars = []
    for (let i = 0; i < vars.length; i++) {
      if (vars[i].id == variable.id) {
        newVars.push(cloneDeep(variable))
      } else {
        newVars.push(vars[i])
      }
    }
    $variables.set(newVars)
  }


  setValueToStorage(variable, value)

  const referVars = parseVariableFormat(variable.value)
  for (const v of vars) {
    // to avoid circle refer evets:
    // A refer B : A send event to B, then B refer to A, B send event to A
    if (v.id == variable.id || referVars.includes(v.name)) {
      continue
    }
    if (
      v.datasource?.toString()?.indexOf('${' + variable.name + '}') >= 0 ||
      v.value?.indexOf('${' + variable.name + '}') >= 0
    ) {
      dispatch(VariableForceReload + v.id)
    }
  }
}

const setValueToStorage = (variable: Variable, value) => {
  const sv = storage.get(vkey)
  if (!sv) {
    storage.set(vkey, {
      [variable.teamId]: {
        [variable.id]: value,
      },
    })
  } else {
    const v = sv[variable.teamId]
    if (!v) {
      sv[variable.teamId] = {
        [variable.id]: value,
      }
    } else {
      v[variable.id] = value
    }

    storage.set(vkey, sv)
  }
}

export const setVariable = (name, value) => {
  const vars = $variables.get()
  let v
  for (var i = 0; i < vars.length; i++) {
    if (vars[i].name == name) {
      v = vars[i]
      break
    }
  }

  v && setVariableValue(v, value)
}

export const queryVariableValues = async (
  v: Variable,
  datasources: Datasource[],
) => {
  let result = {
    error: null,
    data: null,
  }

  if (v.type == VariableQueryType.Custom) {
    if (v.value.trim() != '') {
      result.data = v.value.split(',')
    }
  } else if (v.type == VariableQueryType.Datasource) {
    result.data = datasources.map((ds) => ds.name)
  } else if (v.type == VariableQueryType.Query) {
    const ds = getDatasource(v.datasource, datasources)
    if (ds) {
      const p =
        builtinDatasourcePlugins[ds.type] ?? externalDatasourcePlugins[ds.type]
      if (p && p.queryVariableValues) {
        const v1 = cloneDeep(v)

        v1.value = replaceWithBuiltinVariables(v1.value, {
          teamId: v.teamId,
        })

        result = await p.queryVariableValues(v1)
      }
    }
  }

  if (result.error) {
    return result
  }

  if (!isEmpty(v.regex)) {
    const regex = v.regex.toLowerCase()
    result.data = result?.data?.filter((r: string) =>
      r.toLowerCase().match(regex),
    )
  }

  return result
}

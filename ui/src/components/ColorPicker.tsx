// Copyright 2023 Datav.io Team
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
import React from "react";
import { SketchPicker } from "react-color";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Center,
    Button,
    Box,
    HStack,
    Text,
} from "@chakra-ui/react";
import { PresetColor } from "react-color/lib/components/sketch/Sketch";
import { useStore } from "@nanostores/react";
import { commonMsg } from "src/i18n/locales/en";

interface Props {
    presetColors?: PresetColor[]
    color: string
    onChange: any
    buttonText?: string
    circlePicker?: boolean
    circleRadius?: string
}

export const ColorPicker = ({ presetColors, color, onChange, buttonText = null, circlePicker = false,circleRadius="16px" }: Props) => {
    const t = useStore(commonMsg)
    return (
        <Popover>
            <PopoverTrigger><HStack>
                {circlePicker ? <Box width="20px" height="20px" bg={color} borderRadius="50%" className="bordered"></Box> : <>
                <Button size="sm" width="fit-content" variant="ghost">{buttonText ?? t.pickColor}</Button>
                <Box width={circleRadius} height={circleRadius} bg={color} borderRadius="50%" ></Box>
                <Text textStyle="annotation">{color}</Text>
                </>}
                
            </HStack></PopoverTrigger>
            <PopoverContent width={300}>
                <Center>
                    <SketchPicker
                        // disableAlpha={true}
                        presetColors={presetColors}
                        width="100%"
                        color={color}
                        onChange={onChange}
                    />
                </Center>
            </PopoverContent>
        </Popover>
    );
};

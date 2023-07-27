import { i18n } from 'src/i18n/i18n'
import { params } from '@nanostores/i18n'

export const notFoundMsg = i18n("notfound", {
  "title": "404: Not found",
  "description": "Page not found",
  "heading": "404 | Page Not Found",
  "message": "You just hit a route that doesn't exist... the sadness.😢",
  "back-to-home": "Back to Home"
})

export const commonMsg = i18n("common", {
  "title": "Title",
  "name": "Name",
  "description": "Description",
  "basic": "Basic",
  "variable": "Variable",
  "settings": "Settings", 
  "new": "New",
  "login": "Log in",
  "logout": "Log out",
  "nickname": "Nickname",
  "email": "Email",
  "submit": "Submit",
  "deleteAlert": "Are you sure? You can't undo this action afterwards.",
  "cancel": "Cancel",
  "delete": "Delete",
  "edit": "Edit",
  "default": "Default",
  "configuration": "Configuration",
  "datasource": "Datasource",
  "type": "Type",
  "test": "Test",
  "save": "Save",
  "manage": "Manage",
  "team": "Team",
  "user": "User",
  "userName": "Username",
  "action": "Action",
  "optional": "optional",
  "query": "Query",
  "basicSetting": "Basic Setting",
  "showMore": "Show More",
  "custom": "Custom",
  "createdBy": "Created By",
  "Viewer": "Viewer",
  "Admin": "Admin",
  "SuperAdmin": "Super Admin",
  "password": "Password",
  "dangeSection": "Dangerous section",
  "dashboard": "Dashboard",
  "panel": "Panel",
  "members": "Member",
  "sidemenu": "Side Menu",
  "created": "Created",
  "updated": "Updated",
  "role": "Role",
  "joined": "Joined",
  "auto": "Auto",
  "general": "General",
  "styles": "Styles",
  "tags": "Tags",
  "copy": "Copy",
  "copied": "Copied",
  "share": "Share",
  "remove": "Remove",
  "mode": "Mode",
  "label": "Label",
  "unit": "Unit",
  "decimal": "Decimal",
  "axis": "Axis",
  "scale": "Scale",
  "min": "Min",
  "max": "Max",
  "color": "Color",
  "opacity": "Opacity",
  "applyToSeeEffect": "You need to click Apply Button(in top-right) to see the new trigger taken effect",
  "enable": "Enable",
  "vertical": "Vertical",
  "horizontal": "Horizontal",
  "onClickEvent": "On click event",
  "onClickEventTips": "When click on the chart, this event will be executed",
  "editFunc": "Edit Function",
  "animation": "Animation",
  "animationTips": "Display chart animation",
  "display": "Display",
  "show": "Show",
  "calc":"Calculation",
  "calcTips": "calculate results from series data with this reducer function",
  "value": "Value",
  "pickColor": "Pick color",
  "sort": "Sort",
  "success": "Success",
  "error": "Error",
  "compore": "Compare",
  "duration": "Duration",
  "alert": "Alert",
  "transform": "Transform",
  "valueSettings": "Value settings",
  "small": "Small",
  "medium": "Medium",
  "large": "Large",
  "left": "Left",
  "center": "Center",
  "right": "Right",
  "pagination": "Pagination",
  "interaction": "Interaction",
  "descend": "Descend",
  "ascend": "Ascend",
  "palette": "Palette",
  "series": "Series",
  "seriesTips": "A series of data can draw a plot line",
  "highlightColor": "Highlight color",
  "inputTips": params("Enter {name}.."),
  "isReqiiured": params("{name} is required"),
  "isInvalid": params("{name} is invalid"),
  "isAdded": params("{name} added!"),
  "isUpdated": params("{name} updated!"),
  "isDeleted": params("{name} deleted!"),
  "isExist": params("{name} already exists"),
  "newItem": params("New {name}"),
  "manageItem": params("Manage {name}"),
  "deleteItem": params("Delete {name}"),
  "editItem": params("Edit {name}"),
  "itemName": params("{name} Name"),
})

export const miscMsg = i18n("misc", {
})

export const sidebarMsg = i18n("sidebar", {
    "search": "Search Dashboards",
    "selectSidemenu": "Select Sidemenu",
    "themeChange": "Change Theme",
    "accountSetting": "Account Setting",
    "adminPanel": "Admin Panel",
    "currentLang": "Current Lang",
    "newItem": "Add new item",
})


export const navigateMsg = i18n("navigate", {
  "NewDashboard": "New Dashboard",
  "NewDatasource": "New Datasource",
  "ImportDashboard": "Import Dashboard",
})


export const accountSettingMsg = i18n("accountSetting", {
  "changePassword": "Change Password",
  "oldPassword": "Old Password",
  "newPassword": "New Password",
  "confirmPassword": "Confirm Password",
  "navTitle": "Account setting",
  "subTitle": "Settings for current user"
})

export const cfgDatasourceMsg = i18n("cfgDatasource", {
  "deleteToast": params(`Datasource {name} has been deleted.`),
})


export const cfgVariablemsg = i18n("cfgVariable", {
  "subTitle": "Manage global variables",
  "queryType": "Query Type",
  "refresh": "Refresh",
  "regexFilter": "Regex Filter",
  "valueUpdated": params(`Values of {name} has been updated`),
  "reload": "Reload values",
  "multiValue": "Multi Value",
  "allValue": "All Value",
  "queryValue": "Query values",
  "varValues": "Variable Values",
  "selectDs": "Select Datasource",
  "OnDashboardLoad": "On dashboard load",
  "OnTimeRangeChange": "On timerange change",
  "Manually": "Manually",
  "nameTips": "Only alphabet and digit numbers are allowed",
  "descTips": "give this variable a simple description",
  "valueTips": "Values separated by comma,e.g 1,10,20,a,b,c",
  "fitlerTips": "further filter the query result through a Regex pattern",
  "useCurrentTime": "Use current time",
  "selectMetrics": "Select metrics",
  "metricTips": "support using variables"
})

export const cfgUsers = i18n("cfgUsers", {
  "pwAlert": "new password must be at least 6 characters long",
  "userRole": "User Role",
  "globalRole": "Global Role",
  "changePw": "Change Password",
  "userNameInput": "enter a username, used in login",
})


export const cfgTeam = i18n("cfgTeam", {
  "title": "Manage Your Team",
  "subTitle": "Current team",
  "roleInTeam": "Role in team",
  "leaveTeam": "Leave Team",

  "sidemenuTip1": "Customize the top section of your team's side menu, you can add, edit, delete and reorder the menu items.",
  "sidemenuTip2": "Menu item format",
  "sidemenuTip3": "Url format",
  "level": "Level", 
  "sidemenuTip4": "if level 1 is /x, level 2 must be /x/a or /x/b, obviously /y/a is invalid",
  "sidemenuTip5": "You can find icons in",
  "modifySidemenu": "Modify Side Menu",
  "addMenuItem": "Add Menu Item",
  "removeMenuItem": "Remove Menu Item",
  "sidemenuErrTitle": "title is required",
  "sidemenuErrDashId":  "dashboard id is required",
  "sidemenuErrLevel1Icon": "Menu item of level 1 must have an icon",
  "sidemenuErrIcon": params("icon {name} is not exist"),
  "sidemenuErrUrl": params("{name} is not a valid url"),
  "sidemenuErrLevel1Url": "level 1 url must be /x, /x/y is invalid",
   "sidemenuErrLevel2Url":"level 2 url must use level1 url as prefix",
   'sidemenuErrLevel2Url1': "level 2 url must be /x/y, /x or /x/y/z is invalid",
   "sidemenuErrChildTitle": "child title or dashboard id is required",
   "sidemenuErrChildUrl": params("{name} is not a valid url"),
   "sidemenuReload": "Side menu updated, reloading..."
})


export const newMsg = i18n("new", {
  "subTitle": "Create some useful items",
  "dashInfo": "Dashboard info",
  "dsInfo": "Datasource info",
  "dashTitle": "Dashboard Title",
  "belongTeam": "Belong to team",
  "dashToast": "Dashboard added, redirecting...",
  "importToast": "Dashboard imported, redirecting...",
  "jsonInvalid": "Meta json is not valid",
  "dsToast": "Datasource added, redirecting...",
  "testDsFailed":  "Test failed",
})



export const dashboardMsg = i18n("dashboard", {
  "notFound": "Dashboard not found, maybe 1. invalid dashboard id(url) 2. you have chosen a wrong team",
  "headerTeamTips": "the team which current dashboard belongs to",
  "refreshOnce": "refresh just once",
  "refreshInterval": "refresh with interval",
  "fullscreenTips": "enter fullscreen mode",
  "exitFullscreenTips": "Press ESC to exit fullscreen mode",
  "addPanel": "Add new panel",
  "pastePanel": "Paste panel from clipboard"
})

export const dashboardSaveMsg = i18n("dashboardSave", {
  "autoSaveNotAvail": "Auto save is not available in edit panel mode.",
  "autoSaveNotAvail1": "Auto save is not available in history preview mode",
  "saveMsgRequired": "A save message must be provided when saving in history preview mode",
  "savedMsg": params("Dashboard {name} saved"),
   "saveDueToChanges": "Current dashboard has changes, please save it before viewing history.",
   "onPreviewMsg1": "Changed to history preview mode",
  "onPreviewMsg2": "Changed to current dashboard",
  "onPreviewMsg3": "If you want to use preview version, please save it by click save button.",
  "viewHistory": "View History",
  "saveHistoryHeader": "Dashboard revision history",
  "saveDash": "Save Dashboard",
  "dangerous": "Dangerous",
  "saveOverrideTips": "You are previewing a history now, do you want to override current dashboard?",
  "describeSaveChanges": "describe changes",
  "saveMsgTips": "a message shows what has been changed",
  "viewChanges": "View Changes",
  "showDiffLine": "Only diff lines will be show, others will be folded",
  "useCurrentDash": "click here to continue use current dashboard, and stop previewing",
  "current": "Currrent",
  "preview": "Preview"
})

export const dashboardSettingMsg = i18n("dashboardSetting", {
  "metaData": "Meta data",
  "tootip": "Shared tooltip",
  "tootipTips": "Show tooltips at the same timeline position across all panels",
  "hideVars": "Hide global variables",
  "hideVarsTips": "enter global variables names, separated with ',' . e.g: app,env",
  "tagTips": "Tag a dashboard and group it into a same collection for searching",
  "tagInputTips": "new tag(press enter to add)",
  "tagsExceedLimit": "You can only add up to 5 tags.",
  "panelLayout": "Panels layout",
  "panelLayoutTips": "Auto place panels in horizontal or vertical direction, when set to random, you can place panels anywhere",
  "panelOverlap": "Allow panels overlap",
  "panelOverlapTips": "Allow panels to be placed overlap each other",
  "saveDash": "Save dashboard",
  "savePromt": "Enable unsave promt",
  "savePromtTips": "When you have unsaved changes, a promt will be shown when you try to leave the page",
  "autoSave": "Enable auto save",
  "autoSaveTips": "Dashboard will be auto saved at intervals, you can find old versions in save history list",
  "autoSaveInterval": "Auto save interval(seconds)",

  "background": "Background",
  "backgroundTips": "Set dashboard background color or image",
  "enableBg": "Enable background",
  "enableBgTips": "Whether using the background image set above",
  "dashBorder":  "Dashboard border",
  "dashBorderTips": "Select a cool border for your dashboard",

  "dashSaved": "Dashboard saved",
  "saveChanges": "modify dashboard meta data",
  "saveWarnTitle": "Press Ctrl + S to Save your dashboard first!",
  "saveWarnContent": "Before submitting the meta data above, please save your Dashboard first, if it has any changes",
  "saveAlertTitle": "Submit dashboard meta data",
  "saveAlertContent": " Are you sure to submit? If submit success, page will be reloaded.",
  "loadData": "Load data",
  "lazyRender": "Lazy render panels",
  "lazyRenderTips": "A panle will be renderting only when our screen has scrolled to this panel"
})

export const timePickerMsg = i18n("timePicker", {
  "fromInvalid": "format of from is invalid'",
  "toInvalid": "format of to is invalid",
  "selectTime": "Select a date range",
  "customTime": "Custom time range",
  "from": "From",
  "to": "To",
  "apply": "Apply time range",
  "quickSelect": "Quick select",
  "lastMinutes": params("Last {name} minutes"),
  "lastHours": params("Last {name} hours"),
  "lastDays": params("Last {name} days"),
})


export const variableMsg = i18n("variable", {
  "dashScoped": "dashboard scoped variable",
  "globalScoped": "global scoped variable",
})

export const panelMsg = i18n("panel", {
  "viewPanel": "View Panel",
  "exitlView": "Exit View",
  "debugPanel": "Debug Panel",
  "discard": "Discard",
  "apply": "Apply",
  "editPanel": "Edit Panel",
  "overrides": "Overrides",
  "queryOption": "Query Option",
  "maxDataPoints": "Max data points",
  "maxDataPointsTips": "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval.",
  "minInterval": "Min interval",
  "minIntervalTips": "A lower limit for the interval. Recommended to be set to write frequency, e.g Prometheus defaults scraping data every 15 seconds, you can set this to '15s'",
  "finalInterval": "Final interval",
  "finalIntervalTips": "Final interval is caculated based on the current time range, max data points and the min interval, it's sent to datasource, e.g final interval will be directly passed as the step option that Prometheus requires",

  "panelTitle": "Panel Title",
  "panelDesc": "give a short description to this panel",
  "visuization": "Visuization",

  "panelBorder": "Panel border",
  "titleDecoration": "Title decoration",
  "panelDecoration": "Panel decoration",
  "reverseTips": "only a few decorations support reverse mode",
  "titleStyles": "Title styles",
  
  "targetName": "Target name",
  "addRule": "Add override rule",
  "addOverride": "Add override",

  "transformTips": `Transformations allow you to join, calculate, re-order, hide, and rename your query results before they are visualized.
  Many transforms are not suitable if you're using the Graph visualization, as it currently only supports time series data.
  It can help to switch to the Table visualization to understand what a transformation is doing.`,
  "enableTransform": "Whether enable transform",
})


export const prometheusDsMsg = i18n("prometheusDs", {
  "enterPromQL": "Enter a PromQL query",
  "legendFormat": "support variable",
  "selecMetrics": "Select metrics...",
})

export const httpDsMsg = i18n("httpDs", {
  "remoteHttp": "Remote http address",
  "reqTransform": "Request transform",
  "reqTransformTips": "If you want insert some imformation before request is sent to remote, e.g current time, just edit this function",
  "respTransform": "Response transform",
  "respTransformTips": "The http request result is probably not compatible with your visualization panels, here you can define a function to transform the result"
})

export const jaegerDsMsg = i18n("jaegerDs", {
  "showServices": "Show services",
  "showServicesTips": "Show services and their relations, you can enter multiple services, sperated with comma, leave empty if you want to show all",
  "queryType": "Query type",
  "serviceTips": "enter a service, support variable"
})

export const graphPanelMsg = i18n("graphPanel", {
  "placement": "Placement",
  "width": "Css width",
  "nameWidth": "Name width",
  "nameWidthTips": "width of legend name, support 'full' or any number",
  "values": "Values",
  "valuesTips": "caculate values for legend&tooltip to show",
  "graphStyles": "Graph styles",
  "lineWidth": "Line width",
  "gradient": "Fill gradient mode",
  "opacity": "Fill opacity",
  "showPoints": "Show points",
  "pointSize": "Point size",
  "connectNull": "Connect null values",
  "showGrid": "Show grid",
  "thresholdsDisplay": "Thresholds display",
  "barRadius": "Bar corner radius",
  "barGap": "Fixed-size gap between bars in CSS pixels "
})

export const nodeGraphPanelMsg = i18n("nodeGraphPanel", {
  "node": "Node",
  "edge": "Edge",
  "baseSize": "Base size",
  "maxSize": "Max size",
  "icon": "Icon",
  "setIcon": "Set node icon",
  "shape": "Shape",
  "donutColors": "Donut colors",
  "donutTips1": "Map the node attributes to specify colors to draw a Donut shape",
  "donutTips2": "json format",
  "donutTips3": "key is the node's attribute",
  "donutTips4": "value is a color string",
  "donutTips5": "You can find node attributes by hovering on a node, e.g 'error: 45' , 'error' is attribute name, '45' is the value",
  "displayLabel": "Display label",
  "arrow": 'Arrow',
  "opacityTips": "color opacity of edge",
  "enableHighlight": "Enable highlight",
  "highlightNodes": "Highlight nodes text",
  "highlightNodesTips": "use regex to match the nodes you want to highlight",
  "highlightNodesFuncTips": "custom the filter function to return matching node names",
  "highlightNodesInputTips": "support multiple regex, split with comma",
  "invalidHighlight": "Invalid highlight function",
  "highlightColor": "Highlight color",
  "pickLightColor":  "Pick light color",
  "pickDarkColor": "Pick dark color",
  "tooltipTrigger": "Tooltip trigger",
  "layout": "Layout",
  "nodeStrength": "Node strength",
  "nodeStrengthTips": "The strength of node force. Positive value means repulsive force, negative value means attractive force",
  "nodeGravity": "Node gravity",
  "nodeGravityTips": "The gravity strength to the center for all the nodes. Larger the number, more compact the nodes",
  "rightClick": "Right click menu",
  "addMenuItem": "Add menu item",
  "menuItemName": "Menu item name",
  "defineClickEvent": "Define click event",
  "circle": "Circle",
  "donut": "Donut",
  "line": "Line",
  "quadratic": "Quadratic",
  "polyline": "Polyline",
  "edgeColor": "Edge color",
  "noAttrsToSet" : "No attrs to set"
})

export const echartsPanelMsg = i18n("echartsPanel", {
  "about": "About Echarts",
  "aboutContent1": "Apache ECharts is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts to your products",
  "officialSite": "Official site",
  "settings": "Echarts settings",
  "allowEmptyData": "Allow empty data pass in",
  "allowEmptyDataTips": "When we can't read any data from datasource, if this option is disabled, the chart will show 'No Data' and immediatlly returns, if enabled, the chart will show nothing and the empty data will pass to setOptions func. <If you generates data in setOptions function(e.g you are playing an example), you should make this enabled, otherwise leave it disabled>",
  "setOption": "Set echarts options",
  "setOptionTips": "Data fetched from datasource will pass to this function, and the return options will directly pass to echarts",
  "liveEdit": params("Live Edit( fetch data from {name} datasource)"),
  "regEvents": "Register events function",
  "regEventsTips": "custom your chart events, e.g mouseclick, mouseover etc",
  "editRegFunc":"Edit registerEvents function",
})

export const textPanelMsg = i18n("textPanel", {
  "textSettings": "Text settings",
  "content": "Content",
  "horizontalPos": "Horizontal position",
  "verticalPos": "Vertical position",
  "left": "Left",
  "center": "Center",
  "right": "Right",
  "top":  "Top",
  "bottom": "Bottom",
})

export const piePanelMsg = i18n("piePanel", {
    "showLabel": "Show label",
    "shape": "Shape",
    "borderRadius": "Border radius",
    "pieRadius": "Pie radius",
    "innerRadius": "Inner radius",
    "orient": "Orient",
    "placement": "Placement"
})

export const gaugePanelMsg = i18n("gaugePanel", {
  "leftTips": "moving right, initial is center",
  "topTips": "moving down, initial is center",
  "showTicks": "Show ticks",
  "split": "Split",
  "splitTips": "split axis into several part, each has a unique color, range is [0, 1]: 0 stands for start, 1 for ends, values must in ASC order",
  "splitNum": "Split number",
  "pointer": "pointer",
})

export const statsPanelMsg = i18n("statsPanel", {
  "showTooltip": "Show tooltip",
  "showLegend": "Show legend",
  "graphHeight": "Graph height",
  "graphHeightTips": "the propotion of the graph part",
})

export const tracePanelMsg = i18n("tracePanel", {
   "maxDuration": "Max duration",
   "minDuration": "Min duration",
   "limitResults": "Limit results",
   "findTraces": "Find traces",
   "useLatestTime": "Use latest time",
   "tracesTotal": "Traces Total",
   "tracesSelected": "Traces Selected",
   "clearSelection": "Clear selection",
   "recent": "Most Recent",
   "mostErrors": "Most Errors",
   "longest": "Longest Duration",
    "shortest": "Shortest Duration",
    "mostSpans": "Most Spans",
    "leastSpans": "Least Spans",
    "traceIdsTips": "Searching by trace ids has the highest priority, so if you want to search with options, leave this empty",
    "traceIdsInputTips": "search with trace ids, separated with comma",
    "selectForCompre": "selected for comparison",
    "startTime": "Start time",
})


export const componentsMsg = i18n("components", {
  "addThreshold": "Add Threshold",
  "absolute": "Absolute",
  "percentage": "Percentage",
  "thresholdMode": "Threshold mode",
  "thresholdModeTips": "Absolute: the threshold is a absolute value, Percentage: the threshold is a percentage of the max value",
  "thresholdTips": "If the <raw> value in table cell is greater than the threshold, the color will be changed, ",
})

export const tablePanelMsg = i18n("tablePanel", {
   "tableSetting": "Table Setting",
   "showHeader": "Show header",
    "showHeaderTips": "whether display table's header",
    "showBorder": "Show border",
    "stickyHeader": "Sticky header",
    "stickyHeaderTips": "fix header to top, useful for viewing many rows in one page",
    "cellSize": "Cell size",
    "tableWidth": "Table width",
    "column": "Column",
    "columnAlignment": "Column alignment",
    "columnSort": "Column sort",
    "columnSortTips": "click the column title to sort it by asc or desc",
    "columnFilter": "Column filter",
    "columnFilterTips": "filter the column values in table",
    "onRowClick": "On row click",
    "onRowClickTips": "when click on a row, this event will be executed",
    "rowActions": "Row actions",
    "rowActionsTips": "add some actions to each row, e.g edit, delete",
    "addAction": "Add action",
    "actionColumnName": "Action column name",
    "actionColumnWidth": "Action column width",
    "actionButtonSize": "Action button size",
    "seriesName": "change column display name",
    "seriesFilter1": "Number min/max",
    "seriesFilter2": "String match",
    "colorTitle": "Color title"
})

export const barGaugePanelMsg = i18n("barGaugePanel", {
  "orientation": "Orientation",
  "displayMode": "Display mode",
  "minTips": "Leave empty to calculate based on all values",
  "calcMinFrom": "Calc max/min from",
  "allSeries": "All series",
  "currentSeries": "Current series",
  "showMin": "Show min",
  "showMinTips": "Display min beside value",
  "showMax": "Show max",
  "showMaxTips": "Display max beside value",
  "showUnfilled": "Show unfilled area",
  "showUnfilledTips": "When enabled renders the unfilled region as gray",
  "titleSize": "Title font size",
  "valueSize": "Value font size",
  "layoutDir" : "Layout direction",
})
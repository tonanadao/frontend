"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _style = require("../../style");
var genFilterStyle = function genFilterStyle(token) {
  var _ref, _ref3, _extends2, _ref6;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    iconCls = token.iconCls,
    tableFilterDropdownWidth = token.tableFilterDropdownWidth,
    tableFilterDropdownSearchWidth = token.tableFilterDropdownSearchWidth,
    paddingXXS = token.paddingXXS,
    paddingXS = token.paddingXS,
    colorText = token.colorText,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    tableBorderColor = token.tableBorderColor,
    tableHeaderIconColor = token.tableHeaderIconColor,
    fontSizeSM = token.fontSizeSM,
    tablePaddingHorizontal = token.tablePaddingHorizontal,
    borderRadius = token.borderRadius,
    motionDurationSlow = token.motionDurationSlow,
    colorTextDescription = token.colorTextDescription,
    colorPrimary = token.colorPrimary,
    colorPrimaryActive = token.colorPrimaryActive,
    tableHeaderFilterActiveBg = token.tableHeaderFilterActiveBg,
    colorTextDisabled = token.colorTextDisabled,
    tableFilterDropdownBg = token.tableFilterDropdownBg,
    tableFilterDropdownHeight = token.tableFilterDropdownHeight,
    controlItemBgHover = token.controlItemBgHover,
    boxShadow = token.boxShadow;
  var dropdownPrefixCls = antCls + "-dropdown";
  var tableFilterDropdownPrefixCls = componentCls + "-filter-dropdown";
  var treePrefixCls = antCls + "-tree";
  var tableBorder = lineWidth + "px " + lineType + " " + tableBorderColor;
  return [(0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref = {}, (0, _defineProperty2["default"])(_ref, componentCls + "-filter-column", {
    display: 'flex',
    justifyContent: 'space-between'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-filter-trigger", {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBlock: -paddingXXS,
    marginInline: paddingXXS + "px " + -tablePaddingHorizontal / 2 + "px",
    padding: "0 " + paddingXXS + "px",
    color: tableHeaderIconColor,
    fontSize: fontSizeSM,
    borderRadius: borderRadius,
    cursor: 'pointer',
    transition: "all " + motionDurationSlow,
    '&:hover': {
      color: colorTextDescription,
      background: tableHeaderFilterActiveBg
    },
    '&.active': {
      color: colorPrimary
    }
  }), _ref)), (0, _defineProperty2["default"])({}, antCls + "-dropdown", (0, _defineProperty2["default"])({}, tableFilterDropdownPrefixCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    minWidth: tableFilterDropdownWidth,
    backgroundColor: tableFilterDropdownBg,
    borderRadius: borderRadius,
    boxShadow: boxShadow
  }, (0, _defineProperty2["default"])(_extends2, dropdownPrefixCls + "-menu", {
    // https://github.com/ant-design/ant-design/issues/4916
    // https://github.com/ant-design/ant-design/issues/19542
    maxHeight: tableFilterDropdownHeight,
    overflowX: 'hidden',
    border: 0,
    boxShadow: 'none',
    '&:empty::after': {
      display: 'block',
      padding: paddingXS + "px 0",
      color: colorTextDisabled,
      fontSize: fontSizeSM,
      textAlign: 'center',
      content: '"Not Found"'
    }
  }), (0, _defineProperty2["default"])(_extends2, tableFilterDropdownPrefixCls + "-tree", (_ref3 = {
    paddingBlock: paddingXS + "px 0",
    paddingInline: paddingXS
  }, (0, _defineProperty2["default"])(_ref3, treePrefixCls, {
    padding: 0
  }), (0, _defineProperty2["default"])(_ref3, treePrefixCls + "-treenode " + treePrefixCls + "-node-content-wrapper:hover", {
    backgroundColor: controlItemBgHover
  }), (0, _defineProperty2["default"])(_ref3, treePrefixCls + "-treenode-checkbox-checked " + treePrefixCls + "-node-content-wrapper", {
    '&, &:hover': {
      backgroundColor: colorPrimaryActive
    }
  }), _ref3)), (0, _defineProperty2["default"])(_extends2, tableFilterDropdownPrefixCls + "-search", {
    padding: paddingXS,
    borderBottom: tableBorder,
    '&-input': (0, _defineProperty2["default"])({
      input: {
        minWidth: tableFilterDropdownSearchWidth
      }
    }, iconCls, {
      color: colorTextDisabled
    })
  }), (0, _defineProperty2["default"])(_extends2, tableFilterDropdownPrefixCls + "-checkall", {
    width: '100%',
    marginBottom: paddingXXS,
    marginInlineStart: paddingXXS
  }), (0, _defineProperty2["default"])(_extends2, tableFilterDropdownPrefixCls + "-btns", {
    display: 'flex',
    justifyContent: 'space-between',
    padding: paddingXS - lineWidth + "px " + paddingXS + "px",
    overflow: 'hidden',
    backgroundColor: 'inherit',
    borderTop: tableBorder
  }), _extends2)))), // Dropdown Menu & SubMenu
  (0, _defineProperty2["default"])({}, antCls + "-dropdown " + tableFilterDropdownPrefixCls + ", " + tableFilterDropdownPrefixCls + "-submenu", (_ref6 = {}, (0, _defineProperty2["default"])(_ref6, antCls + "-checkbox-wrapper + span", {
    paddingInlineStart: paddingXS,
    color: colorText
  }), (0, _defineProperty2["default"])(_ref6, "> ul", {
    maxHeight: 'calc(100vh - 130px)',
    overflowX: 'hidden',
    overflowY: 'auto'
  }), _ref6))];
};
var _default = genFilterStyle;
exports["default"] = _default;
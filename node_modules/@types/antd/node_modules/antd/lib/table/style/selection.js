"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genSelectionStyle = function genSelectionStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    iconCls = token.iconCls,
    fontSizeIcon = token.fontSizeIcon,
    paddingXS = token.paddingXS,
    tableHeaderIconColor = token.tableHeaderIconColor,
    tableHeaderIconColorHover = token.tableHeaderIconColorHover;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-selection-col", {
    width: token.tableSelectionColumnWidth
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-bordered " + componentCls + "-selection-col", {
    width: token.tableSelectionColumnWidth + paddingXS * 2
  }), (0, _defineProperty2["default"])(_ref3, "\n        table tr th" + componentCls + "-selection-column,\n        table tr td" + componentCls + "-selection-column\n      ", (0, _defineProperty2["default"])({
    paddingInlineEnd: token.paddingXS,
    paddingInlineStart: token.paddingXS,
    textAlign: 'center'
  }, antCls + "-radio-wrapper", {
    marginInlineEnd: 0
  })), (0, _defineProperty2["default"])(_ref3, "table tr th" + componentCls + "-selection-column" + componentCls + "-cell-fix-left", {
    zIndex: token.zIndexTableFixed
  }), (0, _defineProperty2["default"])(_ref3, "table tr th" + componentCls + "-selection-column::after", {
    backgroundColor: 'transparent !important'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-selection", {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-selection-extra", (0, _defineProperty2["default"])({
    position: 'absolute',
    top: 0,
    zIndex: 1,
    cursor: 'pointer',
    transition: "all " + token.motionDurationSlow,
    marginInlineStart: '100%',
    paddingInlineStart: token.tablePaddingHorizontal / 4 + "px"
  }, iconCls, {
    color: tableHeaderIconColor,
    fontSize: fontSizeIcon,
    verticalAlign: 'baseline',
    '&:hover': {
      color: tableHeaderIconColorHover
    }
  })), _ref3));
};
var _default = genSelectionStyle;
exports["default"] = _default;
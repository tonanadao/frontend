"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var getHorizontalStyle = function getHorizontalStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow,
    menuHorizontalHeight = token.menuHorizontalHeight,
    colorSplit = token.colorSplit,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    menuItemPaddingInline = token.menuItemPaddingInline;
  return (0, _defineProperty2["default"])({}, componentCls + "-horizontal", (_ref = {
    lineHeight: menuHorizontalHeight + "px",
    border: 0,
    borderBottom: lineWidth + "px " + lineType + " " + colorSplit,
    boxShadow: 'none',
    '&::after': {
      display: 'block',
      clear: 'both',
      height: 0,
      content: '"\\20"'
    }
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-item, " + componentCls + "-submenu", {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'bottom',
    paddingInline: menuItemPaddingInline
  }), (0, _defineProperty2["default"])(_ref, "> " + componentCls + "-item:hover,\n        > " + componentCls + "-item-active,\n        > " + componentCls + "-submenu " + componentCls + "-submenu-title:hover", {
    backgroundColor: 'transparent'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-item, " + componentCls + "-submenu-title", {
    transition: ["border-color " + motionDurationSlow, "background " + motionDurationSlow].join(',')
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-submenu-arrow", {
    display: 'none'
  }), _ref));
};
var _default = getHorizontalStyle;
exports["default"] = _default;
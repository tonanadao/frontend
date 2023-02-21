"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genSummaryStyle = function genSummaryStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    tableBorderColor = token.tableBorderColor;
  var tableBorder = lineWidth + "px " + token.lineType + " " + tableBorderColor;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref = {}, (0, _defineProperty2["default"])(_ref, componentCls + "-summary", {
    position: 'relative',
    zIndex: token.zIndexTableFixed,
    background: token.tableBg,
    '> tr': {
      '> th, > td': {
        borderBottom: tableBorder
      }
    }
  }), (0, _defineProperty2["default"])(_ref, "div" + componentCls + "-summary", {
    boxShadow: "0 -" + lineWidth + "px 0 " + tableBorderColor
  }), _ref));
};
var _default = genSummaryStyle;
exports["default"] = _default;
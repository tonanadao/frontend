"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../style");
var genEllipsisStyle = function genEllipsisStyle(token) {
  var _extends2;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, componentCls + "-cell-ellipsis", (0, _extends3["default"])((0, _extends3["default"])({}, _style.textEllipsis), (_extends2 = {
    wordBreak: 'keep-all'
  }, (0, _defineProperty2["default"])(_extends2, "\n          &" + componentCls + "-cell-fix-left-last,\n          &" + componentCls + "-cell-fix-right-first\n        ", (0, _defineProperty2["default"])({
    overflow: 'visible'
  }, componentCls + "-cell-content", {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-column-title", {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'keep-all'
  }), _extends2))));
};
var _default = genEllipsisStyle;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genCollapseMotion = function genCollapseMotion(token) {
  var _token$componentCls;
  return (0, _defineProperty2["default"])({}, token.componentCls, (_token$componentCls = {}, (0, _defineProperty2["default"])(_token$componentCls, token.antCls + "-motion-collapse-legacy", {
    overflow: 'hidden',
    '&-active': {
      transition: "height " + token.motionDurationMid + " " + token.motionEaseInOut + ",\n        opacity " + token.motionDurationMid + " " + token.motionEaseInOut + " !important"
    }
  }), (0, _defineProperty2["default"])(_token$componentCls, token.antCls + "-motion-collapse", {
    overflow: 'hidden',
    transition: "height " + token.motionDurationMid + " " + token.motionEaseInOut + ",\n        opacity " + token.motionDurationMid + " " + token.motionEaseInOut + " !important"
  }), _token$componentCls));
};
var _default = genCollapseMotion;
exports["default"] = _default;
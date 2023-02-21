"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var uploadAnimateInlineIn = new _cssinjs.Keyframes('uploadAnimateInlineIn', {
  from: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
});
var uploadAnimateInlineOut = new _cssinjs.Keyframes('uploadAnimateInlineOut', {
  to: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
});
// =========================== Motion ===========================
var genMotionStyle = function genMotionStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  var inlineCls = componentCls + "-animate-inline";
  return [(0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref = {}, (0, _defineProperty2["default"])(_ref, inlineCls + "-appear, " + inlineCls + "-enter, " + inlineCls + "-leave", {
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: token.motionEaseInOutCirc,
    animationFillMode: 'forwards'
  }), (0, _defineProperty2["default"])(_ref, inlineCls + "-appear, " + inlineCls + "-enter", {
    animationName: uploadAnimateInlineIn
  }), (0, _defineProperty2["default"])(_ref, inlineCls + "-leave", {
    animationName: uploadAnimateInlineOut
  }), _ref)), uploadAnimateInlineIn, uploadAnimateInlineOut];
};
var _default = genMotionStyle;
exports["default"] = _default;
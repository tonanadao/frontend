"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genFormValidateMotionStyle = function genFormValidateMotionStyle(token) {
  var _helpItemCls;
  var componentCls = token.componentCls;
  var helpCls = componentCls + "-show-help";
  var helpItemCls = componentCls + "-show-help-item";
  return (0, _defineProperty2["default"])({}, helpCls, (0, _defineProperty2["default"])({
    // Explain holder
    transition: "opacity " + token.motionDurationSlow + " " + token.motionEaseInOut,
    '&-appear, &-enter': {
      opacity: 0,
      '&-active': {
        opacity: 1
      }
    },
    '&-leave': {
      opacity: 1,
      '&-active': {
        opacity: 0
      }
    }
  }, helpItemCls, (_helpItemCls = {
    overflow: 'hidden',
    transition: "height " + token.motionDurationSlow + " " + token.motionEaseInOut + ",\n                     opacity " + token.motionDurationSlow + " " + token.motionEaseInOut + ",\n                     transform " + token.motionDurationSlow + " " + token.motionEaseInOut + " !important"
  }, (0, _defineProperty2["default"])(_helpItemCls, "&" + helpItemCls + "-appear, &" + helpItemCls + "-enter", (0, _defineProperty2["default"])({
    transform: "translateY(-5px)",
    opacity: 0
  }, "&-active", {
    transform: 'translateY(0)',
    opacity: 1
  })), (0, _defineProperty2["default"])(_helpItemCls, "&" + helpItemCls + "-leave-active", {
    transform: "translateY(-5px)"
  }), _helpItemCls)));
};
var _default = genFormValidateMotionStyle;
exports["default"] = _default;
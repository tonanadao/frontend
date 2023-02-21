"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _motion = require("../../style/motion");
var genMotionStyle = function genMotionStyle(token) {
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow;
  return [(0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({}, componentCls + "-switch", {
    '&-appear, &-enter': {
      transition: 'none',
      '&-start': {
        opacity: 0
      },
      '&-active': {
        opacity: 1,
        transition: "opacity " + motionDurationSlow
      }
    },
    '&-leave': {
      position: 'absolute',
      transition: 'none',
      inset: 0,
      '&-start': {
        opacity: 1
      },
      '&-active': {
        opacity: 0,
        transition: "opacity " + motionDurationSlow
      }
    }
  })),
  // Follow code may reuse in other components
  [(0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down')]];
};
var _default = genMotionStyle;
exports["default"] = _default;
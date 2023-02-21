"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMotion = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var initMotionCommon = function initMotionCommon(duration) {
  return {
    animationDuration: duration,
    animationFillMode: 'both'
  };
};
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
var initMotionCommonLeave = function initMotionCommonLeave(duration) {
  return {
    animationDuration: duration,
    animationFillMode: 'both'
  };
};
var initMotion = function initMotion(motionCls, inKeyframes, outKeyframes, duration) {
  var _ref;
  var sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var sameLevelPrefix = sameLevel ? '&' : '';
  return _ref = {}, (0, _defineProperty2["default"])(_ref, "\n      " + sameLevelPrefix + motionCls + "-enter,\n      " + sameLevelPrefix + motionCls + "-appear\n    ", (0, _extends2["default"])((0, _extends2["default"])({}, initMotionCommon(duration)), {
    animationPlayState: 'paused'
  })), (0, _defineProperty2["default"])(_ref, "" + sameLevelPrefix + motionCls + "-leave", (0, _extends2["default"])((0, _extends2["default"])({}, initMotionCommonLeave(duration)), {
    animationPlayState: 'paused'
  })), (0, _defineProperty2["default"])(_ref, "\n      " + sameLevelPrefix + motionCls + "-enter" + motionCls + "-enter-active,\n      " + sameLevelPrefix + motionCls + "-appear" + motionCls + "-appear-active\n    ", {
    animationName: inKeyframes,
    animationPlayState: 'running'
  }), (0, _defineProperty2["default"])(_ref, "" + sameLevelPrefix + motionCls + "-leave" + motionCls + "-leave-active", {
    animationName: outKeyframes,
    animationPlayState: 'running',
    pointerEvents: 'none'
  }), _ref;
};
exports.initMotion = initMotion;
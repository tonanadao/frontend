import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
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
export var initMotion = function initMotion(motionCls, inKeyframes, outKeyframes, duration) {
  var _ref;
  var sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var sameLevelPrefix = sameLevel ? '&' : '';
  return _ref = {}, _defineProperty(_ref, "\n      " + sameLevelPrefix + motionCls + "-enter,\n      " + sameLevelPrefix + motionCls + "-appear\n    ", _extends(_extends({}, initMotionCommon(duration)), {
    animationPlayState: 'paused'
  })), _defineProperty(_ref, "" + sameLevelPrefix + motionCls + "-leave", _extends(_extends({}, initMotionCommonLeave(duration)), {
    animationPlayState: 'paused'
  })), _defineProperty(_ref, "\n      " + sameLevelPrefix + motionCls + "-enter" + motionCls + "-enter-active,\n      " + sameLevelPrefix + motionCls + "-appear" + motionCls + "-appear-active\n    ", {
    animationName: inKeyframes,
    animationPlayState: 'running'
  }), _defineProperty(_ref, "" + sameLevelPrefix + motionCls + "-leave" + motionCls + "-leave-active", {
    animationName: outKeyframes,
    animationPlayState: 'running',
    pointerEvents: 'none'
  }), _ref;
};
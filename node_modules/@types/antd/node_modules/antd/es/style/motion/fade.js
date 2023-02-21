import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
import { initMotion } from './motion';
export var fadeIn = new Keyframes('antFadeIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
export var fadeOut = new Keyframes('antFadeOut', {
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});
export var initFadeMotion = function initFadeMotion(token) {
  var _ref;
  var sameLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var antCls = token.antCls;
  var motionCls = antCls + "-fade";
  var sameLevelPrefix = sameLevel ? '&' : '';
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), (_ref = {}, _defineProperty(_ref, "\n        " + sameLevelPrefix + motionCls + "-enter,\n        " + sameLevelPrefix + motionCls + "-appear\n      ", {
    opacity: 0,
    animationTimingFunction: 'linear'
  }), _defineProperty(_ref, "" + sameLevelPrefix + motionCls + "-leave", {
    animationTimingFunction: 'linear'
  }), _ref)];
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFadeMotion = exports.fadeOut = exports.fadeIn = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var _motion = require("./motion");
var fadeIn = new _cssinjs.Keyframes('antFadeIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
exports.fadeIn = fadeIn;
var fadeOut = new _cssinjs.Keyframes('antFadeOut', {
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});
exports.fadeOut = fadeOut;
var initFadeMotion = function initFadeMotion(token) {
  var _ref;
  var sameLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var antCls = token.antCls;
  var motionCls = antCls + "-fade";
  var sameLevelPrefix = sameLevel ? '&' : '';
  return [(0, _motion.initMotion)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), (_ref = {}, (0, _defineProperty2["default"])(_ref, "\n        " + sameLevelPrefix + motionCls + "-enter,\n        " + sameLevelPrefix + motionCls + "-appear\n      ", {
    opacity: 0,
    animationTimingFunction: 'linear'
  }), (0, _defineProperty2["default"])(_ref, "" + sameLevelPrefix + motionCls + "-leave", {
    animationTimingFunction: 'linear'
  }), _ref)];
};
exports.initFadeMotion = initFadeMotion;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideUpOut = exports.slideUpIn = exports.slideRightOut = exports.slideRightIn = exports.slideLeftOut = exports.slideLeftIn = exports.slideDownOut = exports.slideDownIn = exports.initSlideMotion = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var _motion = require("./motion");
var slideUpIn = new _cssinjs.Keyframes('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
exports.slideUpIn = slideUpIn;
var slideUpOut = new _cssinjs.Keyframes('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
exports.slideUpOut = slideUpOut;
var slideDownIn = new _cssinjs.Keyframes('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
exports.slideDownIn = slideDownIn;
var slideDownOut = new _cssinjs.Keyframes('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
exports.slideDownOut = slideDownOut;
var slideLeftIn = new _cssinjs.Keyframes('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
exports.slideLeftIn = slideLeftIn;
var slideLeftOut = new _cssinjs.Keyframes('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
exports.slideLeftOut = slideLeftOut;
var slideRightIn = new _cssinjs.Keyframes('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
exports.slideRightIn = slideRightIn;
var slideRightOut = new _cssinjs.Keyframes('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
exports.slideRightOut = slideRightOut;
var slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
var initSlideMotion = function initSlideMotion(token, motionName) {
  var _ref;
  var antCls = token.antCls;
  var motionCls = antCls + "-" + motionName;
  var _slideMotion$motionNa = slideMotion[motionName],
    inKeyframes = _slideMotion$motionNa.inKeyframes,
    outKeyframes = _slideMotion$motionNa.outKeyframes;
  return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), (_ref = {}, (0, _defineProperty2["default"])(_ref, "\n      " + motionCls + "-enter,\n      " + motionCls + "-appear\n    ", {
    opacity: 0,
    animationTimingFunction: token.motionEaseOutQuint
  }), (0, _defineProperty2["default"])(_ref, motionCls + "-leave", {
    animationTimingFunction: token.motionEaseInQuint
  }), _ref)];
};
exports.initSlideMotion = initSlideMotion;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveUpOut = exports.moveUpIn = exports.moveRightOut = exports.moveRightIn = exports.moveLeftOut = exports.moveLeftIn = exports.moveDownOut = exports.moveDownIn = exports.initMoveMotion = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var _motion = require("./motion");
var moveDownIn = new _cssinjs.Keyframes('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
exports.moveDownIn = moveDownIn;
var moveDownOut = new _cssinjs.Keyframes('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
exports.moveDownOut = moveDownOut;
var moveLeftIn = new _cssinjs.Keyframes('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
exports.moveLeftIn = moveLeftIn;
var moveLeftOut = new _cssinjs.Keyframes('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
exports.moveLeftOut = moveLeftOut;
var moveRightIn = new _cssinjs.Keyframes('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
exports.moveRightIn = moveRightIn;
var moveRightOut = new _cssinjs.Keyframes('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
exports.moveRightOut = moveRightOut;
var moveUpIn = new _cssinjs.Keyframes('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
exports.moveUpIn = moveUpIn;
var moveUpOut = new _cssinjs.Keyframes('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
exports.moveUpOut = moveUpOut;
var moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
var initMoveMotion = function initMoveMotion(token, motionName) {
  var _ref;
  var antCls = token.antCls;
  var motionCls = antCls + "-" + motionName;
  var _moveMotion$motionNam = moveMotion[motionName],
    inKeyframes = _moveMotion$motionNam.inKeyframes,
    outKeyframes = _moveMotion$motionNam.outKeyframes;
  return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), (_ref = {}, (0, _defineProperty2["default"])(_ref, "\n        " + motionCls + "-enter,\n        " + motionCls + "-appear\n      ", {
    opacity: 0,
    animationTimingFunction: token.motionEaseOutCirc
  }), (0, _defineProperty2["default"])(_ref, motionCls + "-leave", {
    animationTimingFunction: token.motionEaseInOutCirc
  }), _ref)];
};
exports.initMoveMotion = initMoveMotion;
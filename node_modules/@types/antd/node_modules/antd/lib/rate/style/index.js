"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genRateStarStyle = function genRateStarStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-star", (_ref = {
    position: 'relative',
    display: 'inline-block',
    color: 'inherit',
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginInlineEnd: token.marginXS
    },
    '> div': {
      transition: "all " + token.motionDurationMid + ", outline 0s",
      '&:hover': {
        transform: token.rateStarHoverScale
      },
      '&:focus': {
        outline: 0
      },
      '&:focus-visible': {
        outline: token.lineWidth + "px dashed " + token.rateStarColor,
        transform: token.rateStarHoverScale
      }
    },
    '&-first, &-second': (0, _defineProperty2["default"])({
      color: token.defaultColor,
      transition: "all " + token.motionDurationMid,
      userSelect: 'none'
    }, token.iconCls, {
      verticalAlign: 'middle'
    }),
    '&-first': {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      opacity: 0
    }
  }, (0, _defineProperty2["default"])(_ref, "&-half " + componentCls + "-star-first, &-half " + componentCls + "-star-second", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_ref, "&-half " + componentCls + "-star-first, &-full " + componentCls + "-star-second", {
    color: 'inherit'
  }), _ref));
};
var genRateRtlStyle = function genRateRtlStyle(token) {
  return (0, _defineProperty2["default"])({}, "&-rtl" + token.componentCls, {
    direction: 'rtl'
  });
};
var genRateStyle = function genRateStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.resetComponent)(token)), (0, _defineProperty2["default"])({
    display: 'inline-block',
    margin: 0,
    padding: 0,
    color: token.rateStarColor,
    fontSize: token.rateStarSize,
    lineHeight: 'unset',
    listStyle: 'none',
    outline: 'none'
  }, "&-disabled" + componentCls + " " + componentCls + "-star", {
    cursor: 'default',
    '&:hover': {
      transform: 'scale(1)'
    }
  })), genRateStarStyle(token)), (0, _defineProperty2["default"])({}, "+ " + componentCls + "-text", {
    display: 'inline-block',
    marginInlineStart: token.marginXS,
    fontSize: token.fontSize
  })), genRateRtlStyle(token)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Rate', function (token) {
  var colorFillContent = token.colorFillContent;
  var rateToken = (0, _internal.mergeToken)(token, {
    rateStarColor: token['yellow-6'],
    rateStarSize: token.controlHeightLG * 0.5,
    rateStarHoverScale: 'scale(1.1)',
    defaultColor: colorFillContent
  });
  return [genRateStyle(rateToken)];
});
exports["default"] = _default;
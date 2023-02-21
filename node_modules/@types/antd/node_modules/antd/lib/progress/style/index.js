"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _cssinjs = require("@ant-design/cssinjs");
var _internal = require("../../theme/internal");
var _style = require("../../style");
var antProgressActive = new _cssinjs.Keyframes('antProgressActive', {
  '0%': {
    transform: 'translateX(-100%) scaleX(0)',
    opacity: 0.1
  },
  '20%': {
    transform: 'translateX(-100%) scaleX(0)',
    opacity: 0.5
  },
  to: {
    transform: 'translateX(0) scaleX(1)',
    opacity: 0
  }
});
var genBaseStyle = function genBaseStyle(token) {
  var _ref5, _ref7, _extends2;
  var progressCls = token.componentCls,
    iconPrefixCls = token.iconCls;
  return (0, _defineProperty2["default"])({}, progressCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    display: 'inline-block',
    '&-rtl': {
      direction: 'rtl'
    },
    '&-line': {
      position: 'relative',
      width: '100%',
      fontSize: token.fontSize,
      marginInlineEnd: token.marginXS,
      marginBottom: token.marginXS
    }
  }, (0, _defineProperty2["default"])(_extends2, progressCls + "-outer", {
    display: 'inline-block',
    width: '100%'
  }), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-show-info", (0, _defineProperty2["default"])({}, progressCls + "-outer", {
    marginInlineEnd: "calc(-2em - " + token.marginXS + "px)",
    paddingInlineEnd: "calc(2em + " + token.paddingXS + "px)"
  })), (0, _defineProperty2["default"])(_extends2, progressCls + "-inner", {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    overflow: 'hidden',
    verticalAlign: 'middle',
    backgroundColor: token.progressRemainingColor,
    borderRadius: token.progressLineRadius
  }), (0, _defineProperty2["default"])(_extends2, progressCls + "-inner:not(" + progressCls + "-circle-gradient)", (0, _defineProperty2["default"])({}, progressCls + "-circle-path", {
    stroke: token.colorInfo
  })), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-success-bg, " + progressCls + "-bg", {
    position: 'relative',
    backgroundColor: token.colorInfo,
    borderRadius: token.progressLineRadius,
    transition: "all " + token.motionDurationSlow + " " + token.motionEaseInOutCirc
  }), (0, _defineProperty2["default"])(_extends2, progressCls + "-success-bg", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    backgroundColor: token.colorSuccess
  }), (0, _defineProperty2["default"])(_extends2, progressCls + "-text", (0, _defineProperty2["default"])({
    display: 'inline-block',
    width: '2em',
    marginInlineStart: token.marginXS,
    color: token.progressInfoTextColor,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textAlign: 'start',
    verticalAlign: 'middle',
    wordBreak: 'normal'
  }, iconPrefixCls, {
    fontSize: token.fontSize
  })), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-status-active", (0, _defineProperty2["default"])({}, progressCls + "-bg::before", {
    position: 'absolute',
    inset: 0,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.progressLineRadius,
    opacity: 0,
    animationName: antProgressActive,
    animationDuration: token.progressActiveMotionDuration,
    animationTimingFunction: token.motionEaseOutQuint,
    animationIterationCount: 'infinite',
    content: '""'
  })), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-status-exception", (_ref5 = {}, (0, _defineProperty2["default"])(_ref5, progressCls + "-bg", {
    backgroundColor: token.colorError
  }), (0, _defineProperty2["default"])(_ref5, progressCls + "-text", {
    color: token.colorError
  }), _ref5)), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-status-exception " + progressCls + "-inner:not(" + progressCls + "-circle-gradient)", (0, _defineProperty2["default"])({}, progressCls + "-circle-path", {
    stroke: token.colorError
  })), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-status-success", (_ref7 = {}, (0, _defineProperty2["default"])(_ref7, progressCls + "-bg", {
    backgroundColor: token.colorSuccess
  }), (0, _defineProperty2["default"])(_ref7, progressCls + "-text", {
    color: token.colorSuccess
  }), _ref7)), (0, _defineProperty2["default"])(_extends2, "&" + progressCls + "-status-success " + progressCls + "-inner:not(" + progressCls + "-circle-gradient)", (0, _defineProperty2["default"])({}, progressCls + "-circle-path", {
    stroke: token.colorSuccess
  })), _extends2)));
};
var genCircleStyle = function genCircleStyle(token) {
  var _progressCls, _ref14;
  var progressCls = token.componentCls,
    iconPrefixCls = token.iconCls;
  return _ref14 = {}, (0, _defineProperty2["default"])(_ref14, progressCls, (_progressCls = {}, (0, _defineProperty2["default"])(_progressCls, progressCls + "-circle-trail", {
    stroke: token.progressRemainingColor
  }), (0, _defineProperty2["default"])(_progressCls, "&" + progressCls + "-circle " + progressCls + "-inner", {
    position: 'relative',
    lineHeight: 1,
    backgroundColor: 'transparent'
  }), (0, _defineProperty2["default"])(_progressCls, "&" + progressCls + "-circle " + progressCls + "-text", (0, _defineProperty2["default"])({
    position: 'absolute',
    insetBlockStart: '50%',
    insetInlineStart: '50%',
    width: '100%',
    margin: 0,
    padding: 0,
    color: token.colorText,
    lineHeight: 1,
    whiteSpace: 'normal',
    textAlign: 'center',
    transform: "translate(-50%, -50%)"
  }, iconPrefixCls, {
    fontSize: token.fontSize / token.fontSizeSM + "em"
  })), (0, _defineProperty2["default"])(_progressCls, progressCls + "-circle&-status-exception", (0, _defineProperty2["default"])({}, progressCls + "-text", {
    color: token.colorError
  })), (0, _defineProperty2["default"])(_progressCls, progressCls + "-circle&-status-success", (0, _defineProperty2["default"])({}, progressCls + "-text", {
    color: token.colorSuccess
  })), _progressCls)), (0, _defineProperty2["default"])(_ref14, progressCls + "-inline-circle", (0, _defineProperty2["default"])({
    lineHeight: 1
  }, progressCls + "-inner", {
    verticalAlign: 'bottom'
  })), _ref14;
};
var genStepStyle = function genStepStyle(token) {
  var progressCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, progressCls, (0, _defineProperty2["default"])({}, progressCls + "-steps", {
    display: 'inline-block',
    '&-outer': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    '&-item': {
      flexShrink: 0,
      minWidth: token.progressStepMinWidth,
      marginInlineEnd: token.progressStepMarginInlineEnd,
      backgroundColor: token.progressRemainingColor,
      transition: "all " + token.motionDurationSlow,
      '&-active': {
        backgroundColor: token.colorInfo
      }
    }
  }));
};
var genSmallLine = function genSmallLine(token) {
  var progressCls = token.componentCls,
    iconPrefixCls = token.iconCls;
  return (0, _defineProperty2["default"])({}, progressCls, (0, _defineProperty2["default"])({}, progressCls + "-small&-line, " + progressCls + "-small&-line " + progressCls + "-text " + iconPrefixCls, {
    fontSize: token.fontSizeSM
  }));
};
var _default = (0, _internal.genComponentStyleHook)('Progress', function (token) {
  var progressStepMarginInlineEnd = token.marginXXS / 2;
  var progressToken = (0, _internal.mergeToken)(token, {
    progressLineRadius: 100,
    progressInfoTextColor: token.colorText,
    progressDefaultColor: token.colorInfo,
    progressRemainingColor: token.colorFillSecondary,
    progressStepMarginInlineEnd: progressStepMarginInlineEnd,
    progressStepMinWidth: progressStepMarginInlineEnd,
    progressActiveMotionDuration: '2.4s'
  });
  return [genBaseStyle(progressToken), genCircleStyle(progressToken), genStepStyle(progressToken), genSmallLine(progressToken)];
});
exports["default"] = _default;
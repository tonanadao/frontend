import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
var antProgressActive = new Keyframes('antProgressActive', {
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
  return _defineProperty({}, progressCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
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
  }, _defineProperty(_extends2, progressCls + "-outer", {
    display: 'inline-block',
    width: '100%'
  }), _defineProperty(_extends2, "&" + progressCls + "-show-info", _defineProperty({}, progressCls + "-outer", {
    marginInlineEnd: "calc(-2em - " + token.marginXS + "px)",
    paddingInlineEnd: "calc(2em + " + token.paddingXS + "px)"
  })), _defineProperty(_extends2, progressCls + "-inner", {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    overflow: 'hidden',
    verticalAlign: 'middle',
    backgroundColor: token.progressRemainingColor,
    borderRadius: token.progressLineRadius
  }), _defineProperty(_extends2, progressCls + "-inner:not(" + progressCls + "-circle-gradient)", _defineProperty({}, progressCls + "-circle-path", {
    stroke: token.colorInfo
  })), _defineProperty(_extends2, "&" + progressCls + "-success-bg, " + progressCls + "-bg", {
    position: 'relative',
    backgroundColor: token.colorInfo,
    borderRadius: token.progressLineRadius,
    transition: "all " + token.motionDurationSlow + " " + token.motionEaseInOutCirc
  }), _defineProperty(_extends2, progressCls + "-success-bg", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    backgroundColor: token.colorSuccess
  }), _defineProperty(_extends2, progressCls + "-text", _defineProperty({
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
  })), _defineProperty(_extends2, "&" + progressCls + "-status-active", _defineProperty({}, progressCls + "-bg::before", {
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
  })), _defineProperty(_extends2, "&" + progressCls + "-status-exception", (_ref5 = {}, _defineProperty(_ref5, progressCls + "-bg", {
    backgroundColor: token.colorError
  }), _defineProperty(_ref5, progressCls + "-text", {
    color: token.colorError
  }), _ref5)), _defineProperty(_extends2, "&" + progressCls + "-status-exception " + progressCls + "-inner:not(" + progressCls + "-circle-gradient)", _defineProperty({}, progressCls + "-circle-path", {
    stroke: token.colorError
  })), _defineProperty(_extends2, "&" + progressCls + "-status-success", (_ref7 = {}, _defineProperty(_ref7, progressCls + "-bg", {
    backgroundColor: token.colorSuccess
  }), _defineProperty(_ref7, progressCls + "-text", {
    color: token.colorSuccess
  }), _ref7)), _defineProperty(_extends2, "&" + progressCls + "-status-success " + progressCls + "-inner:not(" + progressCls + "-circle-gradient)", _defineProperty({}, progressCls + "-circle-path", {
    stroke: token.colorSuccess
  })), _extends2)));
};
var genCircleStyle = function genCircleStyle(token) {
  var _progressCls, _ref14;
  var progressCls = token.componentCls,
    iconPrefixCls = token.iconCls;
  return _ref14 = {}, _defineProperty(_ref14, progressCls, (_progressCls = {}, _defineProperty(_progressCls, progressCls + "-circle-trail", {
    stroke: token.progressRemainingColor
  }), _defineProperty(_progressCls, "&" + progressCls + "-circle " + progressCls + "-inner", {
    position: 'relative',
    lineHeight: 1,
    backgroundColor: 'transparent'
  }), _defineProperty(_progressCls, "&" + progressCls + "-circle " + progressCls + "-text", _defineProperty({
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
  })), _defineProperty(_progressCls, progressCls + "-circle&-status-exception", _defineProperty({}, progressCls + "-text", {
    color: token.colorError
  })), _defineProperty(_progressCls, progressCls + "-circle&-status-success", _defineProperty({}, progressCls + "-text", {
    color: token.colorSuccess
  })), _progressCls)), _defineProperty(_ref14, progressCls + "-inline-circle", _defineProperty({
    lineHeight: 1
  }, progressCls + "-inner", {
    verticalAlign: 'bottom'
  })), _ref14;
};
var genStepStyle = function genStepStyle(token) {
  var progressCls = token.componentCls;
  return _defineProperty({}, progressCls, _defineProperty({}, progressCls + "-steps", {
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
  return _defineProperty({}, progressCls, _defineProperty({}, progressCls + "-small&-line, " + progressCls + "-small&-line " + progressCls + "-text " + iconPrefixCls, {
    fontSize: token.fontSizeSM
  }));
};
export default genComponentStyleHook('Progress', function (token) {
  var progressStepMarginInlineEnd = token.marginXXS / 2;
  var progressToken = mergeToken(token, {
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
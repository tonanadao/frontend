"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genTypeStyle = exports.genBaseStyle = exports.genAlertStyle = exports.genActionStyle = exports["default"] = void 0;
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genAlertTypeStyle = function genAlertTypeStyle(bgColor, borderColor, iconColor, token, alertCls) {
  return (0, _defineProperty2["default"])({
    backgroundColor: bgColor,
    border: token.lineWidth + "px " + token.lineType + " " + borderColor
  }, alertCls + "-icon", {
    color: iconColor
  });
};
var genBaseStyle = function genBaseStyle(token) {
  var _extends2, _ref2, _ref3;
  var componentCls = token.componentCls,
    duration = token.motionDurationSlow,
    marginXS = token.marginXS,
    marginSM = token.marginSM,
    fontSize = token.fontSize,
    fontSizeLG = token.fontSizeLG,
    lineHeight = token.lineHeight,
    borderRadius = token.borderRadiusLG,
    motionEaseInOutCirc = token.motionEaseInOutCirc,
    alertIconSizeLG = token.alertIconSizeLG,
    colorText = token.colorText,
    paddingContentVerticalSM = token.paddingContentVerticalSM,
    alertPaddingHorizontal = token.alertPaddingHorizontal,
    paddingMD = token.paddingMD,
    paddingContentHorizontalLG = token.paddingContentHorizontalLG;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls, (0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: paddingContentVerticalSM + "px " + alertPaddingHorizontal + "px",
    wordWrap: 'break-word',
    borderRadius: borderRadius,
    '&&-rtl': {
      direction: 'rtl'
    }
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-content", {
    flex: 1,
    minWidth: 0
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-icon", {
    marginInlineEnd: marginXS,
    lineHeight: 0
  }), (0, _defineProperty2["default"])(_extends2, "&-description", {
    display: 'none',
    fontSize: fontSize,
    lineHeight: lineHeight
  }), (0, _defineProperty2["default"])(_extends2, '&-message', {
    color: colorText
  }), (0, _defineProperty2["default"])(_extends2, '&&-motion-leave', {
    overflow: 'hidden',
    opacity: 1,
    transition: "max-height " + duration + " " + motionEaseInOutCirc + ", opacity " + duration + " " + motionEaseInOutCirc + ",\n        padding-top " + duration + " " + motionEaseInOutCirc + ", padding-bottom " + duration + " " + motionEaseInOutCirc + ",\n        margin-bottom " + duration + " " + motionEaseInOutCirc
  }), (0, _defineProperty2["default"])(_extends2, '&&-motion-leave-active', {
    maxHeight: 0,
    marginBottom: '0 !important',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0
  }), _extends2))), (0, _defineProperty2["default"])(_ref3, componentCls + "-with-description", (_ref2 = {
    alignItems: 'flex-start',
    paddingInline: paddingContentHorizontalLG,
    paddingBlock: paddingMD
  }, (0, _defineProperty2["default"])(_ref2, componentCls + "-icon", {
    marginInlineEnd: marginSM,
    fontSize: alertIconSizeLG,
    lineHeight: 0
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-message", {
    display: 'block',
    marginBottom: marginXS,
    color: colorText,
    fontSize: fontSizeLG
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-description", {
    display: 'block'
  }), _ref2)), (0, _defineProperty2["default"])(_ref3, componentCls + "-banner", {
    marginBottom: 0,
    border: '0 !important',
    borderRadius: 0
  }), _ref3;
};
exports.genBaseStyle = genBaseStyle;
var genTypeStyle = function genTypeStyle(token) {
  var componentCls = token.componentCls,
    colorSuccess = token.colorSuccess,
    colorSuccessBorder = token.colorSuccessBorder,
    colorSuccessBg = token.colorSuccessBg,
    colorWarning = token.colorWarning,
    colorWarningBorder = token.colorWarningBorder,
    colorWarningBg = token.colorWarningBg,
    colorError = token.colorError,
    colorErrorBorder = token.colorErrorBorder,
    colorErrorBg = token.colorErrorBg,
    colorInfo = token.colorInfo,
    colorInfoBorder = token.colorInfoBorder,
    colorInfoBg = token.colorInfoBg;
  return (0, _defineProperty2["default"])({}, componentCls, {
    '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
    '&-info': genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
    '&-warning': genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
    '&-error': (0, _extends4["default"])((0, _extends4["default"])({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), (0, _defineProperty2["default"])({}, componentCls + "-description > pre", {
      margin: 0,
      padding: 0
    }))
  });
};
exports.genTypeStyle = genTypeStyle;
var genActionStyle = function genActionStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    motionDurationMid = token.motionDurationMid,
    marginXS = token.marginXS,
    fontSizeIcon = token.fontSizeIcon,
    colorIcon = token.colorIcon,
    colorIconHover = token.colorIconHover;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, "&-action", {
    marginInlineStart: marginXS
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-close-icon", (0, _defineProperty2["default"])({
    marginInlineStart: marginXS,
    padding: 0,
    overflow: 'hidden',
    fontSize: fontSizeIcon,
    lineHeight: fontSizeIcon + "px",
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  }, iconCls + "-close", {
    color: colorIcon,
    transition: "color " + motionDurationMid,
    '&:hover': {
      color: colorIconHover
    }
  })), (0, _defineProperty2["default"])(_componentCls, '&-close-text', {
    color: colorIcon,
    transition: "color " + motionDurationMid,
    '&:hover': {
      color: colorIconHover
    }
  }), _componentCls));
};
exports.genActionStyle = genActionStyle;
var genAlertStyle = function genAlertStyle(token) {
  return [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)];
};
exports.genAlertStyle = genAlertStyle;
var _default = (0, _internal.genComponentStyleHook)('Alert', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3;
  var alertToken = (0, _internal.mergeToken)(token, {
    alertIconSizeLG: fontSizeHeading3,
    alertPaddingHorizontal: 12 // Fixed value here.
  });

  return [genAlertStyle(alertToken)];
});
exports["default"] = _default;
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
var genAlertTypeStyle = function genAlertTypeStyle(bgColor, borderColor, iconColor, token, alertCls) {
  return _defineProperty({
    backgroundColor: bgColor,
    border: token.lineWidth + "px " + token.lineType + " " + borderColor
  }, alertCls + "-icon", {
    color: iconColor
  });
};
export var genBaseStyle = function genBaseStyle(token) {
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
  return _ref3 = {}, _defineProperty(_ref3, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: paddingContentVerticalSM + "px " + alertPaddingHorizontal + "px",
    wordWrap: 'break-word',
    borderRadius: borderRadius,
    '&&-rtl': {
      direction: 'rtl'
    }
  }, _defineProperty(_extends2, componentCls + "-content", {
    flex: 1,
    minWidth: 0
  }), _defineProperty(_extends2, componentCls + "-icon", {
    marginInlineEnd: marginXS,
    lineHeight: 0
  }), _defineProperty(_extends2, "&-description", {
    display: 'none',
    fontSize: fontSize,
    lineHeight: lineHeight
  }), _defineProperty(_extends2, '&-message', {
    color: colorText
  }), _defineProperty(_extends2, '&&-motion-leave', {
    overflow: 'hidden',
    opacity: 1,
    transition: "max-height " + duration + " " + motionEaseInOutCirc + ", opacity " + duration + " " + motionEaseInOutCirc + ",\n        padding-top " + duration + " " + motionEaseInOutCirc + ", padding-bottom " + duration + " " + motionEaseInOutCirc + ",\n        margin-bottom " + duration + " " + motionEaseInOutCirc
  }), _defineProperty(_extends2, '&&-motion-leave-active', {
    maxHeight: 0,
    marginBottom: '0 !important',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0
  }), _extends2))), _defineProperty(_ref3, componentCls + "-with-description", (_ref2 = {
    alignItems: 'flex-start',
    paddingInline: paddingContentHorizontalLG,
    paddingBlock: paddingMD
  }, _defineProperty(_ref2, componentCls + "-icon", {
    marginInlineEnd: marginSM,
    fontSize: alertIconSizeLG,
    lineHeight: 0
  }), _defineProperty(_ref2, componentCls + "-message", {
    display: 'block',
    marginBottom: marginXS,
    color: colorText,
    fontSize: fontSizeLG
  }), _defineProperty(_ref2, componentCls + "-description", {
    display: 'block'
  }), _ref2)), _defineProperty(_ref3, componentCls + "-banner", {
    marginBottom: 0,
    border: '0 !important',
    borderRadius: 0
  }), _ref3;
};
export var genTypeStyle = function genTypeStyle(token) {
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
  return _defineProperty({}, componentCls, {
    '&-success': genAlertTypeStyle(colorSuccessBg, colorSuccessBorder, colorSuccess, token, componentCls),
    '&-info': genAlertTypeStyle(colorInfoBg, colorInfoBorder, colorInfo, token, componentCls),
    '&-warning': genAlertTypeStyle(colorWarningBg, colorWarningBorder, colorWarning, token, componentCls),
    '&-error': _extends(_extends({}, genAlertTypeStyle(colorErrorBg, colorErrorBorder, colorError, token, componentCls)), _defineProperty({}, componentCls + "-description > pre", {
      margin: 0,
      padding: 0
    }))
  });
};
export var genActionStyle = function genActionStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    motionDurationMid = token.motionDurationMid,
    marginXS = token.marginXS,
    fontSizeIcon = token.fontSizeIcon,
    colorIcon = token.colorIcon,
    colorIconHover = token.colorIconHover;
  return _defineProperty({}, componentCls, (_componentCls = {}, _defineProperty(_componentCls, "&-action", {
    marginInlineStart: marginXS
  }), _defineProperty(_componentCls, componentCls + "-close-icon", _defineProperty({
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
  })), _defineProperty(_componentCls, '&-close-text', {
    color: colorIcon,
    transition: "color " + motionDurationMid,
    '&:hover': {
      color: colorIconHover
    }
  }), _componentCls));
};
export var genAlertStyle = function genAlertStyle(token) {
  return [genBaseStyle(token), genTypeStyle(token), genActionStyle(token)];
};
export default genComponentStyleHook('Alert', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3;
  var alertToken = mergeToken(token, {
    alertIconSizeLG: fontSizeHeading3,
    alertPaddingHorizontal: 12 // Fixed value here.
  });

  return [genAlertStyle(alertToken)];
});
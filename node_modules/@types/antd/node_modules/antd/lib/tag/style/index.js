"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _capitalize = _interopRequireDefault(require("../../_util/capitalize"));
var _style = require("../../style");
var genTagStatusStyle = function genTagStatusStyle(token, status, cssVariableType) {
  var capitalizedCssVariableType = (0, _capitalize["default"])(cssVariableType);
  return (0, _defineProperty2["default"])({}, token.componentCls + "-" + status, {
    color: token["color" + cssVariableType],
    background: token["color" + capitalizedCssVariableType + "Bg"],
    borderColor: token["color" + capitalizedCssVariableType + "Border"]
  });
};
// FIXME: special preset colors
var genTagColorStyle = function genTagColorStyle(token) {
  return _internal.PresetColors.reduce(function (prev, colorKey) {
    var _extends2;
    var lightColor = token[colorKey + "-1"];
    var lightBorderColor = token[colorKey + "-3"];
    var darkColor = token[colorKey + "-6"];
    var textColor = token[colorKey + "-7"];
    return (0, _extends4["default"])((0, _extends4["default"])({}, prev), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, token.componentCls + "-" + colorKey, {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor
    }), (0, _defineProperty2["default"])(_extends2, token.componentCls + "-" + colorKey + "-inverse", {
      color: token.colorTextLightSolid,
      background: darkColor,
      borderColor: darkColor
    }), _extends2));
  }, {});
};
var genBaseStyle = function genBaseStyle(token) {
  var _extends3;
  var paddingXXS = token.paddingXXS,
    lineWidth = token.lineWidth,
    tagPaddingHorizontal = token.tagPaddingHorizontal;
  var paddingInline = tagPaddingHorizontal - lineWidth;
  var iconMarginInline = paddingXXS - lineWidth;
  return (0, _defineProperty2["default"])({}, token.componentCls, (0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.resetComponent)(token)), (_extends3 = {
    display: 'inline-block',
    height: 'auto',
    marginInlineEnd: token.marginXS,
    paddingInline: paddingInline,
    fontSize: token.tagFontSize,
    lineHeight: token.tagLineHeight + "px",
    whiteSpace: 'nowrap',
    background: token.tagDefaultBg,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: token.borderRadiusSM,
    opacity: 1,
    transition: "all " + token.motionDurationMid,
    textAlign: 'start',
    // RTL
    '&&-rtl': {
      direction: 'rtl'
    },
    '&, a, a:hover': {
      color: token.tagDefaultColor
    }
  }, (0, _defineProperty2["default"])(_extends3, token.componentCls + "-close-icon", {
    marginInlineStart: iconMarginInline,
    color: token.colorTextDescription,
    fontSize: token.tagIconSize,
    cursor: 'pointer',
    transition: "all " + token.motionDurationMid,
    '&:hover': {
      color: token.colorTextHeading
    }
  }), (0, _defineProperty2["default"])(_extends3, "&&-has-color", (0, _defineProperty2["default"])({
    borderColor: 'transparent'
  }, "&, a, a:hover, " + token.iconCls + "-close, " + token.iconCls + "-close:hover", {
    color: token.colorTextLightSolid
  })), (0, _defineProperty2["default"])(_extends3, "&-checkable", {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    cursor: 'pointer',
    '&:not(&-checked):hover': {
      color: token.colorPrimary,
      backgroundColor: token.colorFillSecondary
    },
    '&:active, &-checked': {
      color: token.colorTextLightSolid
    },
    '&-checked': {
      backgroundColor: token.colorPrimary,
      '&:hover': {
        backgroundColor: token.colorPrimaryHover
      }
    },
    '&:active': {
      backgroundColor: token.colorPrimaryActive
    }
  }), (0, _defineProperty2["default"])(_extends3, "&-hidden", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends3, "> " + token.iconCls + " + span, > span + " + token.iconCls, {
    marginInlineStart: paddingInline
  }), _extends3)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Tag', function (token) {
  var fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    lineWidth = token.lineWidth,
    fontSizeIcon = token.fontSizeIcon;
  var tagHeight = Math.round(fontSize * lineHeight);
  var tagFontSize = token.fontSizeSM;
  var tagLineHeight = tagHeight - lineWidth * 2;
  var tagDefaultBg = token.colorFillAlter;
  var tagDefaultColor = token.colorText;
  var tagToken = (0, _internal.mergeToken)(token, {
    tagFontSize: tagFontSize,
    tagLineHeight: tagLineHeight,
    tagDefaultBg: tagDefaultBg,
    tagDefaultColor: tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8 // Fixed padding.
  });

  return [genBaseStyle(tagToken), genTagColorStyle(tagToken), genTagStatusStyle(tagToken, 'success', 'Success'), genTagStatusStyle(tagToken, 'processing', 'Info'), genTagStatusStyle(tagToken, 'error', 'Error'), genTagStatusStyle(tagToken, 'warning', 'Warning')];
});
exports["default"] = _default;
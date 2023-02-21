import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken, PresetColors } from '../../theme/internal';
import capitalize from '../../_util/capitalize';
import { resetComponent } from '../../style';
var genTagStatusStyle = function genTagStatusStyle(token, status, cssVariableType) {
  var capitalizedCssVariableType = capitalize(cssVariableType);
  return _defineProperty({}, token.componentCls + "-" + status, {
    color: token["color" + cssVariableType],
    background: token["color" + capitalizedCssVariableType + "Bg"],
    borderColor: token["color" + capitalizedCssVariableType + "Border"]
  });
};
// FIXME: special preset colors
var genTagColorStyle = function genTagColorStyle(token) {
  return PresetColors.reduce(function (prev, colorKey) {
    var _extends2;
    var lightColor = token[colorKey + "-1"];
    var lightBorderColor = token[colorKey + "-3"];
    var darkColor = token[colorKey + "-6"];
    var textColor = token[colorKey + "-7"];
    return _extends(_extends({}, prev), (_extends2 = {}, _defineProperty(_extends2, token.componentCls + "-" + colorKey, {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor
    }), _defineProperty(_extends2, token.componentCls + "-" + colorKey + "-inverse", {
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
  return _defineProperty({}, token.componentCls, _extends(_extends({}, resetComponent(token)), (_extends3 = {
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
  }, _defineProperty(_extends3, token.componentCls + "-close-icon", {
    marginInlineStart: iconMarginInline,
    color: token.colorTextDescription,
    fontSize: token.tagIconSize,
    cursor: 'pointer',
    transition: "all " + token.motionDurationMid,
    '&:hover': {
      color: token.colorTextHeading
    }
  }), _defineProperty(_extends3, "&&-has-color", _defineProperty({
    borderColor: 'transparent'
  }, "&, a, a:hover, " + token.iconCls + "-close, " + token.iconCls + "-close:hover", {
    color: token.colorTextLightSolid
  })), _defineProperty(_extends3, "&-checkable", {
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
  }), _defineProperty(_extends3, "&-hidden", {
    display: 'none'
  }), _defineProperty(_extends3, "> " + token.iconCls + " + span, > span + " + token.iconCls, {
    marginInlineStart: paddingInline
  }), _extends3)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Tag', function (token) {
  var fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    lineWidth = token.lineWidth,
    fontSizeIcon = token.fontSizeIcon;
  var tagHeight = Math.round(fontSize * lineHeight);
  var tagFontSize = token.fontSizeSM;
  var tagLineHeight = tagHeight - lineWidth * 2;
  var tagDefaultBg = token.colorFillAlter;
  var tagDefaultColor = token.colorText;
  var tagToken = mergeToken(token, {
    tagFontSize: tagFontSize,
    tagLineHeight: tagLineHeight,
    tagDefaultBg: tagDefaultBg,
    tagDefaultColor: tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8 // Fixed padding.
  });

  return [genBaseStyle(tagToken), genTagColorStyle(tagToken), genTagStatusStyle(tagToken, 'success', 'Success'), genTagStatusStyle(tagToken, 'processing', 'Info'), genTagStatusStyle(tagToken, 'error', 'Error'), genTagStatusStyle(tagToken, 'warning', 'Warning')];
});
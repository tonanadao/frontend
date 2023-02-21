import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
var genBaseStyle = function genBaseStyle(token) {
  var _extends2, _extends3;
  var antCls = token.antCls,
    componentCls = token.componentCls,
    iconCls = token.iconCls,
    avatarBg = token.avatarBg,
    avatarColor = token.avatarColor,
    avatarSizeBase = token.avatarSizeBase,
    avatarSizeLG = token.avatarSizeLG,
    avatarSizeSM = token.avatarSizeSM,
    avatarFontSizeBase = token.avatarFontSizeBase,
    avatarFontSizeLG = token.avatarFontSizeLG,
    avatarFontSizeSM = token.avatarFontSizeSM,
    borderRadius = token.borderRadius,
    borderRadiusLG = token.borderRadiusLG,
    borderRadiusSM = token.borderRadiusSM,
    lineWidth = token.lineWidth,
    lineType = token.lineType;
  // Avatar size style
  var avatarSizeStyle = function avatarSizeStyle(size, fontSize, radius) {
    var _ref2;
    return _ref2 = {
      width: size,
      height: size,
      lineHeight: size - lineWidth * 2 + "px",
      borderRadius: '50%'
    }, _defineProperty(_ref2, "&" + componentCls + "-square", {
      borderRadius: radius
    }), _defineProperty(_ref2, componentCls + "-string", {
      position: 'absolute',
      left: {
        _skip_check_: true,
        value: '50%'
      },
      transformOrigin: '0 center'
    }), _defineProperty(_ref2, "&" + componentCls + "-icon", _defineProperty({
      fontSize: fontSize
    }, "> " + iconCls, {
      margin: 0
    })), _ref2;
  };
  return _defineProperty({}, componentCls, _extends(_extends(_extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    color: avatarColor,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    verticalAlign: 'middle',
    background: avatarBg,
    border: lineWidth + "px " + lineType + " transparent"
  }, _defineProperty(_extends2, "&-image", {
    background: 'transparent'
  }), _defineProperty(_extends2, antCls + "-image-img", {
    display: 'block'
  }), _extends2)), avatarSizeStyle(avatarSizeBase, avatarFontSizeBase, borderRadius)), (_extends3 = {}, _defineProperty(_extends3, "&-lg", _extends({}, avatarSizeStyle(avatarSizeLG, avatarFontSizeLG, borderRadiusLG))), _defineProperty(_extends3, "&-sm", _extends({}, avatarSizeStyle(avatarSizeSM, avatarFontSizeSM, borderRadiusSM))), _defineProperty(_extends3, '> img', {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }), _extends3)));
};
var genGroupStyle = function genGroupStyle(token) {
  var _ref5;
  var componentCls = token.componentCls,
    avatarGroupBorderColor = token.avatarGroupBorderColor,
    avatarGroupOverlapping = token.avatarGroupOverlapping,
    avatarGroupSpace = token.avatarGroupSpace;
  return _defineProperty({}, componentCls + "-group", (_ref5 = {
    display: 'inline-flex'
  }, _defineProperty(_ref5, "" + componentCls, _defineProperty({
    borderColor: avatarGroupBorderColor
  }, "&:not(:first-child)", {
    marginInlineStart: -avatarGroupOverlapping
  })), _defineProperty(_ref5, "&-popover", _defineProperty({}, componentCls + " + " + componentCls, {
    marginInlineStart: avatarGroupSpace
  })), _ref5));
};
export default genComponentStyleHook('Avatar', function (token) {
  var colorTextLightSolid = token.colorTextLightSolid,
    controlHeight = token.controlHeight,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    fontSize = token.fontSize,
    fontSizeLG = token.fontSizeLG,
    fontSizeXL = token.fontSizeXL,
    fontSizeHeading3 = token.fontSizeHeading3,
    marginXS = token.marginXS,
    colorBorderBg = token.colorBorderBg,
    colorTextPlaceholder = token.colorTextPlaceholder;
  var avatarToken = mergeToken(token, {
    avatarBg: colorTextPlaceholder,
    avatarColor: colorTextLightSolid,
    avatarSizeBase: controlHeight,
    avatarSizeLG: controlHeightLG,
    avatarSizeSM: controlHeightSM,
    avatarFontSizeBase: Math.round((fontSizeLG + fontSizeXL) / 2),
    avatarFontSizeLG: fontSizeHeading3,
    avatarFontSizeSM: fontSize,
    avatarGroupOverlapping: marginXS,
    avatarGroupSpace: marginXS,
    avatarGroupBorderColor: colorBorderBg
  });
  return [genBaseStyle(avatarToken), genGroupStyle(avatarToken)];
});
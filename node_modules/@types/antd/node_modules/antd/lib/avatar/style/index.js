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
    }, (0, _defineProperty2["default"])(_ref2, "&" + componentCls + "-square", {
      borderRadius: radius
    }), (0, _defineProperty2["default"])(_ref2, componentCls + "-string", {
      position: 'absolute',
      left: {
        _skip_check_: true,
        value: '50%'
      },
      transformOrigin: '0 center'
    }), (0, _defineProperty2["default"])(_ref2, "&" + componentCls + "-icon", (0, _defineProperty2["default"])({
      fontSize: fontSize
    }, "> " + iconCls, {
      margin: 0
    })), _ref2;
  };
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    color: avatarColor,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    verticalAlign: 'middle',
    background: avatarBg,
    border: lineWidth + "px " + lineType + " transparent"
  }, (0, _defineProperty2["default"])(_extends2, "&-image", {
    background: 'transparent'
  }), (0, _defineProperty2["default"])(_extends2, antCls + "-image-img", {
    display: 'block'
  }), _extends2)), avatarSizeStyle(avatarSizeBase, avatarFontSizeBase, borderRadius)), (_extends3 = {}, (0, _defineProperty2["default"])(_extends3, "&-lg", (0, _extends4["default"])({}, avatarSizeStyle(avatarSizeLG, avatarFontSizeLG, borderRadiusLG))), (0, _defineProperty2["default"])(_extends3, "&-sm", (0, _extends4["default"])({}, avatarSizeStyle(avatarSizeSM, avatarFontSizeSM, borderRadiusSM))), (0, _defineProperty2["default"])(_extends3, '> img', {
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
  return (0, _defineProperty2["default"])({}, componentCls + "-group", (_ref5 = {
    display: 'inline-flex'
  }, (0, _defineProperty2["default"])(_ref5, "" + componentCls, (0, _defineProperty2["default"])({
    borderColor: avatarGroupBorderColor
  }, "&:not(:first-child)", {
    marginInlineStart: -avatarGroupOverlapping
  })), (0, _defineProperty2["default"])(_ref5, "&-popover", (0, _defineProperty2["default"])({}, componentCls + " + " + componentCls, {
    marginInlineStart: avatarGroupSpace
  })), _ref5));
};
var _default = (0, _internal.genComponentStyleHook)('Avatar', function (token) {
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
  var avatarToken = (0, _internal.mergeToken)(token, {
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
exports["default"] = _default;
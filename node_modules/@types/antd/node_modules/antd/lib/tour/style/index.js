"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tinycolor = require("@ctrl/tinycolor");
var _internal = require("../../theme/internal");
var _style = require("../../style");
var _placementArrow = _interopRequireWildcard(require("../../style/placementArrow"));
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _ref3, _ref4, _ref6, _extends2, _ref9;
  var componentCls = token.componentCls,
    lineHeight = token.lineHeight,
    padding = token.padding,
    paddingXS = token.paddingXS,
    borderRadius = token.borderRadius,
    borderRadiusXS = token.borderRadiusXS,
    colorPrimary = token.colorPrimary,
    colorText = token.colorText,
    colorFill = token.colorFill,
    sliderHeight = token.sliderHeight,
    sliderWidth = token.sliderWidth,
    boxShadow = token.boxShadow,
    tourZIndexPopup = token.tourZIndexPopup,
    fontSize = token.fontSize,
    colorBgContainer = token.colorBgContainer,
    fontWeightStrong = token.fontWeightStrong,
    marginXS = token.marginXS,
    colorTextLightSolid = token.colorTextLightSolid,
    tourBorderRadius = token.tourBorderRadius,
    colorWhite = token.colorWhite,
    colorBgTextHover = token.colorBgTextHover,
    tourCloseSize = token.tourCloseSize,
    motionDurationSlow = token.motionDurationSlow;
  return [(_ref9 = {}, (0, _defineProperty2["default"])(_ref9, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    color: colorText,
    position: 'absolute',
    zIndex: tourZIndexPopup,
    display: 'block',
    visibility: 'visible',
    fontSize: fontSize,
    lineHeight: lineHeight,
    width: 520,
    '--antd-arrow-background-color': colorBgContainer,
    '&-pure': {
      maxWidth: '100%',
      position: 'relative'
    }
  }, (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-hidden", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-content", {
    position: 'relative'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-inner", (_ref4 = {
    textAlign: 'start',
    textDecoration: 'none',
    borderRadius: tourBorderRadius,
    boxShadow: boxShadow,
    position: 'relative',
    backgroundColor: colorBgContainer,
    border: 'none',
    backgroundClip: 'padding-box'
  }, (0, _defineProperty2["default"])(_ref4, componentCls + "-close", {
    position: 'absolute',
    top: padding,
    insetInlineEnd: padding,
    color: token.colorIcon,
    outline: 'none',
    width: tourCloseSize,
    height: tourCloseSize,
    borderRadius: token.borderRadiusSM,
    transition: "background-color " + token.motionDurationMid + ", color " + token.motionDurationMid,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: token.colorIconHover,
      backgroundColor: token.wireframe ? 'transparent' : token.colorFillContent
    }
  }), (0, _defineProperty2["default"])(_ref4, componentCls + "-cover", {
    textAlign: 'center',
    padding: padding + tourCloseSize + paddingXS + "px " + padding + "px 0",
    img: {
      width: '100%'
    }
  }), (0, _defineProperty2["default"])(_ref4, componentCls + "-header", (0, _defineProperty2["default"])({
    padding: padding + "px " + padding + "px " + paddingXS + "px"
  }, componentCls + "-title", {
    lineHeight: lineHeight,
    fontSize: fontSize,
    fontWeight: fontWeightStrong
  })), (0, _defineProperty2["default"])(_ref4, componentCls + "-description", {
    padding: "0 " + padding + "px",
    lineHeight: lineHeight,
    wordWrap: 'break-word'
  }), (0, _defineProperty2["default"])(_ref4, componentCls + "-footer", (_ref3 = {
    padding: paddingXS + "px " + padding + "px " + padding + "px",
    textAlign: 'end',
    borderRadius: "0 0 " + borderRadiusXS + "px " + borderRadiusXS + "px",
    display: 'flex',
    justifyContent: 'space-between'
  }, (0, _defineProperty2["default"])(_ref3, componentCls + "-sliders", (0, _defineProperty2["default"])({
    display: 'inline-block'
  }, componentCls + "-slider", {
    width: sliderWidth + "px",
    height: sliderHeight + "px",
    display: 'inline-block',
    borderRadius: '50%',
    background: colorFill,
    marginInlineEnd: sliderHeight,
    '&-active': {
      background: colorPrimary
    }
  })), (0, _defineProperty2["default"])(_ref3, componentCls + "-buttons button", {
    marginInlineStart: marginXS
  }), _ref3)), _ref4)), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-primary", (0, _defineProperty2["default"])({
    '--antd-arrow-background-color': colorPrimary
  }, componentCls + "-inner", (_ref6 = {
    color: colorTextLightSolid,
    textAlign: 'start',
    textDecoration: 'none',
    backgroundColor: colorPrimary,
    borderRadius: borderRadius,
    boxShadow: boxShadow
  }, (0, _defineProperty2["default"])(_ref6, componentCls + "-close", {
    color: colorTextLightSolid
  }), (0, _defineProperty2["default"])(_ref6, componentCls + "-sliders", (0, _defineProperty2["default"])({}, componentCls + "-slider", {
    background: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.15).toRgbString(),
    '&-active': {
      background: colorTextLightSolid
    }
  })), (0, _defineProperty2["default"])(_ref6, componentCls + "-prev-btn", {
    color: colorTextLightSolid,
    borderColor: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.15).toRgbString(),
    '&:hover': {
      backgroundColor: new _tinycolor.TinyColor(colorTextLightSolid).setAlpha(0.15).toRgbString(),
      borderColor: 'transparent'
    }
  }), (0, _defineProperty2["default"])(_ref6, componentCls + "-next-btn", {
    color: colorPrimary,
    borderColor: 'transparent',
    background: colorWhite,
    '&:hover': {
      background: new _tinycolor.TinyColor(colorBgTextHover).onBackground(colorWhite).toRgbString()
    }
  }), _ref6))), _extends2))), (0, _defineProperty2["default"])(_ref9, componentCls + "-mask", (0, _defineProperty2["default"])({}, componentCls + "-placeholder-animated", {
    transition: "all " + motionDurationSlow
  })), (0, _defineProperty2["default"])(_ref9, ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(','), (0, _defineProperty2["default"])({}, componentCls + "-inner", {
    borderRadius: tourBorderRadius > _placementArrow.MAX_VERTICAL_CONTENT_RADIUS ? _placementArrow.MAX_VERTICAL_CONTENT_RADIUS : tourBorderRadius
  })), _ref9),
  // ============================= Arrow ===========================
  (0, _placementArrow["default"])(token, {
    colorBg: 'var(--antd-arrow-background-color)',
    showArrowCls: '',
    contentRadius: tourBorderRadius,
    limitVerticalRadius: true
  })];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Tour', function (token) {
  var borderRadiusLG = token.borderRadiusLG,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  var TourToken = (0, _internal.mergeToken)(token, {
    tourZIndexPopup: token.zIndexPopupBase + 70,
    sliderWidth: 6,
    sliderHeight: 6,
    tourBorderRadius: borderRadiusLG,
    tourCloseSize: fontSize * lineHeight
  });
  return [genBaseStyle(TourToken)];
});
exports["default"] = _default;
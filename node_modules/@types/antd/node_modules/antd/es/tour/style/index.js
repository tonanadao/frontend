import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { TinyColor } from '@ctrl/tinycolor';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
import getArrowStyle, { MAX_VERTICAL_CONTENT_RADIUS } from '../../style/placementArrow';
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
  return [(_ref9 = {}, _defineProperty(_ref9, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
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
  }, _defineProperty(_extends2, "&" + componentCls + "-hidden", {
    display: 'none'
  }), _defineProperty(_extends2, componentCls + "-content", {
    position: 'relative'
  }), _defineProperty(_extends2, componentCls + "-inner", (_ref4 = {
    textAlign: 'start',
    textDecoration: 'none',
    borderRadius: tourBorderRadius,
    boxShadow: boxShadow,
    position: 'relative',
    backgroundColor: colorBgContainer,
    border: 'none',
    backgroundClip: 'padding-box'
  }, _defineProperty(_ref4, componentCls + "-close", {
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
  }), _defineProperty(_ref4, componentCls + "-cover", {
    textAlign: 'center',
    padding: padding + tourCloseSize + paddingXS + "px " + padding + "px 0",
    img: {
      width: '100%'
    }
  }), _defineProperty(_ref4, componentCls + "-header", _defineProperty({
    padding: padding + "px " + padding + "px " + paddingXS + "px"
  }, componentCls + "-title", {
    lineHeight: lineHeight,
    fontSize: fontSize,
    fontWeight: fontWeightStrong
  })), _defineProperty(_ref4, componentCls + "-description", {
    padding: "0 " + padding + "px",
    lineHeight: lineHeight,
    wordWrap: 'break-word'
  }), _defineProperty(_ref4, componentCls + "-footer", (_ref3 = {
    padding: paddingXS + "px " + padding + "px " + padding + "px",
    textAlign: 'end',
    borderRadius: "0 0 " + borderRadiusXS + "px " + borderRadiusXS + "px",
    display: 'flex',
    justifyContent: 'space-between'
  }, _defineProperty(_ref3, componentCls + "-sliders", _defineProperty({
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
  })), _defineProperty(_ref3, componentCls + "-buttons button", {
    marginInlineStart: marginXS
  }), _ref3)), _ref4)), _defineProperty(_extends2, "&" + componentCls + "-primary", _defineProperty({
    '--antd-arrow-background-color': colorPrimary
  }, componentCls + "-inner", (_ref6 = {
    color: colorTextLightSolid,
    textAlign: 'start',
    textDecoration: 'none',
    backgroundColor: colorPrimary,
    borderRadius: borderRadius,
    boxShadow: boxShadow
  }, _defineProperty(_ref6, componentCls + "-close", {
    color: colorTextLightSolid
  }), _defineProperty(_ref6, componentCls + "-sliders", _defineProperty({}, componentCls + "-slider", {
    background: new TinyColor(colorTextLightSolid).setAlpha(0.15).toRgbString(),
    '&-active': {
      background: colorTextLightSolid
    }
  })), _defineProperty(_ref6, componentCls + "-prev-btn", {
    color: colorTextLightSolid,
    borderColor: new TinyColor(colorTextLightSolid).setAlpha(0.15).toRgbString(),
    '&:hover': {
      backgroundColor: new TinyColor(colorTextLightSolid).setAlpha(0.15).toRgbString(),
      borderColor: 'transparent'
    }
  }), _defineProperty(_ref6, componentCls + "-next-btn", {
    color: colorPrimary,
    borderColor: 'transparent',
    background: colorWhite,
    '&:hover': {
      background: new TinyColor(colorBgTextHover).onBackground(colorWhite).toRgbString()
    }
  }), _ref6))), _extends2))), _defineProperty(_ref9, componentCls + "-mask", _defineProperty({}, componentCls + "-placeholder-animated", {
    transition: "all " + motionDurationSlow
  })), _defineProperty(_ref9, ["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(','), _defineProperty({}, componentCls + "-inner", {
    borderRadius: tourBorderRadius > MAX_VERTICAL_CONTENT_RADIUS ? MAX_VERTICAL_CONTENT_RADIUS : tourBorderRadius
  })), _ref9),
  // ============================= Arrow ===========================
  getArrowStyle(token, {
    colorBg: 'var(--antd-arrow-background-color)',
    showArrowCls: '',
    contentRadius: tourBorderRadius,
    limitVerticalRadius: true
  })];
};
// ============================== Export ==============================
export default genComponentStyleHook('Tour', function (token) {
  var borderRadiusLG = token.borderRadiusLG,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  var TourToken = mergeToken(token, {
    tourZIndexPopup: token.zIndexPopupBase + 70,
    sliderWidth: 6,
    sliderHeight: 6,
    tourBorderRadius: borderRadiusLG,
    tourCloseSize: fontSize * lineHeight
  });
  return [genBaseStyle(TourToken)];
});
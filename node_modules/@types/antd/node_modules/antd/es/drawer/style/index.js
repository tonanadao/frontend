import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import genMotionStyle from './motion';
// =============================== Base ===============================
var genDrawerStyle = function genDrawerStyle(token) {
  var _pure, _componentCls;
  var componentCls = token.componentCls,
    zIndexPopup = token.zIndexPopup,
    colorBgMask = token.colorBgMask,
    colorBgElevated = token.colorBgElevated,
    motionDurationSlow = token.motionDurationSlow,
    motionDurationMid = token.motionDurationMid,
    padding = token.padding,
    paddingLG = token.paddingLG,
    fontSizeLG = token.fontSizeLG,
    lineHeightLG = token.lineHeightLG,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorSplit = token.colorSplit,
    marginSM = token.marginSM,
    colorIcon = token.colorIcon,
    colorIconHover = token.colorIconHover,
    colorText = token.colorText,
    fontWeightStrong = token.fontWeightStrong,
    drawerFooterPaddingVertical = token.drawerFooterPaddingVertical,
    drawerFooterPaddingHorizontal = token.drawerFooterPaddingHorizontal;
  var wrapperCls = componentCls + "-content-wrapper";
  return _defineProperty({}, componentCls, (_componentCls = {
    position: 'fixed',
    inset: 0,
    zIndex: zIndexPopup,
    pointerEvents: 'none',
    '&-pure': (_pure = {
      position: 'relative',
      background: colorBgElevated
    }, _defineProperty(_pure, "&" + componentCls + "-left", {
      boxShadow: token.boxShadowDrawerLeft
    }), _defineProperty(_pure, "&" + componentCls + "-right", {
      boxShadow: token.boxShadowDrawerRight
    }), _defineProperty(_pure, "&" + componentCls + "-top", {
      boxShadow: token.boxShadowDrawerUp
    }), _defineProperty(_pure, "&" + componentCls + "-bottom", {
      boxShadow: token.boxShadowDrawerDown
    }), _pure),
    '&-inline': {
      position: 'absolute'
    }
  }, _defineProperty(_componentCls, componentCls + "-mask", {
    position: 'absolute',
    inset: 0,
    zIndex: zIndexPopup,
    background: colorBgMask,
    pointerEvents: 'auto'
  }), _defineProperty(_componentCls, wrapperCls, {
    position: 'absolute',
    zIndex: zIndexPopup,
    transition: "all " + motionDurationSlow,
    '&-hidden': {
      display: 'none'
    }
  }), _defineProperty(_componentCls, "&-left > " + wrapperCls, {
    top: 0,
    bottom: 0,
    left: {
      _skip_check_: true,
      value: 0
    },
    boxShadow: token.boxShadowDrawerLeft
  }), _defineProperty(_componentCls, "&-right > " + wrapperCls, {
    top: 0,
    right: {
      _skip_check_: true,
      value: 0
    },
    bottom: 0,
    boxShadow: token.boxShadowDrawerRight
  }), _defineProperty(_componentCls, "&-top > " + wrapperCls, {
    top: 0,
    insetInline: 0,
    boxShadow: token.boxShadowDrawerUp
  }), _defineProperty(_componentCls, "&-bottom > " + wrapperCls, {
    bottom: 0,
    insetInline: 0,
    boxShadow: token.boxShadowDrawerDown
  }), _defineProperty(_componentCls, componentCls + "-content", {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    background: colorBgElevated,
    pointerEvents: 'auto'
  }), _defineProperty(_componentCls, componentCls + "-wrapper-body", {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }), _defineProperty(_componentCls, componentCls + "-header", {
    display: 'flex',
    flex: 0,
    alignItems: 'center',
    padding: padding + "px " + paddingLG + "px",
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderBottom: lineWidth + "px " + lineType + " " + colorSplit,
    '&-title': {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      minWidth: 0,
      minHeight: 0
    }
  }), _defineProperty(_componentCls, componentCls + "-extra", {
    flex: 'none'
  }), _defineProperty(_componentCls, componentCls + "-close", {
    display: 'inline-block',
    marginInlineEnd: marginSM,
    color: colorIcon,
    fontWeight: fontWeightStrong,
    fontSize: fontSizeLG,
    fontStyle: 'normal',
    lineHeight: 1,
    textAlign: 'center',
    textTransform: 'none',
    textDecoration: 'none',
    background: 'transparent',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    transition: "color " + motionDurationMid,
    textRendering: 'auto',
    '&:focus, &:hover': {
      color: colorIconHover,
      textDecoration: 'none'
    }
  }), _defineProperty(_componentCls, componentCls + "-title", {
    flex: 1,
    margin: 0,
    color: colorText,
    fontWeight: token.fontWeightStrong,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG
  }), _defineProperty(_componentCls, componentCls + "-body", {
    flex: 1,
    minWidth: 0,
    minHeight: 0,
    padding: paddingLG,
    overflow: 'auto'
  }), _defineProperty(_componentCls, componentCls + "-footer", {
    flexShrink: 0,
    padding: drawerFooterPaddingVertical + "px " + drawerFooterPaddingHorizontal + "px",
    borderTop: lineWidth + "px " + lineType + " " + colorSplit
  }), _defineProperty(_componentCls, '&-rtl', {
    direction: 'rtl'
  }), _componentCls));
};
// ============================== Export ==============================
export default genComponentStyleHook('Drawer', function (token) {
  var drawerToken = mergeToken(token, {
    drawerFooterPaddingVertical: token.paddingXS,
    drawerFooterPaddingHorizontal: token.padding
  });
  return [genDrawerStyle(drawerToken), genMotionStyle(drawerToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase
  };
});
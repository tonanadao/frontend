"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _motion = _interopRequireDefault(require("./motion"));
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
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {
    position: 'fixed',
    inset: 0,
    zIndex: zIndexPopup,
    pointerEvents: 'none',
    '&-pure': (_pure = {
      position: 'relative',
      background: colorBgElevated
    }, (0, _defineProperty2["default"])(_pure, "&" + componentCls + "-left", {
      boxShadow: token.boxShadowDrawerLeft
    }), (0, _defineProperty2["default"])(_pure, "&" + componentCls + "-right", {
      boxShadow: token.boxShadowDrawerRight
    }), (0, _defineProperty2["default"])(_pure, "&" + componentCls + "-top", {
      boxShadow: token.boxShadowDrawerUp
    }), (0, _defineProperty2["default"])(_pure, "&" + componentCls + "-bottom", {
      boxShadow: token.boxShadowDrawerDown
    }), _pure),
    '&-inline': {
      position: 'absolute'
    }
  }, (0, _defineProperty2["default"])(_componentCls, componentCls + "-mask", {
    position: 'absolute',
    inset: 0,
    zIndex: zIndexPopup,
    background: colorBgMask,
    pointerEvents: 'auto'
  }), (0, _defineProperty2["default"])(_componentCls, wrapperCls, {
    position: 'absolute',
    zIndex: zIndexPopup,
    transition: "all " + motionDurationSlow,
    '&-hidden': {
      display: 'none'
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-left > " + wrapperCls, {
    top: 0,
    bottom: 0,
    left: {
      _skip_check_: true,
      value: 0
    },
    boxShadow: token.boxShadowDrawerLeft
  }), (0, _defineProperty2["default"])(_componentCls, "&-right > " + wrapperCls, {
    top: 0,
    right: {
      _skip_check_: true,
      value: 0
    },
    bottom: 0,
    boxShadow: token.boxShadowDrawerRight
  }), (0, _defineProperty2["default"])(_componentCls, "&-top > " + wrapperCls, {
    top: 0,
    insetInline: 0,
    boxShadow: token.boxShadowDrawerUp
  }), (0, _defineProperty2["default"])(_componentCls, "&-bottom > " + wrapperCls, {
    bottom: 0,
    insetInline: 0,
    boxShadow: token.boxShadowDrawerDown
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-content", {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    background: colorBgElevated,
    pointerEvents: 'auto'
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-wrapper-body", {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-header", {
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
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-extra", {
    flex: 'none'
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-close", {
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
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-title", {
    flex: 1,
    margin: 0,
    color: colorText,
    fontWeight: token.fontWeightStrong,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-body", {
    flex: 1,
    minWidth: 0,
    minHeight: 0,
    padding: paddingLG,
    overflow: 'auto'
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-footer", {
    flexShrink: 0,
    padding: drawerFooterPaddingVertical + "px " + drawerFooterPaddingHorizontal + "px",
    borderTop: lineWidth + "px " + lineType + " " + colorSplit
  }), (0, _defineProperty2["default"])(_componentCls, '&-rtl', {
    direction: 'rtl'
  }), _componentCls));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Drawer', function (token) {
  var drawerToken = (0, _internal.mergeToken)(token, {
    drawerFooterPaddingVertical: token.paddingXS,
    drawerFooterPaddingHorizontal: token.padding
  });
  return [genDrawerStyle(drawerToken), (0, _motion["default"])(drawerToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase
  };
});
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _cssinjs = require("@ant-design/cssinjs");
var _internal = require("../../theme/internal");
var _placement = _interopRequireDefault(require("./placement"));
var _style = require("../../style");
var genNotificationStyle = function genNotificationStyle(token) {
  var _extends2, _ref4, _noticeCls;
  var iconCls = token.iconCls,
    componentCls = token.componentCls,
    boxShadowSecondary = token.boxShadowSecondary,
    fontSizeLG = token.fontSizeLG,
    notificationMarginBottom = token.notificationMarginBottom,
    borderRadiusLG = token.borderRadiusLG,
    colorSuccess = token.colorSuccess,
    colorInfo = token.colorInfo,
    colorWarning = token.colorWarning,
    colorError = token.colorError,
    colorTextHeading = token.colorTextHeading,
    notificationBg = token.notificationBg,
    notificationPadding = token.notificationPadding,
    notificationMarginEdge = token.notificationMarginEdge,
    motionDurationMid = token.motionDurationMid,
    motionEaseInOut = token.motionEaseInOut,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    width = token.width,
    notificationIconSize = token.notificationIconSize;
  var noticeCls = componentCls + "-notice";
  var notificationFadeIn = new _cssinjs.Keyframes('antNotificationFadeIn', {
    '0%': {
      left: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    '100%': {
      left: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  var notificationFadeOut = new _cssinjs.Keyframes('antNotificationFadeOut', {
    '0%': {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [// ============================ Holder ============================
  (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'fixed',
    zIndex: token.zIndexPopup,
    marginInlineEnd: notificationMarginEdge
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-hook-holder", {
    position: 'relative'
  }), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-top, &" + componentCls + "-bottom", (0, _defineProperty2["default"])({}, componentCls + "-notice", {
    marginInline: 'auto auto'
  })), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-topLeft, &" + componentCls + "-bottomLeft", (0, _defineProperty2["default"])({}, componentCls + "-notice", {
    marginInlineEnd: 'auto',
    marginInlineStart: 0
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-fade-enter, " + componentCls + "-fade-appear", {
    animationDuration: token.motionDurationMid,
    animationTimingFunction: motionEaseInOut,
    animationFillMode: 'both',
    opacity: 0,
    animationPlayState: 'paused'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-fade-leave", {
    animationTimingFunction: motionEaseInOut,
    animationFillMode: 'both',
    animationDuration: motionDurationMid,
    animationPlayState: 'paused'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationFadeIn,
    animationPlayState: 'running'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-fade-leave" + componentCls + "-fade-leave-active", {
    animationName: notificationFadeOut,
    animationPlayState: 'running'
  }), _extends2)), (0, _placement["default"])(token)), {
    // RTL
    '&-rtl': (0, _defineProperty2["default"])({
      direction: 'rtl'
    }, componentCls + "-notice-btn", {
      "float": 'left'
    })
  })), // ============================ Notice ============================
  (0, _defineProperty2["default"])({}, noticeCls, (_noticeCls = {
    position: 'relative',
    width: width,
    maxWidth: "calc(100vw - " + notificationMarginEdge * 2 + "px)",
    marginBottom: notificationMarginBottom,
    marginInlineStart: 'auto',
    padding: notificationPadding,
    overflow: 'hidden',
    lineHeight: lineHeight,
    wordWrap: 'break-word',
    background: notificationBg,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary
  }, (0, _defineProperty2["default"])(_noticeCls, componentCls + "-close-icon", {
    fontSize: fontSize,
    cursor: 'pointer'
  }), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-message", {
    marginBottom: token.marginXS,
    color: colorTextHeading,
    fontSize: fontSizeLG,
    lineHeight: token.lineHeightLG
  }), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-description", {
    fontSize: fontSize
  }), (0, _defineProperty2["default"])(_noticeCls, "&" + noticeCls + "-closable " + noticeCls + "-message", {
    paddingInlineEnd: token.paddingLG
  }), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-with-icon " + noticeCls + "-message", {
    marginBottom: token.marginXS,
    marginInlineStart: token.marginSM + notificationIconSize,
    fontSize: fontSizeLG
  }), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-with-icon " + noticeCls + "-description", {
    marginInlineStart: token.marginSM + notificationIconSize,
    fontSize: fontSize
  }), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-icon", (_ref4 = {
    position: 'absolute',
    fontSize: notificationIconSize,
    lineHeight: 0
  }, (0, _defineProperty2["default"])(_ref4, "&-success" + iconCls, {
    color: colorSuccess
  }), (0, _defineProperty2["default"])(_ref4, "&-info" + iconCls, {
    color: colorInfo
  }), (0, _defineProperty2["default"])(_ref4, "&-warning" + iconCls, {
    color: colorWarning
  }), (0, _defineProperty2["default"])(_ref4, "&-error" + iconCls, {
    color: colorError
  }), _ref4)), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-close", {
    position: 'absolute',
    top: token.notificationPaddingVertical,
    insetInlineEnd: token.notificationPaddingHorizontal,
    color: token.colorIcon,
    outline: 'none',
    width: token.notificationCloseButtonSize,
    height: token.notificationCloseButtonSize,
    borderRadius: token.borderRadiusSM,
    transition: "background-color " + token.motionDurationMid + ", color " + token.motionDurationMid,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: token.colorIconHover,
      backgroundColor: token.wireframe ? 'transparent' : token.colorFillContent
    }
  }), (0, _defineProperty2["default"])(_noticeCls, noticeCls + "-btn", {
    "float": 'right',
    marginTop: token.marginSM
  }), _noticeCls)), // ============================= Pure =============================
  (0, _defineProperty2["default"])({}, noticeCls + "-pure-panel", {
    margin: 0
  })];
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Notification', function (token) {
  var notificationPaddingVertical = token.paddingMD;
  var notificationPaddingHorizontal = token.paddingLG;
  var notificationToken = (0, _internal.mergeToken)(token, {
    // default.less variables
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical: notificationPaddingVertical,
    notificationPaddingHorizontal: notificationPaddingHorizontal,
    // index.less variables
    notificationPadding: token.paddingMD + "px " + token.paddingContentHorizontalLG + "px",
    notificationMarginBottom: token.margin,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: token.fontSizeLG * token.lineHeightLG,
    notificationCloseButtonSize: token.controlHeightLG * 0.55
  });
  return [genNotificationStyle(notificationToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 50,
    width: 384
  };
});
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _motion = require("../../style/motion");
var _style = require("../../style");
var genItemStyle = function genItemStyle(token) {
  var controlPaddingHorizontal = token.controlPaddingHorizontal;
  return {
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: (token.controlHeight - token.fontSize * token.lineHeight) / 2 + "px " + controlPaddingHorizontal + "px",
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: 'border-box'
  };
};
var genSingleStyle = function genSingleStyle(token) {
  var _disabled, _option, _extends2;
  var antCls = token.antCls,
    componentCls = token.componentCls;
  var selectItemCls = componentCls + "-item";
  return [(0, _defineProperty2["default"])({}, componentCls + "-dropdown", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'absolute',
    top: -9999,
    zIndex: token.zIndexPopup,
    boxSizing: 'border-box',
    padding: token.paddingXXS,
    overflow: 'hidden',
    fontSize: token.fontSize,
    // Fix select render lag of long text in chrome
    // https://github.com/ant-design/ant-design/issues/11456
    // https://github.com/ant-design/ant-design/issues/11843
    fontVariant: 'initial',
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadowSecondary
  }, (0, _defineProperty2["default"])(_extends2, "\n            &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-bottomLeft,\n            &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-bottomLeft\n          ", {
    animationName: _motion.slideUpIn
  }), (0, _defineProperty2["default"])(_extends2, "\n            &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topLeft,\n            &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topLeft\n          ", {
    animationName: _motion.slideDownIn
  }), (0, _defineProperty2["default"])(_extends2, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-bottomLeft", {
    animationName: _motion.slideUpOut
  }), (0, _defineProperty2["default"])(_extends2, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topLeft", {
    animationName: _motion.slideDownOut
  }), (0, _defineProperty2["default"])(_extends2, '&-hidden', {
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends2, '&-empty', {
    color: token.colorTextDisabled
  }), (0, _defineProperty2["default"])(_extends2, selectItemCls + "-empty", (0, _extends3["default"])((0, _extends3["default"])({}, genItemStyle(token)), {
    color: token.colorTextDisabled
  })), (0, _defineProperty2["default"])(_extends2, "" + selectItemCls, (0, _extends3["default"])((0, _extends3["default"])({}, genItemStyle(token)), {
    cursor: 'pointer',
    transition: "background " + token.motionDurationSlow + " ease",
    borderRadius: token.borderRadiusSM,
    // =========== Group ============
    '&-group': {
      color: token.colorTextDescription,
      fontSize: token.fontSizeSM,
      cursor: 'default'
    },
    // =========== Option ===========
    '&-option': (_option = {
      display: 'flex',
      '&-content': (0, _extends3["default"])({
        flex: 'auto'
      }, _style.textEllipsis),
      '&-state': {
        flex: 'none'
      }
    }, (0, _defineProperty2["default"])(_option, "&-active:not(" + selectItemCls + "-option-disabled)", {
      backgroundColor: token.controlItemBgHover
    }), (0, _defineProperty2["default"])(_option, "&-selected:not(" + selectItemCls + "-option-disabled)", (0, _defineProperty2["default"])({
      color: token.colorText,
      fontWeight: token.fontWeightStrong,
      backgroundColor: token.controlItemBgActive
    }, selectItemCls + "-option-state", {
      color: token.colorPrimary
    })), (0, _defineProperty2["default"])(_option, '&-disabled', (_disabled = {}, (0, _defineProperty2["default"])(_disabled, "&" + selectItemCls + "-option-selected", {
      backgroundColor: token.colorBgContainerDisabled
    }), (0, _defineProperty2["default"])(_disabled, "color", token.colorTextDisabled), (0, _defineProperty2["default"])(_disabled, "cursor", 'not-allowed'), _disabled)), (0, _defineProperty2["default"])(_option, '&-grouped', {
      paddingInlineStart: token.controlPaddingHorizontal * 2
    }), _option)
  })), (0, _defineProperty2["default"])(_extends2, '&-rtl', {
    direction: 'rtl'
  }), _extends2))),
  // Follow code may reuse in other components
  (0, _motion.initSlideMotion)(token, 'slide-up'), (0, _motion.initSlideMotion)(token, 'slide-down'), (0, _motion.initMoveMotion)(token, 'move-up'), (0, _motion.initMoveMotion)(token, 'move-down')];
};
var _default = genSingleStyle;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _style = require("../../style");
var genStepsNavStyle = function genStepsNavStyle(token) {
  var _container, _ref3, _ref4, _ref5, _ref8;
  var componentCls = token.componentCls,
    stepsNavContentMaxWidth = token.stepsNavContentMaxWidth,
    stepsNavArrowColor = token.stepsNavArrowColor,
    stepsNavActiveColor = token.stepsNavActiveColor,
    motionDurationSlow = token.motionDurationSlow;
  return _ref8 = {}, (0, _defineProperty2["default"])(_ref8, "&" + componentCls + "-navigation", (_ref4 = {
    paddingTop: token.paddingSM
  }, (0, _defineProperty2["default"])(_ref4, "&" + componentCls + "-small", (0, _defineProperty2["default"])({}, componentCls + "-item", {
    '&-container': {
      marginInlineStart: -token.marginSM
    }
  })), (0, _defineProperty2["default"])(_ref4, componentCls + "-item", (_ref3 = {
    overflow: 'visible',
    textAlign: 'center',
    '&-container': (_container = {
      display: 'inline-block',
      height: '100%',
      marginInlineStart: -token.margin,
      paddingBottom: token.paddingSM,
      textAlign: 'start',
      transition: "opacity " + motionDurationSlow
    }, (0, _defineProperty2["default"])(_container, componentCls + "-item-content", {
      maxWidth: stepsNavContentMaxWidth
    }), (0, _defineProperty2["default"])(_container, componentCls + "-item-title", (0, _extends2["default"])((0, _extends2["default"])({
      maxWidth: '100%',
      paddingInlineEnd: 0
    }, _style.textEllipsis), {
      '&::after': {
        display: 'none'
      }
    })), _container)
  }, (0, _defineProperty2["default"])(_ref3, "&:not(" + componentCls + "-item-active)", (0, _defineProperty2["default"])({}, componentCls + "-item-container[role='button']", {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.85
    }
  })), (0, _defineProperty2["default"])(_ref3, '&:last-child', {
    flex: 1,
    '&::after': {
      display: 'none'
    }
  }), (0, _defineProperty2["default"])(_ref3, '&::after', {
    position: 'absolute',
    top: "calc(50% - " + token.paddingSM / 2 + "px)",
    insetInlineStart: '100%',
    display: 'inline-block',
    width: token.fontSizeIcon,
    height: token.fontSizeIcon,
    borderTop: token.lineWidth + "px " + token.lineType + " " + stepsNavArrowColor,
    borderBottom: 'none',
    borderInlineStart: 'none',
    borderInlineEnd: token.lineWidth + "px " + token.lineType + " " + stepsNavArrowColor,
    transform: 'translateY(-50%) translateX(-50%) rotate(45deg)',
    content: '""'
  }), (0, _defineProperty2["default"])(_ref3, '&::before', {
    position: 'absolute',
    bottom: 0,
    insetInlineStart: '50%',
    display: 'inline-block',
    width: 0,
    height: token.lineWidthBold,
    backgroundColor: stepsNavActiveColor,
    transition: "width " + motionDurationSlow + ", inset-inline-start " + motionDurationSlow,
    transitionTimingFunction: 'ease-out',
    content: '""'
  }), _ref3)), (0, _defineProperty2["default"])(_ref4, componentCls + "-item" + componentCls + "-item-active::before", {
    insetInlineStart: 0,
    width: '100%'
  }), _ref4)), (0, _defineProperty2["default"])(_ref8, "&" + componentCls + "-navigation" + componentCls + "-vertical", (0, _defineProperty2["default"])({}, "> " + componentCls + "-item", (_ref5 = {
    marginInlineEnd: 0,
    '&::before': {
      display: 'none'
    }
  }, (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-item-active::before", {
    top: 0,
    insetInlineEnd: 0,
    insetInlineStart: 'unset',
    display: 'block',
    width: token.lineWidth * 3,
    height: "calc(100% - " + token.marginLG + "px)"
  }), (0, _defineProperty2["default"])(_ref5, '&::after', {
    position: 'relative',
    insetInlineStart: '50%',
    display: 'block',
    width: token.controlHeight * 0.25,
    height: token.controlHeight * 0.25,
    marginBottom: token.marginXS,
    textAlign: 'center',
    transform: 'translateY(-50%) translateX(-50%) rotate(135deg)'
  }), (0, _defineProperty2["default"])(_ref5, "> " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    visibility: 'hidden'
  }), _ref5))), (0, _defineProperty2["default"])(_ref8, "&" + componentCls + "-navigation" + componentCls + "-horizontal", (0, _defineProperty2["default"])({}, "> " + componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    visibility: 'hidden'
  })), _ref8;
};
var _default = genStepsNavStyle;
exports["default"] = _default;
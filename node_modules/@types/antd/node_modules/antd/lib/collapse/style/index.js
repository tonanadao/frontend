"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genBaseStyle = exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _motion = require("../../style/motion");
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genBaseStyle = function genBaseStyle(token) {
  var _ref, _ref5, _ref6, _extends2;
  var componentCls = token.componentCls,
    collapseContentBg = token.collapseContentBg,
    padding = token.padding,
    collapseContentPaddingHorizontal = token.collapseContentPaddingHorizontal,
    collapseHeaderBg = token.collapseHeaderBg,
    collapseHeaderPadding = token.collapseHeaderPadding,
    collapsePanelBorderRadius = token.collapsePanelBorderRadius,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorBorder = token.colorBorder,
    colorText = token.colorText,
    colorTextHeading = token.colorTextHeading,
    colorTextDisabled = token.colorTextDisabled,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    marginSM = token.marginSM,
    paddingSM = token.paddingSM,
    motionDurationSlow = token.motionDurationSlow,
    fontSizeIcon = token.fontSizeIcon;
  var borderBase = lineWidth + "px " + lineType + " " + colorBorder;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    backgroundColor: collapseHeaderBg,
    border: borderBase,
    borderBottom: 0,
    borderRadius: collapsePanelBorderRadius + "px"
  }, (0, _defineProperty2["default"])(_extends2, "&-rtl", {
    direction: 'rtl'
  }), (0, _defineProperty2["default"])(_extends2, "& > " + componentCls + "-item", (_ref5 = {
    borderBottom: borderBase
  }, (0, _defineProperty2["default"])(_ref5, "&:last-child", (0, _defineProperty2["default"])({}, "\n            &,\n            & > " + componentCls + "-header", {
    borderRadius: "0 0 " + collapsePanelBorderRadius + "px " + collapsePanelBorderRadius + "px"
  })), (0, _defineProperty2["default"])(_ref5, "> " + componentCls + "-header", (_ref = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: collapseHeaderPadding,
    color: colorTextHeading,
    lineHeight: lineHeight,
    cursor: 'pointer',
    transition: "all " + motionDurationSlow + ", visibility 0s"
  }, (0, _defineProperty2["default"])(_ref, "> " + componentCls + "-header-text", {
    flex: 'auto'
  }), (0, _defineProperty2["default"])(_ref, '&:focus', {
    outline: 'none'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-expand-icon", {
    height: fontSize * lineHeight,
    display: 'flex',
    alignItems: 'center',
    paddingInlineEnd: marginSM
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-arrow", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetIcon)()), {
    fontSize: fontSizeIcon,
    svg: {
      transition: "transform " + motionDurationSlow
    }
  })), (0, _defineProperty2["default"])(_ref, componentCls + "-header-text", {
    marginInlineEnd: 'auto'
  }), _ref)), (0, _defineProperty2["default"])(_ref5, componentCls + "-header-collapsible-only", (0, _defineProperty2["default"])({
    cursor: 'default'
  }, componentCls + "-header-text", {
    flex: 'none',
    cursor: 'pointer'
  })), (0, _defineProperty2["default"])(_ref5, componentCls + "-icon-collapsible-only", (0, _defineProperty2["default"])({
    cursor: 'default'
  }, componentCls + "-expand-icon", {
    cursor: 'pointer'
  })), (0, _defineProperty2["default"])(_ref5, "&" + componentCls + "-no-arrow", (0, _defineProperty2["default"])({}, "> " + componentCls + "-header", {
    paddingInlineStart: paddingSM
  })), _ref5)), (0, _defineProperty2["default"])(_extends2, componentCls + "-content", (_ref6 = {
    color: colorText,
    backgroundColor: collapseContentBg,
    borderTop: borderBase
  }, (0, _defineProperty2["default"])(_ref6, "& > " + componentCls + "-content-box", {
    padding: padding + "px " + collapseContentPaddingHorizontal + "px"
  }), (0, _defineProperty2["default"])(_ref6, "&-hidden", {
    display: 'none'
  }), _ref6)), (0, _defineProperty2["default"])(_extends2, componentCls + "-item:last-child", (0, _defineProperty2["default"])({}, "> " + componentCls + "-content", {
    borderRadius: "0 0 " + collapsePanelBorderRadius + "px " + collapsePanelBorderRadius + "px"
  })), (0, _defineProperty2["default"])(_extends2, "& " + componentCls + "-item-disabled > " + componentCls + "-header", (0, _defineProperty2["default"])({}, "\n          &,\n          & > .arrow\n        ", {
    color: colorTextDisabled,
    cursor: 'not-allowed'
  })), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-icon-position-end", (0, _defineProperty2["default"])({}, "& > " + componentCls + "-item", (0, _defineProperty2["default"])({}, "> " + componentCls + "-header", (0, _defineProperty2["default"])({}, componentCls + "-expand-icon", {
    order: 1,
    paddingInlineEnd: 0,
    paddingInlineStart: marginSM
  })))), _extends2)));
};
exports.genBaseStyle = genBaseStyle;
var genArrowStyle = function genArrowStyle(token) {
  var componentCls = token.componentCls;
  var fixedSelector = "> " + componentCls + "-item > " + componentCls + "-header " + componentCls + "-arrow svg";
  return (0, _defineProperty2["default"])({}, componentCls + "-rtl", (0, _defineProperty2["default"])({}, fixedSelector, {
    transform: "rotate(180deg)"
  }));
};
var genBorderlessStyle = function genBorderlessStyle(token) {
  var _ref15;
  var componentCls = token.componentCls,
    collapseHeaderBg = token.collapseHeaderBg,
    paddingXXS = token.paddingXXS,
    colorBorder = token.colorBorder;
  return (0, _defineProperty2["default"])({}, componentCls + "-borderless", (_ref15 = {
    backgroundColor: collapseHeaderBg,
    border: 0
  }, (0, _defineProperty2["default"])(_ref15, "> " + componentCls + "-item", {
    borderBottom: "1px solid " + colorBorder
  }), (0, _defineProperty2["default"])(_ref15, "\n        > " + componentCls + "-item:last-child,\n        > " + componentCls + "-item:last-child " + componentCls + "-header\n      ", {
    borderRadius: 0
  }), (0, _defineProperty2["default"])(_ref15, "> " + componentCls + "-item:last-child", {
    borderBottom: 0
  }), (0, _defineProperty2["default"])(_ref15, "> " + componentCls + "-item > " + componentCls + "-content", {
    backgroundColor: 'transparent',
    borderTop: 0
  }), (0, _defineProperty2["default"])(_ref15, "> " + componentCls + "-item > " + componentCls + "-content > " + componentCls + "-content-box", {
    paddingTop: paddingXXS
  }), _ref15));
};
var genGhostStyle = function genGhostStyle(token) {
  var componentCls = token.componentCls,
    paddingSM = token.paddingSM;
  return (0, _defineProperty2["default"])({}, componentCls + "-ghost", (0, _defineProperty2["default"])({
    backgroundColor: 'transparent',
    border: 0
  }, "> " + componentCls + "-item", (0, _defineProperty2["default"])({
    borderBottom: 0
  }, "> " + componentCls + "-content", (0, _defineProperty2["default"])({
    backgroundColor: 'transparent',
    border: 0
  }, "> " + componentCls + "-content-box", {
    paddingBlock: paddingSM
  }))));
};
var _default = (0, _internal.genComponentStyleHook)('Collapse', function (token) {
  var collapseToken = (0, _internal.mergeToken)(token, {
    collapseContentBg: token.colorBgContainer,
    collapseHeaderBg: token.colorFillAlter,
    collapseHeaderPadding: token.paddingSM + "px " + token.padding + "px",
    collapsePanelBorderRadius: token.borderRadiusLG,
    collapseContentPaddingHorizontal: 16 // Fixed value
  });

  return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), (0, _motion.genCollapseMotion)(collapseToken)];
});
exports["default"] = _default;
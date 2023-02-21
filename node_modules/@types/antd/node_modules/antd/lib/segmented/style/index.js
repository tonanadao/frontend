"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
// ============================== Mixins ==============================
function segmentedDisabledItem(cls, token) {
  return (0, _defineProperty2["default"])({}, cls + ", " + cls + ":hover, " + cls + ":focus", {
    color: token.colorTextDisabled,
    cursor: 'not-allowed'
  });
}
function getSegmentedItemSelectedStyle(token) {
  return {
    backgroundColor: token.bgColorSelected,
    boxShadow: token.boxShadow
  };
}
var segmentedTextEllipsisCss = (0, _extends5["default"])({
  overflow: 'hidden'
}, _style.textEllipsis);
// ============================== Styles ==============================
var genSegmentedStyle = function genSegmentedStyle(token) {
  var _ref2, _lg, _sm, _extends2, _extends4;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    display: 'inline-block',
    padding: token.segmentedContainerPadding,
    color: token.labelColor,
    backgroundColor: token.bgColor,
    borderRadius: token.borderRadius,
    transition: "all " + token.motionDurationMid + " " + token.motionEaseInOut
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-group", {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    justifyItems: 'flex-start',
    width: '100%'
  }), (0, _defineProperty2["default"])(_extends2, '&&-rtl', {
    direction: 'rtl'
  }), (0, _defineProperty2["default"])(_extends2, '&&-block', {
    display: 'flex'
  }), (0, _defineProperty2["default"])(_extends2, "&&-block " + componentCls + "-item", {
    flex: 1,
    minWidth: 0
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item", (_ref2 = {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    transition: "color " + token.motionDurationMid + " " + token.motionEaseInOut,
    borderRadius: token.borderRadiusSM,
    '&-selected': (0, _extends5["default"])((0, _extends5["default"])({}, getSegmentedItemSelectedStyle(token)), {
      color: token.labelColorHover
    }),
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      insetInlineStart: 0,
      borderRadius: token.borderRadiusSM,
      transition: "background-color " + token.motionDurationMid
    }
  }, (0, _defineProperty2["default"])(_ref2, "&:hover:not(" + componentCls + "-item-selected):not(" + componentCls + "-item-disabled)", {
    color: token.labelColorHover,
    '&::after': {
      backgroundColor: token.bgColorHover
    }
  }), (0, _defineProperty2["default"])(_ref2, '&-label', (0, _extends5["default"])({
    minHeight: token.controlHeight - token.segmentedContainerPadding * 2,
    lineHeight: token.controlHeight - token.segmentedContainerPadding * 2 + "px",
    padding: "0 " + token.segmentedPaddingHorizontal + "px"
  }, segmentedTextEllipsisCss)), (0, _defineProperty2["default"])(_ref2, '&-icon + *', {
    marginInlineEnd: token.marginSM / 2
  }), (0, _defineProperty2["default"])(_ref2, '&-input', {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: 0,
    height: 0,
    opacity: 0,
    pointerEvents: 'none'
  }), _ref2)), (0, _defineProperty2["default"])(_extends2, '&&-lg', (_lg = {
    borderRadius: token.borderRadiusLG
  }, (0, _defineProperty2["default"])(_lg, componentCls + "-item-label", {
    minHeight: token.controlHeightLG - token.segmentedContainerPadding * 2,
    lineHeight: token.controlHeightLG - token.segmentedContainerPadding * 2 + "px",
    padding: "0 " + token.segmentedPaddingHorizontal + "px",
    fontSize: token.fontSizeLG
  }), (0, _defineProperty2["default"])(_lg, componentCls + "-item-selected", {
    borderRadius: token.borderRadius
  }), _lg)), (0, _defineProperty2["default"])(_extends2, '&&-sm', (_sm = {
    borderRadius: token.borderRadiusSM
  }, (0, _defineProperty2["default"])(_sm, componentCls + "-item-label", {
    minHeight: token.controlHeightSM - token.segmentedContainerPadding * 2,
    lineHeight: token.controlHeightSM - token.segmentedContainerPadding * 2 + "px",
    padding: "0 " + token.segmentedPaddingHorizontalSM + "px"
  }), (0, _defineProperty2["default"])(_sm, componentCls + "-item-selected", {
    borderRadius: token.borderRadiusXS
  }), _sm)), _extends2)), segmentedDisabledItem("&-disabled " + componentCls + "-item", token)), segmentedDisabledItem(componentCls + "-item-disabled", token)), (_extends4 = {}, (0, _defineProperty2["default"])(_extends4, componentCls + "-thumb", (0, _extends5["default"])((0, _extends5["default"])({}, getSegmentedItemSelectedStyle(token)), (0, _defineProperty2["default"])({
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: 0,
    height: '100%',
    padding: token.paddingXXS + "px 0",
    borderRadius: token.borderRadiusSM
  }, "& ~ " + componentCls + "-item:not(" + componentCls + "-item-selected):not(" + componentCls + "-item-disabled)::after", {
    backgroundColor: 'transparent'
  }))), (0, _defineProperty2["default"])(_extends4, componentCls + "-thumb-motion-appear-active", {
    transition: "transform " + token.motionDurationSlow + " " + token.motionEaseInOut + ", width " + token.motionDurationSlow + " " + token.motionEaseInOut,
    willChange: 'transform, width'
  }), _extends4)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Segmented', function (token) {
  var lineWidthBold = token.lineWidthBold,
    lineWidth = token.lineWidth,
    colorTextLabel = token.colorTextLabel,
    colorText = token.colorText,
    colorFillSecondary = token.colorFillSecondary,
    colorBgLayout = token.colorBgLayout,
    colorBgElevated = token.colorBgElevated;
  var segmentedToken = (0, _internal.mergeToken)(token, {
    segmentedPaddingHorizontal: token.controlPaddingHorizontal - lineWidth,
    segmentedPaddingHorizontalSM: token.controlPaddingHorizontalSM - lineWidth,
    segmentedContainerPadding: lineWidthBold,
    labelColor: colorTextLabel,
    labelColorHover: colorText,
    bgColor: colorBgLayout,
    bgColorHover: colorFillSecondary,
    bgColorSelected: colorBgElevated
  });
  return [genSegmentedStyle(segmentedToken)];
});
exports["default"] = _default;
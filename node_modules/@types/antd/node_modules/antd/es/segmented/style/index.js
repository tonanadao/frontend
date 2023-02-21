import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
// ============================== Mixins ==============================
function segmentedDisabledItem(cls, token) {
  return _defineProperty({}, cls + ", " + cls + ":hover, " + cls + ":focus", {
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
var segmentedTextEllipsisCss = _extends({
  overflow: 'hidden'
}, textEllipsis);
// ============================== Styles ==============================
var genSegmentedStyle = function genSegmentedStyle(token) {
  var _ref2, _lg, _sm, _extends2, _extends4;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, _extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), (_extends2 = {
    display: 'inline-block',
    padding: token.segmentedContainerPadding,
    color: token.labelColor,
    backgroundColor: token.bgColor,
    borderRadius: token.borderRadius,
    transition: "all " + token.motionDurationMid + " " + token.motionEaseInOut
  }, _defineProperty(_extends2, componentCls + "-group", {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
    justifyItems: 'flex-start',
    width: '100%'
  }), _defineProperty(_extends2, '&&-rtl', {
    direction: 'rtl'
  }), _defineProperty(_extends2, '&&-block', {
    display: 'flex'
  }), _defineProperty(_extends2, "&&-block " + componentCls + "-item", {
    flex: 1,
    minWidth: 0
  }), _defineProperty(_extends2, componentCls + "-item", (_ref2 = {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    transition: "color " + token.motionDurationMid + " " + token.motionEaseInOut,
    borderRadius: token.borderRadiusSM,
    '&-selected': _extends(_extends({}, getSegmentedItemSelectedStyle(token)), {
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
  }, _defineProperty(_ref2, "&:hover:not(" + componentCls + "-item-selected):not(" + componentCls + "-item-disabled)", {
    color: token.labelColorHover,
    '&::after': {
      backgroundColor: token.bgColorHover
    }
  }), _defineProperty(_ref2, '&-label', _extends({
    minHeight: token.controlHeight - token.segmentedContainerPadding * 2,
    lineHeight: token.controlHeight - token.segmentedContainerPadding * 2 + "px",
    padding: "0 " + token.segmentedPaddingHorizontal + "px"
  }, segmentedTextEllipsisCss)), _defineProperty(_ref2, '&-icon + *', {
    marginInlineEnd: token.marginSM / 2
  }), _defineProperty(_ref2, '&-input', {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: 0,
    height: 0,
    opacity: 0,
    pointerEvents: 'none'
  }), _ref2)), _defineProperty(_extends2, '&&-lg', (_lg = {
    borderRadius: token.borderRadiusLG
  }, _defineProperty(_lg, componentCls + "-item-label", {
    minHeight: token.controlHeightLG - token.segmentedContainerPadding * 2,
    lineHeight: token.controlHeightLG - token.segmentedContainerPadding * 2 + "px",
    padding: "0 " + token.segmentedPaddingHorizontal + "px",
    fontSize: token.fontSizeLG
  }), _defineProperty(_lg, componentCls + "-item-selected", {
    borderRadius: token.borderRadius
  }), _lg)), _defineProperty(_extends2, '&&-sm', (_sm = {
    borderRadius: token.borderRadiusSM
  }, _defineProperty(_sm, componentCls + "-item-label", {
    minHeight: token.controlHeightSM - token.segmentedContainerPadding * 2,
    lineHeight: token.controlHeightSM - token.segmentedContainerPadding * 2 + "px",
    padding: "0 " + token.segmentedPaddingHorizontalSM + "px"
  }), _defineProperty(_sm, componentCls + "-item-selected", {
    borderRadius: token.borderRadiusXS
  }), _sm)), _extends2)), segmentedDisabledItem("&-disabled " + componentCls + "-item", token)), segmentedDisabledItem(componentCls + "-item-disabled", token)), (_extends4 = {}, _defineProperty(_extends4, componentCls + "-thumb", _extends(_extends({}, getSegmentedItemSelectedStyle(token)), _defineProperty({
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: 0,
    height: '100%',
    padding: token.paddingXXS + "px 0",
    borderRadius: token.borderRadiusSM
  }, "& ~ " + componentCls + "-item:not(" + componentCls + "-item-selected):not(" + componentCls + "-item-disabled)::after", {
    backgroundColor: 'transparent'
  }))), _defineProperty(_extends4, componentCls + "-thumb-motion-appear-active", {
    transition: "transform " + token.motionDurationSlow + " " + token.motionEaseInOut + ", width " + token.motionDurationSlow + " " + token.motionEaseInOut,
    willChange: 'transform, width'
  }), _extends4)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Segmented', function (token) {
  var lineWidthBold = token.lineWidthBold,
    lineWidth = token.lineWidth,
    colorTextLabel = token.colorTextLabel,
    colorText = token.colorText,
    colorFillSecondary = token.colorFillSecondary,
    colorBgLayout = token.colorBgLayout,
    colorBgElevated = token.colorBgElevated;
  var segmentedToken = mergeToken(token, {
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
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsLabelPlacementStyle = function genStepsLabelPlacementStyle(token) {
  var _ref2;
  var componentCls = token.componentCls,
    stepsIconSize = token.stepsIconSize,
    lineHeight = token.lineHeight,
    stepsSmallIconSize = token.stepsSmallIconSize;
  return _defineProperty({}, "&" + componentCls + "-label-vertical", (_ref2 = {}, _defineProperty(_ref2, componentCls + "-item", {
    overflow: 'visible',
    '&-tail': {
      marginInlineStart: stepsIconSize / 2 + token.controlHeightLG,
      padding: token.paddingXXS + "px " + token.paddingLG + "px"
    },
    '&-content': {
      display: 'block',
      width: (stepsIconSize / 2 + token.controlHeightLG) * 2,
      marginTop: token.marginSM,
      textAlign: 'center'
    },
    '&-icon': {
      display: 'inline-block',
      marginInlineStart: token.controlHeightLG
    },
    '&-title': {
      paddingInlineEnd: 0,
      paddingInlineStart: 0,
      '&::after': {
        display: 'none'
      }
    },
    '&-subtitle': {
      display: 'block',
      marginBottom: token.marginXXS,
      marginInlineStart: 0,
      lineHeight: lineHeight
    }
  }), _defineProperty(_ref2, "&" + componentCls + "-small:not(" + componentCls + "-dot)", _defineProperty({}, componentCls + "-item", {
    '&-icon': {
      marginInlineStart: token.controlHeightLG + (stepsIconSize - stepsSmallIconSize) / 2
    }
  })), _ref2));
};
export default genStepsLabelPlacementStyle;
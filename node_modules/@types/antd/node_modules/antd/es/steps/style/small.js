import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsSmallStyle = function genStepsSmallStyle(token) {
  var _ref2;
  var componentCls = token.componentCls,
    stepsSmallIconSize = token.stepsSmallIconSize,
    fontSizeSM = token.fontSizeSM,
    fontSize = token.fontSize,
    colorTextDescription = token.colorTextDescription;
  return _defineProperty({}, "&" + componentCls + "-small", (_ref2 = {}, _defineProperty(_ref2, "&" + componentCls + "-horizontal:not(" + componentCls + "-label-vertical) " + componentCls + "-item", {
    paddingInlineStart: token.paddingSM,
    '&:first-child': {
      paddingInlineStart: 0
    }
  }), _defineProperty(_ref2, componentCls + "-item-icon", {
    width: stepsSmallIconSize,
    height: stepsSmallIconSize,
    // margin: stepsSmallIconMargin,
    marginTop: 0,
    marginBottom: 0,
    marginInline: "0 " + token.marginXS + "px",
    fontSize: fontSizeSM,
    lineHeight: stepsSmallIconSize + "px",
    textAlign: 'center',
    borderRadius: stepsSmallIconSize
  }), _defineProperty(_ref2, componentCls + "-item-title", {
    paddingInlineEnd: token.paddingSM,
    fontSize: fontSize,
    lineHeight: stepsSmallIconSize + "px",
    '&::after': {
      top: stepsSmallIconSize / 2
    }
  }), _defineProperty(_ref2, componentCls + "-item-description", {
    color: colorTextDescription,
    fontSize: fontSize
  }), _defineProperty(_ref2, componentCls + "-item-tail", {
    top: stepsSmallIconSize / 2 - token.paddingXXS
  }), _defineProperty(_ref2, componentCls + "-item-custom " + componentCls + "-item-icon", _defineProperty({
    width: 'inherit',
    height: 'inherit',
    lineHeight: 'inherit',
    background: 'none',
    border: 0,
    borderRadius: 0
  }, "> " + componentCls + "-icon", {
    fontSize: stepsSmallIconSize,
    lineHeight: stepsSmallIconSize + "px",
    transform: 'none'
  })), _ref2));
};
export default genStepsSmallStyle;
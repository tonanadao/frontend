import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsCustomIconStyle = function genStepsCustomIconStyle(token) {
  var _ref5;
  var componentCls = token.componentCls,
    stepsIconCustomTop = token.stepsIconCustomTop,
    stepsIconCustomSize = token.stepsIconCustomSize,
    stepsIconCustomFontSize = token.stepsIconCustomFontSize;
  return _ref5 = {}, _defineProperty(_ref5, componentCls + "-item-custom", _defineProperty({}, "> " + componentCls + "-item-container > " + componentCls + "-item-icon", _defineProperty({
    height: 'auto',
    background: 'none',
    border: 0
  }, "> " + componentCls + "-icon", {
    top: stepsIconCustomTop,
    width: stepsIconCustomSize,
    height: stepsIconCustomSize,
    fontSize: stepsIconCustomFontSize,
    lineHeight: stepsIconCustomSize + "px"
  }))), _defineProperty(_ref5, "&:not(" + componentCls + "-vertical)", _defineProperty({}, componentCls + "-item-custom", _defineProperty({}, componentCls + "-item-icon", {
    width: 'auto',
    background: 'none'
  }))), _ref5;
};
export default genStepsCustomIconStyle;
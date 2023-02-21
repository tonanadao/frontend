import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsVerticalStyle = function genStepsVerticalStyle(token) {
  var _ref, _ref2, _ref3;
  var componentCls = token.componentCls,
    stepsSmallIconSize = token.stepsSmallIconSize,
    stepsIconSize = token.stepsIconSize;
  return _defineProperty({}, "&" + componentCls + "-vertical", (_ref3 = {
    display: 'flex',
    flexDirection: 'column'
  }, _defineProperty(_ref3, "> " + componentCls + "-item", (_ref = {
    display: 'block',
    flex: '1 0 auto',
    paddingInlineStart: 0,
    overflow: 'visible'
  }, _defineProperty(_ref, componentCls + "-item-icon", {
    "float": 'left',
    marginInlineEnd: token.margin
  }), _defineProperty(_ref, componentCls + "-item-content", {
    display: 'block',
    minHeight: token.controlHeight * 1.5,
    overflow: 'hidden'
  }), _defineProperty(_ref, componentCls + "-item-title", {
    lineHeight: stepsIconSize + "px"
  }), _defineProperty(_ref, componentCls + "-item-description", {
    paddingBottom: token.paddingSM
  }), _ref)), _defineProperty(_ref3, "> " + componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    position: 'absolute',
    top: 0,
    insetInlineStart: token.stepsIconSize / 2 - token.lineWidth,
    width: token.lineWidth,
    height: '100%',
    padding: stepsIconSize + token.marginXXS * 1.5 + "px 0 " + token.marginXXS * 1.5 + "px",
    '&::after': {
      width: token.lineWidth,
      height: '100%'
    }
  }), _defineProperty(_ref3, "> " + componentCls + "-item:not(:last-child) > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    display: 'block'
  }), _defineProperty(_ref3, " > " + componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-content > " + componentCls + "-item-title", {
    '&::after': {
      display: 'none'
    }
  }), _defineProperty(_ref3, "&" + componentCls + "-small " + componentCls + "-item-container", (_ref2 = {}, _defineProperty(_ref2, componentCls + "-item-tail", {
    position: 'absolute',
    top: 0,
    insetInlineStart: token.stepsSmallIconSize / 2 - token.lineWidth,
    padding: stepsSmallIconSize + token.marginXXS * 1.5 + "px 0 " + token.marginXXS * 1.5 + "px"
  }), _defineProperty(_ref2, componentCls + "-item-title", {
    lineHeight: stepsSmallIconSize + "px"
  }), _ref2)), _ref3));
};
export default genStepsVerticalStyle;
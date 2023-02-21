import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsRTLStyle = function genStepsRTLStyle(token) {
  var _ref5;
  var componentCls = token.componentCls;
  return _defineProperty({}, "&" + componentCls + "-rtl", (_ref5 = {
    direction: 'rtl'
  }, _defineProperty(_ref5, componentCls + "-item", {
    '&-subtitle': {
      "float": 'left'
    }
  }), _defineProperty(_ref5, "&" + componentCls + "-navigation", _defineProperty({}, componentCls + "-item::after", {
    transform: 'rotate(-45deg)'
  })), _defineProperty(_ref5, "&" + componentCls + "-vertical", _defineProperty({}, "> " + componentCls + "-item", _defineProperty({
    '&::after': {
      transform: 'rotate(225deg)'
    }
  }, componentCls + "-item-icon", {
    "float": 'right'
  }))), _defineProperty(_ref5, "&" + componentCls + "-dot", _defineProperty({}, componentCls + "-item-icon " + componentCls + "-icon-dot, &" + componentCls + "-small " + componentCls + "-item-icon " + componentCls + "-icon-dot", {
    "float": 'right'
  })), _ref5));
};
export default genStepsRTLStyle;
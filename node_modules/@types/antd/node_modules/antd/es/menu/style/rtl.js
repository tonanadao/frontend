import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var getRTLStyle = function getRTLStyle(_ref) {
  var _ref3;
  var componentCls = _ref.componentCls,
    menuArrowOffset = _ref.menuArrowOffset;
  return _ref3 = {}, _defineProperty(_ref3, componentCls + "-rtl", {
    direction: 'rtl'
  }), _defineProperty(_ref3, componentCls + "-submenu-rtl", {
    transformOrigin: '100% 0'
  }), _defineProperty(_ref3, componentCls + "-rtl" + componentCls + "-vertical,\n    " + componentCls + "-submenu-rtl " + componentCls + "-vertical", _defineProperty({}, componentCls + "-submenu-arrow", {
    '&::before': {
      transform: "rotate(-45deg) translateY(-" + menuArrowOffset + ")"
    },
    '&::after': {
      transform: "rotate(45deg) translateY(" + menuArrowOffset + ")"
    }
  })), _ref3;
};
export default getRTLStyle;
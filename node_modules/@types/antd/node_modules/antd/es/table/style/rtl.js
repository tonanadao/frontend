import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStyle = function genStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-wrapper-rtl", (_ref = {
    direction: 'rtl',
    table: {
      direction: 'rtl'
    }
  }, _defineProperty(_ref, componentCls + "-pagination-left", {
    justifyContent: 'flex-end'
  }), _defineProperty(_ref, componentCls + "-pagination-right", {
    justifyContent: 'flex-start'
  }), _defineProperty(_ref, componentCls + "-row-expand-icon", {
    '&::after': {
      transform: 'rotate(-90deg)'
    },
    '&-collapsed::before': {
      transform: 'rotate(180deg)'
    },
    '&-collapsed::after': {
      transform: 'rotate(0deg)'
    }
  }), _ref));
};
export default genStyle;
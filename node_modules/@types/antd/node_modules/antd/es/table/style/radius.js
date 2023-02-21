import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genRadiusStyle = function genRadiusStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    tableRadius = token.tableRadius;
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, componentCls, (_componentCls = {}, _defineProperty(_componentCls, componentCls + "-title", {
    borderRadius: tableRadius + "px " + tableRadius + "px 0 0"
  }), _defineProperty(_componentCls, componentCls + "-title + " + componentCls + "-container", {
    borderStartStartRadius: 0,
    borderStartEndRadius: 0,
    table: {
      borderRadius: 0,
      '> thead > tr:first-child': {
        'th:first-child': {
          borderRadius: 0
        },
        'th:last-child': {
          borderRadius: 0
        }
      }
    }
  }), _defineProperty(_componentCls, '&-container', {
    borderStartStartRadius: tableRadius,
    borderStartEndRadius: tableRadius,
    'table > thead > tr:first-child': {
      'th:first-child': {
        borderStartStartRadius: tableRadius
      },
      'th:last-child': {
        borderStartEndRadius: tableRadius
      }
    }
  }), _defineProperty(_componentCls, '&-footer', {
    borderRadius: "0 0 " + tableRadius + "px " + tableRadius + "px"
  }), _componentCls)));
};
export default genRadiusStyle;
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genPaginationStyle = function genPaginationStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return _defineProperty({}, componentCls + "-wrapper", (_ref = {}, _defineProperty(_ref, componentCls + "-pagination" + antCls + "-pagination", {
    margin: token.margin + "px 0"
  }), _defineProperty(_ref, componentCls + "-pagination", {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: token.paddingXS,
    '> *': {
      flex: 'none'
    },
    '&-left': {
      justifyContent: 'flex-start'
    },
    '&-center': {
      justifyContent: 'center'
    },
    '&-right': {
      justifyContent: 'flex-end'
    }
  }), _ref));
};
export default genPaginationStyle;
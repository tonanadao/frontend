import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
// ========================= Placeholder ==========================
var genEmptyStyle = function genEmptyStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, componentCls + "-tbody > tr" + componentCls + "-placeholder", {
    textAlign: 'center',
    color: token.colorTextDisabled,
    '&:hover > td': {
      background: token.colorBgContainer
    }
  }));
};
export default genEmptyStyle;
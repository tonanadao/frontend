import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
// =========================== Motion ===========================
var genRtlStyle = function genRtlStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-rtl", {
    direction: 'rtl'
  });
};
export default genRtlStyle;
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genSpaceCompactStyle = function genSpaceCompactStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, {
    display: 'inline-flex',
    '&-block': {
      display: 'flex',
      width: '100%'
    },
    '&-vertical': {
      flexDirection: 'column'
    }
  });
};
// ============================== Export ==============================
export default genSpaceCompactStyle;
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
// ============================== Shared ==============================
var genSharedAffixStyle = function genSharedAffixStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, {
    position: 'fixed',
    zIndex: token.zIndexPopup
  });
};
// ============================== Export ==============================
export default genComponentStyleHook('Affix', function (token) {
  var affixToken = mergeToken(token, {
    zIndexPopup: token.zIndexBase + 10
  });
  return [genSharedAffixStyle(affixToken)];
});
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook } from '../../theme/internal';
import genSpaceCompactStyle from './compact';
var genSpaceStyle = function genSpaceStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, _defineProperty({
    display: 'inline-flex',
    '&-rtl': {
      direction: 'rtl'
    },
    '&-vertical': {
      flexDirection: 'column'
    },
    '&-align': {
      flexDirection: 'column',
      '&-center': {
        alignItems: 'center'
      },
      '&-start': {
        alignItems: 'flex-start'
      },
      '&-end': {
        alignItems: 'flex-end'
      },
      '&-baseline': {
        alignItems: 'flex-baseline'
      }
    }
  }, componentCls + "-space-item", {
    '&:empty': {
      display: 'none'
    }
  }));
};
// ============================== Export ==============================
export default genComponentStyleHook('Space', function (token) {
  return [genSpaceStyle(token), genSpaceCompactStyle(token)];
});
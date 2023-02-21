import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useStyleRegister } from '@ant-design/cssinjs';
import { resetIcon } from '../../style';
import { useToken } from '../../theme/internal';
var useStyle = function useStyle(iconPrefixCls) {
  var _useToken = useToken(),
    _useToken2 = _slicedToArray(_useToken, 2),
    theme = _useToken2[0],
    token = _useToken2[1];
  // Generate style for icons
  return useStyleRegister({
    theme: theme,
    token: token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls]
  }, function () {
    return [_defineProperty({}, "." + iconPrefixCls, resetIcon())];
  });
};
export default useStyle;
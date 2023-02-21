import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { textEllipsis } from '../../style';
var genEllipsisStyle = function genEllipsisStyle(token) {
  var _extends2;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, componentCls + "-cell-ellipsis", _extends(_extends({}, textEllipsis), (_extends2 = {
    wordBreak: 'keep-all'
  }, _defineProperty(_extends2, "\n          &" + componentCls + "-cell-fix-left-last,\n          &" + componentCls + "-cell-fix-right-first\n        ", _defineProperty({
    overflow: 'visible'
  }, componentCls + "-cell-content", {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })), _defineProperty(_extends2, componentCls + "-column-title", {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'keep-all'
  }), _extends2))));
};
export default genEllipsisStyle;
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { getStyle as getCheckboxStyle } from '../../checkbox/style';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genTreeStyle } from '../../tree/style';
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var componentCls = token.componentCls,
    treePrefixCls = token.treePrefixCls,
    colorBgElevated = token.colorBgElevated;
  var treeCls = "." + treePrefixCls;
  return [// ======================================================
  // ==                     Dropdown                     ==
  // ======================================================
  _defineProperty({}, componentCls + "-dropdown", [{
    padding: token.paddingXS + "px " + token.paddingXS / 2 + "px"
  },
  // ====================== Tree ======================
  genTreeStyle(treePrefixCls, mergeToken(token, {
    colorBgContainer: colorBgElevated
  })), _defineProperty({}, treeCls, {
    borderRadius: 0,
    '&-list-holder-inner': _defineProperty({
      alignItems: 'stretch'
    }, treeCls + "-treenode", _defineProperty({}, treeCls + "-node-content-wrapper", {
      flex: 'auto'
    }))
  }),
  // ==================== Checkbox ====================
  getCheckboxStyle(treePrefixCls + "-checkbox", token),
  // ====================== RTL =======================
  {
    '&-rtl': _defineProperty({
      direction: 'rtl'
    }, treeCls + "-switcher" + treeCls + "-switcher_close", _defineProperty({}, treeCls + "-switcher-icon svg", {
      transform: 'rotate(90deg)'
    }))
  }])];
};
// ============================== Export ==============================
export default function useTreeSelectStyle(prefixCls, treePrefixCls) {
  return genComponentStyleHook('TreeSelect', function (token) {
    var treeSelectToken = mergeToken(token, {
      treePrefixCls: treePrefixCls
    });
    return [genBaseStyle(treeSelectToken)];
  })(prefixCls);
}
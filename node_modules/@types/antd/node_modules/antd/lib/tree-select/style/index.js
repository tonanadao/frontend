"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTreeSelectStyle;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _style = require("../../checkbox/style");
var _internal = require("../../theme/internal");
var _style2 = require("../../tree/style");
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var componentCls = token.componentCls,
    treePrefixCls = token.treePrefixCls,
    colorBgElevated = token.colorBgElevated;
  var treeCls = "." + treePrefixCls;
  return [// ======================================================
  // ==                     Dropdown                     ==
  // ======================================================
  (0, _defineProperty2["default"])({}, componentCls + "-dropdown", [{
    padding: token.paddingXS + "px " + token.paddingXS / 2 + "px"
  },
  // ====================== Tree ======================
  (0, _style2.genTreeStyle)(treePrefixCls, (0, _internal.mergeToken)(token, {
    colorBgContainer: colorBgElevated
  })), (0, _defineProperty2["default"])({}, treeCls, {
    borderRadius: 0,
    '&-list-holder-inner': (0, _defineProperty2["default"])({
      alignItems: 'stretch'
    }, treeCls + "-treenode", (0, _defineProperty2["default"])({}, treeCls + "-node-content-wrapper", {
      flex: 'auto'
    }))
  }),
  // ==================== Checkbox ====================
  (0, _style.getStyle)(treePrefixCls + "-checkbox", token),
  // ====================== RTL =======================
  {
    '&-rtl': (0, _defineProperty2["default"])({
      direction: 'rtl'
    }, treeCls + "-switcher" + treeCls + "-switcher_close", (0, _defineProperty2["default"])({}, treeCls + "-switcher-icon svg", {
      transform: 'rotate(90deg)'
    }))
  }])];
};
// ============================== Export ==============================
function useTreeSelectStyle(prefixCls, treePrefixCls) {
  return (0, _internal.genComponentStyleHook)('TreeSelect', function (token) {
    var treeSelectToken = (0, _internal.mergeToken)(token, {
      treePrefixCls: treePrefixCls
    });
    return [genBaseStyle(treeSelectToken)];
  })(prefixCls);
}
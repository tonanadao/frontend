"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
// ============================== Shared ==============================
var genSharedAffixStyle = function genSharedAffixStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, {
    position: 'fixed',
    zIndex: token.zIndexPopup
  });
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Affix', function (token) {
  var affixToken = (0, _internal.mergeToken)(token, {
    zIndexPopup: token.zIndexBase + 10
  });
  return [genSharedAffixStyle(affixToken)];
});
exports["default"] = _default;
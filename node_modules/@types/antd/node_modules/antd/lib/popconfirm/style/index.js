"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _ref, _componentCls;
  var componentCls = token.componentCls,
    iconCls = token.iconCls,
    zIndexPopup = token.zIndexPopup,
    colorText = token.colorText,
    colorWarning = token.colorWarning,
    marginXS = token.marginXS,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {
    zIndex: zIndexPopup
  }, (0, _defineProperty2["default"])(_componentCls, componentCls + "-inner-content", {
    color: colorText
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-message", (_ref = {
    position: 'relative',
    marginBottom: marginXS,
    color: colorText,
    fontSize: fontSize,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'start'
  }, (0, _defineProperty2["default"])(_ref, "> " + componentCls + "-message-icon " + iconCls, {
    color: colorWarning,
    fontSize: fontSize,
    flex: 'none',
    lineHeight: 1,
    paddingTop: (Math.round(fontSize * lineHeight) - fontSize) / 2
  }), (0, _defineProperty2["default"])(_ref, '&-title', {
    flex: 'auto',
    marginInlineStart: marginXS
  }), _ref)), (0, _defineProperty2["default"])(_componentCls, componentCls + "-buttons", {
    textAlign: 'end',
    button: {
      marginInlineStart: marginXS
    }
  }), _componentCls));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Popconfirm', function (token) {
  return genBaseStyle(token);
}, function (token) {
  var zIndexPopupBase = token.zIndexPopupBase;
  return {
    zIndexPopup: zIndexPopupBase + 60
  };
});
exports["default"] = _default;
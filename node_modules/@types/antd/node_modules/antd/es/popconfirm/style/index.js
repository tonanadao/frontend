import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook } from '../../theme/internal';
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
  return _defineProperty({}, componentCls, (_componentCls = {
    zIndex: zIndexPopup
  }, _defineProperty(_componentCls, componentCls + "-inner-content", {
    color: colorText
  }), _defineProperty(_componentCls, componentCls + "-message", (_ref = {
    position: 'relative',
    marginBottom: marginXS,
    color: colorText,
    fontSize: fontSize,
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'start'
  }, _defineProperty(_ref, "> " + componentCls + "-message-icon " + iconCls, {
    color: colorWarning,
    fontSize: fontSize,
    flex: 'none',
    lineHeight: 1,
    paddingTop: (Math.round(fontSize * lineHeight) - fontSize) / 2
  }), _defineProperty(_ref, '&-title', {
    flex: 'auto',
    marginInlineStart: marginXS
  }), _ref)), _defineProperty(_componentCls, componentCls + "-buttons", {
    textAlign: 'end',
    button: {
      marginInlineStart: marginXS
    }
  }), _componentCls));
};
// ============================== Export ==============================
export default genComponentStyleHook('Popconfirm', function (token) {
  return genBaseStyle(token);
}, function (token) {
  var zIndexPopupBase = token.zIndexPopupBase;
  return {
    zIndexPopup: zIndexPopupBase + 60
  };
});
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genLayoutLightStyle = function genLayoutLightStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    colorBgContainer = token.colorBgContainer,
    colorBgBody = token.colorBgBody,
    colorText = token.colorText;
  return _defineProperty({}, componentCls + "-sider-light", (_ref = {
    background: colorBgContainer
  }, _defineProperty(_ref, componentCls + "-sider-trigger", {
    color: colorText,
    background: colorBgContainer
  }), _defineProperty(_ref, componentCls + "-sider-zero-width-trigger", {
    color: colorText,
    background: colorBgContainer,
    border: "1px solid " + colorBgBody,
    borderInlineStart: 0
  }), _ref));
};
export default genLayoutLightStyle;
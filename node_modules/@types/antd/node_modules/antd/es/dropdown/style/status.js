import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStatusStyle = function genStatusStyle(token) {
  var componentCls = token.componentCls,
    menuCls = token.menuCls,
    colorError = token.colorError,
    colorTextLightSolid = token.colorTextLightSolid;
  var itemCls = menuCls + "-item";
  return _defineProperty({}, componentCls + ", " + componentCls + "-menu-submenu", _defineProperty({}, menuCls + " " + itemCls, _defineProperty({}, "&" + itemCls + "-danger", {
    color: colorError,
    '&:hover': {
      color: colorTextLightSolid,
      backgroundColor: colorError
    }
  })));
};
export default genStatusStyle;
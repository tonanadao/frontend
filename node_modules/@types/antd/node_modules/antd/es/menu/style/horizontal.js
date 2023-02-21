import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var getHorizontalStyle = function getHorizontalStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow,
    menuHorizontalHeight = token.menuHorizontalHeight,
    colorSplit = token.colorSplit,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    menuItemPaddingInline = token.menuItemPaddingInline;
  return _defineProperty({}, componentCls + "-horizontal", (_ref = {
    lineHeight: menuHorizontalHeight + "px",
    border: 0,
    borderBottom: lineWidth + "px " + lineType + " " + colorSplit,
    boxShadow: 'none',
    '&::after': {
      display: 'block',
      clear: 'both',
      height: 0,
      content: '"\\20"'
    }
  }, _defineProperty(_ref, componentCls + "-item, " + componentCls + "-submenu", {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'bottom',
    paddingInline: menuItemPaddingInline
  }), _defineProperty(_ref, "> " + componentCls + "-item:hover,\n        > " + componentCls + "-item-active,\n        > " + componentCls + "-submenu " + componentCls + "-submenu-title:hover", {
    backgroundColor: 'transparent'
  }), _defineProperty(_ref, componentCls + "-item, " + componentCls + "-submenu-title", {
    transition: ["border-color " + motionDurationSlow, "background " + motionDurationSlow].join(',')
  }), _defineProperty(_ref, componentCls + "-submenu-arrow", {
    display: 'none'
  }), _ref));
};
export default getHorizontalStyle;
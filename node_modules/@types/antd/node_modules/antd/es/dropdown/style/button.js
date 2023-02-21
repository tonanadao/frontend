import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genButtonStyle = function genButtonStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    paddingXS = token.paddingXS,
    opacityLoading = token.opacityLoading;
  return _defineProperty({}, componentCls + "-button", _defineProperty({
    whiteSpace: 'nowrap'
  }, "&" + antCls + "-btn-group > " + antCls + "-btn", (_ref = {}, _defineProperty(_ref, "&-loading, &-loading + " + antCls + "-btn", {
    cursor: 'default',
    pointerEvents: 'none',
    opacity: opacityLoading
  }), _defineProperty(_ref, "&:last-child:not(:first-child):not(" + antCls + "-btn-icon-only)", {
    paddingInline: paddingXS
  }), _ref)));
};
export default genButtonStyle;
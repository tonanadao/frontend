import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genSummaryStyle = function genSummaryStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    tableBorderColor = token.tableBorderColor;
  var tableBorder = lineWidth + "px " + token.lineType + " " + tableBorderColor;
  return _defineProperty({}, componentCls + "-wrapper", (_ref = {}, _defineProperty(_ref, componentCls + "-summary", {
    position: 'relative',
    zIndex: token.zIndexTableFixed,
    background: token.tableBg,
    '> tr': {
      '> th, > td': {
        borderBottom: tableBorder
      }
    }
  }), _defineProperty(_ref, "div" + componentCls + "-summary", {
    boxShadow: "0 -" + lineWidth + "px 0 " + tableBorderColor
  }), _ref));
};
export default genSummaryStyle;
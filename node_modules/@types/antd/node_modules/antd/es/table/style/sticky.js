import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStickyStyle = function genStickyStyle(token) {
  var componentCls = token.componentCls,
    opacityLoading = token.opacityLoading,
    tableScrollThumbBg = token.tableScrollThumbBg,
    tableScrollThumbBgHover = token.tableScrollThumbBgHover,
    tableScrollThumbSize = token.tableScrollThumbSize,
    tableScrollBg = token.tableScrollBg,
    zIndexTableSticky = token.zIndexTableSticky;
  var tableBorder = token.lineWidth + "px " + token.lineType + " " + token.tableBorderColor;
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, componentCls + "-sticky", {
    '&-holder': {
      position: 'sticky',
      zIndex: zIndexTableSticky,
      background: token.colorBgContainer
    },
    '&-scroll': {
      position: 'sticky',
      bottom: 0,
      height: tableScrollThumbSize + "px !important",
      zIndex: zIndexTableSticky,
      display: 'flex',
      alignItems: 'center',
      background: tableScrollBg,
      borderTop: tableBorder,
      opacity: opacityLoading,
      '&:hover': {
        transformOrigin: 'center bottom'
      },
      // fake scrollbar style of sticky
      '&-bar': {
        height: tableScrollThumbSize,
        backgroundColor: tableScrollThumbBg,
        borderRadius: 100,
        transition: "all " + token.motionDurationSlow + ", transform none",
        position: 'absolute',
        bottom: 0,
        '&:hover, &-active': {
          backgroundColor: tableScrollThumbBgHover
        }
      }
    }
  }));
};
export default genStickyStyle;
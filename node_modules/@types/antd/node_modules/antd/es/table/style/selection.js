import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genSelectionStyle = function genSelectionStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    iconCls = token.iconCls,
    fontSizeIcon = token.fontSizeIcon,
    paddingXS = token.paddingXS,
    tableHeaderIconColor = token.tableHeaderIconColor,
    tableHeaderIconColorHover = token.tableHeaderIconColorHover;
  return _defineProperty({}, componentCls + "-wrapper", (_ref3 = {}, _defineProperty(_ref3, componentCls + "-selection-col", {
    width: token.tableSelectionColumnWidth
  }), _defineProperty(_ref3, componentCls + "-bordered " + componentCls + "-selection-col", {
    width: token.tableSelectionColumnWidth + paddingXS * 2
  }), _defineProperty(_ref3, "\n        table tr th" + componentCls + "-selection-column,\n        table tr td" + componentCls + "-selection-column\n      ", _defineProperty({
    paddingInlineEnd: token.paddingXS,
    paddingInlineStart: token.paddingXS,
    textAlign: 'center'
  }, antCls + "-radio-wrapper", {
    marginInlineEnd: 0
  })), _defineProperty(_ref3, "table tr th" + componentCls + "-selection-column" + componentCls + "-cell-fix-left", {
    zIndex: token.zIndexTableFixed
  }), _defineProperty(_ref3, "table tr th" + componentCls + "-selection-column::after", {
    backgroundColor: 'transparent !important'
  }), _defineProperty(_ref3, componentCls + "-selection", {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column'
  }), _defineProperty(_ref3, componentCls + "-selection-extra", _defineProperty({
    position: 'absolute',
    top: 0,
    zIndex: 1,
    cursor: 'pointer',
    transition: "all " + token.motionDurationSlow,
    marginInlineStart: '100%',
    paddingInlineStart: token.tablePaddingHorizontal / 4 + "px"
  }, iconCls, {
    color: tableHeaderIconColor,
    fontSize: fontSizeIcon,
    verticalAlign: 'baseline',
    '&:hover': {
      color: tableHeaderIconColorHover
    }
  })), _ref3));
};
export default genSelectionStyle;
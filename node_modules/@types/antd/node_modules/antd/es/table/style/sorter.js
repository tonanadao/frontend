import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genSorterStyle = function genSorterStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    marginXXS = token.marginXXS,
    fontSizeIcon = token.fontSizeIcon,
    tableHeaderIconColor = token.tableHeaderIconColor,
    tableHeaderIconColorHover = token.tableHeaderIconColorHover;
  return _defineProperty({}, componentCls + "-wrapper", (_ref3 = {}, _defineProperty(_ref3, componentCls + "-thead th" + componentCls + "-column-has-sorters", _defineProperty({
    outline: 'none',
    cursor: 'pointer',
    transition: "all " + token.motionDurationSlow,
    '&:hover': {
      background: token.tableHeaderSortHoverBg,
      '&::before': {
        backgroundColor: 'transparent !important'
      }
    },
    '&:focus-visible': {
      color: token.colorPrimary
    }
  }, "\n          &" + componentCls + "-cell-fix-left:hover,\n          &" + componentCls + "-cell-fix-right:hover\n        ", {
    background: token.tableFixedHeaderSortActiveBg
  })), _defineProperty(_ref3, componentCls + "-thead th" + componentCls + "-column-sort", {
    background: token.tableHeaderSortBg,
    '&::before': {
      backgroundColor: 'transparent !important'
    }
  }), _defineProperty(_ref3, "td" + componentCls + "-column-sort", {
    background: token.tableBodySortBg
  }), _defineProperty(_ref3, componentCls + "-column-title", {
    position: 'relative',
    zIndex: 1,
    flex: 1
  }), _defineProperty(_ref3, componentCls + "-column-sorters", {
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&::after': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      content: '""'
    }
  }), _defineProperty(_ref3, componentCls + "-column-sorter", _defineProperty({
    marginInlineStart: marginXXS,
    color: tableHeaderIconColor,
    fontSize: 0,
    transition: "color " + token.motionDurationSlow,
    '&-inner': {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '&-up, &-down': {
      fontSize: fontSizeIcon,
      '&.active': {
        color: token.colorPrimary
      }
    }
  }, componentCls + "-column-sorter-up + " + componentCls + "-column-sorter-down", {
    marginTop: '-0.3em'
  })), _defineProperty(_ref3, componentCls + "-column-sorters:hover " + componentCls + "-column-sorter", {
    color: tableHeaderIconColorHover
  }), _ref3));
};
export default genSorterStyle;
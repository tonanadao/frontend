"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tinycolor = require("@ctrl/tinycolor");
var _internal = require("../../theme/internal");
var _bordered = _interopRequireDefault(require("./bordered"));
var _ellipsis = _interopRequireDefault(require("./ellipsis"));
var _empty = _interopRequireDefault(require("./empty"));
var _expand = _interopRequireDefault(require("./expand"));
var _filter = _interopRequireDefault(require("./filter"));
var _fixed = _interopRequireDefault(require("./fixed"));
var _pagination = _interopRequireDefault(require("./pagination"));
var _radius = _interopRequireDefault(require("./radius"));
var _rtl = _interopRequireDefault(require("./rtl"));
var _selection = _interopRequireDefault(require("./selection"));
var _size = _interopRequireDefault(require("./size"));
var _sorter = _interopRequireDefault(require("./sorter"));
var _sticky = _interopRequireDefault(require("./sticky"));
var _summary = _interopRequireDefault(require("./summary"));
var _style = require("../../style");
var genTableStyle = function genTableStyle(token) {
  var _tr, _ref3, _extends2;
  var componentCls = token.componentCls,
    fontWeightStrong = token.fontWeightStrong,
    tablePaddingVertical = token.tablePaddingVertical,
    tablePaddingHorizontal = token.tablePaddingHorizontal,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    tableBorderColor = token.tableBorderColor,
    tableFontSize = token.tableFontSize,
    tableBg = token.tableBg,
    tableRadius = token.tableRadius,
    tableHeaderTextColor = token.tableHeaderTextColor,
    motionDurationSlow = token.motionDurationSlow,
    tableHeaderBg = token.tableHeaderBg,
    tableHeaderCellSplitColor = token.tableHeaderCellSplitColor,
    tableRowHoverBg = token.tableRowHoverBg,
    tableSelectedRowBg = token.tableSelectedRowBg,
    tableSelectedRowHoverBg = token.tableSelectedRowHoverBg,
    tableFooterTextColor = token.tableFooterTextColor,
    tableFooterBg = token.tableFooterBg,
    paddingContentVerticalLG = token.paddingContentVerticalLG,
    wireframe = token.wireframe;
  var tableBorder = lineWidth + "px " + lineType + " " + tableBorderColor;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _extends3["default"])((0, _extends3["default"])({
    clear: 'both',
    maxWidth: '100%'
  }, (0, _style.clearFix)()), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), {
    fontSize: tableFontSize,
    background: tableBg,
    borderRadius: tableRadius
  })), (0, _defineProperty2["default"])(_extends2, "table", {
    width: '100%',
    textAlign: 'start',
    borderRadius: tableRadius + "px " + tableRadius + "px 0 0",
    borderCollapse: 'separate',
    borderSpacing: 0
  }), (0, _defineProperty2["default"])(_extends2, "\n          " + componentCls + "-thead > tr > th,\n          " + componentCls + "-tbody > tr > td,\n          tfoot > tr > th,\n          tfoot > tr > td\n        ", {
    position: 'relative',
    padding: paddingContentVerticalLG + "px " + tablePaddingHorizontal + "px",
    overflowWrap: 'break-word'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-title", {
    padding: tablePaddingVertical + "px " + tablePaddingHorizontal + "px"
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-thead", {
    '> tr > th': (0, _defineProperty2["default"])({
      position: 'relative',
      color: tableHeaderTextColor,
      fontWeight: fontWeightStrong,
      textAlign: 'start',
      background: tableHeaderBg,
      borderBottom: tableBorder,
      transition: "background " + motionDurationSlow + " ease",
      "&[colspan]:not([colspan='1'])": {
        textAlign: 'center'
      }
    }, "&:not(:last-child):not(" + componentCls + "-selection-column):not(" + componentCls + "-row-expand-icon-cell):not([colspan])::before", {
      position: 'absolute',
      top: '50%',
      insetInlineEnd: 0,
      width: 1,
      height: '1.6em',
      backgroundColor: tableHeaderCellSplitColor,
      transform: 'translateY(-50%)',
      transition: "background-color " + motionDurationSlow,
      content: '""'
    }),
    '> tr:not(:last-child) > th[colspan]': {
      borderBottom: 0
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-tbody", {
    '> tr': (_tr = {
      '> td': (0, _defineProperty2["default"])({
        borderTop: tableBorder,
        transition: "background " + motionDurationSlow
      }, "\n              > " + componentCls + "-wrapper:only-child,\n              > " + componentCls + "-expanded-row-fixed > " + componentCls + "-wrapper:only-child\n            ", (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({
        marginBlock: "-" + tablePaddingVertical + "px",
        marginInline: token.tableExpandColumnWidth - tablePaddingHorizontal + "px -" + tablePaddingHorizontal + "px"
      }, componentCls + "-tbody > tr:last-child > td", {
        borderBottom: 0,
        '&:first-child, &:last-child': {
          borderRadius: 0
        }
      }))),
      '&:last-child > td': {
        borderBottom: tableBorder
      }
    }, (0, _defineProperty2["default"])(_tr, "&:first-child > td,\n            &" + componentCls + "-measure-row + tr > td", {
      borderTop: 'none'
    }), (0, _defineProperty2["default"])(_tr, "\n            &" + componentCls + "-row:hover > td,\n            > td" + componentCls + "-cell-row-hover\n          ", {
      background: tableRowHoverBg
    }), (0, _defineProperty2["default"])(_tr, "&" + componentCls + "-row-selected", {
      '> td': {
        background: tableSelectedRowBg
      },
      '&:hover > td': {
        background: tableSelectedRowHoverBg
      }
    }), _tr)
  }), (0, _defineProperty2["default"])(_extends2, componentCls + ":not(" + componentCls + "-bordered) " + componentCls + "-tbody > tr", wireframe ? undefined : (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-row:hover, &" + componentCls + "-row" + componentCls + "-row-selected", (0, _defineProperty2["default"])({}, "+ tr" + componentCls + "-row > td", {
    borderTopColor: 'transparent'
  })), (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-row:last-child:hover > td,\n          &" + componentCls + "-row" + componentCls + "-row-selected:last-child > td", {
    borderBottomColor: 'transparent'
  }), (0, _defineProperty2["default"])(_ref3, "\n          &" + componentCls + "-row:hover > td,\n          > td" + componentCls + "-cell-row-hover,\n          &" + componentCls + "-row" + componentCls + "-row-selected > td\n        ", {
    borderTopColor: 'transparent',
    '&:first-child': {
      borderStartStartRadius: tableRadius,
      borderEndStartRadius: tableRadius
    },
    '&:last-child': {
      borderStartEndRadius: tableRadius,
      borderEndEndRadius: tableRadius
    }
  }), _ref3)), (0, _defineProperty2["default"])(_extends2, componentCls + "-footer", {
    padding: tablePaddingVertical + "px " + tablePaddingHorizontal + "px",
    color: tableFooterTextColor,
    background: tableFooterBg
  }), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Table', function (token) {
  var controlItemBgActive = token.controlItemBgActive,
    controlItemBgActiveHover = token.controlItemBgActiveHover,
    colorTextPlaceholder = token.colorTextPlaceholder,
    colorTextHeading = token.colorTextHeading,
    colorSplit = token.colorSplit,
    fontSize = token.fontSize,
    padding = token.padding,
    paddingXS = token.paddingXS,
    paddingSM = token.paddingSM,
    controlHeight = token.controlHeight,
    colorFillAlter = token.colorFillAlter,
    colorIcon = token.colorIcon,
    colorIconHover = token.colorIconHover,
    opacityLoading = token.opacityLoading,
    colorBgContainer = token.colorBgContainer,
    colorFillSecondary = token.colorFillSecondary,
    borderRadiusLG = token.borderRadiusLG,
    colorFillContent = token.colorFillContent,
    checkboxSize = token.controlInteractiveSize;
  var baseColorAction = new _tinycolor.TinyColor(colorIcon);
  var baseColorActionHover = new _tinycolor.TinyColor(colorIconHover);
  var tableSelectedRowBg = controlItemBgActive;
  var zIndexTableFixed = 2;
  var colorFillAlterSolid = new _tinycolor.TinyColor(colorFillAlter).onBackground(colorBgContainer).toHexString();
  var tableToken = (0, _internal.mergeToken)(token, {
    tableFontSize: fontSize,
    tableBg: colorBgContainer,
    tableRadius: borderRadiusLG,
    tablePaddingVertical: padding,
    tablePaddingHorizontal: padding,
    tablePaddingVerticalMiddle: paddingSM,
    tablePaddingHorizontalMiddle: paddingXS,
    tablePaddingVerticalSmall: paddingXS,
    tablePaddingHorizontalSmall: paddingXS,
    tableBorderColor: colorSplit,
    tableHeaderTextColor: colorTextHeading,
    tableHeaderBg: colorFillAlterSolid,
    tableFooterTextColor: colorTextHeading,
    tableFooterBg: colorFillAlterSolid,
    tableHeaderCellSplitColor: colorSplit,
    tableHeaderSortBg: colorFillSecondary,
    tableHeaderSortHoverBg: colorFillContent,
    tableHeaderIconColor: baseColorAction.clone().setAlpha(baseColorAction.getAlpha() * opacityLoading).toRgbString(),
    tableHeaderIconColorHover: baseColorActionHover.clone().setAlpha(baseColorActionHover.getAlpha() * opacityLoading).toRgbString(),
    tableBodySortBg: colorFillAlter,
    tableFixedHeaderSortActiveBg: colorFillSecondary,
    tableHeaderFilterActiveBg: colorFillContent,
    tableFilterDropdownBg: colorBgContainer,
    tableRowHoverBg: colorFillAlterSolid,
    tableSelectedRowBg: tableSelectedRowBg,
    tableSelectedRowHoverBg: controlItemBgActiveHover,
    zIndexTableFixed: zIndexTableFixed,
    zIndexTableSticky: zIndexTableFixed + 1,
    tableFontSizeMiddle: fontSize,
    tableFontSizeSmall: fontSize,
    tableSelectionColumnWidth: controlHeight,
    tableExpandIconBg: colorBgContainer,
    tableExpandColumnWidth: checkboxSize + 2 * token.padding,
    tableExpandedRowBg: colorFillAlter,
    // Dropdown
    tableFilterDropdownWidth: 120,
    tableFilterDropdownHeight: 264,
    tableFilterDropdownSearchWidth: 140,
    // Virtual Scroll Bar
    tableScrollThumbSize: 8,
    tableScrollThumbBg: colorTextPlaceholder,
    tableScrollThumbBgHover: colorTextHeading,
    tableScrollBg: colorSplit
  });
  return [genTableStyle(tableToken), (0, _pagination["default"])(tableToken), (0, _summary["default"])(tableToken), (0, _sorter["default"])(tableToken), (0, _filter["default"])(tableToken), (0, _bordered["default"])(tableToken), (0, _radius["default"])(tableToken), (0, _expand["default"])(tableToken), (0, _summary["default"])(tableToken), (0, _empty["default"])(tableToken), (0, _selection["default"])(tableToken), (0, _fixed["default"])(tableToken), (0, _sticky["default"])(tableToken), (0, _ellipsis["default"])(tableToken), (0, _size["default"])(tableToken), (0, _rtl["default"])(tableToken)];
});
exports["default"] = _default;
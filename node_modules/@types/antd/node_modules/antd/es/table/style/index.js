import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { TinyColor } from '@ctrl/tinycolor';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import genBorderedStyle from './bordered';
import genEllipsisStyle from './ellipsis';
import genEmptyStyle from './empty';
import genExpandStyle from './expand';
import genFilterStyle from './filter';
import genFixedStyle from './fixed';
import genPaginationStyle from './pagination';
import genRadiusStyle from './radius';
import genRtlStyle from './rtl';
import genSelectionStyle from './selection';
import genSizeStyle from './size';
import genSorterStyle from './sorter';
import genStickyStyle from './sticky';
import genSummaryStyle from './summary';
import { clearFix, resetComponent } from '../../style';
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
  return _defineProperty({}, componentCls + "-wrapper", _extends(_extends({
    clear: 'both',
    maxWidth: '100%'
  }, clearFix()), (_extends2 = {}, _defineProperty(_extends2, componentCls, _extends(_extends({}, resetComponent(token)), {
    fontSize: tableFontSize,
    background: tableBg,
    borderRadius: tableRadius
  })), _defineProperty(_extends2, "table", {
    width: '100%',
    textAlign: 'start',
    borderRadius: tableRadius + "px " + tableRadius + "px 0 0",
    borderCollapse: 'separate',
    borderSpacing: 0
  }), _defineProperty(_extends2, "\n          " + componentCls + "-thead > tr > th,\n          " + componentCls + "-tbody > tr > td,\n          tfoot > tr > th,\n          tfoot > tr > td\n        ", {
    position: 'relative',
    padding: paddingContentVerticalLG + "px " + tablePaddingHorizontal + "px",
    overflowWrap: 'break-word'
  }), _defineProperty(_extends2, componentCls + "-title", {
    padding: tablePaddingVertical + "px " + tablePaddingHorizontal + "px"
  }), _defineProperty(_extends2, componentCls + "-thead", {
    '> tr > th': _defineProperty({
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
  }), _defineProperty(_extends2, componentCls + "-tbody", {
    '> tr': (_tr = {
      '> td': _defineProperty({
        borderTop: tableBorder,
        transition: "background " + motionDurationSlow
      }, "\n              > " + componentCls + "-wrapper:only-child,\n              > " + componentCls + "-expanded-row-fixed > " + componentCls + "-wrapper:only-child\n            ", _defineProperty({}, componentCls, _defineProperty({
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
    }, _defineProperty(_tr, "&:first-child > td,\n            &" + componentCls + "-measure-row + tr > td", {
      borderTop: 'none'
    }), _defineProperty(_tr, "\n            &" + componentCls + "-row:hover > td,\n            > td" + componentCls + "-cell-row-hover\n          ", {
      background: tableRowHoverBg
    }), _defineProperty(_tr, "&" + componentCls + "-row-selected", {
      '> td': {
        background: tableSelectedRowBg
      },
      '&:hover > td': {
        background: tableSelectedRowHoverBg
      }
    }), _tr)
  }), _defineProperty(_extends2, componentCls + ":not(" + componentCls + "-bordered) " + componentCls + "-tbody > tr", wireframe ? undefined : (_ref3 = {}, _defineProperty(_ref3, "&" + componentCls + "-row:hover, &" + componentCls + "-row" + componentCls + "-row-selected", _defineProperty({}, "+ tr" + componentCls + "-row > td", {
    borderTopColor: 'transparent'
  })), _defineProperty(_ref3, "&" + componentCls + "-row:last-child:hover > td,\n          &" + componentCls + "-row" + componentCls + "-row-selected:last-child > td", {
    borderBottomColor: 'transparent'
  }), _defineProperty(_ref3, "\n          &" + componentCls + "-row:hover > td,\n          > td" + componentCls + "-cell-row-hover,\n          &" + componentCls + "-row" + componentCls + "-row-selected > td\n        ", {
    borderTopColor: 'transparent',
    '&:first-child': {
      borderStartStartRadius: tableRadius,
      borderEndStartRadius: tableRadius
    },
    '&:last-child': {
      borderStartEndRadius: tableRadius,
      borderEndEndRadius: tableRadius
    }
  }), _ref3)), _defineProperty(_extends2, componentCls + "-footer", {
    padding: tablePaddingVertical + "px " + tablePaddingHorizontal + "px",
    color: tableFooterTextColor,
    background: tableFooterBg
  }), _extends2)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Table', function (token) {
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
  var baseColorAction = new TinyColor(colorIcon);
  var baseColorActionHover = new TinyColor(colorIconHover);
  var tableSelectedRowBg = controlItemBgActive;
  var zIndexTableFixed = 2;
  var colorFillAlterSolid = new TinyColor(colorFillAlter).onBackground(colorBgContainer).toHexString();
  var tableToken = mergeToken(token, {
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
  return [genTableStyle(tableToken), genPaginationStyle(tableToken), genSummaryStyle(tableToken), genSorterStyle(tableToken), genFilterStyle(tableToken), genBorderedStyle(tableToken), genRadiusStyle(tableToken), genExpandStyle(tableToken), genSummaryStyle(tableToken), genEmptyStyle(tableToken), genSelectionStyle(tableToken), genFixedStyle(tableToken), genStickyStyle(tableToken), genEllipsisStyle(tableToken), genSizeStyle(tableToken), genRtlStyle(tableToken)];
});
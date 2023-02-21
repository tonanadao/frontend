import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, resetIcon, textEllipsis } from '../../style';
var genTransferCustomizeStyle = function genTransferCustomizeStyle(token) {
  var _ref2, _ref3;
  var antCls = token.antCls,
    componentCls = token.componentCls,
    listHeight = token.listHeight,
    controlHeightLG = token.controlHeightLG,
    marginXXS = token.marginXXS,
    margin = token.margin;
  var tableCls = antCls + "-table";
  var inputCls = antCls + "-input";
  return _defineProperty({}, componentCls + "-customize-list", (_ref3 = {}, _defineProperty(_ref3, componentCls + "-list", {
    flex: '1 1 50%',
    width: 'auto',
    height: 'auto',
    minHeight: listHeight
  }), _defineProperty(_ref3, tableCls + "-wrapper", (_ref2 = {}, _defineProperty(_ref2, tableCls + "-small", _defineProperty({
    border: 0,
    borderRadius: 0
  }, tableCls + "-selection-column", {
    width: controlHeightLG,
    minWidth: controlHeightLG
  })), _defineProperty(_ref2, tableCls + "-pagination" + tableCls + "-pagination", {
    margin: margin + "px 0 " + marginXXS + "px"
  }), _ref2)), _defineProperty(_ref3, inputCls + "[disabled]", {
    backgroundColor: 'transparent'
  }), _ref3));
};
var genTransferStatusColor = function genTransferStatusColor(token, color) {
  var componentCls = token.componentCls,
    colorBorder = token.colorBorder;
  return _defineProperty({}, componentCls + "-list", {
    borderColor: color,
    '&-search:not([disabled])': {
      borderColor: colorBorder
    }
  });
};
var genTransferStatusStyle = function genTransferStatusStyle(token) {
  var _ref6;
  var componentCls = token.componentCls;
  return _ref6 = {}, _defineProperty(_ref6, componentCls + "-status-error", _extends({}, genTransferStatusColor(token, token.colorError))), _defineProperty(_ref6, componentCls + "-status-warning", _extends({}, genTransferStatusColor(token, token.colorWarning))), _ref6;
};
var genTransferListStyle = function genTransferListStyle(token) {
  var componentCls = token.componentCls,
    colorBorder = token.colorBorder,
    colorSplit = token.colorSplit,
    lineWidth = token.lineWidth,
    transferItemHeight = token.transferItemHeight,
    transferHeaderHeight = token.transferHeaderHeight,
    transferHeaderVerticalPadding = token.transferHeaderVerticalPadding,
    transferItemPaddingVertical = token.transferItemPaddingVertical,
    controlItemBgActive = token.controlItemBgActive,
    controlItemBgActiveHover = token.controlItemBgActiveHover,
    colorTextDisabled = token.colorTextDisabled,
    listHeight = token.listHeight,
    listWidth = token.listWidth,
    listWidthLG = token.listWidthLG,
    fontSizeIcon = token.fontSizeIcon,
    marginXS = token.marginXS,
    paddingSM = token.paddingSM,
    lineType = token.lineType,
    iconCls = token.iconCls,
    motionDurationSlow = token.motionDurationSlow;
  return {
    display: 'flex',
    flexDirection: 'column',
    width: listWidth,
    height: listHeight,
    border: lineWidth + "px " + lineType + " " + colorBorder,
    borderRadius: token.borderRadiusLG,
    '&-with-pagination': {
      width: listWidthLG,
      height: 'auto'
    },
    '&-search': _defineProperty({}, iconCls + "-search", {
      color: colorTextDisabled
    }),
    '&-header': {
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      height: transferHeaderHeight,
      // border-top is on the transfer dom. We should minus 1px for this
      padding: transferHeaderVerticalPadding - lineWidth + "px " + paddingSM + "px " + transferHeaderVerticalPadding + "px",
      color: token.colorText,
      background: token.colorBgContainer,
      borderBottom: lineWidth + "px " + lineType + " " + colorSplit,
      borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0",
      '> *:not(:last-child)': {
        marginInlineEnd: 4 // This is magic and fixed number, DO NOT use token since it may change.
      },

      '> *': {
        flex: 'none'
      },
      '&-title': _extends(_extends({}, textEllipsis), {
        flex: 'auto',
        textAlign: 'end'
      }),
      '&-dropdown': _extends(_extends({}, resetIcon()), {
        fontSize: fontSizeIcon,
        transform: 'translateY(10%)',
        cursor: 'pointer',
        '&[disabled]': {
          cursor: 'not-allowed'
        }
      })
    },
    '&-body': {
      display: 'flex',
      flex: 'auto',
      flexDirection: 'column',
      overflow: 'hidden',
      fontSize: token.fontSize,
      '&-search-wrapper': {
        position: 'relative',
        flex: 'none',
        padding: paddingSM
      }
    },
    '&-content': {
      flex: 'auto',
      margin: 0,
      padding: 0,
      overflow: 'auto',
      listStyle: 'none',
      '&-item': {
        display: 'flex',
        alignItems: 'center',
        minHeight: transferItemHeight,
        padding: transferItemPaddingVertical + "px " + paddingSM + "px",
        transition: "all " + motionDurationSlow,
        '> *:not(:last-child)': {
          marginInlineEnd: marginXS
        },
        '> *': {
          flex: 'none'
        },
        '&-text': _extends(_extends({}, textEllipsis), {
          flex: 'auto'
        }),
        '&-remove': {
          position: 'relative',
          color: colorBorder,
          cursor: 'pointer',
          transition: "all " + motionDurationSlow,
          '&:hover': {
            color: token.colorLinkHover
          },
          '&::after': {
            position: 'absolute',
            insert: "-" + transferItemPaddingVertical + "px -50%",
            content: '""'
          }
        },
        '&:not(&-disabled)': _defineProperty({
          '&:hover': {
            backgroundColor: token.controlItemBgHover,
            cursor: 'pointer'
          }
        }, "&" + componentCls + "-list-content-item-checked:hover", {
          backgroundColor: controlItemBgActiveHover
        }),
        // Do not change hover style when `oneWay` mode
        '&-show-remove &-item:not(&-item-disabled):hover': {
          background: 'transparent',
          cursor: 'default'
        },
        '&-checked': {
          backgroundColor: controlItemBgActive
        },
        '&-disabled': {
          color: colorTextDisabled,
          cursor: 'not-allowed'
        }
      }
    },
    '&-pagination': {
      padding: token.paddingXS + "px 0",
      textAlign: 'end',
      borderTop: lineWidth + "px " + lineType + " " + colorSplit
    },
    '&-body-not-found': {
      flex: 'none',
      width: '100%',
      margin: 'auto 0',
      color: colorTextDisabled,
      textAlign: 'center'
    },
    '&-footer': {
      borderTop: lineWidth + "px " + lineType + " " + colorSplit
    }
  };
};
var genTransferStyle = function genTransferStyle(token) {
  var _extends2;
  var antCls = token.antCls,
    iconCls = token.iconCls,
    componentCls = token.componentCls,
    transferHeaderHeight = token.transferHeaderHeight,
    marginXS = token.marginXS,
    marginXXS = token.marginXXS,
    fontSizeIcon = token.fontSizeIcon,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  return _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch'
  }, _defineProperty(_extends2, componentCls + "-disabled", _defineProperty({}, componentCls + "-list", {
    background: token.colorBgContainerDisabled
  })), _defineProperty(_extends2, componentCls + "-list", genTransferListStyle(token)), _defineProperty(_extends2, componentCls + "-operation", _defineProperty({
    display: 'flex',
    flex: 'none',
    flexDirection: 'column',
    alignSelf: 'center',
    margin: "0 " + marginXS + "px",
    verticalAlign: 'middle'
  }, antCls + "-btn", _defineProperty({
    display: 'block',
    '&:first-child': {
      marginBottom: marginXXS
    }
  }, iconCls, {
    fontSize: fontSizeIcon
  }))), _defineProperty(_extends2, antCls + "-empty-image", {
    maxHeight: transferHeaderHeight / 2 - Math.round(fontSize * lineHeight)
  }), _extends2)));
};
var genTransferRTLStyle = function genTransferRTLStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-rtl", {
    direction: 'rtl'
  });
};
// ============================== Export ==============================
export default genComponentStyleHook('Transfer', function (token) {
  var fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    lineWidth = token.lineWidth,
    controlHeightLG = token.controlHeightLG,
    controlHeight = token.controlHeight;
  var fontHeight = Math.round(fontSize * lineHeight);
  var transferHeaderHeight = controlHeightLG;
  var transferItemHeight = controlHeight;
  var transferToken = mergeToken(token, {
    transferItemHeight: transferItemHeight,
    transferHeaderHeight: transferHeaderHeight,
    transferHeaderVerticalPadding: Math.ceil((transferHeaderHeight - lineWidth - fontHeight) / 2),
    transferItemPaddingVertical: (transferItemHeight - fontHeight) / 2
  });
  return [genTransferStyle(transferToken), genTransferCustomizeStyle(transferToken), genTransferStatusStyle(transferToken), genTransferRTLStyle(transferToken)];
}, {
  listWidth: 180,
  listHeight: 200,
  listWidthLG: 250
});
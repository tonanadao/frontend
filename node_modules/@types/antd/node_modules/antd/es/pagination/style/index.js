import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genBasicInputStyle, genInputSmallStyle, initInputToken } from '../../input/style';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusOutline, genFocusStyle, resetComponent } from '../../style';
var genPaginationDisabledStyle = function genPaginationDisabledStyle(token) {
  var _ref2, _ref3;
  var componentCls = token.componentCls;
  return _ref3 = {}, _defineProperty(_ref3, componentCls + "-disabled", {
    '&, &:hover': _defineProperty({
      cursor: 'not-allowed'
    }, componentCls + "-item-link", {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }),
    '&:focus-visible': _defineProperty({
      cursor: 'not-allowed'
    }, componentCls + "-item-link", {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    })
  }), _defineProperty(_ref3, "&" + componentCls + "-disabled", (_ref2 = {
    cursor: 'not-allowed'
  }, _defineProperty(_ref2, componentCls + "-item", {
    cursor: 'not-allowed',
    '&:hover, &:active': {
      backgroundColor: 'transparent'
    },
    a: {
      color: token.colorTextDisabled,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'not-allowed'
    },
    '&-active': {
      borderColor: token.colorBorder,
      backgroundColor: token.paginationItemDisabledBgActive,
      '&:hover, &:active': {
        backgroundColor: token.paginationItemDisabledBgActive
      },
      a: {
        color: token.paginationItemDisabledColorActive
      }
    }
  }), _defineProperty(_ref2, componentCls + "-item-link", _defineProperty({
    color: token.colorTextDisabled,
    cursor: 'not-allowed',
    '&:hover, &:active': {
      backgroundColor: 'transparent'
    }
  }, componentCls + "-simple&", {
    backgroundColor: 'transparent'
  })), _defineProperty(_ref2, componentCls + "-item-link-icon", {
    opacity: 0
  }), _defineProperty(_ref2, componentCls + "-item-ellipsis", {
    opacity: 1
  }), _defineProperty(_ref2, componentCls + "-simple-pager", {
    color: token.colorTextDisabled
  }), _ref2)), _ref3;
};
var genPaginationMiniStyle = function genPaginationMiniStyle(token) {
  var _ref4, _ref5;
  var componentCls = token.componentCls;
  return _ref5 = {}, _defineProperty(_ref5, "&&-mini " + componentCls + "-total-text, &&-mini " + componentCls + "-simple-pager", {
    height: token.paginationItemSizeSM,
    lineHeight: token.paginationItemSizeSM + "px"
  }), _defineProperty(_ref5, "&&-mini " + componentCls + "-item", {
    minWidth: token.paginationItemSizeSM,
    height: token.paginationItemSizeSM,
    margin: 0,
    lineHeight: token.paginationItemSizeSM - 2 + "px"
  }), _defineProperty(_ref5, "&&-mini " + componentCls + "-item:not(" + componentCls + "-item-active)", {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }), _defineProperty(_ref5, "&&-mini " + componentCls + "-prev, &&-mini " + componentCls + "-next", {
    minWidth: token.paginationItemSizeSM,
    height: token.paginationItemSizeSM,
    margin: 0,
    lineHeight: token.paginationItemSizeSM + "px"
  }), _defineProperty(_ref5, "\n    &&-mini " + componentCls + "-prev " + componentCls + "-item-link,\n    &&-mini " + componentCls + "-next " + componentCls + "-item-link\n    ", {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    '&::after': {
      height: token.paginationItemSizeSM,
      lineHeight: token.paginationItemSizeSM + "px"
    }
  }), _defineProperty(_ref5, "&&-mini " + componentCls + "-jump-prev, &&-mini " + componentCls + "-jump-next", {
    height: token.paginationItemSizeSM,
    marginInlineEnd: 0,
    lineHeight: token.paginationItemSizeSM + "px"
  }), _defineProperty(_ref5, "&&-mini " + componentCls + "-options", (_ref4 = {
    marginInlineStart: token.paginationMiniOptionsMarginInlineStart
  }, _defineProperty(_ref4, "&-size-changer", {
    top: token.paginationMiniOptionsSizeChangerTop
  }), _defineProperty(_ref4, "&-quick-jumper", {
    height: token.paginationItemSizeSM,
    lineHeight: token.paginationItemSizeSM + "px",
    input: _extends(_extends({}, genInputSmallStyle(token)), {
      width: token.paginationMiniQuickJumperInputWidth,
      height: token.controlHeightSM
    })
  }), _ref4)), _ref5;
};
var genPaginationSimpleStyle = function genPaginationSimpleStyle(token) {
  var _ref7;
  var componentCls = token.componentCls;
  return _ref7 = {}, _defineProperty(_ref7, "\n    &" + componentCls + "-simple " + componentCls + "-prev,\n    &" + componentCls + "-simple " + componentCls + "-next\n    ", _defineProperty({
    height: token.paginationItemSizeSM,
    lineHeight: token.paginationItemSizeSM + "px",
    verticalAlign: 'top'
  }, componentCls + "-item-link", {
    height: token.paginationItemSizeSM,
    backgroundColor: 'transparent',
    border: 0,
    '&::after': {
      height: token.paginationItemSizeSM,
      lineHeight: token.paginationItemSizeSM + "px"
    }
  })), _defineProperty(_ref7, "&" + componentCls + "-simple " + componentCls + "-simple-pager", {
    display: 'inline-block',
    height: token.paginationItemSizeSM,
    marginInlineEnd: token.marginXS,
    input: {
      boxSizing: 'border-box',
      height: '100%',
      marginInlineEnd: token.marginXS,
      padding: "0 " + token.paginationItemPaddingInline + "px",
      textAlign: 'center',
      backgroundColor: token.paginationItemInputBg,
      border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
      borderRadius: token.borderRadius,
      outline: 'none',
      transition: "border-color " + token.motionDurationMid,
      color: 'inherit',
      '&:hover': {
        borderColor: token.colorPrimary
      },
      '&:focus': {
        borderColor: token.colorPrimaryHover,
        boxShadow: token.inputOutlineOffset + "px 0 " + token.controlOutlineWidth + "px " + token.controlOutline
      },
      '&[disabled]': {
        color: token.colorTextDisabled,
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        cursor: 'not-allowed'
      }
    }
  }), _ref7;
};
var genPaginationJumpStyle = function genPaginationJumpStyle(token) {
  var _ref8, _hover2, _extends2, _ref9, _ref11, _ref12;
  var componentCls = token.componentCls;
  return _ref12 = {}, _defineProperty(_ref12, componentCls + "-jump-prev, " + componentCls + "-jump-next", (_ref9 = {
    outline: 0
  }, _defineProperty(_ref9, componentCls + "-item-container", (_ref8 = {
    position: 'relative'
  }, _defineProperty(_ref8, componentCls + "-item-link-icon", {
    color: token.colorPrimary,
    fontSize: token.fontSizeSM,
    opacity: 0,
    transition: "all " + token.motionDurationMid,
    '&-svg': {
      top: 0,
      insetInlineEnd: 0,
      bottom: 0,
      insetInlineStart: 0,
      margin: 'auto'
    }
  }), _defineProperty(_ref8, componentCls + "-item-ellipsis", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0,
    display: 'block',
    margin: 'auto',
    color: token.colorTextDisabled,
    fontFamily: 'Arial, Helvetica, sans-serif',
    letterSpacing: token.paginationEllipsisLetterSpacing,
    textAlign: 'center',
    textIndent: token.paginationEllipsisTextIndent,
    opacity: 1,
    transition: "all " + token.motionDurationMid
  }), _ref8)), _defineProperty(_ref9, '&:hover', (_hover2 = {}, _defineProperty(_hover2, componentCls + "-item-link-icon", {
    opacity: 1
  }), _defineProperty(_hover2, componentCls + "-item-ellipsis", {
    opacity: 0
  }), _hover2)), _defineProperty(_ref9, '&:focus-visible', _extends((_extends2 = {}, _defineProperty(_extends2, componentCls + "-item-link-icon", {
    opacity: 1
  }), _defineProperty(_extends2, componentCls + "-item-ellipsis", {
    opacity: 0
  }), _extends2), genFocusOutline(token))), _ref9)), _defineProperty(_ref12, "\n    " + componentCls + "-prev,\n    " + componentCls + "-jump-prev,\n    " + componentCls + "-jump-next\n    ", {
    marginInlineEnd: token.marginXS
  }), _defineProperty(_ref12, "\n    " + componentCls + "-prev,\n    " + componentCls + "-next,\n    " + componentCls + "-jump-prev,\n    " + componentCls + "-jump-next\n    ", {
    display: 'inline-block',
    minWidth: token.paginationItemSize,
    height: token.paginationItemSize,
    color: token.colorText,
    fontFamily: token.paginationFontFamily,
    lineHeight: token.paginationItemSize + "px",
    textAlign: 'center',
    verticalAlign: 'middle',
    listStyle: 'none',
    borderRadius: token.borderRadius,
    cursor: 'pointer',
    transition: "all " + token.motionDurationMid
  }), _defineProperty(_ref12, componentCls + "-prev, " + componentCls + "-next", (_ref11 = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    outline: 0,
    button: {
      color: token.colorText,
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, _defineProperty(_ref11, componentCls + "-item-link", {
    display: 'block',
    width: '100%',
    height: '100%',
    padding: 0,
    fontSize: token.fontSizeSM,
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: token.lineWidth + "px " + token.lineType + " transparent",
    borderRadius: token.borderRadius,
    outline: 'none',
    transition: "border " + token.motionDurationMid
  }), _defineProperty(_ref11, "&:focus-visible " + componentCls + "-item-link", _extends({}, genFocusOutline(token))), _defineProperty(_ref11, "&:hover " + componentCls + "-item-link", {
    backgroundColor: token.colorBgTextHover
  }), _defineProperty(_ref11, "&:active " + componentCls + "-item-link", {
    backgroundColor: token.colorBgTextActive
  }), _defineProperty(_ref11, "&" + componentCls + "-disabled:hover", _defineProperty({}, componentCls + "-item-link", {
    backgroundColor: 'transparent'
  })), _ref11)), _defineProperty(_ref12, componentCls + "-slash", {
    marginInlineEnd: token.paginationSlashMarginInlineEnd,
    marginInlineStart: token.paginationSlashMarginInlineStart
  }), _defineProperty(_ref12, componentCls + "-options", {
    display: 'inline-block',
    marginInlineStart: token.margin,
    verticalAlign: 'middle',
    '&-size-changer.-select': {
      display: 'inline-block',
      width: 'auto'
    },
    '&-quick-jumper': {
      display: 'inline-block',
      height: token.controlHeight,
      marginInlineStart: token.marginXS,
      lineHeight: token.controlHeight + "px",
      verticalAlign: 'top',
      input: _extends(_extends({}, genBasicInputStyle(token)), {
        width: token.controlHeightLG * 1.25,
        height: token.controlHeight,
        boxSizing: 'border-box',
        margin: 0,
        marginInlineStart: token.marginXS,
        marginInlineEnd: token.marginXS
      })
    }
  }), _ref12;
};
var genPaginationItemStyle = function genPaginationItemStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-item", _extends(_extends(_defineProperty({
    display: 'inline-block',
    minWidth: token.paginationItemSize,
    height: token.paginationItemSize,
    marginInlineEnd: token.marginXS,
    fontFamily: token.paginationFontFamily,
    lineHeight: token.paginationItemSize - 2 + "px",
    textAlign: 'center',
    verticalAlign: 'middle',
    listStyle: 'none',
    backgroundColor: 'transparent',
    border: token.lineWidth + "px " + token.lineType + " transparent",
    borderRadius: token.borderRadius,
    outline: 0,
    cursor: 'pointer',
    userSelect: 'none',
    a: {
      display: 'block',
      padding: "0 " + token.paginationItemPaddingInline + "px",
      color: token.colorText,
      transition: 'none',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  }, "&:not(" + componentCls + "-item-active)", {
    '&:hover': {
      transition: "all " + token.motionDurationMid,
      backgroundColor: token.colorBgTextHover
    },
    '&:active': {
      backgroundColor: token.colorBgTextActive
    }
  }), genFocusStyle(token)), {
    '&-active': {
      fontWeight: token.paginationFontWeightActive,
      backgroundColor: token.paginationItemBgActive,
      borderColor: token.colorPrimary,
      a: {
        color: token.colorPrimary
      },
      '&:hover': {
        borderColor: token.colorPrimaryHover
      },
      '&:hover a': {
        color: token.colorPrimaryHover
      }
    }
  }));
};
var genPaginationStyle = function genPaginationStyle(token) {
  var _extends5, _ref16;
  var componentCls = token.componentCls;
  return _ref16 = {}, _defineProperty(_ref16, componentCls, _extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), _defineProperty({
    'ul, ol': {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    '&::after': {
      display: 'block',
      clear: 'both',
      height: 0,
      overflow: 'hidden',
      visibility: 'hidden',
      content: '""'
    }
  }, componentCls + "-total-text", {
    display: 'inline-block',
    height: token.paginationItemSize,
    marginInlineEnd: token.marginXS,
    lineHeight: token.paginationItemSize - 2 + "px",
    verticalAlign: 'middle'
  })), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), (_extends5 = {}, _defineProperty(_extends5, "@media only screen and (max-width: " + token.screenLG + "px)", _defineProperty({}, componentCls + "-item", {
    '&-after-jump-prev, &-before-jump-next': {
      display: 'none'
    }
  })), _defineProperty(_extends5, "@media only screen and (max-width: " + token.screenSM + "px)", _defineProperty({}, componentCls + "-options", {
    display: 'none'
  })), _extends5))), _defineProperty(_ref16, "&" + token.componentCls + "-rtl", {
    direction: 'rtl'
  }), _ref16;
};
var genBorderedStyle = function genBorderedStyle(token) {
  var _ref17, _ref19, _ref21, _ref22, _componentCls, _ref23;
  var componentCls = token.componentCls;
  return _ref23 = {}, _defineProperty(_ref23, "" + componentCls + componentCls + "-disabled", (_ref19 = {
    '&, &:hover': _defineProperty({}, componentCls + "-item-link", {
      borderColor: token.colorBorder
    }),
    '&:focus-visible': _defineProperty({}, componentCls + "-item-link", {
      borderColor: token.colorBorder
    })
  }, _defineProperty(_ref19, componentCls + "-item, " + componentCls + "-item-link", (_ref17 = {
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder
  }, _defineProperty(_ref17, "&:hover:not(" + componentCls + "-item-active)", {
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder,
    a: {
      color: token.colorTextDisabled
    }
  }), _defineProperty(_ref17, "&" + componentCls + "-item-active", {
    backgroundColor: token.paginationItemDisabledBgActive
  }), _ref17)), _defineProperty(_ref19, componentCls + "-prev, " + componentCls + "-next", _defineProperty({
    '&:hover button': {
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      color: token.colorTextDisabled
    }
  }, componentCls + "-item-link", {
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder
  })), _ref19)), _defineProperty(_ref23, componentCls, (_componentCls = {}, _defineProperty(_componentCls, componentCls + "-prev, " + componentCls + "-next", (_ref21 = {
    '&:hover button': {
      borderColor: token.colorPrimaryHover,
      backgroundColor: token.paginationItemBg
    }
  }, _defineProperty(_ref21, componentCls + "-item-link", {
    backgroundColor: token.paginationItemLinkBg,
    borderColor: token.colorBorder
  }), _defineProperty(_ref21, "&:hover " + componentCls + "-item-link", {
    borderColor: token.colorPrimary,
    backgroundColor: token.paginationItemBg,
    color: token.colorPrimary
  }), _defineProperty(_ref21, "&" + componentCls + "-disabled", _defineProperty({}, componentCls + "-item-link", {
    borderColor: token.colorBorder,
    color: token.colorTextDisabled
  })), _ref21)), _defineProperty(_componentCls, componentCls + "-item", (_ref22 = {
    backgroundColor: token.paginationItemBg,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder
  }, _defineProperty(_ref22, "&:hover:not(" + componentCls + "-item-active)", {
    borderColor: token.colorPrimary,
    backgroundColor: token.paginationItemBg,
    a: {
      color: token.colorPrimary
    }
  }), _defineProperty(_ref22, '&-active', {
    borderColor: token.colorPrimary
  }), _ref22)), _componentCls)), _ref23;
};
// ============================== Export ==============================
export default genComponentStyleHook('Pagination', function (token) {
  var paginationToken = mergeToken(token, {
    paginationItemSize: token.controlHeight,
    paginationFontFamily: token.fontFamily,
    paginationItemBg: token.colorBgContainer,
    paginationItemBgActive: token.colorBgContainer,
    paginationFontWeightActive: token.fontWeightStrong,
    paginationItemSizeSM: token.controlHeightSM,
    paginationItemInputBg: token.colorBgContainer,
    paginationMiniOptionsSizeChangerTop: 0,
    paginationItemDisabledBgActive: token.controlItemBgActiveDisabled,
    paginationItemDisabledColorActive: token.colorTextDisabled,
    paginationItemLinkBg: token.colorBgContainer,
    inputOutlineOffset: '0 0',
    paginationMiniOptionsMarginInlineStart: token.marginXXS / 2,
    paginationMiniQuickJumperInputWidth: token.controlHeightLG * 1.1,
    paginationItemPaddingInline: token.marginXXS * 1.5,
    paginationEllipsisLetterSpacing: token.marginXXS / 2,
    paginationSlashMarginInlineStart: token.marginXXS,
    paginationSlashMarginInlineEnd: token.marginSM,
    paginationEllipsisTextIndent: '0.13em' // magic for ui experience
  }, initInputToken(token));
  return [genPaginationStyle(paginationToken), token.wireframe && genBorderedStyle(paginationToken)];
});
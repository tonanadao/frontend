"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _style = require("../../input/style");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
var genPaginationDisabledStyle = function genPaginationDisabledStyle(token) {
  var _ref2, _ref3;
  var componentCls = token.componentCls;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-disabled", {
    '&, &:hover': (0, _defineProperty2["default"])({
      cursor: 'not-allowed'
    }, componentCls + "-item-link", {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }),
    '&:focus-visible': (0, _defineProperty2["default"])({
      cursor: 'not-allowed'
    }, componentCls + "-item-link", {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    })
  }), (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-disabled", (_ref2 = {
    cursor: 'not-allowed'
  }, (0, _defineProperty2["default"])(_ref2, componentCls + "-item", {
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
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-link", (0, _defineProperty2["default"])({
    color: token.colorTextDisabled,
    cursor: 'not-allowed',
    '&:hover, &:active': {
      backgroundColor: 'transparent'
    }
  }, componentCls + "-simple&", {
    backgroundColor: 'transparent'
  })), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-link-icon", {
    opacity: 0
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-ellipsis", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-simple-pager", {
    color: token.colorTextDisabled
  }), _ref2)), _ref3;
};
var genPaginationMiniStyle = function genPaginationMiniStyle(token) {
  var _ref4, _ref5;
  var componentCls = token.componentCls;
  return _ref5 = {}, (0, _defineProperty2["default"])(_ref5, "&&-mini " + componentCls + "-total-text, &&-mini " + componentCls + "-simple-pager", {
    height: token.paginationItemSizeSM,
    lineHeight: token.paginationItemSizeSM + "px"
  }), (0, _defineProperty2["default"])(_ref5, "&&-mini " + componentCls + "-item", {
    minWidth: token.paginationItemSizeSM,
    height: token.paginationItemSizeSM,
    margin: 0,
    lineHeight: token.paginationItemSizeSM - 2 + "px"
  }), (0, _defineProperty2["default"])(_ref5, "&&-mini " + componentCls + "-item:not(" + componentCls + "-item-active)", {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }), (0, _defineProperty2["default"])(_ref5, "&&-mini " + componentCls + "-prev, &&-mini " + componentCls + "-next", {
    minWidth: token.paginationItemSizeSM,
    height: token.paginationItemSizeSM,
    margin: 0,
    lineHeight: token.paginationItemSizeSM + "px"
  }), (0, _defineProperty2["default"])(_ref5, "\n    &&-mini " + componentCls + "-prev " + componentCls + "-item-link,\n    &&-mini " + componentCls + "-next " + componentCls + "-item-link\n    ", {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    '&::after': {
      height: token.paginationItemSizeSM,
      lineHeight: token.paginationItemSizeSM + "px"
    }
  }), (0, _defineProperty2["default"])(_ref5, "&&-mini " + componentCls + "-jump-prev, &&-mini " + componentCls + "-jump-next", {
    height: token.paginationItemSizeSM,
    marginInlineEnd: 0,
    lineHeight: token.paginationItemSizeSM + "px"
  }), (0, _defineProperty2["default"])(_ref5, "&&-mini " + componentCls + "-options", (_ref4 = {
    marginInlineStart: token.paginationMiniOptionsMarginInlineStart
  }, (0, _defineProperty2["default"])(_ref4, "&-size-changer", {
    top: token.paginationMiniOptionsSizeChangerTop
  }), (0, _defineProperty2["default"])(_ref4, "&-quick-jumper", {
    height: token.paginationItemSizeSM,
    lineHeight: token.paginationItemSizeSM + "px",
    input: (0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.genInputSmallStyle)(token)), {
      width: token.paginationMiniQuickJumperInputWidth,
      height: token.controlHeightSM
    })
  }), _ref4)), _ref5;
};
var genPaginationSimpleStyle = function genPaginationSimpleStyle(token) {
  var _ref7;
  var componentCls = token.componentCls;
  return _ref7 = {}, (0, _defineProperty2["default"])(_ref7, "\n    &" + componentCls + "-simple " + componentCls + "-prev,\n    &" + componentCls + "-simple " + componentCls + "-next\n    ", (0, _defineProperty2["default"])({
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
  })), (0, _defineProperty2["default"])(_ref7, "&" + componentCls + "-simple " + componentCls + "-simple-pager", {
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
  return _ref12 = {}, (0, _defineProperty2["default"])(_ref12, componentCls + "-jump-prev, " + componentCls + "-jump-next", (_ref9 = {
    outline: 0
  }, (0, _defineProperty2["default"])(_ref9, componentCls + "-item-container", (_ref8 = {
    position: 'relative'
  }, (0, _defineProperty2["default"])(_ref8, componentCls + "-item-link-icon", {
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
  }), (0, _defineProperty2["default"])(_ref8, componentCls + "-item-ellipsis", {
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
  }), _ref8)), (0, _defineProperty2["default"])(_ref9, '&:hover', (_hover2 = {}, (0, _defineProperty2["default"])(_hover2, componentCls + "-item-link-icon", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_hover2, componentCls + "-item-ellipsis", {
    opacity: 0
  }), _hover2)), (0, _defineProperty2["default"])(_ref9, '&:focus-visible', (0, _extends6["default"])((_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls + "-item-link-icon", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item-ellipsis", {
    opacity: 0
  }), _extends2), (0, _style2.genFocusOutline)(token))), _ref9)), (0, _defineProperty2["default"])(_ref12, "\n    " + componentCls + "-prev,\n    " + componentCls + "-jump-prev,\n    " + componentCls + "-jump-next\n    ", {
    marginInlineEnd: token.marginXS
  }), (0, _defineProperty2["default"])(_ref12, "\n    " + componentCls + "-prev,\n    " + componentCls + "-next,\n    " + componentCls + "-jump-prev,\n    " + componentCls + "-jump-next\n    ", {
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
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-prev, " + componentCls + "-next", (_ref11 = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    outline: 0,
    button: {
      color: token.colorText,
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, (0, _defineProperty2["default"])(_ref11, componentCls + "-item-link", {
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
  }), (0, _defineProperty2["default"])(_ref11, "&:focus-visible " + componentCls + "-item-link", (0, _extends6["default"])({}, (0, _style2.genFocusOutline)(token))), (0, _defineProperty2["default"])(_ref11, "&:hover " + componentCls + "-item-link", {
    backgroundColor: token.colorBgTextHover
  }), (0, _defineProperty2["default"])(_ref11, "&:active " + componentCls + "-item-link", {
    backgroundColor: token.colorBgTextActive
  }), (0, _defineProperty2["default"])(_ref11, "&" + componentCls + "-disabled:hover", (0, _defineProperty2["default"])({}, componentCls + "-item-link", {
    backgroundColor: 'transparent'
  })), _ref11)), (0, _defineProperty2["default"])(_ref12, componentCls + "-slash", {
    marginInlineEnd: token.paginationSlashMarginInlineEnd,
    marginInlineStart: token.paginationSlashMarginInlineStart
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-options", {
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
      input: (0, _extends6["default"])((0, _extends6["default"])({}, (0, _style.genBasicInputStyle)(token)), {
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
  return (0, _defineProperty2["default"])({}, componentCls + "-item", (0, _extends6["default"])((0, _extends6["default"])((0, _defineProperty2["default"])({
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
  }), (0, _style2.genFocusStyle)(token)), {
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
  return _ref16 = {}, (0, _defineProperty2["default"])(_ref16, componentCls, (0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])({}, (0, _style2.resetComponent)(token)), (0, _defineProperty2["default"])({
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
  })), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), (_extends5 = {}, (0, _defineProperty2["default"])(_extends5, "@media only screen and (max-width: " + token.screenLG + "px)", (0, _defineProperty2["default"])({}, componentCls + "-item", {
    '&-after-jump-prev, &-before-jump-next': {
      display: 'none'
    }
  })), (0, _defineProperty2["default"])(_extends5, "@media only screen and (max-width: " + token.screenSM + "px)", (0, _defineProperty2["default"])({}, componentCls + "-options", {
    display: 'none'
  })), _extends5))), (0, _defineProperty2["default"])(_ref16, "&" + token.componentCls + "-rtl", {
    direction: 'rtl'
  }), _ref16;
};
var genBorderedStyle = function genBorderedStyle(token) {
  var _ref17, _ref19, _ref21, _ref22, _componentCls, _ref23;
  var componentCls = token.componentCls;
  return _ref23 = {}, (0, _defineProperty2["default"])(_ref23, "" + componentCls + componentCls + "-disabled", (_ref19 = {
    '&, &:hover': (0, _defineProperty2["default"])({}, componentCls + "-item-link", {
      borderColor: token.colorBorder
    }),
    '&:focus-visible': (0, _defineProperty2["default"])({}, componentCls + "-item-link", {
      borderColor: token.colorBorder
    })
  }, (0, _defineProperty2["default"])(_ref19, componentCls + "-item, " + componentCls + "-item-link", (_ref17 = {
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder
  }, (0, _defineProperty2["default"])(_ref17, "&:hover:not(" + componentCls + "-item-active)", {
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder,
    a: {
      color: token.colorTextDisabled
    }
  }), (0, _defineProperty2["default"])(_ref17, "&" + componentCls + "-item-active", {
    backgroundColor: token.paginationItemDisabledBgActive
  }), _ref17)), (0, _defineProperty2["default"])(_ref19, componentCls + "-prev, " + componentCls + "-next", (0, _defineProperty2["default"])({
    '&:hover button': {
      backgroundColor: token.colorBgContainerDisabled,
      borderColor: token.colorBorder,
      color: token.colorTextDisabled
    }
  }, componentCls + "-item-link", {
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder
  })), _ref19)), (0, _defineProperty2["default"])(_ref23, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, componentCls + "-prev, " + componentCls + "-next", (_ref21 = {
    '&:hover button': {
      borderColor: token.colorPrimaryHover,
      backgroundColor: token.paginationItemBg
    }
  }, (0, _defineProperty2["default"])(_ref21, componentCls + "-item-link", {
    backgroundColor: token.paginationItemLinkBg,
    borderColor: token.colorBorder
  }), (0, _defineProperty2["default"])(_ref21, "&:hover " + componentCls + "-item-link", {
    borderColor: token.colorPrimary,
    backgroundColor: token.paginationItemBg,
    color: token.colorPrimary
  }), (0, _defineProperty2["default"])(_ref21, "&" + componentCls + "-disabled", (0, _defineProperty2["default"])({}, componentCls + "-item-link", {
    borderColor: token.colorBorder,
    color: token.colorTextDisabled
  })), _ref21)), (0, _defineProperty2["default"])(_componentCls, componentCls + "-item", (_ref22 = {
    backgroundColor: token.paginationItemBg,
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder
  }, (0, _defineProperty2["default"])(_ref22, "&:hover:not(" + componentCls + "-item-active)", {
    borderColor: token.colorPrimary,
    backgroundColor: token.paginationItemBg,
    a: {
      color: token.colorPrimary
    }
  }), (0, _defineProperty2["default"])(_ref22, '&-active', {
    borderColor: token.colorPrimary
  }), _ref22)), _componentCls)), _ref23;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Pagination', function (token) {
  var paginationToken = (0, _internal.mergeToken)(token, {
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
  }, (0, _style.initInputToken)(token));
  return [genPaginationStyle(paginationToken), token.wireframe && genBorderedStyle(paginationToken)];
});
exports["default"] = _default;
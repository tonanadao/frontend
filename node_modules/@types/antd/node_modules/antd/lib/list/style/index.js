"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genBorderedStyle = function genBorderedStyle(token) {
  var _ref, _ref4;
  var listBorderedCls = token.listBorderedCls,
    componentCls = token.componentCls,
    paddingLG = token.paddingLG,
    margin = token.margin,
    padding = token.padding,
    listItemPaddingSM = token.listItemPaddingSM,
    marginLG = token.marginLG,
    borderRadiusLG = token.borderRadiusLG;
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, "" + listBorderedCls, (_ref = {
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: borderRadiusLG
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-header," + componentCls + "-footer," + componentCls + "-item", {
    paddingInline: paddingLG
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-pagination", {
    margin: margin + "px " + marginLG + "px"
  }), _ref)), (0, _defineProperty2["default"])(_ref4, "" + listBorderedCls + componentCls + "-sm", (0, _defineProperty2["default"])({}, componentCls + "-item," + componentCls + "-header," + componentCls + "-footer", {
    padding: listItemPaddingSM
  })), (0, _defineProperty2["default"])(_ref4, "" + listBorderedCls + componentCls + "-lg", (0, _defineProperty2["default"])({}, componentCls + "-item," + componentCls + "-header," + componentCls + "-footer", {
    padding: padding + "px " + paddingLG + "px"
  })), _ref4;
};
var genResponsiveStyle = function genResponsiveStyle(token) {
  var _ref9, _ref12, _ref14, _ref15;
  var componentCls = token.componentCls,
    screenSM = token.screenSM,
    screenMD = token.screenMD,
    marginLG = token.marginLG,
    marginSM = token.marginSM,
    margin = token.margin;
  return _ref15 = {}, (0, _defineProperty2["default"])(_ref15, "@media screen and (max-width:" + screenMD + ")", (_ref9 = {}, (0, _defineProperty2["default"])(_ref9, "" + componentCls, (0, _defineProperty2["default"])({}, componentCls + "-item", (0, _defineProperty2["default"])({}, componentCls + "-item-action", {
    marginInlineStart: marginLG
  }))), (0, _defineProperty2["default"])(_ref9, componentCls + "-vertical", (0, _defineProperty2["default"])({}, componentCls + "-item", (0, _defineProperty2["default"])({}, componentCls + "-item-extra", {
    marginInlineStart: marginLG
  }))), _ref9)), (0, _defineProperty2["default"])(_ref15, "@media screen and (max-width: " + screenSM + ")", (_ref14 = {}, (0, _defineProperty2["default"])(_ref14, "" + componentCls, (0, _defineProperty2["default"])({}, componentCls + "-item", (0, _defineProperty2["default"])({
    flexWrap: 'wrap'
  }, componentCls + "-action", {
    marginInlineStart: marginSM
  }))), (0, _defineProperty2["default"])(_ref14, componentCls + "-vertical", (0, _defineProperty2["default"])({}, componentCls + "-item", (_ref12 = {
    flexWrap: 'wrap-reverse'
  }, (0, _defineProperty2["default"])(_ref12, componentCls + "-item-main", {
    minWidth: token.contentWidth
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-item-extra", {
    margin: "auto auto " + margin + "px"
  }), _ref12))), _ref14)), _ref15;
};
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _ref17, _ref18, _ref19, _extends2, _ref21, _ref25;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    controlHeight = token.controlHeight,
    minHeight = token.minHeight,
    paddingSM = token.paddingSM,
    marginLG = token.marginLG,
    padding = token.padding,
    listItemPadding = token.listItemPadding,
    colorPrimary = token.colorPrimary,
    listItemPaddingSM = token.listItemPaddingSM,
    listItemPaddingLG = token.listItemPaddingLG,
    paddingXS = token.paddingXS,
    margin = token.margin,
    colorText = token.colorText,
    colorTextDescription = token.colorTextDescription,
    motionDurationSlow = token.motionDurationSlow,
    lineWidth = token.lineWidth;
  return _ref25 = {}, (0, _defineProperty2["default"])(_ref25, "" + componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'relative',
    '*': {
      outline: 'none'
    }
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-header, " + componentCls + "-footer", {
    background: 'transparent',
    paddingBlock: paddingSM
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-pagination", (0, _defineProperty2["default"])({
    marginBlockStart: marginLG,
    textAlign: 'end'
  }, antCls + "-pagination-options", {
    textAlign: 'start'
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-spin", {
    minHeight: minHeight,
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-items", {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item", (_ref19 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: listItemPadding,
    color: colorText
  }, (0, _defineProperty2["default"])(_ref19, componentCls + "-item-meta", (_ref17 = {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    maxWidth: '100%'
  }, (0, _defineProperty2["default"])(_ref17, componentCls + "-item-meta-avatar", {
    marginInlineEnd: padding
  }), (0, _defineProperty2["default"])(_ref17, componentCls + "-item-meta-content", {
    flex: '1 0',
    width: 0,
    color: colorText
  }), (0, _defineProperty2["default"])(_ref17, componentCls + "-item-meta-title", {
    marginBottom: token.marginXXS,
    color: colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    '> a': (0, _defineProperty2["default"])({
      color: colorText,
      transition: "all " + motionDurationSlow
    }, "&:hover", {
      color: colorPrimary
    })
  }), (0, _defineProperty2["default"])(_ref17, componentCls + "-item-meta-description", {
    color: colorTextDescription,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }), _ref17)), (0, _defineProperty2["default"])(_ref19, componentCls + "-item-action", (_ref18 = {
    flex: '0 0 auto',
    marginInlineStart: token.marginXXL,
    padding: 0,
    fontSize: 0,
    listStyle: 'none'
  }, (0, _defineProperty2["default"])(_ref18, "& > li", (0, _defineProperty2["default"])({
    position: 'relative',
    display: 'inline-block',
    padding: "0 " + paddingXS + "px",
    color: colorTextDescription,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    textAlign: 'center'
  }, "&:first-child", {
    paddingInlineStart: 0
  })), (0, _defineProperty2["default"])(_ref18, componentCls + "-item-action-split", {
    position: 'absolute',
    insetBlockStart: '50%',
    insetInlineEnd: 0,
    width: lineWidth,
    height: Math.ceil(token.fontSize * token.lineHeight) - token.marginXXS * 2,
    transform: 'translateY(-50%)',
    backgroundColor: token.colorSplit
  }), _ref18)), _ref19)), (0, _defineProperty2["default"])(_extends2, componentCls + "-empty", {
    padding: padding + "px 0",
    color: colorTextDescription,
    fontSize: token.fontSizeSM,
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-empty-text", {
    padding: padding,
    color: token.colorTextDisabled,
    fontSize: token.fontSize,
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item-no-flex", {
    display: 'block'
  }), _extends2))), (0, _defineProperty2["default"])(_ref25, componentCls + "-grid " + antCls + "-col > " + componentCls + "-item", {
    display: 'block',
    maxWidth: '100%',
    marginBlockEnd: margin,
    paddingBlock: 0,
    borderBlockEnd: 'none'
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-vertical " + componentCls + "-item", (_ref21 = {
    alignItems: 'initial'
  }, (0, _defineProperty2["default"])(_ref21, componentCls + "-item-main", {
    display: 'block',
    flex: 1
  }), (0, _defineProperty2["default"])(_ref21, componentCls + "-item-extra", {
    marginInlineStart: marginLG
  }), (0, _defineProperty2["default"])(_ref21, componentCls + "-item-meta", (0, _defineProperty2["default"])({
    marginBlockEnd: padding
  }, componentCls + "-item-meta-title", {
    marginBlockEnd: paddingSM,
    color: colorText,
    fontSize: token.fontSizeLG,
    lineHeight: token.lineHeightLG
  })), (0, _defineProperty2["default"])(_ref21, componentCls + "-item-action", {
    marginBlockStart: padding,
    marginInlineStart: 'auto',
    '> li': (0, _defineProperty2["default"])({
      padding: "0 " + padding + "px"
    }, "&:first-child", {
      paddingInlineStart: 0
    })
  }), _ref21)), (0, _defineProperty2["default"])(_ref25, componentCls + "-split " + componentCls + "-item", (0, _defineProperty2["default"])({
    borderBlockEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }, "&:last-child", {
    borderBlockEnd: 'none'
  })), (0, _defineProperty2["default"])(_ref25, componentCls + "-split " + componentCls + "-header", {
    borderBlockEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-split" + componentCls + "-empty " + componentCls + "-footer", {
    borderTop: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-loading " + componentCls + "-spin-nested-loading", {
    minHeight: controlHeight
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-split" + componentCls + "-something-after-last-item " + antCls + "-spin-container > " + componentCls + "-items > " + componentCls + "-item:last-child", {
    borderBlockEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-lg " + componentCls + "-item", {
    padding: listItemPaddingLG
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-sm " + componentCls + "-item", {
    padding: listItemPaddingSM
  }), (0, _defineProperty2["default"])(_ref25, componentCls + ":not(" + componentCls + "-vertical)", (0, _defineProperty2["default"])({}, componentCls + "-item-no-flex", (0, _defineProperty2["default"])({}, componentCls + "-item-action", {
    "float": 'right'
  }))), _ref25;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('List', function (token) {
  var listToken = (0, _internal.mergeToken)(token, {
    listBorderedCls: token.componentCls + "-bordered",
    minHeight: token.controlHeightLG,
    listItemPadding: token.paddingContentVertical + "px " + token.paddingContentHorizontalLG + "px",
    listItemPaddingSM: token.paddingContentVerticalSM + "px " + token.paddingContentHorizontal + "px",
    listItemPaddingLG: token.paddingContentVerticalLG + "px " + token.paddingContentHorizontalLG + "px"
  });
  return [genBaseStyle(listToken), genBorderedStyle(listToken), genResponsiveStyle(listToken)];
}, {
  contentWidth: 220
});
exports["default"] = _default;
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
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
  return _ref4 = {}, _defineProperty(_ref4, "" + listBorderedCls, (_ref = {
    border: token.lineWidth + "px " + token.lineType + " " + token.colorBorder,
    borderRadius: borderRadiusLG
  }, _defineProperty(_ref, componentCls + "-header," + componentCls + "-footer," + componentCls + "-item", {
    paddingInline: paddingLG
  }), _defineProperty(_ref, componentCls + "-pagination", {
    margin: margin + "px " + marginLG + "px"
  }), _ref)), _defineProperty(_ref4, "" + listBorderedCls + componentCls + "-sm", _defineProperty({}, componentCls + "-item," + componentCls + "-header," + componentCls + "-footer", {
    padding: listItemPaddingSM
  })), _defineProperty(_ref4, "" + listBorderedCls + componentCls + "-lg", _defineProperty({}, componentCls + "-item," + componentCls + "-header," + componentCls + "-footer", {
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
  return _ref15 = {}, _defineProperty(_ref15, "@media screen and (max-width:" + screenMD + ")", (_ref9 = {}, _defineProperty(_ref9, "" + componentCls, _defineProperty({}, componentCls + "-item", _defineProperty({}, componentCls + "-item-action", {
    marginInlineStart: marginLG
  }))), _defineProperty(_ref9, componentCls + "-vertical", _defineProperty({}, componentCls + "-item", _defineProperty({}, componentCls + "-item-extra", {
    marginInlineStart: marginLG
  }))), _ref9)), _defineProperty(_ref15, "@media screen and (max-width: " + screenSM + ")", (_ref14 = {}, _defineProperty(_ref14, "" + componentCls, _defineProperty({}, componentCls + "-item", _defineProperty({
    flexWrap: 'wrap'
  }, componentCls + "-action", {
    marginInlineStart: marginSM
  }))), _defineProperty(_ref14, componentCls + "-vertical", _defineProperty({}, componentCls + "-item", (_ref12 = {
    flexWrap: 'wrap-reverse'
  }, _defineProperty(_ref12, componentCls + "-item-main", {
    minWidth: token.contentWidth
  }), _defineProperty(_ref12, componentCls + "-item-extra", {
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
  return _ref25 = {}, _defineProperty(_ref25, "" + componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'relative',
    '*': {
      outline: 'none'
    }
  }, _defineProperty(_extends2, componentCls + "-header, " + componentCls + "-footer", {
    background: 'transparent',
    paddingBlock: paddingSM
  }), _defineProperty(_extends2, componentCls + "-pagination", _defineProperty({
    marginBlockStart: marginLG,
    textAlign: 'end'
  }, antCls + "-pagination-options", {
    textAlign: 'start'
  })), _defineProperty(_extends2, componentCls + "-spin", {
    minHeight: minHeight,
    textAlign: 'center'
  }), _defineProperty(_extends2, componentCls + "-items", {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }), _defineProperty(_extends2, componentCls + "-item", (_ref19 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: listItemPadding,
    color: colorText
  }, _defineProperty(_ref19, componentCls + "-item-meta", (_ref17 = {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    maxWidth: '100%'
  }, _defineProperty(_ref17, componentCls + "-item-meta-avatar", {
    marginInlineEnd: padding
  }), _defineProperty(_ref17, componentCls + "-item-meta-content", {
    flex: '1 0',
    width: 0,
    color: colorText
  }), _defineProperty(_ref17, componentCls + "-item-meta-title", {
    marginBottom: token.marginXXS,
    color: colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    '> a': _defineProperty({
      color: colorText,
      transition: "all " + motionDurationSlow
    }, "&:hover", {
      color: colorPrimary
    })
  }), _defineProperty(_ref17, componentCls + "-item-meta-description", {
    color: colorTextDescription,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }), _ref17)), _defineProperty(_ref19, componentCls + "-item-action", (_ref18 = {
    flex: '0 0 auto',
    marginInlineStart: token.marginXXL,
    padding: 0,
    fontSize: 0,
    listStyle: 'none'
  }, _defineProperty(_ref18, "& > li", _defineProperty({
    position: 'relative',
    display: 'inline-block',
    padding: "0 " + paddingXS + "px",
    color: colorTextDescription,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    textAlign: 'center'
  }, "&:first-child", {
    paddingInlineStart: 0
  })), _defineProperty(_ref18, componentCls + "-item-action-split", {
    position: 'absolute',
    insetBlockStart: '50%',
    insetInlineEnd: 0,
    width: lineWidth,
    height: Math.ceil(token.fontSize * token.lineHeight) - token.marginXXS * 2,
    transform: 'translateY(-50%)',
    backgroundColor: token.colorSplit
  }), _ref18)), _ref19)), _defineProperty(_extends2, componentCls + "-empty", {
    padding: padding + "px 0",
    color: colorTextDescription,
    fontSize: token.fontSizeSM,
    textAlign: 'center'
  }), _defineProperty(_extends2, componentCls + "-empty-text", {
    padding: padding,
    color: token.colorTextDisabled,
    fontSize: token.fontSize,
    textAlign: 'center'
  }), _defineProperty(_extends2, componentCls + "-item-no-flex", {
    display: 'block'
  }), _extends2))), _defineProperty(_ref25, componentCls + "-grid " + antCls + "-col > " + componentCls + "-item", {
    display: 'block',
    maxWidth: '100%',
    marginBlockEnd: margin,
    paddingBlock: 0,
    borderBlockEnd: 'none'
  }), _defineProperty(_ref25, componentCls + "-vertical " + componentCls + "-item", (_ref21 = {
    alignItems: 'initial'
  }, _defineProperty(_ref21, componentCls + "-item-main", {
    display: 'block',
    flex: 1
  }), _defineProperty(_ref21, componentCls + "-item-extra", {
    marginInlineStart: marginLG
  }), _defineProperty(_ref21, componentCls + "-item-meta", _defineProperty({
    marginBlockEnd: padding
  }, componentCls + "-item-meta-title", {
    marginBlockEnd: paddingSM,
    color: colorText,
    fontSize: token.fontSizeLG,
    lineHeight: token.lineHeightLG
  })), _defineProperty(_ref21, componentCls + "-item-action", {
    marginBlockStart: padding,
    marginInlineStart: 'auto',
    '> li': _defineProperty({
      padding: "0 " + padding + "px"
    }, "&:first-child", {
      paddingInlineStart: 0
    })
  }), _ref21)), _defineProperty(_ref25, componentCls + "-split " + componentCls + "-item", _defineProperty({
    borderBlockEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }, "&:last-child", {
    borderBlockEnd: 'none'
  })), _defineProperty(_ref25, componentCls + "-split " + componentCls + "-header", {
    borderBlockEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }), _defineProperty(_ref25, componentCls + "-split" + componentCls + "-empty " + componentCls + "-footer", {
    borderTop: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }), _defineProperty(_ref25, componentCls + "-loading " + componentCls + "-spin-nested-loading", {
    minHeight: controlHeight
  }), _defineProperty(_ref25, componentCls + "-split" + componentCls + "-something-after-last-item " + antCls + "-spin-container > " + componentCls + "-items > " + componentCls + "-item:last-child", {
    borderBlockEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit
  }), _defineProperty(_ref25, componentCls + "-lg " + componentCls + "-item", {
    padding: listItemPaddingLG
  }), _defineProperty(_ref25, componentCls + "-sm " + componentCls + "-item", {
    padding: listItemPaddingSM
  }), _defineProperty(_ref25, componentCls + ":not(" + componentCls + "-vertical)", _defineProperty({}, componentCls + "-item-no-flex", _defineProperty({}, componentCls + "-item-action", {
    "float": 'right'
  }))), _ref25;
};
// ============================== Export ==============================
export default genComponentStyleHook('List', function (token) {
  var listToken = mergeToken(token, {
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
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genCollapseMotion } from '../../style/motion';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, resetIcon } from '../../style';
export var genBaseStyle = function genBaseStyle(token) {
  var _ref, _ref5, _ref6, _extends2;
  var componentCls = token.componentCls,
    collapseContentBg = token.collapseContentBg,
    padding = token.padding,
    collapseContentPaddingHorizontal = token.collapseContentPaddingHorizontal,
    collapseHeaderBg = token.collapseHeaderBg,
    collapseHeaderPadding = token.collapseHeaderPadding,
    collapsePanelBorderRadius = token.collapsePanelBorderRadius,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    colorBorder = token.colorBorder,
    colorText = token.colorText,
    colorTextHeading = token.colorTextHeading,
    colorTextDisabled = token.colorTextDisabled,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    marginSM = token.marginSM,
    paddingSM = token.paddingSM,
    motionDurationSlow = token.motionDurationSlow,
    fontSizeIcon = token.fontSizeIcon;
  var borderBase = lineWidth + "px " + lineType + " " + colorBorder;
  return _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    backgroundColor: collapseHeaderBg,
    border: borderBase,
    borderBottom: 0,
    borderRadius: collapsePanelBorderRadius + "px"
  }, _defineProperty(_extends2, "&-rtl", {
    direction: 'rtl'
  }), _defineProperty(_extends2, "& > " + componentCls + "-item", (_ref5 = {
    borderBottom: borderBase
  }, _defineProperty(_ref5, "&:last-child", _defineProperty({}, "\n            &,\n            & > " + componentCls + "-header", {
    borderRadius: "0 0 " + collapsePanelBorderRadius + "px " + collapsePanelBorderRadius + "px"
  })), _defineProperty(_ref5, "> " + componentCls + "-header", (_ref = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: collapseHeaderPadding,
    color: colorTextHeading,
    lineHeight: lineHeight,
    cursor: 'pointer',
    transition: "all " + motionDurationSlow + ", visibility 0s"
  }, _defineProperty(_ref, "> " + componentCls + "-header-text", {
    flex: 'auto'
  }), _defineProperty(_ref, '&:focus', {
    outline: 'none'
  }), _defineProperty(_ref, componentCls + "-expand-icon", {
    height: fontSize * lineHeight,
    display: 'flex',
    alignItems: 'center',
    paddingInlineEnd: marginSM
  }), _defineProperty(_ref, componentCls + "-arrow", _extends(_extends({}, resetIcon()), {
    fontSize: fontSizeIcon,
    svg: {
      transition: "transform " + motionDurationSlow
    }
  })), _defineProperty(_ref, componentCls + "-header-text", {
    marginInlineEnd: 'auto'
  }), _ref)), _defineProperty(_ref5, componentCls + "-header-collapsible-only", _defineProperty({
    cursor: 'default'
  }, componentCls + "-header-text", {
    flex: 'none',
    cursor: 'pointer'
  })), _defineProperty(_ref5, componentCls + "-icon-collapsible-only", _defineProperty({
    cursor: 'default'
  }, componentCls + "-expand-icon", {
    cursor: 'pointer'
  })), _defineProperty(_ref5, "&" + componentCls + "-no-arrow", _defineProperty({}, "> " + componentCls + "-header", {
    paddingInlineStart: paddingSM
  })), _ref5)), _defineProperty(_extends2, componentCls + "-content", (_ref6 = {
    color: colorText,
    backgroundColor: collapseContentBg,
    borderTop: borderBase
  }, _defineProperty(_ref6, "& > " + componentCls + "-content-box", {
    padding: padding + "px " + collapseContentPaddingHorizontal + "px"
  }), _defineProperty(_ref6, "&-hidden", {
    display: 'none'
  }), _ref6)), _defineProperty(_extends2, componentCls + "-item:last-child", _defineProperty({}, "> " + componentCls + "-content", {
    borderRadius: "0 0 " + collapsePanelBorderRadius + "px " + collapsePanelBorderRadius + "px"
  })), _defineProperty(_extends2, "& " + componentCls + "-item-disabled > " + componentCls + "-header", _defineProperty({}, "\n          &,\n          & > .arrow\n        ", {
    color: colorTextDisabled,
    cursor: 'not-allowed'
  })), _defineProperty(_extends2, "&" + componentCls + "-icon-position-end", _defineProperty({}, "& > " + componentCls + "-item", _defineProperty({}, "> " + componentCls + "-header", _defineProperty({}, componentCls + "-expand-icon", {
    order: 1,
    paddingInlineEnd: 0,
    paddingInlineStart: marginSM
  })))), _extends2)));
};
var genArrowStyle = function genArrowStyle(token) {
  var componentCls = token.componentCls;
  var fixedSelector = "> " + componentCls + "-item > " + componentCls + "-header " + componentCls + "-arrow svg";
  return _defineProperty({}, componentCls + "-rtl", _defineProperty({}, fixedSelector, {
    transform: "rotate(180deg)"
  }));
};
var genBorderlessStyle = function genBorderlessStyle(token) {
  var _ref15;
  var componentCls = token.componentCls,
    collapseHeaderBg = token.collapseHeaderBg,
    paddingXXS = token.paddingXXS,
    colorBorder = token.colorBorder;
  return _defineProperty({}, componentCls + "-borderless", (_ref15 = {
    backgroundColor: collapseHeaderBg,
    border: 0
  }, _defineProperty(_ref15, "> " + componentCls + "-item", {
    borderBottom: "1px solid " + colorBorder
  }), _defineProperty(_ref15, "\n        > " + componentCls + "-item:last-child,\n        > " + componentCls + "-item:last-child " + componentCls + "-header\n      ", {
    borderRadius: 0
  }), _defineProperty(_ref15, "> " + componentCls + "-item:last-child", {
    borderBottom: 0
  }), _defineProperty(_ref15, "> " + componentCls + "-item > " + componentCls + "-content", {
    backgroundColor: 'transparent',
    borderTop: 0
  }), _defineProperty(_ref15, "> " + componentCls + "-item > " + componentCls + "-content > " + componentCls + "-content-box", {
    paddingTop: paddingXXS
  }), _ref15));
};
var genGhostStyle = function genGhostStyle(token) {
  var componentCls = token.componentCls,
    paddingSM = token.paddingSM;
  return _defineProperty({}, componentCls + "-ghost", _defineProperty({
    backgroundColor: 'transparent',
    border: 0
  }, "> " + componentCls + "-item", _defineProperty({
    borderBottom: 0
  }, "> " + componentCls + "-content", _defineProperty({
    backgroundColor: 'transparent',
    border: 0
  }, "> " + componentCls + "-content-box", {
    paddingBlock: paddingSM
  }))));
};
export default genComponentStyleHook('Collapse', function (token) {
  var collapseToken = mergeToken(token, {
    collapseContentBg: token.colorBgContainer,
    collapseHeaderBg: token.colorFillAlter,
    collapseHeaderPadding: token.paddingSM + "px " + token.padding + "px",
    collapsePanelBorderRadius: token.borderRadiusLG,
    collapseContentPaddingHorizontal: 16 // Fixed value
  });

  return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), genCollapseMotion(collapseToken)];
});
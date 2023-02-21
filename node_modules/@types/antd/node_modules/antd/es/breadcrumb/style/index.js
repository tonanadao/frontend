import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusStyle, resetComponent } from '../../style';
var genBreadcrumbStyle = function genBreadcrumbStyle(token) {
  var _ref2, _extends2;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  return _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    color: token.breadcrumbBaseColor,
    fontSize: token.breadcrumbFontSize
  }, _defineProperty(_extends2, iconCls, {
    fontSize: token.breadcrumbIconFontSize
  }), _defineProperty(_extends2, "ol", {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }), _defineProperty(_extends2, "a", _extends({
    color: token.breadcrumbLinkColor,
    transition: "color " + token.motionDurationMid,
    padding: "0 " + token.paddingXXS + "px",
    borderRadius: token.borderRadiusSM,
    height: token.lineHeight * token.fontSize,
    display: 'inline-block',
    marginInline: -token.marginXXS,
    '&:hover': {
      color: token.breadcrumbLinkColorHover,
      backgroundColor: token.colorBgTextHover
    }
  }, genFocusStyle(token))), _defineProperty(_extends2, "li:last-child > " + componentCls + "-separator", {
    display: 'none'
  }), _defineProperty(_extends2, componentCls + "-separator", {
    marginInline: token.breadcrumbSeparatorMargin,
    color: token.breadcrumbSeparatorColor
  }), _defineProperty(_extends2, componentCls + "-link", _defineProperty({}, "\n          > " + iconCls + " + span,\n          > " + iconCls + " + a\n        ", {
    marginInlineStart: token.marginXXS
  })), _defineProperty(_extends2, componentCls + "-overlay-link", (_ref2 = {
    borderRadius: token.borderRadiusSM,
    height: token.lineHeight * token.fontSize,
    display: 'inline-block',
    padding: "0 " + token.paddingXXS + "px",
    marginInline: -token.marginXXS
  }, _defineProperty(_ref2, "> " + iconCls, {
    marginInlineStart: token.marginXXS,
    fontSize: token.fontSizeIcon
  }), _defineProperty(_ref2, '&:hover', {
    color: token.breadcrumbLinkColorHover,
    backgroundColor: token.colorBgTextHover,
    a: {
      color: token.breadcrumbLinkColorHover
    }
  }), _defineProperty(_ref2, "a", {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }), _ref2)), _defineProperty(_extends2, "&" + token.componentCls + "-rtl", {
    direction: 'rtl'
  }), _extends2)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Breadcrumb', function (token) {
  var BreadcrumbToken = mergeToken(token, {
    breadcrumbBaseColor: token.colorTextDescription,
    breadcrumbFontSize: token.fontSize,
    breadcrumbIconFontSize: token.fontSize,
    breadcrumbLinkColor: token.colorTextDescription,
    breadcrumbLinkColorHover: token.colorText,
    breadcrumbLastItemColor: token.colorText,
    breadcrumbSeparatorMargin: token.marginXS,
    breadcrumbSeparatorColor: token.colorTextDescription
  });
  return [genBreadcrumbStyle(BreadcrumbToken)];
});
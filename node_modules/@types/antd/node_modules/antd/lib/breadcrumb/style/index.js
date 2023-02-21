"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genBreadcrumbStyle = function genBreadcrumbStyle(token) {
  var _ref2, _extends2;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    color: token.breadcrumbBaseColor,
    fontSize: token.breadcrumbFontSize
  }, (0, _defineProperty2["default"])(_extends2, iconCls, {
    fontSize: token.breadcrumbIconFontSize
  }), (0, _defineProperty2["default"])(_extends2, "ol", {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }), (0, _defineProperty2["default"])(_extends2, "a", (0, _extends3["default"])({
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
  }, (0, _style.genFocusStyle)(token))), (0, _defineProperty2["default"])(_extends2, "li:last-child > " + componentCls + "-separator", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-separator", {
    marginInline: token.breadcrumbSeparatorMargin,
    color: token.breadcrumbSeparatorColor
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-link", (0, _defineProperty2["default"])({}, "\n          > " + iconCls + " + span,\n          > " + iconCls + " + a\n        ", {
    marginInlineStart: token.marginXXS
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-overlay-link", (_ref2 = {
    borderRadius: token.borderRadiusSM,
    height: token.lineHeight * token.fontSize,
    display: 'inline-block',
    padding: "0 " + token.paddingXXS + "px",
    marginInline: -token.marginXXS
  }, (0, _defineProperty2["default"])(_ref2, "> " + iconCls, {
    marginInlineStart: token.marginXXS,
    fontSize: token.fontSizeIcon
  }), (0, _defineProperty2["default"])(_ref2, '&:hover', {
    color: token.breadcrumbLinkColorHover,
    backgroundColor: token.colorBgTextHover,
    a: {
      color: token.breadcrumbLinkColorHover
    }
  }), (0, _defineProperty2["default"])(_ref2, "a", {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }), _ref2)), (0, _defineProperty2["default"])(_extends2, "&" + token.componentCls + "-rtl", {
    direction: 'rtl'
  }), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Breadcrumb', function (token) {
  var BreadcrumbToken = (0, _internal.mergeToken)(token, {
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
exports["default"] = _default;
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
var genStatisticStyle = function genStatisticStyle(token) {
  var _ref, _extends2;
  var componentCls = token.componentCls,
    marginXXS = token.marginXXS,
    padding = token.padding,
    colorTextDescription = token.colorTextDescription,
    statisticTitleFontSize = token.statisticTitleFontSize,
    colorTextHeading = token.colorTextHeading,
    statisticContentFontSize = token.statisticContentFontSize,
    statisticFontFamily = token.statisticFontFamily;
  return (0, _defineProperty2["default"])({}, "" + componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls + "-title", {
    marginBottom: marginXXS,
    color: colorTextDescription,
    fontSize: statisticTitleFontSize
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-skeleton", {
    paddingTop: padding
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-content", (_ref = {
    color: colorTextHeading,
    fontSize: statisticContentFontSize,
    fontFamily: statisticFontFamily
  }, (0, _defineProperty2["default"])(_ref, componentCls + "-content-value", {
    display: 'inline-block',
    direction: 'ltr'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-content-prefix, " + componentCls + "-content-suffix", {
    display: 'inline-block'
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-content-prefix", {
    marginInlineEnd: marginXXS
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-content-suffix", {
    marginInlineStart: marginXXS
  }), _ref)), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Statistic', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3,
    fontSize = token.fontSize,
    fontFamily = token.fontFamily;
  var statisticToken = (0, _internal.mergeToken)(token, {
    statisticTitleFontSize: fontSize,
    statisticContentFontSize: fontSizeHeading3,
    statisticFontFamily: fontFamily
  });
  return [genStatisticStyle(statisticToken)];
});
exports["default"] = _default;
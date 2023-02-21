import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
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
  return _defineProperty({}, "" + componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {}, _defineProperty(_extends2, componentCls + "-title", {
    marginBottom: marginXXS,
    color: colorTextDescription,
    fontSize: statisticTitleFontSize
  }), _defineProperty(_extends2, componentCls + "-skeleton", {
    paddingTop: padding
  }), _defineProperty(_extends2, componentCls + "-content", (_ref = {
    color: colorTextHeading,
    fontSize: statisticContentFontSize,
    fontFamily: statisticFontFamily
  }, _defineProperty(_ref, componentCls + "-content-value", {
    display: 'inline-block',
    direction: 'ltr'
  }), _defineProperty(_ref, componentCls + "-content-prefix, " + componentCls + "-content-suffix", {
    display: 'inline-block'
  }), _defineProperty(_ref, componentCls + "-content-prefix", {
    marginInlineEnd: marginXXS
  }), _defineProperty(_ref, componentCls + "-content-suffix", {
    marginInlineStart: marginXXS
  }), _ref)), _extends2)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Statistic', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3,
    fontSize = token.fontSize,
    fontFamily = token.fontFamily;
  var statisticToken = mergeToken(token, {
    statisticTitleFontSize: fontSize,
    statisticContentFontSize: fontSizeHeading3,
    statisticFontFamily: fontFamily
  });
  return [genStatisticStyle(statisticToken)];
});
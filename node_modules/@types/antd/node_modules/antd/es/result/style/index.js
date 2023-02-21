import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
// ============================== Styles ==============================
var genBaseStyle = function genBaseStyle(token) {
  var _ref2;
  var componentCls = token.componentCls,
    lineHeightHeading3 = token.lineHeightHeading3,
    iconCls = token.iconCls,
    padding = token.padding,
    paddingXL = token.paddingXL,
    paddingXS = token.paddingXS,
    paddingLG = token.paddingLG,
    marginXS = token.marginXS,
    lineHeight = token.lineHeight;
  return _ref2 = {}, _defineProperty(_ref2, componentCls, {
    padding: paddingLG * 2 + "px " + paddingXL + "px",
    // RTL
    '&-rtl': {
      direction: 'rtl'
    }
  }), _defineProperty(_ref2, componentCls + " " + componentCls + "-image", {
    width: token.imageWidth,
    height: token.imageHeight,
    margin: 'auto'
  }), _defineProperty(_ref2, componentCls + " " + componentCls + "-icon", _defineProperty({
    marginBottom: paddingLG,
    textAlign: 'center'
  }, "& > " + iconCls, {
    fontSize: token.resultIconFontSize
  })), _defineProperty(_ref2, componentCls + " " + componentCls + "-title", {
    color: token.colorTextHeading,
    fontSize: token.resultTitleFontSize,
    lineHeight: lineHeightHeading3,
    marginBlock: marginXS,
    textAlign: 'center'
  }), _defineProperty(_ref2, componentCls + " " + componentCls + "-subtitle", {
    color: token.colorTextDescription,
    fontSize: token.resultSubtitleFontSize,
    lineHeight: lineHeight,
    textAlign: 'center'
  }), _defineProperty(_ref2, componentCls + " " + componentCls + "-content", {
    marginTop: paddingLG,
    padding: paddingLG + "px " + padding * 2.5 + "px",
    backgroundColor: token.colorFillAlter
  }), _defineProperty(_ref2, componentCls + " " + componentCls + "-extra", {
    margin: token.resultExtraMargin,
    textAlign: 'center',
    '& > *': {
      marginInlineEnd: paddingXS,
      '&:last-child': {
        marginInlineEnd: 0
      }
    }
  }), _ref2;
};
var genStatusIconStyle = function genStatusIconStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  return _ref3 = {}, _defineProperty(_ref3, componentCls + "-success " + componentCls + "-icon > " + iconCls, {
    color: token.resultSuccessIconColor
  }), _defineProperty(_ref3, componentCls + "-error " + componentCls + "-icon > " + iconCls, {
    color: token.resultErrorIconColor
  }), _defineProperty(_ref3, componentCls + "-info " + componentCls + "-icon > " + iconCls, {
    color: token.resultInfoIconColor
  }), _defineProperty(_ref3, componentCls + "-warning " + componentCls + "-icon > " + iconCls, {
    color: token.resultWarningIconColor
  }), _ref3;
};
var genResultStyle = function genResultStyle(token) {
  return [genBaseStyle(token), genStatusIconStyle(token)];
};
// ============================== Export ==============================
var getStyle = function getStyle(token) {
  return genResultStyle(token);
};
export default genComponentStyleHook('Result', function (token) {
  var paddingLG = token.paddingLG,
    fontSizeHeading3 = token.fontSizeHeading3;
  var resultSubtitleFontSize = token.fontSize;
  var resultExtraMargin = paddingLG + "px 0 0 0";
  var resultInfoIconColor = token.colorInfo;
  var resultErrorIconColor = token.colorError;
  var resultSuccessIconColor = token.colorSuccess;
  var resultWarningIconColor = token.colorWarning;
  var resultToken = mergeToken(token, {
    resultTitleFontSize: fontSizeHeading3,
    resultSubtitleFontSize: resultSubtitleFontSize,
    resultIconFontSize: fontSizeHeading3 * 3,
    resultExtraMargin: resultExtraMargin,
    resultInfoIconColor: resultInfoIconColor,
    resultErrorIconColor: resultErrorIconColor,
    resultSuccessIconColor: resultSuccessIconColor,
    resultWarningIconColor: resultWarningIconColor
  });
  return [getStyle(resultToken)];
}, {
  imageWidth: 250,
  imageHeight: 295
});
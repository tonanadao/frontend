import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
// ============================== Shared ==============================
var genSharedBackTopStyle = function genSharedBackTopStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    backTopFontSize = token.backTopFontSize,
    backTopSize = token.backTopSize,
    zIndexPopup = token.zIndexPopup;
  return _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'fixed',
    insetInlineEnd: token.backTopInlineEnd,
    insetBlockEnd: token.backTopBlockEnd,
    zIndex: zIndexPopup,
    width: 40,
    height: 40,
    cursor: 'pointer',
    '&:empty': {
      display: 'none'
    }
  }, _defineProperty(_extends2, componentCls + "-content", {
    width: backTopSize,
    height: backTopSize,
    overflow: 'hidden',
    color: token.backTopColor,
    textAlign: 'center',
    backgroundColor: token.backTopBackground,
    borderRadius: backTopSize,
    transition: "all " + token.motionDurationMid,
    '&:hover': {
      backgroundColor: token.backTopHoverBackground,
      transition: "all " + token.motionDurationMid
    }
  }), _defineProperty(_extends2, componentCls + "-icon", {
    fontSize: backTopFontSize,
    lineHeight: backTopSize + "px"
  }), _extends2)));
};
var genMediaBackTopStyle = function genMediaBackTopStyle(token) {
  var _ref4;
  var componentCls = token.componentCls;
  return _ref4 = {}, _defineProperty(_ref4, "@media (max-width: " + token.screenMD + "px)", _defineProperty({}, componentCls, {
    insetInlineEnd: token.backTopInlineEndMD
  })), _defineProperty(_ref4, "@media (max-width: " + token.screenXS + "px)", _defineProperty({}, componentCls, {
    insetInlineEnd: token.backTopInlineEndXS
  })), _ref4;
};
// ============================== Export ==============================
export default genComponentStyleHook('BackTop', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3,
    colorTextDescription = token.colorTextDescription,
    colorTextLightSolid = token.colorTextLightSolid,
    colorText = token.colorText,
    controlHeightLG = token.controlHeightLG;
  var backTopToken = mergeToken(token, {
    backTopBackground: colorTextDescription,
    backTopColor: colorTextLightSolid,
    backTopHoverBackground: colorText,
    backTopFontSize: fontSizeHeading3,
    backTopSize: controlHeightLG,
    backTopBlockEnd: controlHeightLG * 1.25,
    backTopInlineEnd: controlHeightLG * 2.5,
    backTopInlineEndMD: controlHeightLG * 1.5,
    backTopInlineEndXS: controlHeightLG * 0.5
  });
  return [genSharedBackTopStyle(backTopToken), genMediaBackTopStyle(backTopToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexBase + 10
  };
});
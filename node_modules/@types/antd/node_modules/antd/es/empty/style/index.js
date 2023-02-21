import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
// ============================== Shared ==============================
var genSharedEmptyStyle = function genSharedEmptyStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    margin = token.margin,
    marginXS = token.marginXS,
    marginXL = token.marginXL,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  return _defineProperty({}, componentCls, (_componentCls = {
    marginInline: marginXS,
    fontSize: fontSize,
    lineHeight: lineHeight,
    textAlign: 'center'
  }, _defineProperty(_componentCls, componentCls + "-image", {
    height: token.emptyImgHeight,
    marginBottom: marginXS,
    opacity: token.opacityImage,
    img: {
      height: '100%'
    },
    svg: {
      height: '100%',
      margin: 'auto'
    }
  }), _defineProperty(_componentCls, componentCls + "-footer", {
    marginTop: margin
  }), _defineProperty(_componentCls, '&-normal', _defineProperty({
    marginBlock: marginXL,
    color: token.colorTextDisabled
  }, componentCls + "-image", {
    height: token.emptyImgHeightMD
  })), _defineProperty(_componentCls, '&-small', _defineProperty({
    marginBlock: marginXS,
    color: token.colorTextDisabled
  }, componentCls + "-image", {
    height: token.emptyImgHeightSM
  })), _componentCls));
};
// ============================== Export ==============================
export default genComponentStyleHook('Empty', function (token) {
  var componentCls = token.componentCls,
    controlHeightLG = token.controlHeightLG;
  var emptyToken = mergeToken(token, {
    emptyImgCls: componentCls + "-img",
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
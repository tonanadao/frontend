import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import genDraggerStyle from './dragger';
import genListStyle from './list';
import genMotionStyle from './motion';
import { genPictureCardStyle, genPictureStyle } from './picture';
import genRtlStyle from './rtl';
import { resetComponent } from '../../style';
import { genCollapseMotion } from '../../style/motion';
var genBaseStyle = function genBaseStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    colorTextDisabled = token.colorTextDisabled;
  return _defineProperty({}, componentCls + "-wrapper", _extends(_extends({}, resetComponent(token)), (_extends2 = {}, _defineProperty(_extends2, componentCls, {
    outline: 0,
    "input[type='file']": {
      cursor: 'pointer'
    }
  }), _defineProperty(_extends2, componentCls + "-select", {
    display: 'inline-block'
  }), _defineProperty(_extends2, componentCls + "-disabled", {
    color: colorTextDisabled,
    cursor: 'not-allowed'
  }), _extends2)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Upload', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    lineWidth = token.lineWidth,
    controlHeightLG = token.controlHeightLG;
  var listItemHeightSM = Math.round(fontSize * lineHeight);
  var uploadToken = mergeToken(token, {
    uploadThumbnailSize: fontSizeHeading3 * 2,
    uploadProgressOffset: listItemHeightSM / 2 + lineWidth,
    uploadPicCardSize: controlHeightLG * 2.55
  });
  return [genBaseStyle(uploadToken), genDraggerStyle(uploadToken), genPictureStyle(uploadToken), genPictureCardStyle(uploadToken), genListStyle(uploadToken), genMotionStyle(uploadToken), genRtlStyle(uploadToken), genCollapseMotion(uploadToken)];
});
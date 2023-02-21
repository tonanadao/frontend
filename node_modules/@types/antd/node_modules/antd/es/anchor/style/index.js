import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
// ============================== Shared ==============================
var genSharedAnchorStyle = function genSharedAnchorStyle(token) {
  var _ref2, _extends2, _ref3;
  var componentCls = token.componentCls,
    holderOffsetBlock = token.holderOffsetBlock,
    motionDurationSlow = token.motionDurationSlow,
    lineWidthBold = token.lineWidthBold,
    colorPrimary = token.colorPrimary;
  return _defineProperty({}, componentCls + "-wrapper", (_ref3 = {
    marginBlockStart: -holderOffsetBlock,
    paddingBlockStart: holderOffsetBlock,
    // delete overflow: auto
    // overflow: 'auto',
    backgroundColor: 'transparent'
  }, _defineProperty(_ref3, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'relative',
    paddingInlineStart: lineWidthBold
  }, _defineProperty(_extends2, componentCls + "-ink", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    height: '100%',
    '&::before': {
      position: 'relative',
      display: 'block',
      width: lineWidthBold,
      height: '100%',
      margin: '0 auto',
      backgroundColor: token.colorSplit,
      content: '" "'
    }
  }), _defineProperty(_extends2, componentCls + "-ink-ball", _defineProperty({
    position: 'absolute',
    left: {
      _skip_check_: true,
      value: 0
    },
    display: 'none',
    transform: 'translateY(-50%)',
    transition: "top " + motionDurationSlow + " ease-in-out",
    width: lineWidthBold,
    backgroundColor: colorPrimary
  }, "&" + componentCls + "-ink-ball-visible", {
    display: 'inline-block'
  })), _defineProperty(_extends2, componentCls + "-link", (_ref2 = {
    paddingBlock: token.anchorPaddingBlock,
    paddingInline: token.anchorPaddingInline + "px 0",
    '&-title': _extends(_extends({}, textEllipsis), {
      position: 'relative',
      display: 'block',
      marginBlockEnd: token.anchorTitleBlock,
      color: token.colorText,
      transition: "all " + token.motionDurationSlow,
      '&:only-child': {
        marginBlockEnd: 0
      }
    })
  }, _defineProperty(_ref2, "&-active > " + componentCls + "-link-title", {
    color: token.colorPrimary
  }), _defineProperty(_ref2, componentCls + "-link", {
    paddingBlock: token.anchorPaddingBlockSecondary
  }), _ref2)), _extends2))), _defineProperty(_ref3, componentCls + "-fixed " + componentCls + "-ink " + componentCls + "-ink-ball", {
    display: 'none'
  }), _ref3));
};
// ============================== Export ==============================
export default genComponentStyleHook('Anchor', function (token) {
  var fontSize = token.fontSize,
    fontSizeLG = token.fontSizeLG,
    padding = token.padding,
    paddingXXS = token.paddingXXS;
  var anchorToken = mergeToken(token, {
    holderOffsetBlock: paddingXXS,
    anchorPaddingBlock: paddingXXS,
    anchorPaddingBlockSecondary: paddingXXS / 2,
    anchorPaddingInline: padding,
    anchorTitleBlock: fontSize / 14 * 3,
    anchorBallSize: fontSizeLG / 2
  });
  return [genSharedAnchorStyle(anchorToken)];
});
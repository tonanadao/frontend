import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';
var genRateStarStyle = function genRateStarStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls + "-star", (_ref = {
    position: 'relative',
    display: 'inline-block',
    color: 'inherit',
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginInlineEnd: token.marginXS
    },
    '> div': {
      transition: "all " + token.motionDurationMid + ", outline 0s",
      '&:hover': {
        transform: token.rateStarHoverScale
      },
      '&:focus': {
        outline: 0
      },
      '&:focus-visible': {
        outline: token.lineWidth + "px dashed " + token.rateStarColor,
        transform: token.rateStarHoverScale
      }
    },
    '&-first, &-second': _defineProperty({
      color: token.defaultColor,
      transition: "all " + token.motionDurationMid,
      userSelect: 'none'
    }, token.iconCls, {
      verticalAlign: 'middle'
    }),
    '&-first': {
      position: 'absolute',
      top: 0,
      insetInlineStart: 0,
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      opacity: 0
    }
  }, _defineProperty(_ref, "&-half " + componentCls + "-star-first, &-half " + componentCls + "-star-second", {
    opacity: 1
  }), _defineProperty(_ref, "&-half " + componentCls + "-star-first, &-full " + componentCls + "-star-second", {
    color: 'inherit'
  }), _ref));
};
var genRateRtlStyle = function genRateRtlStyle(token) {
  return _defineProperty({}, "&-rtl" + token.componentCls, {
    direction: 'rtl'
  });
};
var genRateStyle = function genRateStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, _extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), _defineProperty({
    display: 'inline-block',
    margin: 0,
    padding: 0,
    color: token.rateStarColor,
    fontSize: token.rateStarSize,
    lineHeight: 'unset',
    listStyle: 'none',
    outline: 'none'
  }, "&-disabled" + componentCls + " " + componentCls + "-star", {
    cursor: 'default',
    '&:hover': {
      transform: 'scale(1)'
    }
  })), genRateStarStyle(token)), _defineProperty({}, "+ " + componentCls + "-text", {
    display: 'inline-block',
    marginInlineStart: token.marginXS,
    fontSize: token.fontSize
  })), genRateRtlStyle(token)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Rate', function (token) {
  var colorFillContent = token.colorFillContent;
  var rateToken = mergeToken(token, {
    rateStarColor: token['yellow-6'],
    rateStarSize: token.controlHeightLG * 0.5,
    rateStarHoverScale: 'scale(1.1)',
    defaultColor: colorFillContent
  });
  return [genRateStyle(rateToken)];
});
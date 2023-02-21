import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
var uploadAnimateInlineIn = new Keyframes('uploadAnimateInlineIn', {
  from: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
});
var uploadAnimateInlineOut = new Keyframes('uploadAnimateInlineOut', {
  to: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0
  }
});
// =========================== Motion ===========================
var genMotionStyle = function genMotionStyle(token) {
  var _ref;
  var componentCls = token.componentCls;
  var inlineCls = componentCls + "-animate-inline";
  return [_defineProperty({}, componentCls + "-wrapper", (_ref = {}, _defineProperty(_ref, inlineCls + "-appear, " + inlineCls + "-enter, " + inlineCls + "-leave", {
    animationDuration: token.motionDurationSlow,
    animationTimingFunction: token.motionEaseInOutCirc,
    animationFillMode: 'forwards'
  }), _defineProperty(_ref, inlineCls + "-appear, " + inlineCls + "-enter", {
    animationName: uploadAnimateInlineIn
  }), _defineProperty(_ref, inlineCls + "-leave", {
    animationName: uploadAnimateInlineOut
  }), _ref)), uploadAnimateInlineIn, uploadAnimateInlineOut];
};
export default genMotionStyle;
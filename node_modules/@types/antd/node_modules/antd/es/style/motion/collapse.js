import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genCollapseMotion = function genCollapseMotion(token) {
  var _token$componentCls;
  return _defineProperty({}, token.componentCls, (_token$componentCls = {}, _defineProperty(_token$componentCls, token.antCls + "-motion-collapse-legacy", {
    overflow: 'hidden',
    '&-active': {
      transition: "height " + token.motionDurationMid + " " + token.motionEaseInOut + ",\n        opacity " + token.motionDurationMid + " " + token.motionEaseInOut + " !important"
    }
  }), _defineProperty(_token$componentCls, token.antCls + "-motion-collapse", {
    overflow: 'hidden',
    transition: "height " + token.motionDurationMid + " " + token.motionEaseInOut + ",\n        opacity " + token.motionDurationMid + " " + token.motionEaseInOut + " !important"
  }), _token$componentCls));
};
export default genCollapseMotion;
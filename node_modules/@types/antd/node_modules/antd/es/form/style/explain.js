import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genFormValidateMotionStyle = function genFormValidateMotionStyle(token) {
  var _helpItemCls;
  var componentCls = token.componentCls;
  var helpCls = componentCls + "-show-help";
  var helpItemCls = componentCls + "-show-help-item";
  return _defineProperty({}, helpCls, _defineProperty({
    // Explain holder
    transition: "opacity " + token.motionDurationSlow + " " + token.motionEaseInOut,
    '&-appear, &-enter': {
      opacity: 0,
      '&-active': {
        opacity: 1
      }
    },
    '&-leave': {
      opacity: 1,
      '&-active': {
        opacity: 0
      }
    }
  }, helpItemCls, (_helpItemCls = {
    overflow: 'hidden',
    transition: "height " + token.motionDurationSlow + " " + token.motionEaseInOut + ",\n                     opacity " + token.motionDurationSlow + " " + token.motionEaseInOut + ",\n                     transform " + token.motionDurationSlow + " " + token.motionEaseInOut + " !important"
  }, _defineProperty(_helpItemCls, "&" + helpItemCls + "-appear, &" + helpItemCls + "-enter", _defineProperty({
    transform: "translateY(-5px)",
    opacity: 0
  }, "&-active", {
    transform: 'translateY(0)',
    opacity: 1
  })), _defineProperty(_helpItemCls, "&" + helpItemCls + "-leave-active", {
    transform: "translateY(-5px)"
  }), _helpItemCls)));
};
export default genFormValidateMotionStyle;
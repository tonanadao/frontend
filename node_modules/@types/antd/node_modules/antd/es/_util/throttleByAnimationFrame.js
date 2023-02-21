import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import raf from "rc-util/es/raf";
function throttleByAnimationFrame(fn) {
  var requestId;
  var later = function later(args) {
    return function () {
      requestId = null;
      fn.apply(void 0, _toConsumableArray(args));
    };
  };
  var throttled = function throttled() {
    if (requestId == null) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      requestId = raf(later(args));
    }
  };
  throttled.cancel = function () {
    raf.cancel(requestId);
    requestId = null;
  };
  return throttled;
}
export default throttleByAnimationFrame;
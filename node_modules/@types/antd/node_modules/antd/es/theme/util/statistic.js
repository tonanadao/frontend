import _extends from "@babel/runtime/helpers/esm/extends";
var enableStatistic = process.env.NODE_ENV !== 'production' || typeof CSSINJS_STATISTIC !== 'undefined';
var recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
export function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return _extends.apply(void 0, [{}].concat(objs));
  }
  recording = false;
  var ret = {};
  objs.forEach(function (obj) {
    var keys = Object.keys(obj);
    keys.forEach(function (key) {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: function get() {
          return obj[key];
        }
      });
    });
  });
  recording = true;
  return ret;
}
/** @private Internal Usage. Not use in your production. */
export var statistic = {};
/** @private Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
export var _statistic_build_ = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
export default function statisticToken(token) {
  var tokenKeys;
  var proxy = token;
  var flush = noop;
  if (enableStatistic) {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get: function get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = function flush(componentName, componentToken) {
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: componentToken
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush: flush
  };
}
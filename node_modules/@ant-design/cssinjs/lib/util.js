"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenToken = flattenToken;
exports.styleValidate = void 0;
exports.supportLayer = supportLayer;
exports.token2key = token2key;
exports.warning = warning;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _hash = _interopRequireDefault(require("@emotion/hash"));
var _warning = _interopRequireDefault(require("rc-util/lib/warning"));
var _dynamicCSS = require("rc-util/lib/Dom/dynamicCSS");
var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom"));
function flattenToken(token) {
  var str = '';
  Object.keys(token).forEach(function (key) {
    var value = token[key];
    str += key;
    if (value && (0, _typeof2.default)(value) === 'object') {
      str += flattenToken(value);
    } else {
      str += value;
    }
  });
  return str;
}
/**
 * Convert derivative token to key string
 */
function token2key(token, slat) {
  return (0, _hash.default)("".concat(slat, "_").concat(flattenToken(token)));
}
function warning(message, path) {
  (0, _warning.default)(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in '".concat(path, "': ") : '').concat(message));
}
var styleValidate = function styleValidate(key, value) {
  var info = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var path = info.path,
    hashId = info.hashId;
  switch (key) {
    case 'content':
      // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
      var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
      var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        warning("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`"), path);
      }
      return;
    case 'marginLeft':
    case 'marginRight':
    case 'paddingLeft':
    case 'paddingRight':
    case 'left':
    case 'right':
    case 'borderLeft':
    case 'borderLeftWidth':
    case 'borderLeftStyle':
    case 'borderLeftColor':
    case 'borderRight':
    case 'borderRightWidth':
    case 'borderRightStyle':
    case 'borderRightColor':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      warning("You seem to be using non-logical property '".concat(key, "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
      return;
    case 'margin':
    case 'padding':
    case 'borderWidth':
    case 'borderStyle':
      // case 'borderColor':
      if (typeof value === 'string') {
        var valueArr = value.split(' ').map(function (item) {
          return item.trim();
        });
        if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
          warning("You seem to be using '".concat(key, "' property with different left ").concat(key, " and right ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
        }
      }
      return;
    case 'clear':
    case 'textAlign':
      if (value === 'left' || value === 'right') {
        warning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
      }
      return;
    case 'borderRadius':
      if (typeof value === 'string') {
        var radiusGroups = value.split('/').map(function (item) {
          return item.trim();
        });
        var invalid = radiusGroups.reduce(function (result, group) {
          if (result) {
            return result;
          }
          var radiusArr = group.split(' ').map(function (item) {
            return item.trim();
          });
          // borderRadius: '2px 4px'
          if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
            return true;
          }
          // borderRadius: '4px 4px 2px'
          if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
            return true;
          }
          // borderRadius: '4px 4px 2px 4px'
          if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
            return true;
          }
          return result;
        }, false);
        if (invalid) {
          warning("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
        }
      }
      return;
    case 'animation':
      if (hashId && value !== 'none') {
        warning("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), path);
      }
    default:
      return;
  }
};
exports.styleValidate = styleValidate;
var layerKey = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');
var layerWidth = '903px';
function supportSelector(styleStr, handleElement) {
  if ((0, _canUseDom.default)()) {
    var _ele$parentNode;
    (0, _dynamicCSS.updateCSS)(styleStr, layerKey);
    var ele = document.createElement('div');
    ele.style.position = 'fixed';
    ele.style.left = '0';
    ele.style.top = '0';
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
    document.body.appendChild(ele);
    if (process.env.NODE_ENV !== 'production') {
      ele.innerHTML = 'Test';
      ele.style.zIndex = '9999999';
    }
    var support = getComputedStyle(ele).width === layerWidth;
    (_ele$parentNode = ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(ele);
    (0, _dynamicCSS.removeCSS)(layerKey);
    return support;
  }
  return false;
}
var canLayer = undefined;
function supportLayer() {
  if (canLayer === undefined) {
    canLayer = supportSelector("@layer ".concat(layerKey, " { .").concat(layerKey, " { width: ").concat(layerWidth, "!important; } }"), function (ele) {
      ele.className = layerKey;
    });
  }
  return canLayer;
}
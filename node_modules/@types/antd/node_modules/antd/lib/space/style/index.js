"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _compact = _interopRequireDefault(require("./compact"));
var genSpaceStyle = function genSpaceStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _defineProperty2["default"])({
    display: 'inline-flex',
    '&-rtl': {
      direction: 'rtl'
    },
    '&-vertical': {
      flexDirection: 'column'
    },
    '&-align': {
      flexDirection: 'column',
      '&-center': {
        alignItems: 'center'
      },
      '&-start': {
        alignItems: 'flex-start'
      },
      '&-end': {
        alignItems: 'flex-end'
      },
      '&-baseline': {
        alignItems: 'flex-baseline'
      }
    }
  }, componentCls + "-space-item", {
    '&:empty': {
      display: 'none'
    }
  }));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Space', function (token) {
  return [genSpaceStyle(token), (0, _compact["default"])(token)];
});
exports["default"] = _default;
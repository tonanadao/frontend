"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _cssinjs = require("@ant-design/cssinjs");
var _style = require("../../style");
var _internal = require("../../theme/internal");
var useStyle = function useStyle(iconPrefixCls) {
  var _useToken = (0, _internal.useToken)(),
    _useToken2 = (0, _slicedToArray2["default"])(_useToken, 2),
    theme = _useToken2[0],
    token = _useToken2[1];
  // Generate style for icons
  return (0, _cssinjs.useStyleRegister)({
    theme: theme,
    token: token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls]
  }, function () {
    return [(0, _defineProperty2["default"])({}, "." + iconPrefixCls, (0, _style.resetIcon)())];
  });
};
var _default = useStyle;
exports["default"] = _default;
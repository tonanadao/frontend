"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genComponentStyleHook;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _cssinjs = require("@ant-design/cssinjs");
var _react = require("react");
var _style = require("../../style");
var _context = require("../../config-provider/context");
var _internal = require("../internal");
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return function (prefixCls) {
    var _useToken = (0, _internal.useToken)(),
      _useToken2 = (0, _slicedToArray2["default"])(_useToken, 3),
      theme = _useToken2[0],
      token = _useToken2[1],
      hashId = _useToken2[2];
    var _useContext = (0, _react.useContext)(_context.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      iconPrefixCls = _useContext.iconPrefixCls;
    var rootPrefixCls = getPrefixCls();
    // Generate style for all a tags in antd component.
    (0, _cssinjs.useStyleRegister)({
      theme: theme,
      token: token,
      hashId: hashId,
      path: ['Shared', rootPrefixCls]
    }, function () {
      return [{
        // Link
        '&': (0, _style.genLinkStyle)(token)
      }];
    });
    return [(0, _cssinjs.useStyleRegister)({
      theme: theme,
      token: token,
      hashId: hashId,
      path: [component, prefixCls, iconPrefixCls]
    }, function () {
      var _statisticToken = (0, _internal.statisticToken)(token),
        proxyToken = _statisticToken.token,
        flush = _statisticToken.flush;
      var defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
      var mergedComponentToken = (0, _extends2["default"])((0, _extends2["default"])({}, defaultComponentToken), token[component]);
      var componentCls = "." + prefixCls;
      var mergedToken = (0, _internal.mergeToken)(proxyToken, {
        componentCls: componentCls,
        prefixCls: prefixCls,
        iconCls: "." + iconPrefixCls,
        antCls: "." + rootPrefixCls
      }, mergedComponentToken);
      var styleInterpolation = styleFn(mergedToken, {
        hashId: hashId,
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        overrideComponentToken: token[component]
      });
      flush(component, mergedComponentToken);
      return [(0, _style.genCommonStyle)(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}
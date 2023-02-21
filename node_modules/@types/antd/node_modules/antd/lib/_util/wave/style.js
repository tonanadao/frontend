"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var _react = require("react");
var _configProvider = require("../../config-provider");
var _internal = require("../../theme/internal");
var genWaveStyle = function genWaveStyle(token) {
  var _ref;
  var waveEffect = new _cssinjs.Keyframes('waveEffect', {
    '100%': {
      boxShadow: "0 0 0 6px var(--antd-wave-shadow-color)"
    }
  });
  var fadeEffect = new _cssinjs.Keyframes('fadeEffect', {
    '100%': {
      opacity: 0
    }
  });
  return [(_ref = {}, (0, _defineProperty2["default"])(_ref, token.clickAnimatingWithoutExtraNodeTrue + ",\n      " + token.clickAnimatingTrue, {
    '--antd-wave-shadow-color': token.colorPrimary,
    '--scroll-bar': 0,
    position: 'relative'
  }), (0, _defineProperty2["default"])(_ref, token.clickAnimatingWithoutExtraNodeTrueAfter + ",\n      & " + token.clickAnimatingNode, {
    position: 'absolute',
    top: 0,
    insetInlineStart: 0,
    insetInlineEnd: 0,
    bottom: 0,
    display: 'block',
    borderRadius: 'inherit',
    boxShadow: "0 0 0 0 var(--antd-wave-shadow-color)",
    opacity: 0.2,
    animation: {
      _skip_check_: true,
      value: fadeEffect.getName(token.hashId) + " 2s " + token.motionEaseOutCirc + ", " + waveEffect.getName(token.hashId) + " 0.4s " + token.motionEaseOutCirc
    },
    animationFillMode: 'forwards',
    content: '""',
    pointerEvents: 'none'
  }), _ref), {}, waveEffect, fadeEffect];
};
var _default = function _default() {
  var _useToken = (0, _internal.useToken)(),
    _useToken2 = (0, _slicedToArray2["default"])(_useToken, 3),
    theme = _useToken2[0],
    token = _useToken2[1],
    hashId = _useToken2[2];
  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var rootPrefixCls = getPrefixCls();
  var clickAnimatingTrue = "[" + rootPrefixCls + "-click-animating='true']";
  var clickAnimatingWithoutExtraNodeTrue = "[" + rootPrefixCls + "-click-animating-without-extra-node='true']";
  var clickAnimatingNode = "." + rootPrefixCls + "-click-animating-node";
  var waveToken = (0, _extends2["default"])((0, _extends2["default"])({}, token), {
    hashId: hashId,
    clickAnimatingNode: clickAnimatingNode,
    clickAnimatingTrue: clickAnimatingTrue,
    clickAnimatingWithoutExtraNodeTrue: clickAnimatingWithoutExtraNodeTrue,
    clickAnimatingWithoutExtraNodeTrueAfter: clickAnimatingWithoutExtraNodeTrue + "::after"
  });
  return [(0, _cssinjs.useStyleRegister)({
    theme: theme,
    token: token,
    hashId: hashId,
    path: ['wave']
  }, function () {
    return [genWaveStyle(waveToken)];
  }), hashId];
};
exports["default"] = _default;
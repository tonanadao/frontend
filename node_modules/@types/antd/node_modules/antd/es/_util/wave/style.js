import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes, useStyleRegister } from '@ant-design/cssinjs';
import { useContext } from 'react';
import { ConfigContext } from '../../config-provider';
import { useToken } from '../../theme/internal';
var genWaveStyle = function genWaveStyle(token) {
  var _ref;
  var waveEffect = new Keyframes('waveEffect', {
    '100%': {
      boxShadow: "0 0 0 6px var(--antd-wave-shadow-color)"
    }
  });
  var fadeEffect = new Keyframes('fadeEffect', {
    '100%': {
      opacity: 0
    }
  });
  return [(_ref = {}, _defineProperty(_ref, token.clickAnimatingWithoutExtraNodeTrue + ",\n      " + token.clickAnimatingTrue, {
    '--antd-wave-shadow-color': token.colorPrimary,
    '--scroll-bar': 0,
    position: 'relative'
  }), _defineProperty(_ref, token.clickAnimatingWithoutExtraNodeTrueAfter + ",\n      & " + token.clickAnimatingNode, {
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
export default (function () {
  var _useToken = useToken(),
    _useToken2 = _slicedToArray(_useToken, 3),
    theme = _useToken2[0],
    token = _useToken2[1],
    hashId = _useToken2[2];
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var rootPrefixCls = getPrefixCls();
  var clickAnimatingTrue = "[" + rootPrefixCls + "-click-animating='true']";
  var clickAnimatingWithoutExtraNodeTrue = "[" + rootPrefixCls + "-click-animating-without-extra-node='true']";
  var clickAnimatingNode = "." + rootPrefixCls + "-click-animating-node";
  var waveToken = _extends(_extends({}, token), {
    hashId: hashId,
    clickAnimatingNode: clickAnimatingNode,
    clickAnimatingTrue: clickAnimatingTrue,
    clickAnimatingWithoutExtraNodeTrue: clickAnimatingWithoutExtraNodeTrue,
    clickAnimatingWithoutExtraNodeTrueAfter: clickAnimatingWithoutExtraNodeTrue + "::after"
  });
  return [useStyleRegister({
    theme: theme,
    token: token,
    hashId: hashId,
    path: ['wave']
  }, function () {
    return [genWaveStyle(waveToken)];
  }), hashId];
});
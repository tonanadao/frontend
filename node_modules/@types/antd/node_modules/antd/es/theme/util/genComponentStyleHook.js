import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useStyleRegister } from '@ant-design/cssinjs';
import { useContext } from 'react';
import { genCommonStyle, genLinkStyle } from '../../style';
import { ConfigContext } from '../../config-provider/context';
import { mergeToken, statisticToken, useToken } from '../internal';
export default function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return function (prefixCls) {
    var _useToken = useToken(),
      _useToken2 = _slicedToArray(_useToken, 3),
      theme = _useToken2[0],
      token = _useToken2[1],
      hashId = _useToken2[2];
    var _useContext = useContext(ConfigContext),
      getPrefixCls = _useContext.getPrefixCls,
      iconPrefixCls = _useContext.iconPrefixCls;
    var rootPrefixCls = getPrefixCls();
    // Generate style for all a tags in antd component.
    useStyleRegister({
      theme: theme,
      token: token,
      hashId: hashId,
      path: ['Shared', rootPrefixCls]
    }, function () {
      return [{
        // Link
        '&': genLinkStyle(token)
      }];
    });
    return [useStyleRegister({
      theme: theme,
      token: token,
      hashId: hashId,
      path: [component, prefixCls, iconPrefixCls]
    }, function () {
      var _statisticToken = statisticToken(token),
        proxyToken = _statisticToken.token,
        flush = _statisticToken.flush;
      var defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
      var mergedComponentToken = _extends(_extends({}, defaultComponentToken), token[component]);
      var componentCls = "." + prefixCls;
      var mergedToken = mergeToken(proxyToken, {
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
      return [genCommonStyle(token, prefixCls), styleInterpolation];
    }), hashId];
  };
}
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import panelRender from './panelRender';
import { RawPurePanel as PopoverRawPurePanel } from '../popover/PurePanel';
import useStyle from './style';
var PurePanel = function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    _props$total = props.total,
    total = _props$total === void 0 ? 6 : _props$total,
    className = props.className,
    style = props.style,
    type = props.type,
    restProps = __rest(props, ["prefixCls", "current", "total", "className", "style", "type"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('tour', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var node = panelRender(_extends(_extends({}, restProps), {
    prefixCls: prefixCls,
    total: total
  }), current, type);
  return wrapSSR( /*#__PURE__*/React.createElement(PopoverRawPurePanel, {
    prefixCls: prefixCls,
    hashId: hashId,
    className: classNames(className, prefixCls + "-pure", type && prefixCls + "-" + type),
    style: style
  }, node));
  // return node as React.ReactElement;
};

export default PurePanel;
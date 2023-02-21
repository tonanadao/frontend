import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import { Popup } from 'rc-tooltip';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import { getRenderPropValue } from '../_util/getRenderPropValue';
export var getOverlay = function getOverlay(prefixCls, title, content) {
  if (!title && !content) return undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-title"
  }, getRenderPropValue(title)), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-inner-content"
  }, getRenderPropValue(content)));
};
export function RawPurePanel(props) {
  var hashId = props.hashId,
    prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    title = props.title,
    content = props.content,
    children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(hashId, prefixCls, prefixCls + "-pure", prefixCls + "-placement-" + placement, className),
    style: style
  }, /*#__PURE__*/React.createElement(Popup, _extends({}, props, {
    className: hashId,
    prefixCls: prefixCls
  }), children || getOverlay(prefixCls, title, content)));
}
export default function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    restProps = __rest(props, ["prefixCls"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  return wrapSSR( /*#__PURE__*/React.createElement(RawPurePanel, _extends({}, restProps, {
    prefixCls: prefixCls,
    hashId: hashId
  })));
}
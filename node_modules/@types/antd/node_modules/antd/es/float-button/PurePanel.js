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
/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import classNames from 'classnames';
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import FloatButtonGroup from './FloatButtonGroup';
import BackTop from './BackTop';
import { ConfigContext } from '../config-provider';
var PureFloatButton = function PureFloatButton(_a) {
  var backTop = _a.backTop,
    props = __rest(_a, ["backTop"]);
  return backTop ? /*#__PURE__*/React.createElement(BackTop, _extends({}, props, {
    visibilityHeight: 0
  })) : /*#__PURE__*/React.createElement(FloatButton, _extends({}, props));
};
function PurePanel(_a) {
  var className = _a.className,
    items = _a.items,
    props = __rest(_a, ["className", "items"]);
  var customizePrefixCls = props.prefixCls;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  var pureCls = prefixCls + "-pure";
  if (items) {
    return /*#__PURE__*/React.createElement(FloatButtonGroup, _extends({
      className: classNames(className, pureCls)
    }, props), items.map(function (item, index) {
      return /*#__PURE__*/React.createElement(PureFloatButton, _extends({
        key: index
      }, item));
    }));
  }
  return /*#__PURE__*/React.createElement(PureFloatButton, _extends({
    className: classNames(className, pureCls)
  }, props));
}
export default /*#__PURE__*/React.memo(PurePanel);
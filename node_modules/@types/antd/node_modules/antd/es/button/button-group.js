import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { useToken } from '../theme/internal';
import warning from '../_util/warning';
export var GroupSizeContext = /*#__PURE__*/React.createContext(undefined);
var ButtonGroup = function ButtonGroup(props) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    size = props.size,
    className = props.className,
    others = __rest(props, ["prefixCls", "size", "className"]);
  var prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  // Here we only need hashId
  var _useToken = useToken(),
    _useToken2 = _slicedToArray(_useToken, 3),
    hashId = _useToken2[2];
  // large => lg
  // small => sm
  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    case 'middle':
    case undefined:
      break;
    default:
      process.env.NODE_ENV !== "production" ? warning(!size, 'Button.Group', 'Invalid prop `size`.') : void 0;
  }
  var classes = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-" + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
  return /*#__PURE__*/React.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/React.createElement("div", _extends({}, others, {
    className: classes
  })));
};
export default ButtonGroup;
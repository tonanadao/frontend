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
import warning from '../_util/warning';
import useStyle from './style';
var Divider = function Divider(props) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$type = props.type,
    type = _props$type === void 0 ? 'horizontal' : _props$type,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
    orientationMargin = props.orientationMargin,
    className = props.className,
    children = props.children,
    dashed = props.dashed,
    plain = props.plain,
    restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "children", "dashed", "plain"]);
  var prefixCls = getPrefixCls('divider', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var orientationPrefix = orientation.length > 0 ? "-" + orientation : orientation;
  var hasChildren = !!children;
  var hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
  var hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
  var classString = classNames(prefixCls, hashId, prefixCls + "-" + type, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-with-text", hasChildren), _defineProperty(_classNames, prefixCls + "-with-text" + orientationPrefix, hasChildren), _defineProperty(_classNames, prefixCls + "-dashed", !!dashed), _defineProperty(_classNames, prefixCls + "-plain", !!plain), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, prefixCls + "-no-default-orientation-margin-left", hasCustomMarginLeft), _defineProperty(_classNames, prefixCls + "-no-default-orientation-margin-right", hasCustomMarginRight), _classNames), className);
  var innerStyle = _extends(_extends({}, hasCustomMarginLeft && {
    marginLeft: orientationMargin
  }), hasCustomMarginRight && {
    marginRight: orientationMargin
  });
  // Warning children not work in vertical mode
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!children || type !== 'vertical', 'Divider', '`children` not working in `vertical` mode.') : void 0;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", _extends({
    className: classString
  }, restProps, {
    role: "separator"
  }), children && type !== 'vertical' && /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-inner-text",
    style: innerStyle
  }, children)));
};
export default Divider;
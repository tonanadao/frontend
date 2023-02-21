import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import Element from './Element';
import useStyle from './style';
var SkeletonButton = function SkeletonButton(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var otherProps = omit(props, ['prefixCls']);
  var cls = classNames(prefixCls, prefixCls + "-element", (_classNames = {}, _defineProperty(_classNames, prefixCls + "-active", active), _defineProperty(_classNames, prefixCls + "-block", block), _classNames), className, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement(Element, _extends({
    prefixCls: prefixCls + "-button",
    size: size
  }, otherProps))));
};
export default SkeletonButton;
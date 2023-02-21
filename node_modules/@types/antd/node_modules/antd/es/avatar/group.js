import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import classNames from 'classnames';
import toArray from "rc-util/es/Children/toArray";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import Popover from '../popover';
import { cloneElement } from '../_util/reactNode';
import Avatar from './avatar';
import { SizeContextProvider } from './SizeContext';
import useStyle from './style';
var Group = function Group(props) {
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    maxCount = props.maxCount,
    maxStyle = props.maxStyle,
    size = props.size;
  var prefixCls = getPrefixCls('avatar', customizePrefixCls);
  var groupPrefixCls = prefixCls + "-group";
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cls = classNames(groupPrefixCls, _defineProperty({}, groupPrefixCls + "-rtl", direction === 'rtl'), className, hashId);
  var children = props.children,
    _props$maxPopoverPlac = props.maxPopoverPlacement,
    maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
    _props$maxPopoverTrig = props.maxPopoverTrigger,
    maxPopoverTrigger = _props$maxPopoverTrig === void 0 ? 'hover' : _props$maxPopoverTrig;
  var childrenWithProps = toArray(children).map(function (child, index) {
    return cloneElement(child, {
      key: "avatar-key-" + index
    });
  });
  var numOfChildren = childrenWithProps.length;
  if (maxCount && maxCount < numOfChildren) {
    var childrenShow = childrenWithProps.slice(0, maxCount);
    var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
    childrenShow.push( /*#__PURE__*/React.createElement(Popover, {
      key: "avatar-popover-key",
      content: childrenHidden,
      trigger: maxPopoverTrigger,
      placement: maxPopoverPlacement,
      overlayClassName: groupPrefixCls + "-popover"
    }, /*#__PURE__*/React.createElement(Avatar, {
      style: maxStyle
    }, "+" + (numOfChildren - maxCount))));
    return wrapSSR( /*#__PURE__*/React.createElement(SizeContextProvider, {
      size: size
    }, /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: props.style
    }, childrenShow)));
  }
  return wrapSSR( /*#__PURE__*/React.createElement(SizeContextProvider, {
    size: size
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: props.style
  }, childrenWithProps)));
};
export default Group;
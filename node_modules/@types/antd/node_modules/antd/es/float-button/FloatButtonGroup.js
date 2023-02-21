import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, memo, useContext } from 'react';
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import FileTextOutlined from "@ant-design/icons/es/icons/FileTextOutlined";
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import useMergedState from "rc-util/es/hooks/useMergedState";
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import { ConfigContext } from '../config-provider';
import { FloatButtonGroupProvider } from './context';
import useStyle from './style';
var FloatButtonGroup = function FloatButtonGroup(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(FileTextOutlined, null) : _props$icon,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? /*#__PURE__*/React.createElement(CloseOutlined, null) : _props$closeIcon,
    description = props.description,
    trigger = props.trigger,
    children = props.children,
    onOpenChange = props.onOpenChange;
  var _useContext = useContext(ConfigContext),
    direction = _useContext.direction,
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var groupPrefixCls = prefixCls + "-group";
  var groupCls = classNames(groupPrefixCls, hashId, className, (_classNames = {}, _defineProperty(_classNames, groupPrefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, groupPrefixCls + "-" + shape, shape), _defineProperty(_classNames, groupPrefixCls + "-" + shape + "-shadow", !trigger), _classNames));
  var wrapperCls = classNames(hashId, groupPrefixCls + "-wrap");
  var _useMergedState = useMergedState(false, {
      value: props.open
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  var clickAction = useRef({});
  var hoverAction = useRef({});
  if (trigger === 'click') {
    clickAction.current = {
      onClick: function onClick() {
        setOpen(function (prevState) {
          onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!prevState);
          return !prevState;
        });
      }
    };
  }
  if (trigger === 'hover') {
    hoverAction.current = {
      onMouseEnter: function onMouseEnter() {
        setOpen(true);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
      },
      onMouseLeave: function onMouseLeave() {
        setOpen(false);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
      }
    };
  }
  return wrapSSR( /*#__PURE__*/React.createElement(FloatButtonGroupProvider, {
    value: shape
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: groupCls,
    style: style
  }, hoverAction.current), trigger && ['click', 'hover'].includes(trigger) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CSSMotion, {
    visible: open,
    motionName: groupPrefixCls + "-wrap"
  }, function (_ref) {
    var motionClassName = _ref.className;
    return /*#__PURE__*/React.createElement("div", {
      className: classNames(motionClassName, wrapperCls)
    }, children);
  }), /*#__PURE__*/React.createElement(FloatButton, _extends({
    type: type,
    shape: shape,
    icon: open ? closeIcon : icon,
    description: description
  }, clickAction.current))) : children)));
};
export default /*#__PURE__*/memo(FloatButtonGroup);
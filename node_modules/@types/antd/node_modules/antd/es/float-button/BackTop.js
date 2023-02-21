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
import VerticalAlignTopOutlined from "@ant-design/icons/es/icons/VerticalAlignTopOutlined";
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import addEventListener from "rc-util/es/Dom/addEventListener";
import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import { ConfigContext } from '../config-provider';
import getScroll from '../_util/getScroll';
import scrollTo from '../_util/scrollTo';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import FloatButtonGroupContext from './context';
import useStyle from './style';
var BackTop = function BackTop(props) {
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$visibilityHeig = props.visibilityHeight,
    visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(VerticalAlignTopOutlined, null) : _props$icon,
    target = props.target,
    onClick = props.onClick,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 450 : _props$duration,
    restProps = __rest(props, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]);
  var _useState = useState(visibilityHeight === 0),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var ref = useRef(null);
  var scrollEvent = useRef(null);
  var getDefaultTarget = function getDefaultTarget() {
    return ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
  };
  var handleScroll = throttleByAnimationFrame(function (e) {
    var scrollTop = getScroll(e.target, true);
    setVisible(scrollTop >= visibilityHeight);
  });
  var bindScrollEvent = function bindScrollEvent() {
    var getTarget = target || getDefaultTarget;
    var container = getTarget();
    scrollEvent.current = addEventListener(container, 'scroll', handleScroll);
    handleScroll({
      target: container
    });
  };
  useEffect(function () {
    bindScrollEvent();
    return function () {
      var _a;
      handleScroll.cancel();
      (_a = scrollEvent.current) === null || _a === void 0 ? void 0 : _a.remove();
    };
  }, [target]);
  var scrollToTop = function scrollToTop(e) {
    scrollTo(0, {
      getContainer: target || getDefaultTarget,
      duration: duration
    });
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 1),
    wrapSSR = _useStyle2[0];
  var groupShape = useContext(FloatButtonGroupContext);
  var mergeShape = groupShape || shape;
  var contentProps = _extends({
    prefixCls: prefixCls,
    icon: icon,
    type: type,
    shape: mergeShape
  }, restProps);
  return wrapSSR( /*#__PURE__*/React.createElement(CSSMotion, {
    visible: visible,
    motionName: rootPrefixCls + "-fade"
  }, function (_ref) {
    var motionClassName = _ref.className;
    return /*#__PURE__*/React.createElement(FloatButton, _extends({
      ref: ref
    }, contentProps, {
      onClick: scrollToTop,
      className: classNames(className, motionClassName)
    }));
  }));
};
export default /*#__PURE__*/memo(BackTop);
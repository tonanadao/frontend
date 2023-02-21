import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import VerticalAlignTopOutlined from "@ant-design/icons/es/icons/VerticalAlignTopOutlined";
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import addEventListener from "rc-util/es/Dom/addEventListener";
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import getScroll from '../_util/getScroll';
import { cloneElement } from '../_util/reactNode';
import scrollTo from '../_util/scrollTo';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import warning from '../_util/warning';
import useStyle from './style';
var BackTop = function BackTop(props) {
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$visibilityHeig = props.visibilityHeight,
    visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig,
    target = props.target,
    onClick = props.onClick,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 450 : _props$duration;
  var _React$useState = React.useState(visibilityHeight === 0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var ref = React.useRef(null);
  var scrollEvent = React.useRef(null);
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
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(false, 'BackTop', '`BackTop` is deprecated, please use `FloatButton.BackTop` instead.') : void 0;
  }
  React.useEffect(function () {
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
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('back-top', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var classString = classNames(hashId, prefixCls, _defineProperty({}, prefixCls + "-rtl", direction === 'rtl'), className);
  // fix https://fb.me/react-unknown-prop
  var divProps = omit(props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target']);
  var defaultElement = /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-icon"
  }, /*#__PURE__*/React.createElement(VerticalAlignTopOutlined, null)));
  return wrapSSR( /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
    className: classString,
    onClick: scrollToTop,
    ref: ref
  }), /*#__PURE__*/React.createElement(CSSMotion, {
    visible: visible,
    motionName: rootPrefixCls + "-fade"
  }, function (_ref) {
    var motionClassName = _ref.className;
    return cloneElement(props.children || defaultElement, function (_ref2) {
      var cloneCls = _ref2.className;
      return {
        className: classNames(motionClassName, cloneCls)
      };
    });
  })));
};
export default /*#__PURE__*/React.memo(BackTop);
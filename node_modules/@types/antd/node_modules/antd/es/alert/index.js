import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import ExclamationCircleFilled from "@ant-design/icons/es/icons/ExclamationCircleFilled";
import InfoCircleFilled from "@ant-design/icons/es/icons/InfoCircleFilled";
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import getDataOrAriaProps from '../_util/getDataOrAriaProps';
import { replaceElement } from '../_util/reactNode';
import ErrorBoundary from './ErrorBoundary';
// CSSINJS
import useStyle from './style';
var iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
var IconNode = function IconNode(props) {
  var icon = props.icon,
    prefixCls = props.prefixCls,
    type = props.type;
  var iconType = iconMapFilled[type] || null;
  if (icon) {
    return replaceElement(icon, /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-icon"
    }, icon), function () {
      return {
        className: classNames(prefixCls + "-icon", _defineProperty({}, icon.props.className, icon.props.className))
      };
    });
  }
  return /*#__PURE__*/React.createElement(iconType, {
    className: prefixCls + "-icon"
  });
};
var CloseIcon = function CloseIcon(props) {
  var isClosable = props.isClosable,
    closeText = props.closeText,
    prefixCls = props.prefixCls,
    closeIcon = props.closeIcon,
    handleClose = props.handleClose;
  return isClosable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleClose,
    className: prefixCls + "-close-icon",
    tabIndex: 0
  }, closeText ? /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-text"
  }, closeText) : closeIcon) : null;
};
var Alert = function Alert(_a) {
  var _classNames2;
  var description = _a.description,
    customizePrefixCls = _a.prefixCls,
    message = _a.message,
    banner = _a.banner,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    style = _a.style,
    onMouseEnter = _a.onMouseEnter,
    onMouseLeave = _a.onMouseLeave,
    onClick = _a.onClick,
    afterClose = _a.afterClose,
    showIcon = _a.showIcon,
    closable = _a.closable,
    closeText = _a.closeText,
    _a$closeIcon = _a.closeIcon,
    closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/React.createElement(CloseOutlined, null) : _a$closeIcon,
    action = _a.action,
    props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action"]);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    closed = _React$useState2[0],
    setClosed = _React$useState2[1];
  var ref = React.useRef();
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('alert', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var handleClose = function handleClose(e) {
    var _a;
    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };
  var getType = function getType() {
    var type = props.type;
    if (type !== undefined) {
      return type;
    }
    // banner 模式默认为警告
    return banner ? 'warning' : 'info';
  };
  // closeable when closeText is assigned
  var isClosable = closeText ? true : closable;
  var type = getType();
  // banner 模式默认有 Icon
  var isShowIcon = banner && showIcon === undefined ? true : showIcon;
  var alertCls = classNames(prefixCls, prefixCls + "-" + type, (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + "-with-description", !!description), _defineProperty(_classNames2, prefixCls + "-no-icon", !isShowIcon), _defineProperty(_classNames2, prefixCls + "-banner", !!banner), _defineProperty(_classNames2, prefixCls + "-rtl", direction === 'rtl'), _classNames2), className, hashId);
  var dataOrAriaProps = getDataOrAriaProps(props);
  return wrapSSR( /*#__PURE__*/React.createElement(CSSMotion, {
    visible: !closed,
    motionName: prefixCls + "-motion",
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: function onLeaveStart(node) {
      return {
        maxHeight: node.offsetHeight
      };
    },
    onLeaveEnd: afterClose
  }, function (_ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/React.createElement("div", _extends({
      ref: ref,
      "data-show": !closed,
      className: classNames(alertCls, motionClassName),
      style: _extends(_extends({}, style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, dataOrAriaProps), isShowIcon ? /*#__PURE__*/React.createElement(IconNode, {
      description: description,
      icon: props.icon,
      prefixCls: prefixCls,
      type: type
    }) : null, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-content"
    }, message ? /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-message"
    }, message) : null, description ? /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-description"
    }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-action"
    }, action) : null, /*#__PURE__*/React.createElement(CloseIcon, {
      isClosable: !!isClosable,
      closeText: closeText,
      prefixCls: prefixCls,
      closeIcon: closeIcon,
      handleClose: handleClose
    }));
  }));
};
Alert.ErrorBoundary = ErrorBoundary;
export default Alert;
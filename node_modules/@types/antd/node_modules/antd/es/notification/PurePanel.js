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
import * as React from 'react';
import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";
import ExclamationCircleFilled from "@ant-design/icons/es/icons/ExclamationCircleFilled";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import InfoCircleFilled from "@ant-design/icons/es/icons/InfoCircleFilled";
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import { Notice } from 'rc-notification';
import classNames from 'classnames';
import useStyle from './style';
import { ConfigContext } from '../config-provider';
export var TypeIcon = {
  info: /*#__PURE__*/React.createElement(InfoCircleFilled, null),
  success: /*#__PURE__*/React.createElement(CheckCircleFilled, null),
  error: /*#__PURE__*/React.createElement(CloseCircleFilled, null),
  warning: /*#__PURE__*/React.createElement(ExclamationCircleFilled, null),
  loading: /*#__PURE__*/React.createElement(LoadingOutlined, null)
};
export function getCloseIcon(prefixCls, closeIcon) {
  return closeIcon || /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-x"
  }, /*#__PURE__*/React.createElement(CloseOutlined, {
    className: prefixCls + "-close-icon"
  }));
}
var typeToIcon = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled
};
export function PureContent(_ref) {
  var prefixCls = _ref.prefixCls,
    icon = _ref.icon,
    type = _ref.type,
    message = _ref.message,
    description = _ref.description,
    btn = _ref.btn;
  var iconNode = null;
  if (icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-icon"
    }, icon);
  } else if (type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[type] || null, {
      className: classNames(prefixCls + "-icon", prefixCls + "-icon-" + type)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(_defineProperty({}, prefixCls + "-with-icon", iconNode)),
    role: "alert"
  }, iconNode, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-message"
  }, message), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-description"
  }, description), btn && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-btn"
  }, btn));
}
/** @private Internal Component. Do not use in your production. */
export default function PurePanel(props) {
  var staticPrefixCls = props.prefixCls,
    className = props.className,
    icon = props.icon,
    type = props.type,
    message = props.message,
    description = props.description,
    btn = props.btn,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    closeIcon = props.closeIcon,
    restProps = __rest(props, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = staticPrefixCls || getPrefixCls('notification');
  var noticePrefixCls = prefixCls + "-notice";
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    hashId = _useStyle2[1];
  return /*#__PURE__*/React.createElement(Notice, _extends({}, restProps, {
    prefixCls: prefixCls,
    className: classNames(className, hashId, noticePrefixCls + "-pure-panel"),
    eventKey: "pure",
    duration: null,
    closable: closable,
    closeIcon: getCloseIcon(prefixCls, closeIcon),
    content: /*#__PURE__*/React.createElement(PureContent, {
      prefixCls: noticePrefixCls,
      icon: icon,
      type: type,
      message: message,
      description: description,
      btn: btn
    })
  }));
}
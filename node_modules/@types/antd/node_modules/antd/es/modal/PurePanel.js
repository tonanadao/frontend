import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import { Panel } from 'rc-dialog';
import * as React from 'react';
import Button from '../button';
import { convertLegacyProps } from '../button/button';
import { ConfigContext } from '../config-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { ConfirmContent } from './ConfirmDialog';
import { getConfirmLocale } from './locale';
import useStyle from './style';
export function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-x"
  }, closeIcon || /*#__PURE__*/React.createElement(CloseOutlined, {
    className: prefixCls + "-close-icon"
  }));
}
export function renderFooter(props) {
  var okText = props.okText,
    _props$okType = props.okType,
    okType = _props$okType === void 0 ? 'primary' : _props$okType,
    cancelText = props.cancelText,
    confirmLoading = props.confirmLoading,
    onOk = props.onOk,
    onCancel = props.onCancel,
    okButtonProps = props.okButtonProps,
    cancelButtonProps = props.cancelButtonProps,
    footer = props.footer;
  return footer === undefined ? /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Modal",
    defaultLocale: getConfirmLocale()
  }, function (locale) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, _extends({
      onClick: onCancel
    }, cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/React.createElement(Button, _extends({}, convertLegacyProps(okType), {
      loading: confirmLoading,
      onClick: onOk
    }, okButtonProps), okText || locale.okText));
  }) : footer;
}
export default function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    closeIcon = props.closeIcon,
    closable = props.closable,
    type = props.type,
    title = props.title,
    children = props.children,
    restProps = __rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var rootPrefixCls = getPrefixCls();
  var prefixCls = customizePrefixCls || getPrefixCls('modal');
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    hashId = _useStyle2[1];
  var confirmPrefixCls = prefixCls + "-confirm";
  // Choose target props by confirm mark
  var additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : false,
      title: '',
      footer: '',
      children: /*#__PURE__*/React.createElement(ConfirmContent, _extends({}, props, {
        confirmPrefixCls: confirmPrefixCls,
        rootPrefixCls: rootPrefixCls,
        content: children
      }))
    };
  } else {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : true,
      title: title,
      footer: renderFooter(props),
      children: children
    };
  }
  return /*#__PURE__*/React.createElement(Panel, _extends({
    prefixCls: prefixCls,
    className: classNames(hashId, prefixCls + "-pure-panel", type && confirmPrefixCls, type && confirmPrefixCls + "-" + type, className)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable: closable
  }, additionalProps));
}
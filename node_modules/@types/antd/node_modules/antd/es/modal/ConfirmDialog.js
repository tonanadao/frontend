import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import ExclamationCircleFilled from "@ant-design/icons/es/icons/ExclamationCircleFilled";
import InfoCircleFilled from "@ant-design/icons/es/icons/InfoCircleFilled";
import classNames from 'classnames';
import * as React from 'react';
import ConfigProvider from '../config-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import ActionButton from '../_util/ActionButton';
import { getTransitionName } from '../_util/motion';
import warning from '../_util/warning';
import Dialog from './Modal';
export function ConfirmContent(props) {
  var icon = props.icon,
    onCancel = props.onCancel,
    onOk = props.onOk,
    close = props.close,
    okText = props.okText,
    okButtonProps = props.okButtonProps,
    cancelText = props.cancelText,
    cancelButtonProps = props.cancelButtonProps,
    confirmPrefixCls = props.confirmPrefixCls,
    rootPrefixCls = props.rootPrefixCls,
    type = props.type,
    okCancel = props.okCancel,
    staticLocale = props.locale;
  process.env.NODE_ENV !== "production" ? warning(!(typeof icon === 'string' && icon.length > 2), 'Modal', "`icon` is using ReactNode instead of string naming in v4. Please check `" + icon + "` at https://ant.design/components/icon") : void 0;
  // Icon
  var mergedIcon = icon;
  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  if (!icon && icon !== null) {
    switch (type) {
      case 'info':
        mergedIcon = /*#__PURE__*/React.createElement(InfoCircleFilled, null);
        break;
      case 'success':
        mergedIcon = /*#__PURE__*/React.createElement(CheckCircleFilled, null);
        break;
      case 'error':
        mergedIcon = /*#__PURE__*/React.createElement(CloseCircleFilled, null);
        break;
      default:
        mergedIcon = /*#__PURE__*/React.createElement(ExclamationCircleFilled, null);
    }
  }
  var okType = props.okType || 'primary';
  // 默认为 true，保持向下兼容
  var mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === 'confirm';
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Modal"
  }, function (locale) {
    var mergedLocale = staticLocale || locale;
    var cancelButton = mergedOkCancel && /*#__PURE__*/React.createElement(ActionButton, {
      actionFn: onCancel,
      close: close,
      autoFocus: autoFocusButton === 'cancel',
      buttonProps: cancelButtonProps,
      prefixCls: rootPrefixCls + "-btn"
    }, cancelText || (mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.cancelText));
    return /*#__PURE__*/React.createElement("div", {
      className: confirmPrefixCls + "-body-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: confirmPrefixCls + "-body"
    }, mergedIcon, props.title === undefined ? null : /*#__PURE__*/React.createElement("span", {
      className: confirmPrefixCls + "-title"
    }, props.title), /*#__PURE__*/React.createElement("div", {
      className: confirmPrefixCls + "-content"
    }, props.content)), /*#__PURE__*/React.createElement("div", {
      className: confirmPrefixCls + "-btns"
    }, cancelButton, /*#__PURE__*/React.createElement(ActionButton, {
      type: okType,
      actionFn: onOk,
      close: close,
      autoFocus: autoFocusButton === 'ok',
      buttonProps: okButtonProps,
      prefixCls: rootPrefixCls + "-btn"
    }, okText || (mergedOkCancel ? mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.okText : mergedLocale === null || mergedLocale === void 0 ? void 0 : mergedLocale.justOkText))));
  });
}
var ConfirmDialog = function ConfirmDialog(props) {
  var close = props.close,
    zIndex = props.zIndex,
    afterClose = props.afterClose,
    visible = props.visible,
    open = props.open,
    keyboard = props.keyboard,
    centered = props.centered,
    getContainer = props.getContainer,
    maskStyle = props.maskStyle,
    direction = props.direction,
    prefixCls = props.prefixCls,
    wrapClassName = props.wrapClassName,
    rootPrefixCls = props.rootPrefixCls,
    iconPrefixCls = props.iconPrefixCls,
    bodyStyle = props.bodyStyle,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? false : _props$closable,
    closeIcon = props.closeIcon,
    modalRender = props.modalRender,
    focusTriggerAfterClose = props.focusTriggerAfterClose;
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(visible === undefined, 'Modal', "`visible` is deprecated, please use `open` instead.") : void 0;
  }
  var confirmPrefixCls = prefixCls + "-confirm";
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var classString = classNames(confirmPrefixCls, confirmPrefixCls + "-" + props.type, _defineProperty({}, confirmPrefixCls + "-rtl", direction === 'rtl'), props.className);
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction
  }, /*#__PURE__*/React.createElement(Dialog, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classNames(_defineProperty({}, confirmPrefixCls + "-centered", !!props.centered), wrapClassName),
    onCancel: function onCancel() {
      return close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
    },
    open: open,
    title: "",
    footer: "",
    transitionName: getTransitionName(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    bodyStyle: bodyStyle,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/React.createElement(ConfirmContent, _extends({}, props, {
    confirmPrefixCls: confirmPrefixCls
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  ConfirmDialog.displayName = 'ConfirmDialog';
}
export default ConfirmDialog;
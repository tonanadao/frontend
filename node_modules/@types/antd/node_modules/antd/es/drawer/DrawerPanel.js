import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
export default function DrawerPanel(props) {
  var prefixCls = props.prefixCls,
    title = props.title,
    footer = props.footer,
    extra = props.extra,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? /*#__PURE__*/React.createElement(CloseOutlined, null) : _props$closeIcon,
    onClose = props.onClose,
    headerStyle = props.headerStyle,
    drawerStyle = props.drawerStyle,
    bodyStyle = props.bodyStyle,
    footerStyle = props.footerStyle,
    children = props.children;
  var closeIconNode = closable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    className: prefixCls + "-close"
  }, closeIcon);
  function renderHeader() {
    if (!title && !closable) {
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: classNames(prefixCls + "-header", _defineProperty({}, prefixCls + "-header-close-only", closable && !title && !extra)),
      style: headerStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-header-title"
    }, closeIconNode, title && /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-title"
    }, title)), extra && /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-extra"
    }, extra));
  }
  function renderFooter() {
    if (!footer) {
      return null;
    }
    var footerClassName = prefixCls + "-footer";
    return /*#__PURE__*/React.createElement("div", {
      className: footerClassName,
      style: footerStyle
    }, footer);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-wrapper-body",
    style: _extends({}, drawerStyle)
  }, renderHeader(), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-body",
    style: bodyStyle
  }, children), renderFooter());
}
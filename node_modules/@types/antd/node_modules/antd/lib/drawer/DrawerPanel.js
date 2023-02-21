"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DrawerPanel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
function DrawerPanel(props) {
  var prefixCls = props.prefixCls,
    title = props.title,
    footer = props.footer,
    extra = props.extra,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _props$closeIcon,
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
      className: (0, _classnames["default"])(prefixCls + "-header", (0, _defineProperty2["default"])({}, prefixCls + "-header-close-only", closable && !title && !extra)),
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
    style: (0, _extends2["default"])({}, drawerStyle)
  }, renderHeader(), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-body",
    style: bodyStyle
  }, children), renderFooter());
}
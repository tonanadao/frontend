"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PurePanel;
exports.renderCloseIcon = renderCloseIcon;
exports.renderFooter = renderFooter;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcDialog = require("rc-dialog");
var React = _interopRequireWildcard(require("react"));
var _button = _interopRequireDefault(require("../button"));
var _button2 = require("../button/button");
var _configProvider = require("../config-provider");
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _ConfirmDialog = require("./ConfirmDialog");
var _locale = require("./locale");
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-x"
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: prefixCls + "-close-icon"
  }));
}
function renderFooter(props) {
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
  return footer === undefined ? /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Modal",
    defaultLocale: (0, _locale.getConfirmLocale)()
  }, function (locale) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
      onClick: onCancel
    }, cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, (0, _button2.convertLegacyProps)(okType), {
      loading: confirmLoading,
      onClick: onOk
    }, okButtonProps), okText || locale.okText));
  }) : footer;
}
function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    closeIcon = props.closeIcon,
    closable = props.closable,
    type = props.type,
    title = props.title,
    children = props.children,
    restProps = __rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var rootPrefixCls = getPrefixCls();
  var prefixCls = customizePrefixCls || getPrefixCls('modal');
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    hashId = _useStyle2[1];
  var confirmPrefixCls = prefixCls + "-confirm";
  // Choose target props by confirm mark
  var additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : false,
      title: '',
      footer: '',
      children: /*#__PURE__*/React.createElement(_ConfirmDialog.ConfirmContent, (0, _extends2["default"])({}, props, {
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
  return /*#__PURE__*/React.createElement(_rcDialog.Panel, (0, _extends2["default"])({
    prefixCls: prefixCls,
    className: (0, _classnames["default"])(hashId, prefixCls + "-pure-panel", type && confirmPrefixCls, type && confirmPrefixCls + "-" + type, className)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable: closable
  }, additionalProps));
}
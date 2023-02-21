"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawPurePanel = RawPurePanel;
exports["default"] = PurePanel;
exports.getOverlay = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcTooltip = require("rc-tooltip");
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _getRenderPropValue = require("../_util/getRenderPropValue");
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
var getOverlay = function getOverlay(prefixCls, title, content) {
  if (!title && !content) return undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-title"
  }, (0, _getRenderPropValue.getRenderPropValue)(title)), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-inner-content"
  }, (0, _getRenderPropValue.getRenderPropValue)(content)));
};
exports.getOverlay = getOverlay;
function RawPurePanel(props) {
  var hashId = props.hashId,
    prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    title = props.title,
    content = props.content,
    children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(hashId, prefixCls, prefixCls + "-pure", prefixCls + "-placement-" + placement, className),
    style: style
  }, /*#__PURE__*/React.createElement(_rcTooltip.Popup, (0, _extends2["default"])({}, props, {
    className: hashId,
    prefixCls: prefixCls
  }), children || getOverlay(prefixCls, title, content)));
}
function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    restProps = __rest(props, ["prefixCls"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  return wrapSSR( /*#__PURE__*/React.createElement(RawPurePanel, (0, _extends2["default"])({}, restProps, {
    prefixCls: prefixCls,
    hashId: hashId
  })));
}
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _panelRender = _interopRequireDefault(require("./panelRender"));
var _PurePanel = require("../popover/PurePanel");
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
var PurePanel = function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    _props$total = props.total,
    total = _props$total === void 0 ? 6 : _props$total,
    className = props.className,
    style = props.style,
    type = props.type,
    restProps = __rest(props, ["prefixCls", "current", "total", "className", "style", "type"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('tour', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var node = (0, _panelRender["default"])((0, _extends2["default"])((0, _extends2["default"])({}, restProps), {
    prefixCls: prefixCls,
    total: total
  }), current, type);
  return wrapSSR( /*#__PURE__*/React.createElement(_PurePanel.RawPurePanel, {
    prefixCls: prefixCls,
    hashId: hashId,
    className: (0, _classnames["default"])(className, prefixCls + "-pure", type && prefixCls + "-" + type),
    style: style
  }, node));
  // return node as React.ReactElement;
};
var _default = PurePanel;
exports["default"] = _default;
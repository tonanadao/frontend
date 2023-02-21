"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _warning = _interopRequireDefault(require("../_util/warning"));
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
var Divider = function Divider(props) {
  var _classNames;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$type = props.type,
    type = _props$type === void 0 ? 'horizontal' : _props$type,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
    orientationMargin = props.orientationMargin,
    className = props.className,
    children = props.children,
    dashed = props.dashed,
    plain = props.plain,
    restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "children", "dashed", "plain"]);
  var prefixCls = getPrefixCls('divider', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var orientationPrefix = orientation.length > 0 ? "-" + orientation : orientation;
  var hasChildren = !!children;
  var hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
  var hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
  var classString = (0, _classnames["default"])(prefixCls, hashId, prefixCls + "-" + type, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-with-text", hasChildren), (0, _defineProperty2["default"])(_classNames, prefixCls + "-with-text" + orientationPrefix, hasChildren), (0, _defineProperty2["default"])(_classNames, prefixCls + "-dashed", !!dashed), (0, _defineProperty2["default"])(_classNames, prefixCls + "-plain", !!plain), (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-no-default-orientation-margin-left", hasCustomMarginLeft), (0, _defineProperty2["default"])(_classNames, prefixCls + "-no-default-orientation-margin-right", hasCustomMarginRight), _classNames), className);
  var innerStyle = (0, _extends2["default"])((0, _extends2["default"])({}, hasCustomMarginLeft && {
    marginLeft: orientationMargin
  }), hasCustomMarginRight && {
    marginRight: orientationMargin
  });
  // Warning children not work in vertical mode
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!children || type !== 'vertical', 'Divider', '`children` not working in `vertical` mode.') : void 0;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: classString
  }, restProps, {
    role: "separator"
  }), children && type !== 'vertical' && /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-inner-text",
    style: innerStyle
  }, children)));
};
var _default = Divider;
exports["default"] = _default;
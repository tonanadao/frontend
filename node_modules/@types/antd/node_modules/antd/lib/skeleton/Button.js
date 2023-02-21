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
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _Element = _interopRequireDefault(require("./Element"));
var _style = _interopRequireDefault(require("./style"));
var SkeletonButton = function SkeletonButton(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var otherProps = (0, _omit["default"])(props, ['prefixCls']);
  var cls = (0, _classnames["default"])(prefixCls, prefixCls + "-element", (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-active", active), (0, _defineProperty2["default"])(_classNames, prefixCls + "-block", block), _classNames), className, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement(_Element["default"], (0, _extends2["default"])({
    prefixCls: prefixCls + "-button",
    size: size
  }, otherProps))));
};
var _default = SkeletonButton;
exports["default"] = _default;
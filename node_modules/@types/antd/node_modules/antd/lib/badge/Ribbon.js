"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _utils = require("./utils");
var Ribbon = function Ribbon(_ref) {
  var _classNames;
  var className = _ref.className,
    customizePrefixCls = _ref.prefixCls,
    style = _ref.style,
    color = _ref.color,
    children = _ref.children,
    text = _ref.text,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'end' : _ref$placement;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('ribbon', customizePrefixCls);
  var colorInPreset = (0, _utils.isPresetColor)(color);
  var ribbonCls = (0, _classnames["default"])(prefixCls, prefixCls + "-placement-" + placement, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-color-" + color, colorInPreset), _classNames), className);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var colorStyle = {};
  var cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(prefixCls + "-wrapper", hashId)
  }, children, /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(ribbonCls, hashId),
    style: (0, _extends2["default"])((0, _extends2["default"])({}, colorStyle), style)
  }, /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-text"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-corner",
    style: cornerColorStyle
  }))));
};
var _default = Ribbon;
exports["default"] = _default;
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
var _context = require("../form/context");
var _style = _interopRequireDefault(require("./style"));
var Group = function Group(props) {
  var _classNames;
  var _useContext = (0, React.useContext)(_configProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  var prefixCls = getPrefixCls('input-group', customizePrefixCls);
  var inputPrefixCls = getPrefixCls('input');
  var _useStyle = (0, _style["default"])(inputPrefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-lg", props.size === 'large'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-sm", props.size === 'small'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-compact", props.compact), (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), hashId, className);
  var formItemContext = (0, React.useContext)(_context.FormItemInputContext);
  var groupFormItemContext = (0, React.useMemo)(function () {
    return (0, _extends2["default"])((0, _extends2["default"])({}, formItemContext), {
      isFormItemInput: false
    });
  }, [formItemContext]);
  return wrapSSR( /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
    value: groupFormItemContext
  }, props.children)));
};
var _default = Group;
exports["default"] = _default;
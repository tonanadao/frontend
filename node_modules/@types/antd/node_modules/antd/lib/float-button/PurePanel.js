"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _FloatButton = _interopRequireWildcard(require("./FloatButton"));
var _FloatButtonGroup = _interopRequireDefault(require("./FloatButtonGroup"));
var _BackTop = _interopRequireDefault(require("./BackTop"));
var _configProvider = require("../config-provider");
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
/* eslint-disable react/no-array-index-key */

var PureFloatButton = function PureFloatButton(_a) {
  var backTop = _a.backTop,
    props = __rest(_a, ["backTop"]);
  return backTop ? /*#__PURE__*/React.createElement(_BackTop["default"], (0, _extends2["default"])({}, props, {
    visibilityHeight: 0
  })) : /*#__PURE__*/React.createElement(_FloatButton["default"], (0, _extends2["default"])({}, props));
};
function PurePanel(_a) {
  var className = _a.className,
    items = _a.items,
    props = __rest(_a, ["className", "items"]);
  var customizePrefixCls = props.prefixCls;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls(_FloatButton.floatButtonPrefixCls, customizePrefixCls);
  var pureCls = prefixCls + "-pure";
  if (items) {
    return /*#__PURE__*/React.createElement(_FloatButtonGroup["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])(className, pureCls)
    }, props), items.map(function (item, index) {
      return /*#__PURE__*/React.createElement(PureFloatButton, (0, _extends2["default"])({
        key: index
      }, item));
    }));
  }
  return /*#__PURE__*/React.createElement(PureFloatButton, (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, pureCls)
  }, props));
}
var _default = /*#__PURE__*/React.memo(PurePanel);
exports["default"] = _default;
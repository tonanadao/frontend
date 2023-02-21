"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompactItemContext = exports["default"] = exports.SpaceCompactItemContext = exports.NoCompactStyle = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
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
var SpaceCompactItemContext = /*#__PURE__*/React.createContext(null);
exports.SpaceCompactItemContext = SpaceCompactItemContext;
var useCompactItemContext = function useCompactItemContext(prefixCls, direction) {
  var compactItemContext = React.useContext(SpaceCompactItemContext);
  var compactItemClassnames = React.useMemo(function () {
    var _classNames;
    if (!compactItemContext) return '';
    var compactDirection = compactItemContext.compactDirection,
      isFirstItem = compactItemContext.isFirstItem,
      isLastItem = compactItemContext.isLastItem;
    var separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-compact" + separator + "item", true), (0, _defineProperty2["default"])(_classNames, prefixCls + "-compact" + separator + "first-item", isFirstItem), (0, _defineProperty2["default"])(_classNames, prefixCls + "-compact" + separator + "last-item", isLastItem), (0, _defineProperty2["default"])(_classNames, prefixCls + "-compact" + separator + "item-rtl", direction === 'rtl'), _classNames));
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames: compactItemClassnames
  };
};
exports.useCompactItemContext = useCompactItemContext;
var NoCompactStyle = function NoCompactStyle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
exports.NoCompactStyle = NoCompactStyle;
var CompactItem = function CompactItem(_a) {
  var children = _a.children,
    otherProps = __rest(_a, ["children"]);
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
var Compact = function Compact(props) {
  var _classNames2;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    directionConfig = _React$useContext.direction;
  var _props$size = props.size,
    size = _props$size === void 0 ? 'middle' : _props$size,
    direction = props.direction,
    block = props.block,
    customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "children"]);
  var prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var clx = (0, _classnames["default"])(prefixCls, hashId, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, prefixCls + "-rtl", directionConfig === 'rtl'), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-block", block), (0, _defineProperty2["default"])(_classNames2, prefixCls + "-vertical", direction === 'vertical'), _classNames2), className);
  var compactItemContext = React.useContext(SpaceCompactItemContext);
  var childNodes = (0, _toArray["default"])(children);
  var nodes = React.useMemo(function () {
    return childNodes.map(function (child, i) {
      var key = child && child.key || prefixCls + "-item-" + i;
      return /*#__PURE__*/React.createElement(CompactItem, {
        key: key,
        compactSize: size,
        compactDirection: direction,
        isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
        isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
      }, child);
    });
  }, [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: clx
  }, restProps), nodes));
};
var _default = Compact;
exports["default"] = _default;
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
var _react = _interopRequireWildcard(require("react"));
var _tour = _interopRequireDefault(require("@rc-component/tour"));
var _classnames = _interopRequireDefault(require("classnames"));
var _panelRender = _interopRequireDefault(require("./panelRender"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _PurePanel = _interopRequireDefault(require("./PurePanel"));
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
var Tour = function Tour(props) {
  var customizePrefixCls = props.prefixCls,
    steps = props.steps,
    current = props.current,
    type = props.type,
    rootClassName = props.rootClassName,
    restProps = __rest(props, ["prefixCls", "steps", "current", "type", "rootClassName"]);
  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var prefixCls = getPrefixCls('tour', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var customClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({}, prefixCls + "-rtl", direction === 'rtl'), (0, _defineProperty2["default"])({}, prefixCls + "-primary", type === 'primary'), hashId, rootClassName);
  var mergedRenderPanel = function mergedRenderPanel(stepProps, stepCurrent) {
    return (0, _panelRender["default"])(stepProps, stepCurrent, type);
  };
  return wrapSSR( /*#__PURE__*/_react["default"].createElement(_tour["default"], (0, _extends2["default"])({}, restProps, {
    rootClassName: customClassName,
    prefixCls: prefixCls,
    steps: steps,
    current: current,
    animated: true,
    renderPanel: mergedRenderPanel
  })));
};
if (process.env.NODE_ENV !== 'production') {
  Tour.displayName = 'Tour';
}
Tour._InternalPanelDoNotUseOrYouWillBeFired = _PurePanel["default"];
var _default = Tour;
exports["default"] = _default;
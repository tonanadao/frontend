"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _VerticalAlignTopOutlined = _interopRequireDefault(require("@ant-design/icons/VerticalAlignTopOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));
var _react = _interopRequireWildcard(require("react"));
var _FloatButton = _interopRequireWildcard(require("./FloatButton"));
var _configProvider = require("../config-provider");
var _getScroll = _interopRequireDefault(require("../_util/getScroll"));
var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));
var _throttleByAnimationFrame = _interopRequireDefault(require("../_util/throttleByAnimationFrame"));
var _context = _interopRequireDefault(require("./context"));
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
var BackTop = function BackTop(props) {
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$visibilityHeig = props.visibilityHeight,
    visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/_react["default"].createElement(_VerticalAlignTopOutlined["default"], null) : _props$icon,
    target = props.target,
    onClick = props.onClick,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 450 : _props$duration,
    restProps = __rest(props, ["prefixCls", "className", "type", "shape", "visibilityHeight", "icon", "target", "onClick", "duration"]);
  var _useState = (0, _react.useState)(visibilityHeight === 0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var ref = (0, _react.useRef)(null);
  var scrollEvent = (0, _react.useRef)(null);
  var getDefaultTarget = function getDefaultTarget() {
    return ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
  };
  var handleScroll = (0, _throttleByAnimationFrame["default"])(function (e) {
    var scrollTop = (0, _getScroll["default"])(e.target, true);
    setVisible(scrollTop >= visibilityHeight);
  });
  var bindScrollEvent = function bindScrollEvent() {
    var getTarget = target || getDefaultTarget;
    var container = getTarget();
    scrollEvent.current = (0, _addEventListener["default"])(container, 'scroll', handleScroll);
    handleScroll({
      target: container
    });
  };
  (0, _react.useEffect)(function () {
    bindScrollEvent();
    return function () {
      var _a;
      handleScroll.cancel();
      (_a = scrollEvent.current) === null || _a === void 0 ? void 0 : _a.remove();
    };
  }, [target]);
  var scrollToTop = function scrollToTop(e) {
    (0, _scrollTo["default"])(0, {
      getContainer: target || getDefaultTarget,
      duration: duration
    });
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls(_FloatButton.floatButtonPrefixCls, customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 1),
    wrapSSR = _useStyle2[0];
  var groupShape = (0, _react.useContext)(_context["default"]);
  var mergeShape = groupShape || shape;
  var contentProps = (0, _extends2["default"])({
    prefixCls: prefixCls,
    icon: icon,
    type: type,
    shape: mergeShape
  }, restProps);
  return wrapSSR( /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
    visible: visible,
    motionName: rootPrefixCls + "-fade"
  }, function (_ref) {
    var motionClassName = _ref.className;
    return /*#__PURE__*/_react["default"].createElement(_FloatButton["default"], (0, _extends2["default"])({
      ref: ref
    }, contentProps, {
      onClick: scrollToTop,
      className: (0, _classnames["default"])(className, motionClassName)
    }));
  }));
};
var _default = /*#__PURE__*/(0, _react.memo)(BackTop);
exports["default"] = _default;
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
var _VerticalAlignTopOutlined = _interopRequireDefault(require("@ant-design/icons/VerticalAlignTopOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _getScroll = _interopRequireDefault(require("../_util/getScroll"));
var _reactNode = require("../_util/reactNode");
var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));
var _throttleByAnimationFrame = _interopRequireDefault(require("../_util/throttleByAnimationFrame"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _style = _interopRequireDefault(require("./style"));
var BackTop = function BackTop(props) {
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$visibilityHeig = props.visibilityHeight,
    visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig,
    target = props.target,
    onClick = props.onClick,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 450 : _props$duration;
  var _React$useState = React.useState(visibilityHeight === 0),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var ref = React.useRef(null);
  var scrollEvent = React.useRef(null);
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
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'BackTop', '`BackTop` is deprecated, please use `FloatButton.BackTop` instead.') : void 0;
  }
  React.useEffect(function () {
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
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('back-top', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var classString = (0, _classnames["default"])(hashId, prefixCls, (0, _defineProperty2["default"])({}, prefixCls + "-rtl", direction === 'rtl'), className);
  // fix https://fb.me/react-unknown-prop
  var divProps = (0, _omit["default"])(props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target']);
  var defaultElement = /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-icon"
  }, /*#__PURE__*/React.createElement(_VerticalAlignTopOutlined["default"], null)));
  return wrapSSR( /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
    className: classString,
    onClick: scrollToTop,
    ref: ref
  }), /*#__PURE__*/React.createElement(_rcMotion["default"], {
    visible: visible,
    motionName: rootPrefixCls + "-fade"
  }, function (_ref) {
    var motionClassName = _ref.className;
    return (0, _reactNode.cloneElement)(props.children || defaultElement, function (_ref2) {
      var cloneCls = _ref2.className;
      return {
        className: (0, _classnames["default"])(motionClassName, cloneCls)
      };
    });
  })));
};
var _default = /*#__PURE__*/React.memo(BackTop);
exports["default"] = _default;
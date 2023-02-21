"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genPurePanel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = _interopRequireWildcard(require("../config-provider"));
/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls) {
  return function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      style = props.style;
    var holderRef = React.useRef(null);
    var _React$useState = React.useState(0),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      popupHeight = _React$useState2[0],
      setPopupHeight = _React$useState2[1];
    var _React$useState3 = React.useState(0),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      popupWidth = _React$useState4[0],
      setPopupWidth = _React$useState4[1];
    var _useMergedState = (0, _useMergedState3["default"])(false, {
        value: props.open
      }),
      _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
      open = _useMergedState2[0],
      setOpen = _useMergedState2[1];
    var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;
    var prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    React.useEffect(function () {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        var resizeObserver = new ResizeObserver(function (entries) {
          var element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        var interval = setInterval(function () {
          var _a;
          var dropdownCls = getDropdownCls ? "." + getDropdownCls(prefixCls) : "." + prefixCls + "-dropdown";
          var popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return function () {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    return /*#__PURE__*/React.createElement(_configProvider["default"], {
      theme: {
        token: {
          motionDurationFast: '0.01s',
          motionDurationMid: '0.01s',
          motionDurationSlow: '0.01s'
        }
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        width: 'fit-content',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, props, {
      style: (0, _extends2["default"])((0, _extends2["default"])({}, style), {
        margin: 0
      }),
      open: open,
      visible: open,
      getPopupContainer: function getPopupContainer() {
        return holderRef.current;
      }
    }))));
  };
}
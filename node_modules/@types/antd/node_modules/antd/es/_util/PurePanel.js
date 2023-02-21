import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import useMergedState from "rc-util/es/hooks/useMergedState";
import * as React from 'react';
import ConfigProvider, { ConfigContext } from '../config-provider';
/* istanbul ignore next */
export default function genPurePanel(Component, defaultPrefixCls, getDropdownCls) {
  return function PurePanel(props) {
    var customizePrefixCls = props.prefixCls,
      style = props.style;
    var holderRef = React.useRef(null);
    var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popupHeight = _React$useState2[0],
      setPopupHeight = _React$useState2[1];
    var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      popupWidth = _React$useState4[0],
      setPopupWidth = _React$useState4[1];
    var _useMergedState = useMergedState(false, {
        value: props.open
      }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      open = _useMergedState2[0],
      setOpen = _useMergedState2[1];
    var _React$useContext = React.useContext(ConfigContext),
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
    return /*#__PURE__*/React.createElement(ConfigProvider, {
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
    }, /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      style: _extends(_extends({}, style), {
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
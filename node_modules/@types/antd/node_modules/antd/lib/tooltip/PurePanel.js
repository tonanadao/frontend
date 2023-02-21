"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PurePanel;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _rcTooltip = require("rc-tooltip");
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _util = require("./util");
// ant-tooltip css-dev-only-do-not-override-w2s56n ant-tooltip-placement-top  ant-tooltip-hidden
function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    title = props.title,
    color = props.color,
    overlayInnerStyle = props.overlayInnerStyle;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls, true),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  // Color
  var colorInfo = (0, _util.parseColor)(prefixCls, color);
  var formattedOverlayInnerStyle = (0, _extends2["default"])((0, _extends2["default"])({}, overlayInnerStyle), colorInfo.overlayStyle);
  var arrowContentStyle = colorInfo.arrowStyle;
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(hashId, prefixCls, prefixCls + "-pure", prefixCls + "-placement-" + placement, className, colorInfo.className),
    style: arrowContentStyle
  }, /*#__PURE__*/React.createElement(_rcTooltip.Popup, (0, _extends2["default"])({}, props, {
    className: hashId,
    prefixCls: prefixCls,
    overlayInnerStyle: formattedOverlayInnerStyle
  }), title)));
}
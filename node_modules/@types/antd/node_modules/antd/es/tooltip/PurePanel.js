import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { Popup } from 'rc-tooltip';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import { parseColor } from './util';
// ant-tooltip css-dev-only-do-not-override-w2s56n ant-tooltip-placement-top  ant-tooltip-hidden
export default function PurePanel(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    title = props.title,
    color = props.color,
    overlayInnerStyle = props.overlayInnerStyle;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var _useStyle = useStyle(prefixCls, true),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  // Color
  var colorInfo = parseColor(prefixCls, color);
  var formattedOverlayInnerStyle = _extends(_extends({}, overlayInnerStyle), colorInfo.overlayStyle);
  var arrowContentStyle = colorInfo.arrowStyle;
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: classNames(hashId, prefixCls, prefixCls + "-pure", prefixCls + "-placement-" + placement, className, colorInfo.className),
    style: arrowContentStyle
  }, /*#__PURE__*/React.createElement(Popup, _extends({}, props, {
    className: hashId,
    prefixCls: prefixCls,
    overlayInnerStyle: formattedOverlayInnerStyle
  }), title)));
}
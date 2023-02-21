import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import React, { useContext } from 'react';
import RCTour from '@rc-component/tour';
import classNames from 'classnames';
import panelRender from './panelRender';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import PurePanel from './PurePanel';
var Tour = function Tour(props) {
  var customizePrefixCls = props.prefixCls,
    steps = props.steps,
    current = props.current,
    type = props.type,
    rootClassName = props.rootClassName,
    restProps = __rest(props, ["prefixCls", "steps", "current", "type", "rootClassName"]);
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var prefixCls = getPrefixCls('tour', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var customClassName = classNames(_defineProperty({}, prefixCls + "-rtl", direction === 'rtl'), _defineProperty({}, prefixCls + "-primary", type === 'primary'), hashId, rootClassName);
  var mergedRenderPanel = function mergedRenderPanel(stepProps, stepCurrent) {
    return panelRender(stepProps, stepCurrent, type);
  };
  return wrapSSR( /*#__PURE__*/React.createElement(RCTour, _extends({}, restProps, {
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
Tour._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default Tour;
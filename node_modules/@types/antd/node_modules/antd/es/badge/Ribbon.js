import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import { isPresetColor } from './utils';
var Ribbon = function Ribbon(_ref) {
  var _classNames;
  var className = _ref.className,
    customizePrefixCls = _ref.prefixCls,
    style = _ref.style,
    color = _ref.color,
    children = _ref.children,
    text = _ref.text,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'end' : _ref$placement;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('ribbon', customizePrefixCls);
  var colorInPreset = isPresetColor(color);
  var ribbonCls = classNames(prefixCls, prefixCls + "-placement-" + placement, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, prefixCls + "-color-" + color, colorInPreset), _classNames), className);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var colorStyle = {};
  var cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: classNames(prefixCls + "-wrapper", hashId)
  }, children, /*#__PURE__*/React.createElement("div", {
    className: classNames(ribbonCls, hashId),
    style: _extends(_extends({}, colorStyle), style)
  }, /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-text"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-corner",
    style: cornerColorStyle
  }))));
};
export default Ribbon;
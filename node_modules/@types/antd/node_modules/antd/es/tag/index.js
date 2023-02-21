import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { PresetColorTypes, PresetStatusColorTypes } from '../_util/colors';
import Wave from '../_util/wave';
import warning from '../_util/warning';
import CheckableTag from './CheckableTag';
import useStyle from './style';
var PresetColorRegex = new RegExp("^(" + PresetColorTypes.join('|') + ")(-inverse)?$");
var PresetStatusColorRegex = new RegExp("^(" + PresetStatusColorTypes.join('|') + ")$");
var InternalTag = function InternalTag(_a, ref) {
  var _classNames;
  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    style = _a.style,
    children = _a.children,
    icon = _a.icon,
    color = _a.color,
    onClose = _a.onClose,
    closeIcon = _a.closeIcon,
    _a$closable = _a.closable,
    closable = _a$closable === void 0 ? false : _a$closable,
    props = __rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var _React$useState = React.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  // Warning for deprecated usage
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!('visible' in props), 'Tag', '`visible` is deprecated, please use `visible && <Tag />` instead.') : void 0;
  }
  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);
  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };
  var tagStyle = _extends({
    backgroundColor: color && !isPresetColor() ? color : undefined
  }, style);
  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var tagClassName = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-" + color, presetColor), _defineProperty(_classNames, prefixCls + "-has-color", color && !presetColor), _defineProperty(_classNames, prefixCls + "-hidden", !visible), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon ? /*#__PURE__*/React.createElement("span", {
        className: prefixCls + "-close-icon",
        onClick: handleCloseClick
      }, closeIcon) : /*#__PURE__*/React.createElement(CloseOutlined, {
        className: prefixCls + "-close-icon",
        onClick: handleCloseClick
      });
    }
    return null;
  };
  var isNeedWave = 'onClick' in props || children && children.type === 'a';
  var iconNode = icon || null;
  var kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
  var tagNode = /*#__PURE__*/React.createElement("span", _extends({}, props, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, renderCloseIcon());
  return wrapSSR(isNeedWave ? /*#__PURE__*/React.createElement(Wave, null, tagNode) : tagNode);
};
var Tag = /*#__PURE__*/React.forwardRef(InternalTag);
if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = 'Tag';
}
Tag.CheckableTag = CheckableTag;
export default Tag;
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
import RcMenu from 'rc-menu';
import * as React from 'react';
import { forwardRef } from 'react';
import omit from "rc-util/es/omit";
import useEvent from "rc-util/es/hooks/useEvent";
import classNames from 'classnames';
import EllipsisOutlined from "@ant-design/icons/es/icons/EllipsisOutlined";
import warning from '../_util/warning';
import initCollapseMotion from '../_util/motion';
import { cloneElement } from '../_util/reactNode';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import OverrideContext from './OverrideContext';
import useItems from './hooks/useItems';
import MenuContext from './MenuContext';
var InternalMenu = /*#__PURE__*/forwardRef(function (props, ref) {
  var _a;
  var override = React.useContext(OverrideContext);
  var overrideObj = override || {};
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    getPopupContainer = _React$useContext.getPopupContainer,
    direction = _React$useContext.direction;
  var rootPrefixCls = getPrefixCls();
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? 'light' : _props$theme,
    expandIcon = props.expandIcon,
    _internalDisableMenuItemTitleTooltip = props._internalDisableMenuItemTitleTooltip,
    inlineCollapsed = props.inlineCollapsed,
    siderCollapsed = props.siderCollapsed,
    items = props.items,
    children = props.children,
    rootClassName = props.rootClassName,
    mode = props.mode,
    selectable = props.selectable,
    onClick = props.onClick,
    restProps = __rest(props, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "rootClassName", "mode", "selectable", "onClick"]);
  var passedProps = omit(restProps, ['collapsedWidth']);
  // ========================= Items ===========================
  var mergedChildren = useItems(items) || children;
  // ======================== Warning ==========================
  process.env.NODE_ENV !== "production" ? warning(!('inlineCollapsed' in props && mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.') : void 0;
  process.env.NODE_ENV !== "production" ? warning(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.') : void 0;
  process.env.NODE_ENV !== "production" ? warning('items' in props && !children, 'Menu', '`children` will be removed in next major version. Please use `items` instead.') : void 0;
  (_a = overrideObj.validator) === null || _a === void 0 ? void 0 : _a.call(overrideObj, {
    mode: mode
  });
  // ========================== Click ==========================
  // Tell dropdown that item clicked
  var onItemClick = useEvent(function () {
    var _a;
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, arguments);
    (_a = overrideObj.onClick) === null || _a === void 0 ? void 0 : _a.call(overrideObj);
  });
  // ========================== Mode ===========================
  var mergedMode = overrideObj.mode || mode;
  // ======================= Selectable ========================
  var mergedSelectable = selectable !== null && selectable !== void 0 ? selectable : overrideObj.selectable;
  // ======================== Collapsed ========================
  // Inline Collapsed
  var mergedInlineCollapsed = React.useMemo(function () {
    if (siderCollapsed !== undefined) {
      return siderCollapsed;
    }
    return inlineCollapsed;
  }, [inlineCollapsed, siderCollapsed]);
  var defaultMotions = {
    horizontal: {
      motionName: rootPrefixCls + "-slide-up"
    },
    inline: initCollapseMotion(rootPrefixCls),
    other: {
      motionName: rootPrefixCls + "-zoom-big"
    }
  };
  var prefixCls = getPrefixCls('menu', customizePrefixCls || overrideObj.prefixCls);
  var _useStyle = useStyle(prefixCls, !override),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var menuClassName = classNames(prefixCls + "-" + theme, className);
  // ====================== Expand Icon ========================
  var mergedExpandIcon;
  if (typeof expandIcon === 'function') {
    mergedExpandIcon = expandIcon;
  } else {
    mergedExpandIcon = cloneElement(expandIcon || overrideObj.expandIcon, {
      className: prefixCls + "-submenu-expand-icon"
    });
  }
  // ======================== Context ==========================
  var contextValue = React.useMemo(function () {
    return {
      prefixCls: prefixCls,
      inlineCollapsed: mergedInlineCollapsed || false,
      direction: direction,
      firstLevel: true,
      theme: theme,
      mode: mergedMode,
      disableMenuItemTitleTooltip: _internalDisableMenuItemTitleTooltip
    };
  }, [prefixCls, mergedInlineCollapsed, direction, _internalDisableMenuItemTitleTooltip, theme]);
  // ========================= Render ==========================
  return wrapSSR( /*#__PURE__*/React.createElement(OverrideContext.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(RcMenu, _extends({
    getPopupContainer: getPopupContainer,
    overflowedIndicator: /*#__PURE__*/React.createElement(EllipsisOutlined, null),
    overflowedIndicatorPopupClassName: prefixCls + "-" + theme,
    mode: mergedMode,
    selectable: mergedSelectable,
    onClick: onItemClick
  }, passedProps, {
    inlineCollapsed: mergedInlineCollapsed,
    className: menuClassName,
    prefixCls: prefixCls,
    direction: direction,
    defaultMotions: defaultMotions,
    expandIcon: mergedExpandIcon,
    ref: ref,
    rootClassName: classNames(rootClassName, hashId)
  }), mergedChildren))));
});
export default InternalMenu;
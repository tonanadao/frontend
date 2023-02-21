import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
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
import classNames from 'classnames';
import RcTooltip from 'rc-tooltip';
import useMergedState from "rc-util/es/hooks/useMergedState";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { getTransitionName } from '../_util/motion';
import getPlacements from '../_util/placements';
import { cloneElement, isValidElement, isFragment } from '../_util/reactNode';
import warning from '../_util/warning';
import PurePanel from './PurePanel';
import useStyle from './style';
import { parseColor } from './util';
var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omitted = _extends({}, obj);
  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};
// Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18
function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;
  if ((elementType.__ANT_BUTTON === true || element.type === 'button') && element.props.disabled || elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading) || elementType.__ANT_RADIO === true && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
      picked = _splitObject.picked,
      omitted = _splitObject.omitted;
    var spanStyle = _extends(_extends({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : undefined
    });
    var buttonStyle = _extends(_extends({}, omitted), {
      pointerEvents: 'none'
    });
    var child = cloneElement(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/React.createElement("span", {
      style: spanStyle,
      className: classNames(element.props.className, prefixCls + "-disabled-compatible-wrapper")
    }, child);
  }
  return element;
}
var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a, _b;
  var customizePrefixCls = props.prefixCls,
    openClassName = props.openClassName,
    getTooltipContainer = props.getTooltipContainer,
    overlayClassName = props.overlayClassName,
    color = props.color,
    overlayInnerStyle = props.overlayInnerStyle,
    children = props.children,
    afterOpenChange = props.afterOpenChange,
    afterVisibleChange = props.afterVisibleChange;
  var _React$useContext = React.useContext(ConfigContext),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  if (process.env.NODE_ENV !== 'production') {
    [['visible', 'open'], ['defaultVisible', 'defaultOpen'], ['onVisibleChange', 'onOpenChange'], ['afterVisibleChange', 'afterOpenChange']].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        deprecatedName = _ref2[0],
        newName = _ref2[1];
      process.env.NODE_ENV !== "production" ? warning(!(deprecatedName in props), 'Tooltip', "`" + deprecatedName + "` is deprecated, please use `" + newName + "` instead.") : void 0;
    });
  }
  var _useMergedState = useMergedState(false, {
      value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
      defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  var isNoTitle = function isNoTitle() {
    var title = props.title,
      overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onOpenChange = function onOpenChange(vis) {
    var _a, _b;
    setOpen(isNoTitle() ? false : vis);
    if (!isNoTitle()) {
      (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
      (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
    }
  };
  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
      _props$arrowPointAtCe = props.arrowPointAtCenter,
      arrowPointAtCenter = _props$arrowPointAtCe === void 0 ? false : _props$arrowPointAtCe,
      _props$autoAdjustOver = props.autoAdjustOverflow,
      autoAdjustOverflow = _props$autoAdjustOver === void 0 ? true : _props$autoAdjustOver;
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  };
  // 动态设置动画点
  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements();
    // 当前返回的位置
    var placement = Object.keys(placements).find(function (key) {
      var _a, _b;
      return placements[key].points[0] === ((_a = align.points) === null || _a === void 0 ? void 0 : _a[0]) && placements[key].points[1] === ((_b = align.points) === null || _b === void 0 ? void 0 : _b[1]);
    });
    if (!placement) {
      return;
    }
    // 根据当前坐标设置动画点
    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };
    if (/top|Bottom/.test(placement)) {
      transformOrigin.top = rect.height - align.offset[1] + "px";
    } else if (/Top|bottom/.test(placement)) {
      transformOrigin.top = -align.offset[1] + "px";
    }
    if (/left|Right/.test(placement)) {
      transformOrigin.left = rect.width - align.offset[0] + "px";
    } else if (/right|Left/.test(placement)) {
      transformOrigin.left = -align.offset[0] + "px";
    }
    domNode.style.transformOrigin = transformOrigin.left + " " + transformOrigin.top;
  };
  var getOverlay = function getOverlay() {
    var title = props.title,
      overlay = props.overlay;
    if (title === 0) {
      return title;
    }
    return overlay || title || '';
  };
  var getPopupContainer = props.getPopupContainer,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'top' : _props$placement,
    _props$mouseEnterDela = props.mouseEnterDelay,
    mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0.1 : _props$mouseEnterDela,
    _props$mouseLeaveDela = props.mouseLeaveDelay,
    mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
    overlayStyle = props.overlayStyle,
    otherProps = __rest(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]);
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var injectFromPopover = props['data-popover-inject'];
  var tempOpen = open;
  // Hide tooltip when there is no title
  if (!('open' in props) && !('visible' in props) && isNoTitle()) {
    tempOpen = false;
  }
  var child = getDisabledCompatibleChildren(isValidElement(children) && !isFragment(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = !childProps.className || typeof childProps.className === 'string' ? classNames(childProps.className, _defineProperty({}, openClassName || prefixCls + "-open", true)) : childProps.className;
  // Style
  var _useStyle = useStyle(prefixCls, !injectFromPopover),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  // Color
  var colorInfo = parseColor(prefixCls, color);
  var formattedOverlayInnerStyle = _extends(_extends({}, overlayInnerStyle), colorInfo.overlayStyle);
  var arrowContentStyle = colorInfo.arrowStyle;
  var customOverlayClassName = classNames(overlayClassName, _defineProperty({}, prefixCls + "-rtl", direction === 'rtl'), colorInfo.className, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement(RcTooltip, _extends({}, otherProps, {
    placement: placement,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    overlayStyle: _extends(_extends({}, arrowContentStyle), overlayStyle),
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempOpen,
    onVisibleChange: onOpenChange,
    afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-arrow-content"
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    }
  }), tempOpen ? cloneElement(child, {
    className: childCls
  }) : child));
});
if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}
Tooltip._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default Tooltip;
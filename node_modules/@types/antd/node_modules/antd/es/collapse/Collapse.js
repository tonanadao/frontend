import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import RightOutlined from "@ant-design/icons/es/icons/RightOutlined";
import classNames from 'classnames';
import RcCollapse from 'rc-collapse';
import * as React from 'react';
import toArray from "rc-util/es/Children/toArray";
import omit from "rc-util/es/omit";
import { ConfigContext } from '../config-provider';
import initCollapseMotion from '../_util/motion';
import { cloneElement } from '../_util/reactNode';
import warning from '../_util/warning';
import CollapsePanel from './CollapsePanel';
import useStyle from './style';
var Collapse = function Collapse(props) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    ghost = props.ghost,
    _props$expandIconPosi = props.expandIconPosition,
    expandIconPosition = _props$expandIconPosi === void 0 ? 'start' : _props$expandIconPosi;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  // Warning if use legacy type `expandIconPosition`
  process.env.NODE_ENV !== "production" ? warning(expandIconPosition !== 'left' && expandIconPosition !== 'right', 'Collapse', '`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.') : void 0;
  // Align with logic position
  var mergedExpandIconPosition = React.useMemo(function () {
    if (expandIconPosition === 'left') {
      return 'start';
    }
    return expandIconPosition === 'right' ? 'end' : expandIconPosition;
  }, [expandIconPosition]);
  var renderExpandIcon = function renderExpandIcon() {
    var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var expandIcon = props.expandIcon;
    var icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/React.createElement(RightOutlined, {
      rotate: panelProps.isActive ? 90 : undefined
    });
    return cloneElement(icon, function () {
      return {
        className: classNames(icon.props.className, prefixCls + "-arrow")
      };
    });
  };
  var collapseClassName = classNames(prefixCls + "-icon-position-" + mergedExpandIconPosition, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-borderless", !bordered), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, prefixCls + "-ghost", !!ghost), _classNames), className, hashId);
  var openMotion = _extends(_extends({}, initCollapseMotion(rootPrefixCls)), {
    motionAppear: false,
    leavedClassName: prefixCls + "-content-hidden"
  });
  var getItems = function getItems() {
    var children = props.children;
    return toArray(children).map(function (child, index) {
      var _a;
      if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
        var key = child.key || String(index);
        var _child$props = child.props,
          disabled = _child$props.disabled,
          collapsible = _child$props.collapsible;
        var childProps = _extends(_extends({}, omit(child.props, ['disabled'])), {
          key: key,
          collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
        });
        return cloneElement(child, childProps);
      }
      return child;
    });
  };
  return wrapSSR( /*#__PURE__*/React.createElement(RcCollapse, _extends({
    openMotion: openMotion
  }, props, {
    expandIcon: renderExpandIcon,
    prefixCls: prefixCls,
    className: collapseClassName
  }), getItems()));
};
Collapse.Panel = CollapsePanel;
export default Collapse;
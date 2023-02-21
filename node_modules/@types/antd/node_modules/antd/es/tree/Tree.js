import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import HolderOutlined from "@ant-design/icons/es/icons/HolderOutlined";
import classNames from 'classnames';
import RcTree from 'rc-tree';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import initCollapseMotion from '../_util/motion';
import dropIndicatorRender from './utils/dropIndicator';
import renderSwitcherIcon from './utils/iconUtil';
import useStyle from './style';
var Tree = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    virtual = _React$useContext.virtual;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    _props$showIcon = props.showIcon,
    showIcon = _props$showIcon === void 0 ? false : _props$showIcon,
    showLine = props.showLine,
    _switcherIcon = props.switcherIcon,
    _props$blockNode = props.blockNode,
    blockNode = _props$blockNode === void 0 ? false : _props$blockNode,
    children = props.children,
    _props$checkable = props.checkable,
    checkable = _props$checkable === void 0 ? false : _props$checkable,
    _props$selectable = props.selectable,
    selectable = _props$selectable === void 0 ? true : _props$selectable,
    draggable = props.draggable,
    customMotion = props.motion;
  var prefixCls = getPrefixCls('tree', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var motion = customMotion !== null && customMotion !== void 0 ? customMotion : _extends(_extends({}, initCollapseMotion(rootPrefixCls)), {
    motionAppear: false
  });
  var newProps = _extends(_extends({}, props), {
    checkable: checkable,
    selectable: selectable,
    showIcon: showIcon,
    motion: motion,
    blockNode: blockNode,
    showLine: Boolean(showLine),
    dropIndicatorRender: dropIndicatorRender
  });
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var draggableConfig = React.useMemo(function () {
    if (!draggable) {
      return false;
    }
    var mergedDraggable = {};
    switch (_typeof(draggable)) {
      case 'function':
        mergedDraggable.nodeDraggable = draggable;
        break;
      case 'object':
        mergedDraggable = _extends({}, draggable);
        break;
      default:
        break;
      // Do nothing
    }

    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/React.createElement(HolderOutlined, null);
    }
    return mergedDraggable;
  }, [draggable]);
  return wrapSSR( /*#__PURE__*/React.createElement(RcTree, _extends({
    itemHeight: 20,
    ref: ref,
    virtual: virtual
  }, newProps, {
    prefixCls: prefixCls,
    className: classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + "-icon-hide", !showIcon), _defineProperty(_classNames, prefixCls + "-block-node", blockNode), _defineProperty(_classNames, prefixCls + "-unselectable", !selectable), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId),
    direction: direction,
    checkable: checkable ? /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-checkbox-inner"
    }) : checkable,
    selectable: selectable,
    switcherIcon: function switcherIcon(nodeProps) {
      return renderSwitcherIcon(prefixCls, _switcherIcon, showLine, nodeProps);
    },
    draggable: draggableConfig
  }), children));
});
export default Tree;
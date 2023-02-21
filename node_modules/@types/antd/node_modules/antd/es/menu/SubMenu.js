import _extends from "@babel/runtime/helpers/esm/extends";
import classNames from 'classnames';
import { SubMenu as RcSubMenu, useFullPath } from 'rc-menu';
import omit from "rc-util/es/omit";
import * as React from 'react';
import { cloneElement, isValidElement } from '../_util/reactNode';
import MenuContext from './MenuContext';
function SubMenu(props) {
  var _a;
  var popupClassName = props.popupClassName,
    icon = props.icon,
    title = props.title,
    customTheme = props.theme;
  var context = React.useContext(MenuContext);
  var prefixCls = context.prefixCls,
    inlineCollapsed = context.inlineCollapsed,
    contextTheme = context.theme,
    mode = context.mode;
  var parentPath = useFullPath();
  var titleNode;
  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-inline-collapsed-noicon"
    }, title.charAt(0)) : /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-title-content"
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = isValidElement(title) && title.type === 'span';
    titleNode = /*#__PURE__*/React.createElement(React.Fragment, null, cloneElement(icon, {
      className: classNames(isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', prefixCls + "-item-icon")
    }), titleIsSpan ? title : /*#__PURE__*/React.createElement("span", {
      className: prefixCls + "-title-content"
    }, title));
  }
  var contextValue = React.useMemo(function () {
    return _extends(_extends({}, context), {
      firstLevel: false
    });
  }, [context]);
  var popupOffset = mode === 'horizontal' ? [0, 8] : [10, 0];
  return /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(RcSubMenu, _extends({
    popupOffset: popupOffset
  }, omit(props, ['icon']), {
    title: titleNode,
    popupClassName: classNames(prefixCls, popupClassName, prefixCls + "-" + (customTheme || contextTheme))
  })));
}
export default SubMenu;
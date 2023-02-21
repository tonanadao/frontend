import _extends from "@babel/runtime/helpers/esm/extends";
import { ItemGroup } from 'rc-menu';
import * as React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import InternalMenu from './menu';
import { SiderContext } from '../layout/Sider';
import MenuDivider from './MenuDivider';
import Item from './MenuItem';
import SubMenu from './SubMenu';
var Menu = /*#__PURE__*/forwardRef(function (props, ref) {
  var menuRef = useRef(null);
  var context = React.useContext(SiderContext);
  useImperativeHandle(ref, function () {
    return {
      focus: function focus(options) {
        var _a;
        (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
      },
      menu: menuRef.current
    };
  });
  return /*#__PURE__*/React.createElement(InternalMenu, _extends({
    ref: menuRef
  }, props, context));
});
Menu.Divider = MenuDivider;
Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
export default Menu;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _rcMenu = require("rc-menu");
var React = _interopRequireWildcard(require("react"));
var _menu = _interopRequireDefault(require("./menu"));
var _Sider = require("../layout/Sider");
var _MenuDivider = _interopRequireDefault(require("./MenuDivider"));
var _MenuItem = _interopRequireDefault(require("./MenuItem"));
var _SubMenu = _interopRequireDefault(require("./SubMenu"));
var Menu = /*#__PURE__*/(0, React.forwardRef)(function (props, ref) {
  var menuRef = (0, React.useRef)(null);
  var context = React.useContext(_Sider.SiderContext);
  (0, React.useImperativeHandle)(ref, function () {
    return {
      focus: function focus(options) {
        var _a;
        (_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.focus(options);
      },
      menu: menuRef.current
    };
  });
  return /*#__PURE__*/React.createElement(_menu["default"], (0, _extends2["default"])({
    ref: menuRef
  }, props, context));
});
Menu.Divider = _MenuDivider["default"];
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;
var _default = Menu;
exports["default"] = _default;
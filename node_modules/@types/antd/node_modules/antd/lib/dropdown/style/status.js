"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStatusStyle = function genStatusStyle(token) {
  var componentCls = token.componentCls,
    menuCls = token.menuCls,
    colorError = token.colorError,
    colorTextLightSolid = token.colorTextLightSolid;
  var itemCls = menuCls + "-item";
  return (0, _defineProperty2["default"])({}, componentCls + ", " + componentCls + "-menu-submenu", (0, _defineProperty2["default"])({}, menuCls + " " + itemCls, (0, _defineProperty2["default"])({}, "&" + itemCls + "-danger", {
    color: colorError,
    '&:hover': {
      color: colorTextLightSolid,
      backgroundColor: colorError
    }
  })));
};
var _default = genStatusStyle;
exports["default"] = _default;
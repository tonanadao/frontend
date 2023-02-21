"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStickyStyle = function genStickyStyle(token) {
  var componentCls = token.componentCls,
    opacityLoading = token.opacityLoading,
    tableScrollThumbBg = token.tableScrollThumbBg,
    tableScrollThumbBgHover = token.tableScrollThumbBgHover,
    tableScrollThumbSize = token.tableScrollThumbSize,
    tableScrollBg = token.tableScrollBg,
    zIndexTableSticky = token.zIndexTableSticky;
  var tableBorder = token.lineWidth + "px " + token.lineType + " " + token.tableBorderColor;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, componentCls + "-sticky", {
    '&-holder': {
      position: 'sticky',
      zIndex: zIndexTableSticky,
      background: token.colorBgContainer
    },
    '&-scroll': {
      position: 'sticky',
      bottom: 0,
      height: tableScrollThumbSize + "px !important",
      zIndex: zIndexTableSticky,
      display: 'flex',
      alignItems: 'center',
      background: tableScrollBg,
      borderTop: tableBorder,
      opacity: opacityLoading,
      '&:hover': {
        transformOrigin: 'center bottom'
      },
      // fake scrollbar style of sticky
      '&-bar': {
        height: tableScrollThumbSize,
        backgroundColor: tableScrollThumbBg,
        borderRadius: 100,
        transition: "all " + token.motionDurationSlow + ", transform none",
        position: 'absolute',
        bottom: 0,
        '&:hover, &-active': {
          backgroundColor: tableScrollThumbBgHover
        }
      }
    }
  }));
};
var _default = genStickyStyle;
exports["default"] = _default;
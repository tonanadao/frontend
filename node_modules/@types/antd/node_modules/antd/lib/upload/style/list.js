"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../style");
var genListStyle = function genListStyle(token) {
  var _actionsCls, _itemCls, _actionsCls2, _ref, _extends2;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    iconCls = token.iconCls,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  var itemCls = componentCls + "-list-item";
  var actionsCls = itemCls + "-actions";
  var actionCls = itemCls + "-action";
  var listItemHeightSM = Math.round(fontSize * lineHeight);
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, componentCls + "-list", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.clearFix)()), (_extends2 = {
    lineHeight: token.lineHeight
  }, (0, _defineProperty2["default"])(_extends2, itemCls, (_itemCls = {
    position: 'relative',
    height: token.lineHeight * fontSize,
    marginTop: token.marginXS,
    fontSize: fontSize,
    display: 'flex',
    alignItems: 'center',
    transition: "background-color " + token.motionDurationSlow,
    '&:hover': {
      backgroundColor: token.controlItemBgHover
    }
  }, (0, _defineProperty2["default"])(_itemCls, itemCls + "-name", (0, _extends3["default"])((0, _extends3["default"])({}, _style.textEllipsis), {
    padding: "0 " + token.paddingXS + "px",
    lineHeight: lineHeight,
    flex: 'auto',
    transition: "all " + token.motionDurationSlow
  })), (0, _defineProperty2["default"])(_itemCls, actionsCls, (_actionsCls = {}, (0, _defineProperty2["default"])(_actionsCls, actionCls, {
    opacity: 0
  }), (0, _defineProperty2["default"])(_actionsCls, "" + actionCls + antCls + "-btn-sm", {
    height: listItemHeightSM,
    border: 0,
    lineHeight: 1,
    // FIXME: should not override small button
    '> span': {
      transform: 'scale(1)'
    }
  }), (0, _defineProperty2["default"])(_actionsCls, "\n              " + actionCls + ":focus,\n              &.picture " + actionCls + "\n            ", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_actionsCls, iconCls, {
    color: token.colorTextDescription,
    transition: "all " + token.motionDurationSlow
  }), (0, _defineProperty2["default"])(_actionsCls, "&:hover " + iconCls, {
    color: token.colorText
  }), _actionsCls)), (0, _defineProperty2["default"])(_itemCls, componentCls + "-icon " + iconCls, {
    color: token.colorTextDescription,
    fontSize: fontSize
  }), (0, _defineProperty2["default"])(_itemCls, itemCls + "-progress", {
    position: 'absolute',
    bottom: -token.uploadProgressOffset,
    width: '100%',
    paddingInlineStart: fontSize + token.paddingXS,
    fontSize: fontSize,
    lineHeight: 0,
    pointerEvents: 'none',
    '> div': {
      margin: 0
    }
  }), _itemCls)), (0, _defineProperty2["default"])(_extends2, itemCls + ":hover " + actionCls, {
    opacity: 1,
    color: token.colorText
  }), (0, _defineProperty2["default"])(_extends2, itemCls + "-error", (_ref = {
    color: token.colorError
  }, (0, _defineProperty2["default"])(_ref, itemCls + "-name, " + componentCls + "-icon " + iconCls, {
    color: token.colorError
  }), (0, _defineProperty2["default"])(_ref, actionsCls, (_actionsCls2 = {}, (0, _defineProperty2["default"])(_actionsCls2, iconCls + ", " + iconCls + ":hover", {
    color: token.colorError
  }), (0, _defineProperty2["default"])(_actionsCls2, actionCls, {
    opacity: 1
  }), _actionsCls2)), _ref)), (0, _defineProperty2["default"])(_extends2, componentCls + "-list-item-container", {
    transition: "opacity " + token.motionDurationSlow + ", height " + token.motionDurationSlow,
    // For smooth removing animation
    '&::before': {
      display: 'table',
      width: 0,
      height: 0,
      content: '""'
    }
  }), _extends2))));
};
var _default = genListStyle;
exports["default"] = _default;
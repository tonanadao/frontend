"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genButtonBorderStyle = function genButtonBorderStyle(buttonTypeCls, borderColor) {
  return (0, _defineProperty2["default"])({}, "> span, > " + buttonTypeCls, {
    '&:not(:last-child)': (0, _defineProperty2["default"])({}, "&, & > " + buttonTypeCls, {
      '&:not(:disabled)': {
        borderInlineEndColor: borderColor
      }
    }),
    '&:not(:first-child)': (0, _defineProperty2["default"])({}, "&, & > " + buttonTypeCls, {
      '&:not(:disabled)': {
        borderInlineStartColor: borderColor
      }
    })
  });
};
var genGroupStyle = function genGroupStyle(token) {
  var _componentCls, _ref2;
  var componentCls = token.componentCls,
    fontSize = token.fontSize,
    lineWidth = token.lineWidth,
    colorPrimaryHover = token.colorPrimaryHover,
    colorErrorHover = token.colorErrorHover;
  return (0, _defineProperty2["default"])({}, componentCls + "-group", [(_ref2 = {
    position: 'relative',
    display: 'inline-flex'
  }, (0, _defineProperty2["default"])(_ref2, "> span, > " + componentCls, {
    '&:not(:last-child)': (0, _defineProperty2["default"])({}, "&, & > " + componentCls, {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    }),
    '&:not(:first-child)': (0, _defineProperty2["default"])({
      marginInlineStart: -lineWidth
    }, "&, & > " + componentCls, {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    })
  }), (0, _defineProperty2["default"])(_ref2, componentCls, (_componentCls = {
    position: 'relative',
    zIndex: 1
  }, (0, _defineProperty2["default"])(_componentCls, "&:hover,\n          &:focus,\n          &:active", {
    zIndex: 2
  }), (0, _defineProperty2["default"])(_componentCls, '&[disabled]', {
    zIndex: 0
  }), _componentCls)), (0, _defineProperty2["default"])(_ref2, componentCls + "-icon-only", {
    fontSize: fontSize
  }), _ref2),
  // Border Color
  genButtonBorderStyle(componentCls + "-primary", colorPrimaryHover), genButtonBorderStyle(componentCls + "-danger", colorErrorHover)]);
};
var _default = genGroupStyle;
exports["default"] = _default;
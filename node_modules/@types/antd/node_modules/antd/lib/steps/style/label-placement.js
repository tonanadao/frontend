"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStepsLabelPlacementStyle = function genStepsLabelPlacementStyle(token) {
  var _ref2;
  var componentCls = token.componentCls,
    stepsIconSize = token.stepsIconSize,
    lineHeight = token.lineHeight,
    stepsSmallIconSize = token.stepsSmallIconSize;
  return (0, _defineProperty2["default"])({}, "&" + componentCls + "-label-vertical", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, componentCls + "-item", {
    overflow: 'visible',
    '&-tail': {
      marginInlineStart: stepsIconSize / 2 + token.controlHeightLG,
      padding: token.paddingXXS + "px " + token.paddingLG + "px"
    },
    '&-content': {
      display: 'block',
      width: (stepsIconSize / 2 + token.controlHeightLG) * 2,
      marginTop: token.marginSM,
      textAlign: 'center'
    },
    '&-icon': {
      display: 'inline-block',
      marginInlineStart: token.controlHeightLG
    },
    '&-title': {
      paddingInlineEnd: 0,
      paddingInlineStart: 0,
      '&::after': {
        display: 'none'
      }
    },
    '&-subtitle': {
      display: 'block',
      marginBottom: token.marginXXS,
      marginInlineStart: 0,
      lineHeight: lineHeight
    }
  }), (0, _defineProperty2["default"])(_ref2, "&" + componentCls + "-small:not(" + componentCls + "-dot)", (0, _defineProperty2["default"])({}, componentCls + "-item", {
    '&-icon': {
      marginInlineStart: token.controlHeightLG + (stepsIconSize - stepsSmallIconSize) / 2
    }
  })), _ref2));
};
var _default = genStepsLabelPlacementStyle;
exports["default"] = _default;
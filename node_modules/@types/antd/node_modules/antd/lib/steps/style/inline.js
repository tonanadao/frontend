"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genStepsInlineStyle = function genStepsInlineStyle(token) {
  var _icon, _extends3, _ref2;
  var componentCls = token.componentCls,
    inlineDotSize = token.inlineDotSize,
    inlineTitleColor = token.inlineTitleColor,
    inlineTailColor = token.inlineTailColor;
  var containerPaddingTop = token.paddingXS + token.lineWidth;
  var titleStyle = (0, _defineProperty2["default"])({}, componentCls + "-item-container " + componentCls + "-item-content " + componentCls + "-item-title", {
    color: inlineTitleColor
  });
  return (0, _defineProperty2["default"])({}, "&" + componentCls + "-inline", (0, _defineProperty2["default"])({
    width: 'auto',
    display: 'inline-flex'
  }, componentCls + "-item", (_ref2 = {
    flex: 'none',
    '&-container': (0, _defineProperty2["default"])({
      padding: containerPaddingTop + "px " + token.paddingXXS + "px 0",
      margin: "0 " + token.marginXXS / 2 + "px",
      borderRadius: token.borderRadiusSM,
      cursor: 'pointer',
      transition: "background-color " + token.motionDurationMid,
      '&:hover': {
        background: token.controlItemBgHover
      }
    }, "&[role='button']:hover", {
      opacity: 1
    }),
    '&-icon': (_icon = {
      width: inlineDotSize,
      height: inlineDotSize,
      marginInlineStart: "calc(50% - " + inlineDotSize / 2 + "px)"
    }, (0, _defineProperty2["default"])(_icon, "> " + componentCls + "-icon", {
      top: 0
    }), (0, _defineProperty2["default"])(_icon, componentCls + "-icon-dot", {
      borderRadius: token.fontSizeSM / 4
    }), _icon),
    '&-content': {
      width: 'auto',
      marginTop: token.marginXS - token.lineWidth
    },
    '&-title': {
      color: inlineTitleColor,
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
      fontWeight: 'normal',
      marginBottom: token.marginXXS / 2
    },
    '&-description': {
      display: 'none'
    },
    '&-tail': {
      marginInlineStart: 0,
      top: containerPaddingTop + inlineDotSize / 2,
      transform: "translateY(-50%)",
      '&:after': {
        width: '100%',
        height: token.lineWidth,
        borderRadius: 0,
        marginInlineStart: 0,
        background: inlineTailColor
      }
    }
  }, (0, _defineProperty2["default"])(_ref2, "&:first-child " + componentCls + "-item-tail", {
    width: '50%',
    marginInlineStart: '50%'
  }), (0, _defineProperty2["default"])(_ref2, "&:last-child " + componentCls + "-item-tail", {
    display: 'block',
    width: '50%'
  }), (0, _defineProperty2["default"])(_ref2, '&-wait', (0, _extends5["default"])((0, _defineProperty2["default"])({}, componentCls + "-item-icon " + componentCls + "-icon " + componentCls + "-icon-dot", {
    backgroundColor: token.colorBorderBg,
    border: token.lineWidth + "px " + token.lineType + " " + inlineTailColor
  }), titleStyle)), (0, _defineProperty2["default"])(_ref2, '&-finish', (0, _extends5["default"])((_extends3 = {}, (0, _defineProperty2["default"])(_extends3, componentCls + "-item-tail::after", {
    backgroundColor: inlineTailColor
  }), (0, _defineProperty2["default"])(_extends3, componentCls + "-item-icon " + componentCls + "-icon " + componentCls + "-icon-dot", {
    backgroundColor: inlineTailColor,
    border: token.lineWidth + "px " + token.lineType + " " + inlineTailColor
  }), _extends3), titleStyle)), (0, _defineProperty2["default"])(_ref2, '&-error', titleStyle), (0, _defineProperty2["default"])(_ref2, '&-active, &-process', (0, _extends5["default"])((0, _defineProperty2["default"])({}, componentCls + "-item-icon", {
    width: inlineDotSize,
    height: inlineDotSize,
    marginInlineStart: "calc(50% - " + inlineDotSize / 2 + "px)",
    top: 0
  }), titleStyle)), (0, _defineProperty2["default"])(_ref2, "&:not(" + componentCls + "-item-active) > " + componentCls + "-item-container[role='button']:hover", (0, _defineProperty2["default"])({}, componentCls + "-item-title", {
    color: inlineTitleColor
  })), _ref2)));
};
var _default = genStepsInlineStyle;
exports["default"] = _default;
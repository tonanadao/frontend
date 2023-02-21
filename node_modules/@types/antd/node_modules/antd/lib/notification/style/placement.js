"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var genNotificationPlacementStyle = function genNotificationPlacementStyle(token) {
  var _ref4;
  var componentCls = token.componentCls,
    width = token.width,
    notificationMarginEdge = token.notificationMarginEdge;
  var notificationTopFadeIn = new _cssinjs.Keyframes('antNotificationTopFadeIn', {
    '0%': {
      marginTop: '-100%',
      opacity: 0
    },
    '100%': {
      marginTop: 0,
      opacity: 1
    }
  });
  var notificationBottomFadeIn = new _cssinjs.Keyframes('antNotificationBottomFadeIn', {
    '0%': {
      marginBottom: '-100%',
      opacity: 0
    },
    '100%': {
      marginBottom: 0,
      opacity: 1
    }
  });
  var notificationLeftFadeIn = new _cssinjs.Keyframes('antNotificationLeftFadeIn', {
    '0%': {
      right: {
        _skip_check_: true,
        value: width
      },
      opacity: 0
    },
    '100%': {
      right: {
        _skip_check_: true,
        value: 0
      },
      opacity: 1
    }
  });
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, "&" + componentCls + "-top, &" + componentCls + "-bottom", {
    marginInline: 0
  }), (0, _defineProperty2["default"])(_ref4, "&" + componentCls + "-top", (0, _defineProperty2["default"])({}, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationTopFadeIn
  })), (0, _defineProperty2["default"])(_ref4, "&" + componentCls + "-bottom", (0, _defineProperty2["default"])({}, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationBottomFadeIn
  })), (0, _defineProperty2["default"])(_ref4, "&" + componentCls + "-topLeft, &" + componentCls + "-bottomLeft", (0, _defineProperty2["default"])({
    marginInlineEnd: 0,
    marginInlineStart: notificationMarginEdge
  }, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationLeftFadeIn
  })), _ref4;
};
var _default = genNotificationPlacementStyle;
exports["default"] = _default;
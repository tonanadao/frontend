import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
var genNotificationPlacementStyle = function genNotificationPlacementStyle(token) {
  var _ref4;
  var componentCls = token.componentCls,
    width = token.width,
    notificationMarginEdge = token.notificationMarginEdge;
  var notificationTopFadeIn = new Keyframes('antNotificationTopFadeIn', {
    '0%': {
      marginTop: '-100%',
      opacity: 0
    },
    '100%': {
      marginTop: 0,
      opacity: 1
    }
  });
  var notificationBottomFadeIn = new Keyframes('antNotificationBottomFadeIn', {
    '0%': {
      marginBottom: '-100%',
      opacity: 0
    },
    '100%': {
      marginBottom: 0,
      opacity: 1
    }
  });
  var notificationLeftFadeIn = new Keyframes('antNotificationLeftFadeIn', {
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
  return _ref4 = {}, _defineProperty(_ref4, "&" + componentCls + "-top, &" + componentCls + "-bottom", {
    marginInline: 0
  }), _defineProperty(_ref4, "&" + componentCls + "-top", _defineProperty({}, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationTopFadeIn
  })), _defineProperty(_ref4, "&" + componentCls + "-bottom", _defineProperty({}, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationBottomFadeIn
  })), _defineProperty(_ref4, "&" + componentCls + "-topLeft, &" + componentCls + "-bottomLeft", _defineProperty({
    marginInlineEnd: 0,
    marginInlineStart: notificationMarginEdge
  }, componentCls + "-fade-enter" + componentCls + "-fade-enter-active, " + componentCls + "-fade-appear" + componentCls + "-fade-appear-active", {
    animationName: notificationLeftFadeIn
  })), _ref4;
};
export default genNotificationPlacementStyle;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genMotionStyle = function genMotionStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow;
  var sharedPanelMotion = {
    '&-enter, &-appear, &-leave': {
      '&-start': {
        transition: 'none'
      },
      '&-active': {
        transition: "all " + motionDurationSlow
      }
    }
  };
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, componentCls + "-mask-motion", {
    '&-enter, &-appear, &-leave': {
      '&-active': {
        transition: "all " + motionDurationSlow
      }
    },
    '&-enter, &-appear': {
      opacity: 0,
      '&-active': {
        opacity: 1
      }
    },
    '&-leave': {
      opacity: 1,
      '&-active': {
        opacity: 0
      }
    }
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-panel-motion", {
    // Left
    '&-left': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateX(-100%) !important'
        },
        '&-active': {
          transform: 'translateX(0)'
        }
      },
      '&-leave': {
        transform: 'translateX(0)',
        '&-active': {
          transform: 'translateX(-100%)'
        }
      }
    }],
    // Right
    '&-right': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateX(100%) !important'
        },
        '&-active': {
          transform: 'translateX(0)'
        }
      },
      '&-leave': {
        transform: 'translateX(0)',
        '&-active': {
          transform: 'translateX(100%)'
        }
      }
    }],
    // Top
    '&-top': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateY(-100%) !important'
        },
        '&-active': {
          transform: 'translateY(0)'
        }
      },
      '&-leave': {
        transform: 'translateY(0)',
        '&-active': {
          transform: 'translateY(-100%)'
        }
      }
    }],
    // Bottom
    '&-bottom': [sharedPanelMotion, {
      '&-enter, &-appear': {
        '&-start': {
          transform: 'translateY(100%) !important'
        },
        '&-active': {
          transform: 'translateY(0)'
        }
      },
      '&-leave': {
        transform: 'translateY(0)',
        '&-active': {
          transform: 'translateY(100%)'
        }
      }
    }]
  }), _componentCls));
};
var _default = genMotionStyle;
exports["default"] = _default;
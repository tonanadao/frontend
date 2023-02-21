"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genTimelineStyle = function genTimelineStyle(token) {
  var _pending, _last, _ref2, _ref4, _ref6, _extends2;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-item", {
    position: 'relative',
    margin: 0,
    paddingBottom: token.timeLineItemPaddingBottom,
    fontSize: token.fontSize,
    listStyle: 'none',
    '&-tail': {
      position: 'absolute',
      insetBlockStart: token.timeLineItemHeadSize,
      insetInlineStart: (token.timeLineItemHeadSize - token.timeLineItemTailWidth) / 2,
      height: "calc(100% - " + token.timeLineItemHeadSize + "px)",
      borderInlineStart: token.timeLineItemTailWidth + "px " + token.lineType + " " + token.colorSplit
    },
    '&-pending': (_pending = {}, (0, _defineProperty2["default"])(_pending, componentCls + "-item-head", {
      fontSize: token.fontSizeSM,
      backgroundColor: 'transparent'
    }), (0, _defineProperty2["default"])(_pending, componentCls + "-item-tail", {
      display: 'none'
    }), _pending),
    '&-head': {
      position: 'absolute',
      width: token.timeLineItemHeadSize,
      height: token.timeLineItemHeadSize,
      backgroundColor: token.colorBgContainer,
      border: token.timeLineHeadBorderWidth + "px " + token.lineType + " transparent",
      borderRadius: '50%',
      '&-blue': {
        color: token.colorPrimary,
        borderColor: token.colorPrimary
      },
      '&-red': {
        color: token.colorError,
        borderColor: token.colorError
      },
      '&-green': {
        color: token.colorSuccess,
        borderColor: token.colorSuccess
      },
      '&-gray': {
        color: token.colorTextDisabled,
        borderColor: token.colorTextDisabled
      }
    },
    '&-head-custom': {
      position: 'absolute',
      insetBlockStart: token.timeLineItemHeadSize / 2,
      insetInlineStart: token.timeLineItemHeadSize / 2,
      width: 'auto',
      height: 'auto',
      marginBlockStart: 0,
      paddingBlock: token.timeLineItemCustomHeadPaddingVertical,
      lineHeight: 1,
      textAlign: 'center',
      border: 0,
      borderRadius: 0,
      transform: "translate(-50%, -50%)"
    },
    '&-content': {
      position: 'relative',
      insetBlockStart: -(token.fontSize * token.lineHeight - token.fontSize) + token.lineWidth,
      marginInlineStart: token.margin + token.timeLineItemHeadSize,
      marginInlineEnd: 0,
      marginBlockStart: 0,
      marginBlockEnd: 0,
      wordBreak: 'break-word'
    },
    '&-last': (_last = {}, (0, _defineProperty2["default"])(_last, "> " + componentCls + "-item-tail", {
      display: 'none'
    }), (0, _defineProperty2["default"])(_last, "> " + componentCls + "-item-content", {
      minHeight: token.controlHeightLG * 1.2
    }), _last)
  }), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-alternate,\n        &" + componentCls + "-right,\n        &" + componentCls + "-label", (0, _defineProperty2["default"])({}, componentCls + "-item", {
    '&-tail, &-head, &-head-custom': {
      insetInlineStart: '50%'
    },
    '&-head': {
      marginInlineStart: "-" + token.marginXXS + "px",
      '&-custom': {
        marginInlineStart: token.timeLineItemTailWidth / 2
      }
    },
    '&-left': (0, _defineProperty2["default"])({}, componentCls + "-item-content", {
      insetInlineStart: "calc(50% - " + token.marginXXS + "px)",
      width: "calc(50% - " + token.marginSM + "px)",
      textAlign: 'start'
    }),
    '&-right': (0, _defineProperty2["default"])({}, componentCls + "-item-content", {
      width: "calc(50% - " + token.marginSM + "px)",
      margin: 0,
      textAlign: 'end'
    })
  })), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-right", (0, _defineProperty2["default"])({}, componentCls + "-item-right", (_ref2 = {}, (0, _defineProperty2["default"])(_ref2, componentCls + "-item-tail,\n            " + componentCls + "-item-head,\n            " + componentCls + "-item-head-custom", {
    insetInlineStart: "calc(100% - " + token.timeLinePaddingInlineEnd + "px)"
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-item-content", {
    width: "calc(100% - " + (token.timeLineItemHeadSize + token.marginXS) + "px)"
  }), _ref2))), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-pending\n        " + componentCls + "-item-last\n        " + componentCls + "-item-tail", {
    display: 'block',
    height: "calc(100% - " + token.margin + "px)",
    borderInlineStart: token.timeLineItemTailWidth + "px dotted " + token.colorSplit
  }), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-reverse\n        " + componentCls + "-item-last\n        " + componentCls + "-item-tail", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-reverse " + componentCls + "-item-pending", (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, componentCls + "-item-tail", {
    insetBlockStart: token.margin,
    display: 'block',
    height: "calc(100% - " + token.margin + "px)",
    borderInlineStart: token.timeLineItemTailWidth + "px dotted " + token.colorSplit
  }), (0, _defineProperty2["default"])(_ref4, componentCls + "-item-content", {
    minHeight: token.controlHeightLG * 1.2
  }), _ref4)), (0, _defineProperty2["default"])(_extends2, "&" + componentCls + "-label", (_ref6 = {}, (0, _defineProperty2["default"])(_ref6, componentCls + "-item-label", {
    position: 'absolute',
    insetBlockStart: -(token.fontSize * token.lineHeight - token.fontSize) + token.timeLineItemTailWidth,
    width: "calc(50% - " + token.marginSM + "px)",
    textAlign: 'end'
  }), (0, _defineProperty2["default"])(_ref6, componentCls + "-item-right", (0, _defineProperty2["default"])({}, componentCls + "-item-label", {
    insetInlineStart: "calc(50% + " + token.marginSM + "px)",
    width: "calc(50% - " + token.marginSM + "px)",
    textAlign: 'start'
  })), _ref6)), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Timeline', function (token) {
  var timeLineToken = (0, _internal.mergeToken)(token, {
    timeLineItemPaddingBottom: token.padding * 1.25,
    timeLineItemHeadSize: 10,
    timeLineItemCustomHeadPaddingVertical: token.paddingXXS,
    timeLinePaddingInlineEnd: 2,
    timeLineItemTailWidth: token.lineWidthBold,
    timeLineHeadBorderWidth: token.wireframe ? token.lineWidthBold : token.lineWidth * 3
  });
  return [genTimelineStyle(timeLineToken)];
});
exports["default"] = _default;
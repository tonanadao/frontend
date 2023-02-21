"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genCalendarStyles = exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../style");
var _style2 = require("../../date-picker/style");
var _style3 = require("../../input/style");
var _internal = require("../../theme/internal");
var genCalendarStyles = function genCalendarStyles(token) {
  var _ref, _ref2, _ref3, _ref6, _ref7, _ref8, _ref11;
  var calendarCls = token.calendarCls,
    componentCls = token.componentCls,
    calendarFullBg = token.calendarFullBg,
    calendarFullPanelBg = token.calendarFullPanelBg,
    calendarItemActiveBg = token.calendarItemActiveBg;
  return _ref11 = {}, (0, _defineProperty2["default"])(_ref11, calendarCls, (0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])({}, (0, _style2.genPanelStyle)(token)), (0, _style.resetComponent)(token)), (0, _defineProperty2["default"])({
    background: calendarFullBg,
    '&-rtl': {
      direction: 'rtl'
    }
  }, calendarCls + "-header", (_ref = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: token.paddingSM + "px 0"
  }, (0, _defineProperty2["default"])(_ref, calendarCls + "-year-select", {
    minWidth: token.yearControlWidth
  }), (0, _defineProperty2["default"])(_ref, calendarCls + "-month-select", {
    minWidth: token.monthControlWidth,
    marginInlineStart: token.marginXS
  }), (0, _defineProperty2["default"])(_ref, calendarCls + "-mode-switch", {
    marginInlineStart: token.marginXS
  }), _ref)))), (0, _defineProperty2["default"])(_ref11, calendarCls + " " + componentCls + "-panel", (_ref2 = {
    background: calendarFullPanelBg,
    border: 0,
    borderTop: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    borderRadius: 0
  }, (0, _defineProperty2["default"])(_ref2, componentCls + "-month-panel, " + componentCls + "-date-panel", {
    width: 'auto'
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-body", {
    padding: token.paddingXS + "px 0"
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-content", {
    width: '100%'
  }), _ref2)), (0, _defineProperty2["default"])(_ref11, calendarCls + "-mini", (_ref3 = {
    borderRadius: token.borderRadiusLG
  }, (0, _defineProperty2["default"])(_ref3, calendarCls + "-header", {
    paddingInlineEnd: token.paddingXS,
    paddingInlineStart: token.paddingXS
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-panel", {
    borderRadius: "0 0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px"
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-content", {
    height: token.miniContentHeight,
    th: {
      height: 'auto',
      padding: 0,
      lineHeight: token.weekHeight + "px"
    }
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-cell::before", {
    pointerEvents: 'none'
  }), _ref3)), (0, _defineProperty2["default"])(_ref11, "" + calendarCls + calendarCls + "-full", (_ref7 = {}, (0, _defineProperty2["default"])(_ref7, componentCls + "-panel", (0, _defineProperty2["default"])({
    display: 'block',
    width: '100%',
    textAlign: 'end',
    background: calendarFullBg,
    border: 0
  }, componentCls + "-body", {
    'th, td': {
      padding: 0
    },
    th: {
      height: 'auto',
      paddingInlineEnd: token.paddingSM,
      paddingBottom: token.paddingXXS,
      lineHeight: token.weekHeight + "px"
    }
  })), (0, _defineProperty2["default"])(_ref7, componentCls + "-cell", (_ref6 = {
    '&::before': {
      display: 'none'
    },
    '&:hover': (0, _defineProperty2["default"])({}, calendarCls + "-date", {
      background: token.controlItemBgHover
    })
  }, (0, _defineProperty2["default"])(_ref6, calendarCls + "-date-today::before", {
    display: 'none'
  }), (0, _defineProperty2["default"])(_ref6, '&-in-view:is(&-selected)', (0, _defineProperty2["default"])({}, calendarCls + "-date, " + calendarCls + "-date-today", {
    background: calendarItemActiveBg
  })), (0, _defineProperty2["default"])(_ref6, '&-selected, &-selected:hover', (0, _defineProperty2["default"])({}, calendarCls + "-date, " + calendarCls + "-date-today", (0, _defineProperty2["default"])({}, calendarCls + "-date-value", {
    color: token.colorPrimary
  }))), _ref6)), (0, _defineProperty2["default"])(_ref7, calendarCls + "-date", {
    display: 'block',
    width: 'auto',
    height: 'auto',
    margin: "0 " + token.marginXS / 2 + "px",
    padding: token.paddingXS / 2 + "px " + token.paddingXS + "px 0",
    border: 0,
    borderTop: token.lineWidthBold + "px " + token.lineType + " " + token.colorSplit,
    borderRadius: 0,
    transition: "background " + token.motionDurationSlow,
    '&-value': {
      lineHeight: token.dateValueHeight + "px",
      transition: "color " + token.motionDurationSlow
    },
    '&-content': {
      position: 'static',
      width: 'auto',
      height: token.dateContentHeight,
      overflowY: 'auto',
      color: token.colorText,
      lineHeight: token.lineHeight,
      textAlign: 'start'
    },
    '&-today': (0, _defineProperty2["default"])({
      borderColor: token.colorPrimary
    }, calendarCls + "-date-value", {
      color: token.colorText
    })
  }), _ref7)), (0, _defineProperty2["default"])(_ref11, "@media only screen and (max-width: " + token.screenXS + "px) ", (0, _defineProperty2["default"])({}, "" + calendarCls, (0, _defineProperty2["default"])({}, calendarCls + "-header", (_ref8 = {
    display: 'block'
  }, (0, _defineProperty2["default"])(_ref8, calendarCls + "-year-select", {
    width: '50%'
  }), (0, _defineProperty2["default"])(_ref8, calendarCls + "-month-select", {
    width: "calc(50% - " + token.paddingXS + "px)"
  }), (0, _defineProperty2["default"])(_ref8, calendarCls + "-mode-switch", {
    width: '100%',
    marginTop: token.marginXS,
    marginInlineStart: 0,
    '> label': {
      width: '50%',
      textAlign: 'center'
    }
  }), _ref8)))), _ref11;
};
exports.genCalendarStyles = genCalendarStyles;
var _default = (0, _internal.genComponentStyleHook)('Calendar', function (token) {
  var calendarCls = token.componentCls + "-calendar";
  var calendarToken = (0, _internal.mergeToken)((0, _style3.initInputToken)(token), (0, _style2.initPickerPanelToken)(token), {
    calendarCls: calendarCls,
    pickerCellInnerCls: token.componentCls + "-cell-inner",
    calendarFullBg: token.colorBgContainer,
    calendarFullPanelBg: token.colorBgContainer,
    calendarItemActiveBg: token.controlItemBgActive,
    dateValueHeight: token.controlHeightSM,
    weekHeight: token.controlHeightSM * 0.75,
    dateContentHeight: (token.fontSizeSM * token.lineHeightSM + token.marginXS) * 3 + token.lineWidth * 2
  });
  return [genCalendarStyles(calendarToken)];
}, {
  yearControlWidth: 80,
  monthControlWidth: 70,
  miniContentHeight: 256
});
exports["default"] = _default;
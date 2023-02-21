import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { resetComponent } from '../../style';
import { genPanelStyle, initPickerPanelToken } from '../../date-picker/style';
import { initInputToken } from '../../input/style';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
export var genCalendarStyles = function genCalendarStyles(token) {
  var _ref, _ref2, _ref3, _ref6, _ref7, _ref8, _ref11;
  var calendarCls = token.calendarCls,
    componentCls = token.componentCls,
    calendarFullBg = token.calendarFullBg,
    calendarFullPanelBg = token.calendarFullPanelBg,
    calendarItemActiveBg = token.calendarItemActiveBg;
  return _ref11 = {}, _defineProperty(_ref11, calendarCls, _extends(_extends(_extends({}, genPanelStyle(token)), resetComponent(token)), _defineProperty({
    background: calendarFullBg,
    '&-rtl': {
      direction: 'rtl'
    }
  }, calendarCls + "-header", (_ref = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: token.paddingSM + "px 0"
  }, _defineProperty(_ref, calendarCls + "-year-select", {
    minWidth: token.yearControlWidth
  }), _defineProperty(_ref, calendarCls + "-month-select", {
    minWidth: token.monthControlWidth,
    marginInlineStart: token.marginXS
  }), _defineProperty(_ref, calendarCls + "-mode-switch", {
    marginInlineStart: token.marginXS
  }), _ref)))), _defineProperty(_ref11, calendarCls + " " + componentCls + "-panel", (_ref2 = {
    background: calendarFullPanelBg,
    border: 0,
    borderTop: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    borderRadius: 0
  }, _defineProperty(_ref2, componentCls + "-month-panel, " + componentCls + "-date-panel", {
    width: 'auto'
  }), _defineProperty(_ref2, componentCls + "-body", {
    padding: token.paddingXS + "px 0"
  }), _defineProperty(_ref2, componentCls + "-content", {
    width: '100%'
  }), _ref2)), _defineProperty(_ref11, calendarCls + "-mini", (_ref3 = {
    borderRadius: token.borderRadiusLG
  }, _defineProperty(_ref3, calendarCls + "-header", {
    paddingInlineEnd: token.paddingXS,
    paddingInlineStart: token.paddingXS
  }), _defineProperty(_ref3, componentCls + "-panel", {
    borderRadius: "0 0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px"
  }), _defineProperty(_ref3, componentCls + "-content", {
    height: token.miniContentHeight,
    th: {
      height: 'auto',
      padding: 0,
      lineHeight: token.weekHeight + "px"
    }
  }), _defineProperty(_ref3, componentCls + "-cell::before", {
    pointerEvents: 'none'
  }), _ref3)), _defineProperty(_ref11, "" + calendarCls + calendarCls + "-full", (_ref7 = {}, _defineProperty(_ref7, componentCls + "-panel", _defineProperty({
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
  })), _defineProperty(_ref7, componentCls + "-cell", (_ref6 = {
    '&::before': {
      display: 'none'
    },
    '&:hover': _defineProperty({}, calendarCls + "-date", {
      background: token.controlItemBgHover
    })
  }, _defineProperty(_ref6, calendarCls + "-date-today::before", {
    display: 'none'
  }), _defineProperty(_ref6, '&-in-view:is(&-selected)', _defineProperty({}, calendarCls + "-date, " + calendarCls + "-date-today", {
    background: calendarItemActiveBg
  })), _defineProperty(_ref6, '&-selected, &-selected:hover', _defineProperty({}, calendarCls + "-date, " + calendarCls + "-date-today", _defineProperty({}, calendarCls + "-date-value", {
    color: token.colorPrimary
  }))), _ref6)), _defineProperty(_ref7, calendarCls + "-date", {
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
    '&-today': _defineProperty({
      borderColor: token.colorPrimary
    }, calendarCls + "-date-value", {
      color: token.colorText
    })
  }), _ref7)), _defineProperty(_ref11, "@media only screen and (max-width: " + token.screenXS + "px) ", _defineProperty({}, "" + calendarCls, _defineProperty({}, calendarCls + "-header", (_ref8 = {
    display: 'block'
  }, _defineProperty(_ref8, calendarCls + "-year-select", {
    width: '50%'
  }), _defineProperty(_ref8, calendarCls + "-month-select", {
    width: "calc(50% - " + token.paddingXS + "px)"
  }), _defineProperty(_ref8, calendarCls + "-mode-switch", {
    width: '100%',
    marginTop: token.marginXS,
    marginInlineStart: 0,
    '> label': {
      width: '50%',
      textAlign: 'center'
    }
  }), _ref8)))), _ref11;
};
export default genComponentStyleHook('Calendar', function (token) {
  var calendarCls = token.componentCls + "-calendar";
  var calendarToken = mergeToken(initInputToken(token), initPickerPanelToken(token), {
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
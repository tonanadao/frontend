"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _style = require("../../input/style");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
var genMentionsStyle = function genMentionsStyle(token) {
  var _extends3;
  var componentCls = token.componentCls,
    colorTextDisabled = token.colorTextDisabled,
    controlItemBgHover = token.controlItemBgHover,
    controlPaddingHorizontal = token.controlPaddingHorizontal,
    colorText = token.colorText,
    motionDurationSlow = token.motionDurationSlow,
    lineHeight = token.lineHeight,
    controlHeight = token.controlHeight,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    inputPaddingVertical = token.inputPaddingVertical,
    fontSize = token.fontSize,
    colorBgElevated = token.colorBgElevated,
    borderRadiusLG = token.borderRadiusLG,
    boxShadowSecondary = token.boxShadowSecondary;
  var itemPaddingVertical = Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2);
  return (0, _defineProperty2["default"])({}, "" + componentCls, (0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])((0, _extends4["default"])({}, (0, _style2.resetComponent)(token)), (0, _style.genBasicInputStyle)(token)), {
    position: 'relative',
    display: 'inline-block',
    height: 'auto',
    padding: 0,
    overflow: 'hidden',
    lineHeight: lineHeight,
    whiteSpace: 'pre-wrap',
    verticalAlign: 'bottom'
  }), (0, _style.genStatusStyle)(token)), (_extends3 = {
    '&-disabled': {
      '> textarea': (0, _extends4["default"])({}, (0, _style.genDisabledStyle)(token))
    },
    '&-focused': (0, _extends4["default"])({}, (0, _style.genActiveStyle)(token))
  }, (0, _defineProperty2["default"])(_extends3, "&-affix-wrapper " + componentCls + "-suffix", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: inputPaddingHorizontal,
    bottom: 0,
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    margin: 'auto'
  }), (0, _defineProperty2["default"])(_extends3, "> textarea, " + componentCls + "-measure", {
    color: colorText,
    boxSizing: 'border-box',
    minHeight: controlHeight - 2,
    margin: 0,
    padding: inputPaddingVertical + "px " + inputPaddingHorizontal + "px",
    overflow: 'inherit',
    overflowX: 'hidden',
    overflowY: 'auto',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    fontStyle: 'inherit',
    fontVariant: 'inherit',
    fontSizeAdjust: 'inherit',
    fontStretch: 'inherit',
    lineHeight: 'inherit',
    direction: 'inherit',
    letterSpacing: 'inherit',
    whiteSpace: 'inherit',
    textAlign: 'inherit',
    verticalAlign: 'top',
    wordWrap: 'break-word',
    wordBreak: 'inherit',
    tabSize: 'inherit'
  }), (0, _defineProperty2["default"])(_extends3, '> textarea', (0, _extends4["default"])({
    width: '100%',
    border: 'none',
    outline: 'none',
    resize: 'none',
    backgroundColor: 'inherit'
  }, (0, _style.genPlaceholderStyle)(token.colorTextPlaceholder))), (0, _defineProperty2["default"])(_extends3, componentCls + "-measure", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0,
    zIndex: -1,
    color: 'transparent',
    pointerEvents: 'none',
    '> span': {
      display: 'inline-block',
      minHeight: '1em'
    }
  }), (0, _defineProperty2["default"])(_extends3, '&-dropdown', (0, _extends4["default"])((0, _extends4["default"])({}, (0, _style2.resetComponent)(token)), (0, _defineProperty2["default"])({
    position: 'absolute',
    top: -9999,
    insetInlineStart: -9999,
    zIndex: token.zIndexPopup,
    boxSizing: 'border-box',
    fontSize: fontSize,
    fontVariant: 'initial',
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    outline: 'none',
    boxShadow: boxShadowSecondary,
    '&-hidden': {
      display: 'none'
    }
  }, componentCls + "-dropdown-menu", {
    maxHeight: token.dropdownHeight,
    marginBottom: 0,
    paddingInlineStart: 0,
    overflow: 'auto',
    listStyle: 'none',
    outline: 'none',
    '&-item': (0, _extends4["default"])((0, _extends4["default"])({}, _style2.textEllipsis), {
      position: 'relative',
      display: 'block',
      minWidth: token.controlItemWidth,
      padding: itemPaddingVertical + "px " + controlPaddingHorizontal + "px",
      color: colorText,
      fontWeight: 'normal',
      lineHeight: lineHeight,
      cursor: 'pointer',
      transition: "background " + motionDurationSlow + " ease",
      '&:hover': {
        backgroundColor: controlItemBgHover
      },
      '&:first-child': {
        borderStartStartRadius: borderRadiusLG,
        borderStartEndRadius: borderRadiusLG,
        borderEndStartRadius: 0,
        borderEndEndRadius: 0
      },
      '&:last-child': {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
        borderEndStartRadius: borderRadiusLG,
        borderEndEndRadius: borderRadiusLG
      },
      '&-disabled': {
        color: colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover': {
          color: colorTextDisabled,
          backgroundColor: controlItemBgHover,
          cursor: 'not-allowed'
        }
      },
      '&-selected': {
        color: colorText,
        fontWeight: token.fontWeightStrong,
        backgroundColor: controlItemBgHover
      },
      '&-active': {
        backgroundColor: controlItemBgHover
      }
    })
  }))), _extends3)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Mentions', function (token) {
  var mentionsToken = (0, _style.initInputToken)(token);
  return [genMentionsStyle(mentionsToken)];
}, function (token) {
  return {
    dropdownHeight: 250,
    controlItemWidth: 100,
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
exports["default"] = _default;
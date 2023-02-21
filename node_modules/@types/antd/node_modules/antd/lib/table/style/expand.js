"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _style = require("../../style");
var genExpandStyle = function genExpandStyle(token) {
  var _extends2, _ref3;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    checkboxSize = token.controlInteractiveSize,
    motionDurationSlow = token.motionDurationSlow,
    lineWidth = token.lineWidth,
    paddingXS = token.paddingXS,
    lineType = token.lineType,
    tableBorderColor = token.tableBorderColor,
    tableExpandIconBg = token.tableExpandIconBg,
    tableExpandColumnWidth = token.tableExpandColumnWidth,
    borderRadius = token.borderRadius,
    fontSize = token.fontSize,
    fontSizeSM = token.fontSizeSM,
    lineHeight = token.lineHeight,
    tablePaddingVertical = token.tablePaddingVertical,
    tablePaddingHorizontal = token.tablePaddingHorizontal,
    tableExpandedRowBg = token.tableExpandedRowBg,
    paddingXXS = token.paddingXXS;
  var halfInnerSize = checkboxSize / 2 - lineWidth;
  // must be odd number, unless it cannot align center
  var expandIconSize = halfInnerSize * 2 + lineWidth * 3;
  var tableBorder = lineWidth + "px " + lineType + " " + tableBorderColor;
  var expandIconLineOffset = paddingXXS - lineWidth;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-expand-icon-col", {
    width: tableExpandColumnWidth
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-row-expand-icon-cell", (0, _defineProperty2["default"])({
    textAlign: 'center'
  }, componentCls + "-row-expand-icon", {
    display: 'inline-flex',
    "float": 'none',
    verticalAlign: 'sub'
  })), (0, _defineProperty2["default"])(_ref3, componentCls + "-row-indent", {
    height: 1,
    "float": 'left'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-row-expand-icon", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.operationUnit)(token)), (_extends2 = {
    position: 'relative',
    "float": 'left',
    boxSizing: 'border-box',
    width: expandIconSize,
    height: expandIconSize,
    padding: 0,
    color: 'inherit',
    lineHeight: expandIconSize + "px",
    background: tableExpandIconBg,
    border: tableBorder,
    borderRadius: borderRadius,
    transform: "scale(" + checkboxSize / expandIconSize + ")",
    transition: "all " + motionDurationSlow,
    userSelect: 'none'
  }, (0, _defineProperty2["default"])(_extends2, "&:focus, &:hover, &:active", {
    borderColor: 'currentcolor'
  }), (0, _defineProperty2["default"])(_extends2, "&::before, &::after", {
    position: 'absolute',
    background: 'currentcolor',
    transition: "transform " + motionDurationSlow + " ease-out",
    content: '""'
  }), (0, _defineProperty2["default"])(_extends2, '&::before', {
    top: halfInnerSize,
    insetInlineEnd: expandIconLineOffset,
    insetInlineStart: expandIconLineOffset,
    height: lineWidth
  }), (0, _defineProperty2["default"])(_extends2, '&::after', {
    top: expandIconLineOffset,
    bottom: expandIconLineOffset,
    insetInlineStart: halfInnerSize,
    width: lineWidth,
    transform: 'rotate(90deg)'
  }), (0, _defineProperty2["default"])(_extends2, '&-collapsed::before', {
    transform: 'rotate(-180deg)'
  }), (0, _defineProperty2["default"])(_extends2, '&-collapsed::after', {
    transform: 'rotate(0deg)'
  }), (0, _defineProperty2["default"])(_extends2, '&-spaced', {
    '&::before, &::after': {
      display: 'none',
      content: 'none'
    },
    background: 'transparent',
    border: 0,
    visibility: 'hidden'
  }), _extends2))), (0, _defineProperty2["default"])(_ref3, componentCls + "-row-indent + " + componentCls + "-row-expand-icon", {
    marginTop: (fontSize * lineHeight - lineWidth * 3) / 2 - Math.ceil((fontSizeSM * 1.4 - lineWidth * 3) / 2),
    marginInlineEnd: paddingXS
  }), (0, _defineProperty2["default"])(_ref3, "tr" + componentCls + "-expanded-row", (0, _defineProperty2["default"])({
    '&, &:hover': {
      '> td': {
        background: tableExpandedRowBg
      }
    }
  }, antCls + "-descriptions-view", {
    display: 'flex',
    table: {
      flex: 'auto',
      width: 'auto'
    }
  })), (0, _defineProperty2["default"])(_ref3, componentCls + "-expanded-row-fixed", {
    position: 'relative',
    margin: "-" + tablePaddingVertical + "px -" + tablePaddingHorizontal + "px",
    padding: tablePaddingVertical + "px " + tablePaddingHorizontal + "px"
  }), _ref3));
};
var _default = genExpandStyle;
exports["default"] = _default;
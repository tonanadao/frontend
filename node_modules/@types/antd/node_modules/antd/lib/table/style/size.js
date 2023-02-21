"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genSizeStyle = function genSizeStyle(token) {
  var componentCls = token.componentCls;
  var getSizeStyle = function getSizeStyle(size, paddingVertical, paddingHorizontal, fontSize) {
    var _ref2;
    return (0, _defineProperty2["default"])({}, "" + componentCls + componentCls + "-" + size, (_ref2 = {
      fontSize: fontSize
    }, (0, _defineProperty2["default"])(_ref2, "\n        " + componentCls + "-title,\n        " + componentCls + "-footer,\n        " + componentCls + "-thead > tr > th,\n        " + componentCls + "-tbody > tr > td,\n        tfoot > tr > th,\n        tfoot > tr > td\n      ", {
      padding: paddingVertical + "px " + paddingHorizontal + "px"
    }), (0, _defineProperty2["default"])(_ref2, componentCls + "-filter-trigger", {
      marginInlineEnd: "-" + paddingHorizontal / 2 + "px"
    }), (0, _defineProperty2["default"])(_ref2, componentCls + "-expanded-row-fixed", {
      margin: "-" + paddingVertical + "px -" + paddingHorizontal + "px"
    }), (0, _defineProperty2["default"])(_ref2, componentCls + "-tbody", (0, _defineProperty2["default"])({}, componentCls + "-wrapper:only-child " + componentCls, {
      marginBlock: "-" + paddingVertical + "px",
      marginInline: token.tableExpandColumnWidth - paddingHorizontal + "px -" + paddingHorizontal + "px"
    })), (0, _defineProperty2["default"])(_ref2, componentCls + "-selection-column", {
      paddingInlineStart: paddingHorizontal / 4 + "px"
    }), _ref2));
  };
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _extends2["default"])((0, _extends2["default"])({}, getSizeStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle, token.tableFontSizeMiddle)), getSizeStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall, token.tableFontSizeSmall)));
};
var _default = genSizeStyle;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genDraggerStyle = function genDraggerStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, componentCls + "-drag", (_ref3 = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    background: token.colorFillAlter,
    border: token.lineWidth + "px dashed " + token.colorBorder,
    borderRadius: token.borderRadiusLG,
    cursor: 'pointer',
    transition: "border-color " + token.motionDurationSlow
  }, (0, _defineProperty2["default"])(_ref3, componentCls, {
    padding: token.padding + "px 0"
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-btn", {
    display: 'table',
    width: '100%',
    height: '100%',
    outline: 'none'
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-drag-container", {
    display: 'table-cell',
    verticalAlign: 'middle'
  }), (0, _defineProperty2["default"])(_ref3, "&:not(" + componentCls + "-disabled):hover", {
    borderColor: token.colorPrimaryHover
  }), (0, _defineProperty2["default"])(_ref3, "p" + componentCls + "-drag-icon", (0, _defineProperty2["default"])({
    marginBottom: token.margin
  }, iconCls, {
    color: token.colorPrimary,
    fontSize: token.uploadThumbnailSize
  })), (0, _defineProperty2["default"])(_ref3, "p" + componentCls + "-text", {
    margin: "0 0 " + token.marginXXS + "px",
    color: token.colorTextHeading,
    fontSize: token.fontSizeLG
  }), (0, _defineProperty2["default"])(_ref3, "p" + componentCls + "-hint", {
    color: token.colorTextDescription,
    fontSize: token.fontSize
  }), (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-disabled", (0, _defineProperty2["default"])({
    cursor: 'not-allowed'
  }, "p" + componentCls + "-drag-icon " + iconCls + ",\n            p" + componentCls + "-text,\n            p" + componentCls + "-hint\n          ", {
    color: token.colorTextDisabled
  })), _ref3)));
};
var _default = genDraggerStyle;
exports["default"] = _default;
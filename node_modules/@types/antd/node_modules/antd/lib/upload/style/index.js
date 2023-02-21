"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _dragger = _interopRequireDefault(require("./dragger"));
var _list = _interopRequireDefault(require("./list"));
var _motion = _interopRequireDefault(require("./motion"));
var _picture = require("./picture");
var _rtl = _interopRequireDefault(require("./rtl"));
var _style = require("../../style");
var _motion2 = require("../../style/motion");
var genBaseStyle = function genBaseStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    colorTextDisabled = token.colorTextDisabled;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, componentCls, {
    outline: 0,
    "input[type='file']": {
      cursor: 'pointer'
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-select", {
    display: 'inline-block'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-disabled", {
    color: colorTextDisabled,
    cursor: 'not-allowed'
  }), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Upload', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight,
    lineWidth = token.lineWidth,
    controlHeightLG = token.controlHeightLG;
  var listItemHeightSM = Math.round(fontSize * lineHeight);
  var uploadToken = (0, _internal.mergeToken)(token, {
    uploadThumbnailSize: fontSizeHeading3 * 2,
    uploadProgressOffset: listItemHeightSM / 2 + lineWidth,
    uploadPicCardSize: controlHeightLG * 2.55
  });
  return [genBaseStyle(uploadToken), (0, _dragger["default"])(uploadToken), (0, _picture.genPictureStyle)(uploadToken), (0, _picture.genPictureCardStyle)(uploadToken), (0, _list["default"])(uploadToken), (0, _motion["default"])(uploadToken), (0, _rtl["default"])(uploadToken), (0, _motion2.genCollapseMotion)(uploadToken)];
});
exports["default"] = _default;
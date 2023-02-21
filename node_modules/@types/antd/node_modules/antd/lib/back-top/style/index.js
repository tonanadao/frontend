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
// ============================== Shared ==============================
var genSharedBackTopStyle = function genSharedBackTopStyle(token) {
  var _extends2;
  var componentCls = token.componentCls,
    backTopFontSize = token.backTopFontSize,
    backTopSize = token.backTopSize,
    zIndexPopup = token.zIndexPopup;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'fixed',
    insetInlineEnd: token.backTopInlineEnd,
    insetBlockEnd: token.backTopBlockEnd,
    zIndex: zIndexPopup,
    width: 40,
    height: 40,
    cursor: 'pointer',
    '&:empty': {
      display: 'none'
    }
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-content", {
    width: backTopSize,
    height: backTopSize,
    overflow: 'hidden',
    color: token.backTopColor,
    textAlign: 'center',
    backgroundColor: token.backTopBackground,
    borderRadius: backTopSize,
    transition: "all " + token.motionDurationMid,
    '&:hover': {
      backgroundColor: token.backTopHoverBackground,
      transition: "all " + token.motionDurationMid
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-icon", {
    fontSize: backTopFontSize,
    lineHeight: backTopSize + "px"
  }), _extends2)));
};
var genMediaBackTopStyle = function genMediaBackTopStyle(token) {
  var _ref4;
  var componentCls = token.componentCls;
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, "@media (max-width: " + token.screenMD + "px)", (0, _defineProperty2["default"])({}, componentCls, {
    insetInlineEnd: token.backTopInlineEndMD
  })), (0, _defineProperty2["default"])(_ref4, "@media (max-width: " + token.screenXS + "px)", (0, _defineProperty2["default"])({}, componentCls, {
    insetInlineEnd: token.backTopInlineEndXS
  })), _ref4;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('BackTop', function (token) {
  var fontSizeHeading3 = token.fontSizeHeading3,
    colorTextDescription = token.colorTextDescription,
    colorTextLightSolid = token.colorTextLightSolid,
    colorText = token.colorText,
    controlHeightLG = token.controlHeightLG;
  var backTopToken = (0, _internal.mergeToken)(token, {
    backTopBackground: colorTextDescription,
    backTopColor: colorTextLightSolid,
    backTopHoverBackground: colorText,
    backTopFontSize: fontSizeHeading3,
    backTopSize: controlHeightLG,
    backTopBlockEnd: controlHeightLG * 1.25,
    backTopInlineEnd: controlHeightLG * 2.5,
    backTopInlineEndMD: controlHeightLG * 1.5,
    backTopInlineEndXS: controlHeightLG * 0.5
  });
  return [genSharedBackTopStyle(backTopToken), genMediaBackTopStyle(backTopToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexBase + 10
  };
});
exports["default"] = _default;
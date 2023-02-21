"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
// ============================== Shared ==============================
var genSharedEmptyStyle = function genSharedEmptyStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    margin = token.margin,
    marginXS = token.marginXS,
    marginXL = token.marginXL,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {
    marginInline: marginXS,
    fontSize: fontSize,
    lineHeight: lineHeight,
    textAlign: 'center'
  }, (0, _defineProperty2["default"])(_componentCls, componentCls + "-image", {
    height: token.emptyImgHeight,
    marginBottom: marginXS,
    opacity: token.opacityImage,
    img: {
      height: '100%'
    },
    svg: {
      height: '100%',
      margin: 'auto'
    }
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-footer", {
    marginTop: margin
  }), (0, _defineProperty2["default"])(_componentCls, '&-normal', (0, _defineProperty2["default"])({
    marginBlock: marginXL,
    color: token.colorTextDisabled
  }, componentCls + "-image", {
    height: token.emptyImgHeightMD
  })), (0, _defineProperty2["default"])(_componentCls, '&-small', (0, _defineProperty2["default"])({
    marginBlock: marginXS,
    color: token.colorTextDisabled
  }, componentCls + "-image", {
    height: token.emptyImgHeightSM
  })), _componentCls));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Empty', function (token) {
  var componentCls = token.componentCls,
    controlHeightLG = token.controlHeightLG;
  var emptyToken = (0, _internal.mergeToken)(token, {
    emptyImgCls: componentCls + "-img",
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
exports["default"] = _default;
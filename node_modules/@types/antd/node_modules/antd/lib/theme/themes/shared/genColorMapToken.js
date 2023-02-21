"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = genColorMapToken;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tinycolor = require("@ctrl/tinycolor");
function genColorMapToken(seed, _ref) {
  var generateColorPalettes = _ref.generateColorPalettes,
    generateNeutralColorPalettes = _ref.generateNeutralColorPalettes;
  var colorSuccessBase = seed.colorSuccess,
    colorWarningBase = seed.colorWarning,
    colorErrorBase = seed.colorError,
    colorInfoBase = seed.colorInfo,
    colorPrimaryBase = seed.colorPrimary,
    colorBgBase = seed.colorBgBase,
    colorTextBase = seed.colorTextBase;
  var primaryColors = generateColorPalettes(colorPrimaryBase);
  var successColors = generateColorPalettes(colorSuccessBase);
  var warningColors = generateColorPalettes(colorWarningBase);
  var errorColors = generateColorPalettes(colorErrorBase);
  var infoColors = generateColorPalettes(colorInfoBase);
  var neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  return (0, _extends2["default"])((0, _extends2["default"])({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new _tinycolor.TinyColor('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}
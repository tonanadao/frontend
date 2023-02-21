"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStrokeColor = exports.getPercentage = void 0;
exports.getSuccessPercent = getSuccessPercent;
exports.validProgress = validProgress;
var _colors = require("@ant-design/colors");
var _warning = _interopRequireDefault(require("../_util/warning"));
function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent(_ref) {
  var success = _ref.success,
    successPercent = _ref.successPercent;
  var percent = successPercent;
  /** @deprecated Use `percent` instead */
  if (success && 'progress' in success) {
    process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.') : void 0;
    percent = success.progress;
  }
  if (success && 'percent' in success) {
    percent = success.percent;
  }
  return percent;
}
var getPercentage = function getPercentage(_ref2) {
  var percent = _ref2.percent,
    success = _ref2.success,
    successPercent = _ref2.successPercent;
  var realSuccessPercent = validProgress(getSuccessPercent({
    success: success,
    successPercent: successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
};
exports.getPercentage = getPercentage;
var getStrokeColor = function getStrokeColor(_ref3) {
  var _ref3$success = _ref3.success,
    success = _ref3$success === void 0 ? {} : _ref3$success,
    strokeColor = _ref3.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || _colors.presetPrimaryColors.green, strokeColor || null];
};
exports.getStrokeColor = getStrokeColor;
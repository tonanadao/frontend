"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcProgress = require("rc-progress");
var React = _interopRequireWildcard(require("react"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _utils = require("./utils");
var CIRCLE_MIN_STROKE_WIDTH = 3;
var getMinPercent = function getMinPercent(width) {
  return CIRCLE_MIN_STROKE_WIDTH / width * 100;
};
var Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
    _props$width = props.width,
    width = _props$width === void 0 ? 120 : _props$width,
    _props$strokeWidth = props.strokeWidth,
    strokeWidth = _props$strokeWidth === void 0 ? Math.max(getMinPercent(width), 6) : _props$strokeWidth,
    _props$trailColor = props.trailColor,
    trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
    _props$strokeLinecap = props.strokeLinecap,
    strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
    gapPosition = props.gapPosition,
    gapDegree = props.gapDegree,
    type = props.type,
    children = props.children,
    success = props.success;
  var circleStyle = {
    width: width,
    height: width,
    fontSize: width * 0.15 + 6
  };
  var realGapDegree = React.useMemo(function () {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  }, [gapDegree, type]);
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
  // using className to style stroke color
  var isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  var strokeColor = (0, _utils.getStrokeColor)({
    success: success,
    strokeColor: props.strokeColor
  });
  var wrapperClassName = (0, _classnames["default"])(prefixCls + "-inner", (0, _defineProperty2["default"])({}, prefixCls + "-circle-gradient", isGradient));
  var circleContent = /*#__PURE__*/React.createElement(_rcProgress.Circle, {
    percent: (0, _utils.getPercentage)(props),
    strokeWidth: strokeWidth,
    trailWidth: strokeWidth,
    strokeColor: strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: realGapDegree,
    gapPosition: gapPos
  });
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, width <= 20 ? /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: children
  }, circleContent) : /*#__PURE__*/React.createElement(React.Fragment, null, circleContent, children));
};
var _default = Circle;
exports["default"] = _default;
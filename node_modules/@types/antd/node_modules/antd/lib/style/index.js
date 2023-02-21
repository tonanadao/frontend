"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genLinkStyle = exports.genFocusStyle = exports.genFocusOutline = exports.genCommonStyle = exports.clearFix = void 0;
Object.defineProperty(exports, "operationUnit", {
  enumerable: true,
  get: function get() {
    return _operationUnit.operationUnit;
  }
});
exports.resetIcon = exports.resetComponent = void 0;
Object.defineProperty(exports, "roundedArrow", {
  enumerable: true,
  get: function get() {
    return _roundedArrow.roundedArrow;
  }
});
exports.textEllipsis = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _operationUnit = require("./operationUnit");
var _roundedArrow = require("./roundedArrow");
var textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
exports.textEllipsis = textEllipsis;
var resetComponent = function resetComponent(token) {
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token.lineHeight,
    listStyle: 'none',
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: token.fontFamily
  };
};
exports.resetComponent = resetComponent;
var resetIcon = function resetIcon() {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': {
      lineHeight: 1
    },
    svg: {
      display: 'inline-block'
    },
    '& &-icon': {
      display: 'block'
    }
  };
};
exports.resetIcon = resetIcon;
var clearFix = function clearFix() {
  return {
    // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
    '&::before': {
      display: 'table',
      content: '""'
    },
    '&::after': {
      // https://github.com/ant-design/ant-design/issues/21864
      display: 'table',
      clear: 'both',
      content: '""'
    }
  };
};
exports.clearFix = clearFix;
var genLinkStyle = function genLinkStyle(token) {
  var _a;
  return {
    a: (_a = {
      color: token.colorLink,
      textDecoration: token.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: "color " + token.motionDurationSlow,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': {
        color: token.colorLinkHover
      },
      '&:active': {
        color: token.colorLinkActive
      }
    }, (0, _defineProperty2["default"])(_a, "&:active,\n  &:hover", {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    }), (0, _defineProperty2["default"])(_a, '&:focus', {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    }), (0, _defineProperty2["default"])(_a, '&[disabled]', {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }), _a)
  };
};
exports.genLinkStyle = genLinkStyle;
var genCommonStyle = function genCommonStyle(token, componentPrefixCls) {
  var fontFamily = token.fontFamily,
    fontSize = token.fontSize;
  var rootPrefixSelector = "[class^=\"" + componentPrefixCls + "\"], [class*=\" " + componentPrefixCls + "\"]";
  return (0, _defineProperty2["default"])({}, rootPrefixSelector, (0, _defineProperty2["default"])({
    fontFamily: fontFamily,
    fontSize: fontSize,
    boxSizing: 'border-box',
    '&::before, &::after': {
      boxSizing: 'border-box'
    }
  }, rootPrefixSelector, {
    boxSizing: 'border-box',
    '&::before, &::after': {
      boxSizing: 'border-box'
    }
  }));
};
exports.genCommonStyle = genCommonStyle;
var genFocusOutline = function genFocusOutline(token) {
  return {
    outline: token.lineWidth * 4 + "px solid " + token.colorPrimaryBorder,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  };
};
exports.genFocusOutline = genFocusOutline;
var genFocusStyle = function genFocusStyle(token) {
  return {
    '&:focus-visible': (0, _extends2["default"])({}, genFocusOutline(token))
  };
};
exports.genFocusStyle = genFocusStyle;
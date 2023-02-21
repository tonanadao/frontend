import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export { operationUnit } from './operationUnit';
export { roundedArrow } from './roundedArrow';
export var textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
export var resetComponent = function resetComponent(token) {
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
export var resetIcon = function resetIcon() {
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
export var clearFix = function clearFix() {
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
export var genLinkStyle = function genLinkStyle(token) {
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
    }, _defineProperty(_a, "&:active,\n  &:hover", {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    }), _defineProperty(_a, '&:focus', {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    }), _defineProperty(_a, '&[disabled]', {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }), _a)
  };
};
export var genCommonStyle = function genCommonStyle(token, componentPrefixCls) {
  var fontFamily = token.fontFamily,
    fontSize = token.fontSize;
  var rootPrefixSelector = "[class^=\"" + componentPrefixCls + "\"], [class*=\" " + componentPrefixCls + "\"]";
  return _defineProperty({}, rootPrefixSelector, _defineProperty({
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
export var genFocusOutline = function genFocusOutline(token) {
  return {
    outline: token.lineWidth * 4 + "px solid " + token.colorPrimaryBorder,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s'
  };
};
export var genFocusStyle = function genFocusStyle(token) {
  return {
    '&:focus-visible': _extends({}, genFocusOutline(token))
  };
};
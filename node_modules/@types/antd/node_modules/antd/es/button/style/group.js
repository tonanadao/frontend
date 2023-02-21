import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genButtonBorderStyle = function genButtonBorderStyle(buttonTypeCls, borderColor) {
  return _defineProperty({}, "> span, > " + buttonTypeCls, {
    '&:not(:last-child)': _defineProperty({}, "&, & > " + buttonTypeCls, {
      '&:not(:disabled)': {
        borderInlineEndColor: borderColor
      }
    }),
    '&:not(:first-child)': _defineProperty({}, "&, & > " + buttonTypeCls, {
      '&:not(:disabled)': {
        borderInlineStartColor: borderColor
      }
    })
  });
};
var genGroupStyle = function genGroupStyle(token) {
  var _componentCls, _ref2;
  var componentCls = token.componentCls,
    fontSize = token.fontSize,
    lineWidth = token.lineWidth,
    colorPrimaryHover = token.colorPrimaryHover,
    colorErrorHover = token.colorErrorHover;
  return _defineProperty({}, componentCls + "-group", [(_ref2 = {
    position: 'relative',
    display: 'inline-flex'
  }, _defineProperty(_ref2, "> span, > " + componentCls, {
    '&:not(:last-child)': _defineProperty({}, "&, & > " + componentCls, {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    }),
    '&:not(:first-child)': _defineProperty({
      marginInlineStart: -lineWidth
    }, "&, & > " + componentCls, {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0
    })
  }), _defineProperty(_ref2, componentCls, (_componentCls = {
    position: 'relative',
    zIndex: 1
  }, _defineProperty(_componentCls, "&:hover,\n          &:focus,\n          &:active", {
    zIndex: 2
  }), _defineProperty(_componentCls, '&[disabled]', {
    zIndex: 0
  }), _componentCls)), _defineProperty(_ref2, componentCls + "-icon-only", {
    fontSize: fontSize
  }), _ref2),
  // Border Color
  genButtonBorderStyle(componentCls + "-primary", colorPrimaryHover), genButtonBorderStyle(componentCls + "-danger", colorErrorHover)]);
};
export default genGroupStyle;
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genFixedStyle = function genFixedStyle(token) {
  var _ref, _ref2, _ref3;
  var componentCls = token.componentCls,
    lineWidth = token.lineWidth,
    colorSplit = token.colorSplit,
    motionDurationSlow = token.motionDurationSlow,
    zIndexTableFixed = token.zIndexTableFixed,
    tableBg = token.tableBg;
  var shadowColor = colorSplit;
  // Follow style is magic of shadow which should not follow token:
  return _defineProperty({}, componentCls + "-wrapper", (_ref3 = {}, _defineProperty(_ref3, "\n        " + componentCls + "-cell-fix-left,\n        " + componentCls + "-cell-fix-right\n      ", {
    position: 'sticky !important',
    zIndex: zIndexTableFixed,
    background: tableBg
  }), _defineProperty(_ref3, "\n        " + componentCls + "-cell-fix-left-first::after,\n        " + componentCls + "-cell-fix-left-last::after\n      ", {
    position: 'absolute',
    top: 0,
    right: {
      _skip_check_: true,
      value: 0
    },
    bottom: -lineWidth,
    width: 30,
    transform: 'translateX(100%)',
    transition: "box-shadow " + motionDurationSlow,
    content: '""',
    pointerEvents: 'none'
  }), _defineProperty(_ref3, componentCls + "-cell-fix-left-all::after", {
    display: 'none'
  }), _defineProperty(_ref3, "\n        " + componentCls + "-cell-fix-right-first::after,\n        " + componentCls + "-cell-fix-right-last::after\n      ", {
    position: 'absolute',
    top: 0,
    bottom: -lineWidth,
    left: {
      _skip_check_: true,
      value: 0
    },
    width: 30,
    transform: 'translateX(-100%)',
    transition: "box-shadow " + motionDurationSlow,
    content: '""',
    pointerEvents: 'none'
  }), _defineProperty(_ref3, componentCls + "-container", {
    '&::before, &::after': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      zIndex: zIndexTableFixed,
      width: 30,
      transition: "box-shadow " + motionDurationSlow,
      content: '""',
      pointerEvents: 'none'
    },
    '&::before': {
      insetInlineStart: 0
    },
    '&::after': {
      insetInlineEnd: 0
    }
  }), _defineProperty(_ref3, componentCls + "-ping-left", (_ref = {}, _defineProperty(_ref, "&:not(" + componentCls + "-has-fix-left) " + componentCls + "-container", {
    position: 'relative',
    '&::before': {
      boxShadow: "inset 10px 0 8px -8px " + shadowColor
    }
  }), _defineProperty(_ref, "\n          " + componentCls + "-cell-fix-left-first::after,\n          " + componentCls + "-cell-fix-left-last::after\n        ", {
    boxShadow: "inset 10px 0 8px -8px " + shadowColor
  }), _defineProperty(_ref, componentCls + "-cell-fix-left-last::before", {
    backgroundColor: 'transparent !important'
  }), _ref)), _defineProperty(_ref3, componentCls + "-ping-right", (_ref2 = {}, _defineProperty(_ref2, "&:not(" + componentCls + "-has-fix-right) " + componentCls + "-container", {
    position: 'relative',
    '&::after': {
      boxShadow: "inset -10px 0 8px -8px " + shadowColor
    }
  }), _defineProperty(_ref2, "\n          " + componentCls + "-cell-fix-right-first::after,\n          " + componentCls + "-cell-fix-right-last::after\n        ", {
    boxShadow: "inset -10px 0 8px -8px " + shadowColor
  }), _ref2)), _ref3));
};
export default genFixedStyle;
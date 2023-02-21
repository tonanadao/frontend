import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsProgressDotStyle = function genStepsProgressDotStyle(token) {
  var _ref2, _ref4, _ref5, _ref6;
  var componentCls = token.componentCls,
    descriptionWidth = token.descriptionWidth,
    lineHeight = token.lineHeight,
    stepsCurrentDotSize = token.stepsCurrentDotSize,
    stepsDotSize = token.stepsDotSize,
    motionDurationSlow = token.motionDurationSlow;
  return _ref6 = {}, _defineProperty(_ref6, "&" + componentCls + "-dot, &" + componentCls + "-dot" + componentCls + "-small", _defineProperty({}, componentCls + "-item", (_ref2 = {
    '&-title': {
      lineHeight: lineHeight
    },
    '&-tail': {
      top: Math.floor((token.stepsDotSize - token.lineWidth * 3) / 2),
      width: '100%',
      marginTop: 0,
      marginBottom: 0,
      marginInline: descriptionWidth / 2 + "px 0",
      padding: 0,
      '&::after': {
        width: "calc(100% - " + token.marginSM * 2 + "px)",
        height: token.lineWidth * 3,
        marginInlineStart: token.marginSM
      }
    },
    '&-icon': _defineProperty({
      width: stepsDotSize,
      height: stepsDotSize,
      marginInlineStart: (token.descriptionWidth - stepsDotSize) / 2,
      paddingInlineEnd: 0,
      lineHeight: stepsDotSize + "px",
      background: 'transparent',
      border: 0
    }, componentCls + "-icon-dot", {
      position: 'relative',
      "float": 'left',
      width: '100%',
      height: '100%',
      borderRadius: 100,
      transition: "all " + motionDurationSlow,
      /* expand hover area */
      '&::after': {
        position: 'absolute',
        top: -token.marginSM,
        insetInlineStart: (stepsDotSize - token.controlHeightLG * 1.5) / 2,
        width: token.controlHeightLG * 1.5,
        height: token.controlHeight,
        background: 'transparent',
        content: '""'
      }
    }),
    '&-content': {
      width: descriptionWidth
    }
  }, _defineProperty(_ref2, "&-process " + componentCls + "-item-icon", {
    position: 'relative',
    top: (stepsDotSize - stepsCurrentDotSize) / 2,
    width: stepsCurrentDotSize,
    height: stepsCurrentDotSize,
    lineHeight: stepsCurrentDotSize + "px",
    background: 'none',
    marginInlineStart: (token.descriptionWidth - stepsCurrentDotSize) / 2
  }), _defineProperty(_ref2, "&-process " + componentCls + "-icon", _defineProperty({}, "&:first-child " + componentCls + "-icon-dot", {
    insetInlineStart: 0
  })), _ref2))), _defineProperty(_ref6, "&" + componentCls + "-vertical" + componentCls + "-dot", (_ref5 = {}, _defineProperty(_ref5, componentCls + "-item-icon", {
    marginTop: (token.controlHeight - stepsDotSize) / 2,
    marginInlineStart: 0,
    background: 'none'
  }), _defineProperty(_ref5, componentCls + "-item-process " + componentCls + "-item-icon", {
    marginTop: (token.controlHeight - stepsCurrentDotSize) / 2,
    top: 0,
    insetInlineStart: (stepsDotSize - stepsCurrentDotSize) / 2,
    marginInlineStart: 0
  }), _defineProperty(_ref5, componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    top: (token.controlHeight - stepsDotSize) / 2,
    insetInlineStart: 0,
    margin: 0,
    padding: stepsDotSize + token.paddingXS + "px 0 " + token.paddingXS + "px",
    '&::after': {
      marginInlineStart: (stepsDotSize - token.lineWidth) / 2
    }
  }), _defineProperty(_ref5, "&" + componentCls + "-small", (_ref4 = {}, _defineProperty(_ref4, componentCls + "-item-icon", {
    marginTop: (token.controlHeightSM - stepsDotSize) / 2
  }), _defineProperty(_ref4, componentCls + "-item-process " + componentCls + "-item-icon", {
    marginTop: (token.controlHeightSM - stepsCurrentDotSize) / 2
  }), _defineProperty(_ref4, componentCls + "-item > " + componentCls + "-item-container > " + componentCls + "-item-tail", {
    top: (token.controlHeightSM - stepsDotSize) / 2
  }), _ref4)), _defineProperty(_ref5, componentCls + "-item:first-child " + componentCls + "-icon-dot", {
    insetInlineStart: 0
  }), _defineProperty(_ref5, componentCls + "-item-content", {
    width: 'inherit'
  }), _ref5)), _ref6;
};
export default genStepsProgressDotStyle;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _customIcon = _interopRequireDefault(require("./custom-icon"));
var _labelPlacement = _interopRequireDefault(require("./label-placement"));
var _nav = _interopRequireDefault(require("./nav"));
var _progress = _interopRequireDefault(require("./progress"));
var _progressDot = _interopRequireDefault(require("./progress-dot"));
var _rtl = _interopRequireDefault(require("./rtl"));
var _small = _interopRequireDefault(require("./small"));
var _vertical = _interopRequireDefault(require("./vertical"));
var _inline = _interopRequireDefault(require("./inline"));
var _style = require("../../style");
var StepItemStatusEnum;
(function (StepItemStatusEnum) {
  StepItemStatusEnum["wait"] = "wait";
  StepItemStatusEnum["process"] = "process";
  StepItemStatusEnum["finish"] = "finish";
  StepItemStatusEnum["error"] = "error";
})(StepItemStatusEnum || (StepItemStatusEnum = {}));
var genStepsItemStatusStyle = function genStepsItemStatusStyle(status, token) {
  var _ref4;
  var prefix = token.componentCls + "-item";
  var iconColorKey = status + "IconColor";
  var titleColorKey = status + "TitleColor";
  var descriptionColorKey = status + "DescriptionColor";
  var tailColorKey = status + "TailColor";
  var iconBgColorKey = status + "IconBgColor";
  var iconBorderColorKey = status + "IconBorderColor";
  var dotColorKey = status + "DotColor";
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, prefix + "-" + status + " " + prefix + "-icon", (0, _defineProperty2["default"])({
    backgroundColor: token[iconBgColorKey],
    borderColor: token[iconBorderColorKey]
  }, "> " + token.componentCls + "-icon", (0, _defineProperty2["default"])({
    color: token[iconColorKey]
  }, token.componentCls + "-icon-dot", {
    background: token[dotColorKey]
  }))), (0, _defineProperty2["default"])(_ref4, prefix + "-" + status + prefix + "-custom " + prefix + "-icon", (0, _defineProperty2["default"])({}, "> " + token.componentCls + "-icon", {
    color: token[dotColorKey]
  })), (0, _defineProperty2["default"])(_ref4, prefix + "-" + status + " > " + prefix + "-container > " + prefix + "-content > " + prefix + "-title", {
    color: token[titleColorKey],
    '&::after': {
      backgroundColor: token[tailColorKey]
    }
  }), (0, _defineProperty2["default"])(_ref4, prefix + "-" + status + " > " + prefix + "-container > " + prefix + "-content > " + prefix + "-description", {
    color: token[descriptionColorKey]
  }), (0, _defineProperty2["default"])(_ref4, prefix + "-" + status + " > " + prefix + "-container > " + prefix + "-tail::after", {
    backgroundColor: token[tailColorKey]
  }), _ref4;
};
var genStepsItemStyle = function genStepsItemStyle(token) {
  var _extends2, _extends4;
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow;
  var stepsItemCls = componentCls + "-item"; // .ant-steps-item
  return (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((_extends2 = {}, (0, _defineProperty2["default"])(_extends2, stepsItemCls, {
    position: 'relative',
    display: 'inline-block',
    flex: 1,
    overflow: 'hidden',
    verticalAlign: 'top',
    '&:last-child': (0, _defineProperty2["default"])({
      flex: 'none'
    }, "> " + stepsItemCls + "-container > " + stepsItemCls + "-tail, > " + stepsItemCls + "-container >  " + stepsItemCls + "-content > " + stepsItemCls + "-title::after", {
      display: 'none'
    })
  }), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-container", {
    outline: 'none'
  }), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-icon, " + stepsItemCls + "-content", {
    display: 'inline-block',
    verticalAlign: 'top'
  }), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-icon", (0, _defineProperty2["default"])({
    width: token.stepsIconSize,
    height: token.stepsIconSize,
    marginTop: 0,
    marginBottom: 0,
    marginInlineStart: 0,
    marginInlineEnd: token.marginXS,
    fontSize: token.stepsIconFontSize,
    fontFamily: token.fontFamily,
    lineHeight: token.stepsIconSize + "px",
    textAlign: 'center',
    borderRadius: token.stepsIconSize,
    border: token.lineWidth + "px " + token.lineType + " transparent",
    transition: "background-color " + motionDurationSlow + ", border-color " + motionDurationSlow
  }, componentCls + "-icon", {
    position: 'relative',
    top: token.stepsIconTop,
    color: token.colorPrimary,
    lineHeight: 1
  })), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-tail", {
    position: 'absolute',
    top: token.stepsIconSize / 2 - token.paddingXXS,
    insetInlineStart: 0,
    width: '100%',
    '&::after': {
      display: 'inline-block',
      width: '100%',
      height: token.lineWidth,
      background: token.colorSplit,
      borderRadius: token.lineWidth,
      transition: "background " + motionDurationSlow,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-title", {
    position: 'relative',
    display: 'inline-block',
    paddingInlineEnd: token.padding,
    color: token.colorText,
    fontSize: token.fontSizeLG,
    lineHeight: token.stepsTitleLineHeight + "px",
    '&::after': {
      position: 'absolute',
      top: token.stepsTitleLineHeight / 2,
      insetInlineStart: '100%',
      display: 'block',
      width: 9999,
      height: token.lineWidth,
      background: token.processTailColor,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-subtitle", {
    display: 'inline',
    marginInlineStart: token.marginXS,
    color: token.colorTextDescription,
    fontWeight: 'normal',
    fontSize: token.fontSize
  }), (0, _defineProperty2["default"])(_extends2, stepsItemCls + "-description", {
    color: token.colorTextDescription,
    fontSize: token.fontSize
  }), _extends2), genStepsItemStatusStyle(StepItemStatusEnum.wait, token)), genStepsItemStatusStyle(StepItemStatusEnum.process, token)), (0, _defineProperty2["default"])({}, stepsItemCls + "-process > " + stepsItemCls + "-container > " + stepsItemCls + "-title", {
    fontWeight: token.fontWeightStrong
  })), genStepsItemStatusStyle(StepItemStatusEnum.finish, token)), genStepsItemStatusStyle(StepItemStatusEnum.error, token)), (_extends4 = {}, (0, _defineProperty2["default"])(_extends4, "" + stepsItemCls + componentCls + "-next-error > " + componentCls + "-item-title::after", {
    background: token.colorError
  }), (0, _defineProperty2["default"])(_extends4, stepsItemCls + "-disabled", {
    cursor: 'not-allowed'
  }), _extends4));
};
// ============================= Clickable ===========================
var genStepsClickableStyle = function genStepsClickableStyle(token) {
  var _ref8, _ref11, _ref13, _ref15;
  var componentCls = token.componentCls,
    motionDurationSlow = token.motionDurationSlow;
  return _ref15 = {}, (0, _defineProperty2["default"])(_ref15, "& " + componentCls + "-item", (0, _defineProperty2["default"])({}, "&:not(" + componentCls + "-item-active)", (_ref11 = {}, (0, _defineProperty2["default"])(_ref11, "& > " + componentCls + "-item-container[role='button']", (_ref8 = {
    cursor: 'pointer'
  }, (0, _defineProperty2["default"])(_ref8, componentCls + "-item", (0, _defineProperty2["default"])({}, "&-title, &-subtitle, &-description, &-icon " + componentCls + "-icon", {
    transition: "color " + motionDurationSlow
  })), (0, _defineProperty2["default"])(_ref8, '&:hover', (0, _defineProperty2["default"])({}, componentCls + "-item", (0, _defineProperty2["default"])({}, "&-title, &-subtitle, &-description", {
    color: token.colorPrimary
  }))), _ref8)), (0, _defineProperty2["default"])(_ref11, "&:not(" + componentCls + "-item-process)", (0, _defineProperty2["default"])({}, "& > " + componentCls + "-item-container[role='button']:hover", (0, _defineProperty2["default"])({}, componentCls + "-item", {
    '&-icon': (0, _defineProperty2["default"])({
      borderColor: token.colorPrimary
    }, componentCls + "-icon", {
      color: token.colorPrimary
    })
  }))), _ref11))), (0, _defineProperty2["default"])(_ref15, "&" + componentCls + "-horizontal:not(" + componentCls + "-label-vertical)", (0, _defineProperty2["default"])({}, componentCls + "-item", (_ref13 = {
    paddingInlineStart: token.padding,
    whiteSpace: 'nowrap',
    '&:first-child': {
      paddingInlineStart: 0
    }
  }, (0, _defineProperty2["default"])(_ref13, "&:last-child " + componentCls + "-item-title", {
    paddingInlineEnd: 0
  }), (0, _defineProperty2["default"])(_ref13, '&-tail', {
    display: 'none'
  }), (0, _defineProperty2["default"])(_ref13, '&-description', {
    maxWidth: token.descriptionWidth,
    whiteSpace: 'normal'
  }), _ref13))), _ref15;
};
var genStepsStyle = function genStepsStyle(token) {
  var componentCls = token.componentCls; // .ant-steps
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), {
    display: 'flex',
    width: '100%',
    fontSize: 0,
    textAlign: 'initial'
  }), genStepsItemStyle(token)), genStepsClickableStyle(token)), (0, _customIcon["default"])(token)), (0, _small["default"])(token)), (0, _vertical["default"])(token)), (0, _labelPlacement["default"])(token)), (0, _progressDot["default"])(token)), (0, _nav["default"])(token)), (0, _rtl["default"])(token)), (0, _progress["default"])(token)), (0, _inline["default"])(token)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Steps', function (token) {
  var wireframe = token.wireframe,
    colorTextDisabled = token.colorTextDisabled,
    fontSizeHeading3 = token.fontSizeHeading3,
    fontSize = token.fontSize,
    controlHeight = token.controlHeight,
    controlHeightLG = token.controlHeightLG,
    colorTextLightSolid = token.colorTextLightSolid,
    colorText = token.colorText,
    colorPrimary = token.colorPrimary,
    colorTextLabel = token.colorTextLabel,
    colorTextDescription = token.colorTextDescription,
    colorTextQuaternary = token.colorTextQuaternary,
    colorFillContent = token.colorFillContent,
    controlItemBgActive = token.controlItemBgActive,
    colorError = token.colorError,
    colorBgContainer = token.colorBgContainer,
    colorBorderSecondary = token.colorBorderSecondary;
  var stepsIconSize = token.controlHeight;
  var processTailColor = token.colorSplit;
  var stepsToken = (0, _internal.mergeToken)(token, {
    // Steps variable default.less
    processTailColor: processTailColor,
    stepsNavArrowColor: colorTextDisabled,
    stepsIconSize: stepsIconSize,
    stepsIconCustomSize: stepsIconSize,
    stepsIconCustomTop: 0,
    stepsIconCustomFontSize: controlHeightLG / 2,
    stepsIconTop: -0.5,
    stepsIconFontSize: fontSize,
    stepsTitleLineHeight: controlHeight,
    stepsSmallIconSize: fontSizeHeading3,
    stepsDotSize: controlHeight / 4,
    stepsCurrentDotSize: controlHeightLG / 4,
    stepsNavContentMaxWidth: 'auto',
    // Steps component less variable
    processIconColor: colorTextLightSolid,
    processTitleColor: colorText,
    processDescriptionColor: colorText,
    processIconBgColor: colorPrimary,
    processIconBorderColor: colorPrimary,
    processDotColor: colorPrimary,
    waitIconColor: wireframe ? colorTextDisabled : colorTextLabel,
    waitTitleColor: colorTextDescription,
    waitDescriptionColor: colorTextDescription,
    waitTailColor: processTailColor,
    waitIconBgColor: wireframe ? colorBgContainer : colorFillContent,
    waitIconBorderColor: wireframe ? colorTextDisabled : 'transparent',
    waitDotColor: colorTextDisabled,
    finishIconColor: colorPrimary,
    finishTitleColor: colorText,
    finishDescriptionColor: colorTextDescription,
    finishTailColor: colorPrimary,
    finishIconBgColor: wireframe ? colorBgContainer : controlItemBgActive,
    finishIconBorderColor: wireframe ? colorPrimary : controlItemBgActive,
    finishDotColor: colorPrimary,
    errorIconColor: colorTextLightSolid,
    errorTitleColor: colorError,
    errorDescriptionColor: colorError,
    errorTailColor: processTailColor,
    errorIconBgColor: colorError,
    errorIconBorderColor: colorError,
    errorDotColor: colorError,
    stepsNavActiveColor: colorPrimary,
    stepsProgressSize: controlHeightLG,
    // Steps inline variable
    inlineDotSize: 6,
    inlineTitleColor: colorTextQuaternary,
    inlineTailColor: colorBorderSecondary
  });
  return [genStepsStyle(stepsToken)];
}, {
  descriptionWidth: 140
});
exports["default"] = _default;
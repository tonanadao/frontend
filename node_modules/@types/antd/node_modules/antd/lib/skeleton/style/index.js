"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _cssinjs = require("@ant-design/cssinjs");
var _internal = require("../../theme/internal");
var skeletonClsLoading = new _cssinjs.Keyframes("ant-skeleton-loading", {
  '0%': {
    transform: 'translateX(-37.5%)'
  },
  '100%': {
    transform: 'translateX(37.5%)'
  }
});
var genSkeletonElementCommonSize = function genSkeletonElementCommonSize(size) {
  return {
    height: size,
    lineHeight: size + "px"
  };
};
var genSkeletonElementAvatarSize = function genSkeletonElementAvatarSize(size) {
  return (0, _extends6["default"])({
    width: size
  }, genSkeletonElementCommonSize(size));
};
var genSkeletonColor = function genSkeletonColor(token) {
  return {
    position: 'relative',
    // fix https://github.com/ant-design/ant-design/issues/36444
    // https://monshin.github.io/202109/css/safari-border-radius-overflow-hidden/
    /* stylelint-disable-next-line property-no-vendor-prefix,value-no-vendor-prefix */
    zIndex: 0,
    overflow: 'hidden',
    background: 'transparent',
    '&::after': {
      position: 'absolute',
      top: 0,
      insetInlineEnd: '-150%',
      bottom: 0,
      insetInlineStart: '-150%',
      background: token.skeletonLoadingBackground,
      animationName: skeletonClsLoading,
      animationDuration: token.skeletonLoadingMotionDuration,
      animationTimingFunction: 'ease',
      animationIterationCount: 'infinite',
      content: '""'
    }
  };
};
var genSkeletonElementInputSize = function genSkeletonElementInputSize(size) {
  return (0, _extends6["default"])({
    width: size * 5,
    minWidth: size * 5
  }, genSkeletonElementCommonSize(size));
};
var genSkeletonElementAvatar = function genSkeletonElementAvatar(token) {
  var _ref;
  var skeletonAvatarCls = token.skeletonAvatarCls,
    color = token.color,
    controlHeight = token.controlHeight,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM;
  return _ref = {}, (0, _defineProperty2["default"])(_ref, "" + skeletonAvatarCls, (0, _extends6["default"])({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color
  }, genSkeletonElementAvatarSize(controlHeight))), (0, _defineProperty2["default"])(_ref, "" + skeletonAvatarCls + skeletonAvatarCls + "-circle", {
    borderRadius: '50%'
  }), (0, _defineProperty2["default"])(_ref, "" + skeletonAvatarCls + skeletonAvatarCls + "-lg", (0, _extends6["default"])({}, genSkeletonElementAvatarSize(controlHeightLG))), (0, _defineProperty2["default"])(_ref, "" + skeletonAvatarCls + skeletonAvatarCls + "-sm", (0, _extends6["default"])({}, genSkeletonElementAvatarSize(controlHeightSM))), _ref;
};
var genSkeletonElementInput = function genSkeletonElementInput(token) {
  var _ref2;
  var controlHeight = token.controlHeight,
    borderRadiusSM = token.borderRadiusSM,
    skeletonInputCls = token.skeletonInputCls,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    color = token.color;
  return _ref2 = {}, (0, _defineProperty2["default"])(_ref2, "" + skeletonInputCls, (0, _extends6["default"])({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color,
    borderRadius: borderRadiusSM
  }, genSkeletonElementInputSize(controlHeight))), (0, _defineProperty2["default"])(_ref2, skeletonInputCls + "-lg", (0, _extends6["default"])({}, genSkeletonElementInputSize(controlHeightLG))), (0, _defineProperty2["default"])(_ref2, skeletonInputCls + "-sm", (0, _extends6["default"])({}, genSkeletonElementInputSize(controlHeightSM))), _ref2;
};
var genSkeletonElementImageSize = function genSkeletonElementImageSize(size) {
  return (0, _extends6["default"])({
    width: size
  }, genSkeletonElementCommonSize(size));
};
var genSkeletonElementImage = function genSkeletonElementImage(token) {
  var _extends2, _ref3;
  var skeletonImageCls = token.skeletonImageCls,
    imageSizeBase = token.imageSizeBase,
    color = token.color,
    borderRadiusSM = token.borderRadiusSM;
  return _ref3 = {}, (0, _defineProperty2["default"])(_ref3, "" + skeletonImageCls, (0, _extends6["default"])((0, _extends6["default"])({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
    background: color,
    borderRadius: borderRadiusSM
  }, genSkeletonElementImageSize(imageSizeBase * 2)), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, skeletonImageCls + "-path", {
    fill: '#bfbfbf'
  }), (0, _defineProperty2["default"])(_extends2, skeletonImageCls + "-svg", (0, _extends6["default"])((0, _extends6["default"])({}, genSkeletonElementImageSize(imageSizeBase)), {
    maxWidth: imageSizeBase * 4,
    maxHeight: imageSizeBase * 4
  })), (0, _defineProperty2["default"])(_extends2, skeletonImageCls + "-svg" + skeletonImageCls + "-svg-circle", {
    borderRadius: '50%'
  }), _extends2))), (0, _defineProperty2["default"])(_ref3, "" + skeletonImageCls + skeletonImageCls + "-circle", {
    borderRadius: '50%'
  }), _ref3;
};
var genSkeletonElementButtonShape = function genSkeletonElementButtonShape(token, size, buttonCls) {
  var _ref4;
  var skeletonButtonCls = token.skeletonButtonCls;
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, "" + buttonCls + skeletonButtonCls + "-circle", {
    width: size,
    minWidth: size,
    borderRadius: '50%'
  }), (0, _defineProperty2["default"])(_ref4, "" + buttonCls + skeletonButtonCls + "-round", {
    borderRadius: size
  }), _ref4;
};
var genSkeletonElementButtonSize = function genSkeletonElementButtonSize(size) {
  return (0, _extends6["default"])({
    width: size * 2,
    minWidth: size * 2
  }, genSkeletonElementCommonSize(size));
};
var genSkeletonElementButton = function genSkeletonElementButton(token) {
  var borderRadiusSM = token.borderRadiusSM,
    skeletonButtonCls = token.skeletonButtonCls,
    controlHeight = token.controlHeight,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    color = token.color;
  return (0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _defineProperty2["default"])({}, "" + skeletonButtonCls, (0, _extends6["default"])({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color,
    borderRadius: borderRadiusSM,
    width: controlHeight * 2,
    minWidth: controlHeight * 2
  }, genSkeletonElementButtonSize(controlHeight))), genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), (0, _defineProperty2["default"])({}, skeletonButtonCls + "-lg", (0, _extends6["default"])({}, genSkeletonElementButtonSize(controlHeightLG)))), genSkeletonElementButtonShape(token, controlHeightLG, skeletonButtonCls + "-lg")), (0, _defineProperty2["default"])({}, skeletonButtonCls + "-sm", (0, _extends6["default"])({}, genSkeletonElementButtonSize(controlHeightSM)))), genSkeletonElementButtonShape(token, controlHeightSM, skeletonButtonCls + "-sm"));
};
// =============================== Base ===============================
var genBaseStyle = function genBaseStyle(token) {
  var _ref5, _ref7, _ref9, _ref12, _ref14;
  var componentCls = token.componentCls,
    skeletonAvatarCls = token.skeletonAvatarCls,
    skeletonTitleCls = token.skeletonTitleCls,
    skeletonParagraphCls = token.skeletonParagraphCls,
    skeletonButtonCls = token.skeletonButtonCls,
    skeletonInputCls = token.skeletonInputCls,
    skeletonImageCls = token.skeletonImageCls,
    controlHeight = token.controlHeight,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    color = token.color,
    padding = token.padding,
    marginSM = token.marginSM,
    borderRadius = token.borderRadius,
    skeletonTitleHeight = token.skeletonTitleHeight,
    skeletonBlockRadius = token.skeletonBlockRadius,
    skeletonParagraphLineHeight = token.skeletonParagraphLineHeight,
    controlHeightXS = token.controlHeightXS,
    skeletonParagraphMarginTop = token.skeletonParagraphMarginTop;
  return _ref14 = {}, (0, _defineProperty2["default"])(_ref14, "" + componentCls, (_ref9 = {
    display: 'table',
    width: '100%'
  }, (0, _defineProperty2["default"])(_ref9, componentCls + "-header", (_ref5 = {
    display: 'table-cell',
    paddingInlineEnd: padding,
    verticalAlign: 'top'
  }, (0, _defineProperty2["default"])(_ref5, "" + skeletonAvatarCls, (0, _extends6["default"])({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color
  }, genSkeletonElementAvatarSize(controlHeight))), (0, _defineProperty2["default"])(_ref5, skeletonAvatarCls + "-circle", {
    borderRadius: '50%'
  }), (0, _defineProperty2["default"])(_ref5, skeletonAvatarCls + "-lg", (0, _extends6["default"])({}, genSkeletonElementAvatarSize(controlHeightLG))), (0, _defineProperty2["default"])(_ref5, skeletonAvatarCls + "-sm", (0, _extends6["default"])({}, genSkeletonElementAvatarSize(controlHeightSM))), _ref5)), (0, _defineProperty2["default"])(_ref9, componentCls + "-content", (_ref7 = {
    display: 'table-cell',
    width: '100%',
    verticalAlign: 'top'
  }, (0, _defineProperty2["default"])(_ref7, "" + skeletonTitleCls, (0, _defineProperty2["default"])({
    width: '100%',
    height: skeletonTitleHeight,
    background: color,
    borderRadius: skeletonBlockRadius
  }, "+ " + skeletonParagraphCls, {
    marginBlockStart: controlHeightSM
  })), (0, _defineProperty2["default"])(_ref7, "" + skeletonParagraphCls, {
    padding: 0,
    '> li': {
      width: '100%',
      height: skeletonParagraphLineHeight,
      listStyle: 'none',
      background: color,
      borderRadius: skeletonBlockRadius,
      '+ li': {
        marginBlockStart: controlHeightXS
      }
    }
  }), (0, _defineProperty2["default"])(_ref7, skeletonParagraphCls + "> li:last-child:not(:first-child):not(:nth-child(2))", {
    width: '61%'
  }), _ref7)), (0, _defineProperty2["default"])(_ref9, "&-round " + componentCls + "-content", (0, _defineProperty2["default"])({}, skeletonTitleCls + ", " + skeletonParagraphCls + " > li", {
    borderRadius: borderRadius
  })), _ref9)), (0, _defineProperty2["default"])(_ref14, componentCls + "-with-avatar " + componentCls + "-content", (0, _defineProperty2["default"])({}, "" + skeletonTitleCls, (0, _defineProperty2["default"])({
    marginBlockStart: marginSM
  }, "+ " + skeletonParagraphCls, {
    marginBlockStart: skeletonParagraphMarginTop
  }))), (0, _defineProperty2["default"])(_ref14, "" + componentCls + componentCls + "-element", (0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])((0, _extends6["default"])({
    display: 'inline-block',
    width: 'auto'
  }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token))), (0, _defineProperty2["default"])(_ref14, "" + componentCls + componentCls + "-block", (_ref12 = {
    width: '100%'
  }, (0, _defineProperty2["default"])(_ref12, "" + skeletonButtonCls, {
    width: '100%'
  }), (0, _defineProperty2["default"])(_ref12, "" + skeletonInputCls, {
    width: '100%'
  }), _ref12)), (0, _defineProperty2["default"])(_ref14, "" + componentCls + componentCls + "-active", (0, _defineProperty2["default"])({}, "\n        " + skeletonTitleCls + ",\n        " + skeletonParagraphCls + " > li,\n        " + skeletonAvatarCls + ",\n        " + skeletonButtonCls + ",\n        " + skeletonInputCls + ",\n        " + skeletonImageCls + "\n      ", (0, _extends6["default"])({}, genSkeletonColor(token)))), _ref14;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Skeleton', function (token) {
  var componentCls = token.componentCls;
  var skeletonToken = (0, _internal.mergeToken)(token, {
    skeletonAvatarCls: componentCls + "-avatar",
    skeletonTitleCls: componentCls + "-title",
    skeletonParagraphCls: componentCls + "-paragraph",
    skeletonButtonCls: componentCls + "-button",
    skeletonInputCls: componentCls + "-input",
    skeletonImageCls: componentCls + "-image",
    imageSizeBase: token.controlHeight * 1.5,
    skeletonTitleHeight: token.controlHeight / 2,
    skeletonBlockRadius: token.borderRadiusSM,
    skeletonParagraphLineHeight: token.controlHeight / 2,
    skeletonParagraphMarginTop: token.marginLG + token.marginXXS,
    borderRadius: 100,
    skeletonLoadingBackground: "linear-gradient(90deg, " + token.color + " 25%, " + token.colorGradientEnd + " 37%, " + token.color + " 63%)",
    skeletonLoadingMotionDuration: '1.4s'
  });
  return [genBaseStyle(skeletonToken)];
}, function (token) {
  var colorFillContent = token.colorFillContent,
    colorFill = token.colorFill;
  return {
    color: colorFillContent,
    colorGradientEnd: colorFill
  };
});
exports["default"] = _default;
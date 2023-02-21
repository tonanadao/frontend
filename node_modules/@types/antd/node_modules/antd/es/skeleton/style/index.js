import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { Keyframes } from '@ant-design/cssinjs';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
var skeletonClsLoading = new Keyframes("ant-skeleton-loading", {
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
  return _extends({
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
  return _extends({
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
  return _ref = {}, _defineProperty(_ref, "" + skeletonAvatarCls, _extends({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color
  }, genSkeletonElementAvatarSize(controlHeight))), _defineProperty(_ref, "" + skeletonAvatarCls + skeletonAvatarCls + "-circle", {
    borderRadius: '50%'
  }), _defineProperty(_ref, "" + skeletonAvatarCls + skeletonAvatarCls + "-lg", _extends({}, genSkeletonElementAvatarSize(controlHeightLG))), _defineProperty(_ref, "" + skeletonAvatarCls + skeletonAvatarCls + "-sm", _extends({}, genSkeletonElementAvatarSize(controlHeightSM))), _ref;
};
var genSkeletonElementInput = function genSkeletonElementInput(token) {
  var _ref2;
  var controlHeight = token.controlHeight,
    borderRadiusSM = token.borderRadiusSM,
    skeletonInputCls = token.skeletonInputCls,
    controlHeightLG = token.controlHeightLG,
    controlHeightSM = token.controlHeightSM,
    color = token.color;
  return _ref2 = {}, _defineProperty(_ref2, "" + skeletonInputCls, _extends({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color,
    borderRadius: borderRadiusSM
  }, genSkeletonElementInputSize(controlHeight))), _defineProperty(_ref2, skeletonInputCls + "-lg", _extends({}, genSkeletonElementInputSize(controlHeightLG))), _defineProperty(_ref2, skeletonInputCls + "-sm", _extends({}, genSkeletonElementInputSize(controlHeightSM))), _ref2;
};
var genSkeletonElementImageSize = function genSkeletonElementImageSize(size) {
  return _extends({
    width: size
  }, genSkeletonElementCommonSize(size));
};
var genSkeletonElementImage = function genSkeletonElementImage(token) {
  var _extends2, _ref3;
  var skeletonImageCls = token.skeletonImageCls,
    imageSizeBase = token.imageSizeBase,
    color = token.color,
    borderRadiusSM = token.borderRadiusSM;
  return _ref3 = {}, _defineProperty(_ref3, "" + skeletonImageCls, _extends(_extends({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'top',
    background: color,
    borderRadius: borderRadiusSM
  }, genSkeletonElementImageSize(imageSizeBase * 2)), (_extends2 = {}, _defineProperty(_extends2, skeletonImageCls + "-path", {
    fill: '#bfbfbf'
  }), _defineProperty(_extends2, skeletonImageCls + "-svg", _extends(_extends({}, genSkeletonElementImageSize(imageSizeBase)), {
    maxWidth: imageSizeBase * 4,
    maxHeight: imageSizeBase * 4
  })), _defineProperty(_extends2, skeletonImageCls + "-svg" + skeletonImageCls + "-svg-circle", {
    borderRadius: '50%'
  }), _extends2))), _defineProperty(_ref3, "" + skeletonImageCls + skeletonImageCls + "-circle", {
    borderRadius: '50%'
  }), _ref3;
};
var genSkeletonElementButtonShape = function genSkeletonElementButtonShape(token, size, buttonCls) {
  var _ref4;
  var skeletonButtonCls = token.skeletonButtonCls;
  return _ref4 = {}, _defineProperty(_ref4, "" + buttonCls + skeletonButtonCls + "-circle", {
    width: size,
    minWidth: size,
    borderRadius: '50%'
  }), _defineProperty(_ref4, "" + buttonCls + skeletonButtonCls + "-round", {
    borderRadius: size
  }), _ref4;
};
var genSkeletonElementButtonSize = function genSkeletonElementButtonSize(size) {
  return _extends({
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
  return _extends(_extends(_extends(_extends(_extends(_defineProperty({}, "" + skeletonButtonCls, _extends({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color,
    borderRadius: borderRadiusSM,
    width: controlHeight * 2,
    minWidth: controlHeight * 2
  }, genSkeletonElementButtonSize(controlHeight))), genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), _defineProperty({}, skeletonButtonCls + "-lg", _extends({}, genSkeletonElementButtonSize(controlHeightLG)))), genSkeletonElementButtonShape(token, controlHeightLG, skeletonButtonCls + "-lg")), _defineProperty({}, skeletonButtonCls + "-sm", _extends({}, genSkeletonElementButtonSize(controlHeightSM)))), genSkeletonElementButtonShape(token, controlHeightSM, skeletonButtonCls + "-sm"));
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
  return _ref14 = {}, _defineProperty(_ref14, "" + componentCls, (_ref9 = {
    display: 'table',
    width: '100%'
  }, _defineProperty(_ref9, componentCls + "-header", (_ref5 = {
    display: 'table-cell',
    paddingInlineEnd: padding,
    verticalAlign: 'top'
  }, _defineProperty(_ref5, "" + skeletonAvatarCls, _extends({
    display: 'inline-block',
    verticalAlign: 'top',
    background: color
  }, genSkeletonElementAvatarSize(controlHeight))), _defineProperty(_ref5, skeletonAvatarCls + "-circle", {
    borderRadius: '50%'
  }), _defineProperty(_ref5, skeletonAvatarCls + "-lg", _extends({}, genSkeletonElementAvatarSize(controlHeightLG))), _defineProperty(_ref5, skeletonAvatarCls + "-sm", _extends({}, genSkeletonElementAvatarSize(controlHeightSM))), _ref5)), _defineProperty(_ref9, componentCls + "-content", (_ref7 = {
    display: 'table-cell',
    width: '100%',
    verticalAlign: 'top'
  }, _defineProperty(_ref7, "" + skeletonTitleCls, _defineProperty({
    width: '100%',
    height: skeletonTitleHeight,
    background: color,
    borderRadius: skeletonBlockRadius
  }, "+ " + skeletonParagraphCls, {
    marginBlockStart: controlHeightSM
  })), _defineProperty(_ref7, "" + skeletonParagraphCls, {
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
  }), _defineProperty(_ref7, skeletonParagraphCls + "> li:last-child:not(:first-child):not(:nth-child(2))", {
    width: '61%'
  }), _ref7)), _defineProperty(_ref9, "&-round " + componentCls + "-content", _defineProperty({}, skeletonTitleCls + ", " + skeletonParagraphCls + " > li", {
    borderRadius: borderRadius
  })), _ref9)), _defineProperty(_ref14, componentCls + "-with-avatar " + componentCls + "-content", _defineProperty({}, "" + skeletonTitleCls, _defineProperty({
    marginBlockStart: marginSM
  }, "+ " + skeletonParagraphCls, {
    marginBlockStart: skeletonParagraphMarginTop
  }))), _defineProperty(_ref14, "" + componentCls + componentCls + "-element", _extends(_extends(_extends(_extends({
    display: 'inline-block',
    width: 'auto'
  }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token))), _defineProperty(_ref14, "" + componentCls + componentCls + "-block", (_ref12 = {
    width: '100%'
  }, _defineProperty(_ref12, "" + skeletonButtonCls, {
    width: '100%'
  }), _defineProperty(_ref12, "" + skeletonInputCls, {
    width: '100%'
  }), _ref12)), _defineProperty(_ref14, "" + componentCls + componentCls + "-active", _defineProperty({}, "\n        " + skeletonTitleCls + ",\n        " + skeletonParagraphCls + " > li,\n        " + skeletonAvatarCls + ",\n        " + skeletonButtonCls + ",\n        " + skeletonInputCls + ",\n        " + skeletonImageCls + "\n      ", _extends({}, genSkeletonColor(token)))), _ref14;
};
// ============================== Export ==============================
export default genComponentStyleHook('Skeleton', function (token) {
  var componentCls = token.componentCls;
  var skeletonToken = mergeToken(token, {
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
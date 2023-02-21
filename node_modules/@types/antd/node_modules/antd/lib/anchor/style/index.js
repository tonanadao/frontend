"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
// ============================== Shared ==============================
var genSharedAnchorStyle = function genSharedAnchorStyle(token) {
  var _ref2, _extends2, _ref3;
  var componentCls = token.componentCls,
    holderOffsetBlock = token.holderOffsetBlock,
    motionDurationSlow = token.motionDurationSlow,
    lineWidthBold = token.lineWidthBold,
    colorPrimary = token.colorPrimary;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref3 = {
    marginBlockStart: -holderOffsetBlock,
    paddingBlockStart: holderOffsetBlock,
    // delete overflow: auto
    // overflow: 'auto',
    backgroundColor: 'transparent'
  }, (0, _defineProperty2["default"])(_ref3, componentCls, (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), (_extends2 = {
    position: 'relative',
    paddingInlineStart: lineWidthBold
  }, (0, _defineProperty2["default"])(_extends2, componentCls + "-ink", {
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineStart: 0,
    height: '100%',
    '&::before': {
      position: 'relative',
      display: 'block',
      width: lineWidthBold,
      height: '100%',
      margin: '0 auto',
      backgroundColor: token.colorSplit,
      content: '" "'
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-ink-ball", (0, _defineProperty2["default"])({
    position: 'absolute',
    left: {
      _skip_check_: true,
      value: 0
    },
    display: 'none',
    transform: 'translateY(-50%)',
    transition: "top " + motionDurationSlow + " ease-in-out",
    width: lineWidthBold,
    backgroundColor: colorPrimary
  }, "&" + componentCls + "-ink-ball-visible", {
    display: 'inline-block'
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-link", (_ref2 = {
    paddingBlock: token.anchorPaddingBlock,
    paddingInline: token.anchorPaddingInline + "px 0",
    '&-title': (0, _extends3["default"])((0, _extends3["default"])({}, _style.textEllipsis), {
      position: 'relative',
      display: 'block',
      marginBlockEnd: token.anchorTitleBlock,
      color: token.colorText,
      transition: "all " + token.motionDurationSlow,
      '&:only-child': {
        marginBlockEnd: 0
      }
    })
  }, (0, _defineProperty2["default"])(_ref2, "&-active > " + componentCls + "-link-title", {
    color: token.colorPrimary
  }), (0, _defineProperty2["default"])(_ref2, componentCls + "-link", {
    paddingBlock: token.anchorPaddingBlockSecondary
  }), _ref2)), _extends2))), (0, _defineProperty2["default"])(_ref3, componentCls + "-fixed " + componentCls + "-ink " + componentCls + "-ink-ball", {
    display: 'none'
  }), _ref3));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Anchor', function (token) {
  var fontSize = token.fontSize,
    fontSizeLG = token.fontSizeLG,
    padding = token.padding,
    paddingXXS = token.paddingXXS;
  var anchorToken = (0, _internal.mergeToken)(token, {
    holderOffsetBlock: paddingXXS,
    anchorPaddingBlock: paddingXXS,
    anchorPaddingBlockSecondary: paddingXXS / 2,
    anchorPaddingInline: padding,
    anchorTitleBlock: fontSize / 14 * 3,
    anchorBallSize: fontSizeLG / 2
  });
  return [genSharedAnchorStyle(anchorToken)];
});
exports["default"] = _default;
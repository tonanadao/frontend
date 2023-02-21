"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genPreviewSwitchStyle = exports.genPreviewOperationsStyle = exports.genImagePreviewStyle = exports.genImageMaskStyle = exports.genBoxStyle = exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _tinycolor = require("@ctrl/tinycolor");
var _style = require("../../modal/style");
var _motion = require("../../style/motion");
var _internal = require("../../theme/internal");
var _style2 = require("../../style");
var genBoxStyle = function genBoxStyle(position) {
  return {
    position: position || 'absolute',
    inset: 0
  };
};
exports.genBoxStyle = genBoxStyle;
var genImageMaskStyle = function genImageMaskStyle(token) {
  var iconCls = token.iconCls,
    motionDurationSlow = token.motionDurationSlow,
    paddingXXS = token.paddingXXS,
    marginXXS = token.marginXXS,
    prefixCls = token.prefixCls;
  return (0, _defineProperty2["default"])({
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    background: new _tinycolor.TinyColor('#000').setAlpha(0.5).toRgbString(),
    cursor: 'pointer',
    opacity: 0,
    transition: "opacity " + motionDurationSlow
  }, "." + prefixCls + "-mask-info", (0, _extends3["default"])((0, _extends3["default"])({}, _style2.textEllipsis), (0, _defineProperty2["default"])({
    padding: "0 " + paddingXXS + "px"
  }, iconCls, {
    marginInlineEnd: marginXXS
  })));
};
exports.genImageMaskStyle = genImageMaskStyle;
var genPreviewOperationsStyle = function genPreviewOperationsStyle(token) {
  var previewCls = token.previewCls,
    modalMaskBg = token.modalMaskBg,
    paddingSM = token.paddingSM,
    imagePreviewOperationDisabledColor = token.imagePreviewOperationDisabledColor,
    zIndexPopup = token.zIndexPopup,
    motionDurationSlow = token.motionDurationSlow;
  var operationBg = new _tinycolor.TinyColor(modalMaskBg).setAlpha(0.1);
  var operationBgHover = operationBg.clone().setAlpha(0.2);
  return (0, _defineProperty2["default"])({}, previewCls + "-operations", (0, _extends3["default"])((0, _extends3["default"])({}, (0, _style2.resetComponent)(token)), {
    position: 'fixed',
    insetBlockStart: 0,
    insetInlineEnd: 0,
    zIndex: zIndexPopup + 1,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    color: token.imagePreviewOperationColor,
    listStyle: 'none',
    background: operationBg.toRgbString(),
    pointerEvents: 'auto',
    '&-operation': {
      marginInlineStart: paddingSM,
      padding: paddingSM,
      cursor: 'pointer',
      transition: "all " + motionDurationSlow,
      '&:hover': {
        background: operationBgHover.toRgbString()
      },
      '&-disabled': {
        color: imagePreviewOperationDisabledColor,
        pointerEvents: 'none'
      },
      '&:last-of-type': {
        marginInlineStart: 0
      }
    },
    '&-progress': {
      position: 'absolute',
      left: {
        _skip_check_: true,
        value: '50%'
      },
      transform: 'translateX(-50%)'
    },
    '&-icon': {
      fontSize: token.imagePreviewOperationSize
    }
  }));
};
exports.genPreviewOperationsStyle = genPreviewOperationsStyle;
var genPreviewSwitchStyle = function genPreviewSwitchStyle(token) {
  var _ref3, _ref4;
  var modalMaskBg = token.modalMaskBg,
    iconCls = token.iconCls,
    imagePreviewOperationDisabledColor = token.imagePreviewOperationDisabledColor,
    previewCls = token.previewCls,
    zIndexPopup = token.zIndexPopup,
    motionDurationSlow = token.motionDurationSlow;
  var operationBg = new _tinycolor.TinyColor(modalMaskBg).setAlpha(0.1);
  var operationBgHover = operationBg.clone().setAlpha(0.2);
  return _ref4 = {}, (0, _defineProperty2["default"])(_ref4, previewCls + "-switch-left, " + previewCls + "-switch-right", (_ref3 = {
    position: 'fixed',
    insetBlockStart: '50%',
    zIndex: zIndexPopup + 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: token.imagePreviewSwitchSize,
    height: token.imagePreviewSwitchSize,
    marginTop: -token.imagePreviewSwitchSize / 2,
    color: token.imagePreviewOperationColor,
    background: operationBg.toRgbString(),
    borderRadius: '50%',
    transform: "translateY(-50%)",
    cursor: 'pointer',
    transition: "all " + motionDurationSlow,
    pointerEvents: 'auto',
    '&:hover': {
      background: operationBgHover.toRgbString()
    }
  }, (0, _defineProperty2["default"])(_ref3, "&-disabled", {
    '&, &:hover': (0, _defineProperty2["default"])({
      color: imagePreviewOperationDisabledColor,
      background: 'transparent',
      cursor: 'not-allowed'
    }, "> " + iconCls, {
      cursor: 'not-allowed'
    })
  }), (0, _defineProperty2["default"])(_ref3, "> " + iconCls, {
    fontSize: token.imagePreviewOperationSize
  }), _ref3)), (0, _defineProperty2["default"])(_ref4, previewCls + "-switch-left", {
    insetInlineStart: token.marginSM
  }), (0, _defineProperty2["default"])(_ref4, previewCls + "-switch-right", {
    insetInlineEnd: token.marginSM
  }), _ref4;
};
exports.genPreviewSwitchStyle = genPreviewSwitchStyle;
var genImagePreviewStyle = function genImagePreviewStyle(token) {
  var _ref6;
  var motionEaseOut = token.motionEaseOut,
    previewCls = token.previewCls,
    motionDurationSlow = token.motionDurationSlow,
    componentCls = token.componentCls;
  return [(0, _defineProperty2["default"])({}, componentCls + "-preview-root", (_ref6 = {}, (0, _defineProperty2["default"])(_ref6, previewCls, {
    height: '100%',
    textAlign: 'center',
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_ref6, previewCls + "-body", (0, _extends3["default"])((0, _extends3["default"])({}, genBoxStyle()), {
    overflow: 'hidden'
  })), (0, _defineProperty2["default"])(_ref6, previewCls + "-img", {
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'middle',
    transform: 'scale3d(1, 1, 1)',
    cursor: 'grab',
    transition: "transform " + motionDurationSlow + " " + motionEaseOut + " 0s",
    userSelect: 'none',
    pointerEvents: 'auto',
    '&-wrapper': (0, _extends3["default"])((0, _extends3["default"])({}, genBoxStyle()), {
      transition: "transform " + motionDurationSlow + " " + motionEaseOut + " 0s",
      '&::before': {
        display: 'inline-block',
        width: 1,
        height: '50%',
        marginInlineEnd: -1,
        content: '""'
      }
    })
  }), (0, _defineProperty2["default"])(_ref6, previewCls + "-moving", (0, _defineProperty2["default"])({}, previewCls + "-preview-img", {
    cursor: 'grabbing',
    '&-wrapper': {
      transitionDuration: '0s'
    }
  })), _ref6)), // Override
  (0, _defineProperty2["default"])({}, componentCls + "-preview-root", (0, _defineProperty2["default"])({}, previewCls + "-wrap", {
    zIndex: token.zIndexPopup
  })),
  // Preview operations & switch
  {
    '&': [genPreviewOperationsStyle(token), genPreviewSwitchStyle(token)]
  }];
};
exports.genImagePreviewStyle = genImagePreviewStyle;
var genImageStyle = function genImageStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {
    position: 'relative',
    display: 'inline-block'
  }, (0, _defineProperty2["default"])(_componentCls, componentCls + "-img", {
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle'
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-img-placeholder", {
    backgroundColor: token.colorBgContainerDisabled,
    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '30%'
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-mask", (0, _extends3["default"])({}, genImageMaskStyle(token))), (0, _defineProperty2["default"])(_componentCls, componentCls + "-mask:hover", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-placeholder", (0, _extends3["default"])({}, genBoxStyle())), _componentCls));
};
var genPreviewMotion = function genPreviewMotion(token) {
  var _ref11;
  var previewCls = token.previewCls;
  return _ref11 = {}, (0, _defineProperty2["default"])(_ref11, previewCls + "-root", (0, _motion.initZoomMotion)(token, 'zoom')), (0, _defineProperty2["default"])(_ref11, "&", (0, _motion.initFadeMotion)(token, true)), _ref11;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Image', function (token) {
  var imagePreviewOperationColor = new _tinycolor.TinyColor(token.colorTextLightSolid);
  var previewCls = token.componentCls + "-preview";
  var imageToken = (0, _internal.mergeToken)(token, {
    previewCls: previewCls,
    imagePreviewOperationColor: imagePreviewOperationColor.toRgbString(),
    imagePreviewOperationDisabledColor: new _tinycolor.TinyColor(imagePreviewOperationColor).setAlpha(0.25).toRgbString(),
    modalMaskBg: new _tinycolor.TinyColor('#000').setAlpha(0.45).toRgbString(),
    imagePreviewOperationSize: token.fontSizeIcon * 1.5,
    imagePreviewSwitchSize: token.controlHeightLG
  });
  return [genImageStyle(imageToken), genImagePreviewStyle(imageToken), (0, _style.genModalMaskStyle)((0, _internal.mergeToken)(imageToken, {
    componentCls: previewCls
  })), genPreviewMotion(imageToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 80
  };
});
exports["default"] = _default;
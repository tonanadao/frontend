import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { TinyColor } from '@ctrl/tinycolor';
import { genModalMaskStyle } from '../../modal/style';
import { initZoomMotion, initFadeMotion } from '../../style/motion';
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
export var genBoxStyle = function genBoxStyle(position) {
  return {
    position: position || 'absolute',
    inset: 0
  };
};
export var genImageMaskStyle = function genImageMaskStyle(token) {
  var iconCls = token.iconCls,
    motionDurationSlow = token.motionDurationSlow,
    paddingXXS = token.paddingXXS,
    marginXXS = token.marginXXS,
    prefixCls = token.prefixCls;
  return _defineProperty({
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    background: new TinyColor('#000').setAlpha(0.5).toRgbString(),
    cursor: 'pointer',
    opacity: 0,
    transition: "opacity " + motionDurationSlow
  }, "." + prefixCls + "-mask-info", _extends(_extends({}, textEllipsis), _defineProperty({
    padding: "0 " + paddingXXS + "px"
  }, iconCls, {
    marginInlineEnd: marginXXS
  })));
};
export var genPreviewOperationsStyle = function genPreviewOperationsStyle(token) {
  var previewCls = token.previewCls,
    modalMaskBg = token.modalMaskBg,
    paddingSM = token.paddingSM,
    imagePreviewOperationDisabledColor = token.imagePreviewOperationDisabledColor,
    zIndexPopup = token.zIndexPopup,
    motionDurationSlow = token.motionDurationSlow;
  var operationBg = new TinyColor(modalMaskBg).setAlpha(0.1);
  var operationBgHover = operationBg.clone().setAlpha(0.2);
  return _defineProperty({}, previewCls + "-operations", _extends(_extends({}, resetComponent(token)), {
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
export var genPreviewSwitchStyle = function genPreviewSwitchStyle(token) {
  var _ref3, _ref4;
  var modalMaskBg = token.modalMaskBg,
    iconCls = token.iconCls,
    imagePreviewOperationDisabledColor = token.imagePreviewOperationDisabledColor,
    previewCls = token.previewCls,
    zIndexPopup = token.zIndexPopup,
    motionDurationSlow = token.motionDurationSlow;
  var operationBg = new TinyColor(modalMaskBg).setAlpha(0.1);
  var operationBgHover = operationBg.clone().setAlpha(0.2);
  return _ref4 = {}, _defineProperty(_ref4, previewCls + "-switch-left, " + previewCls + "-switch-right", (_ref3 = {
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
  }, _defineProperty(_ref3, "&-disabled", {
    '&, &:hover': _defineProperty({
      color: imagePreviewOperationDisabledColor,
      background: 'transparent',
      cursor: 'not-allowed'
    }, "> " + iconCls, {
      cursor: 'not-allowed'
    })
  }), _defineProperty(_ref3, "> " + iconCls, {
    fontSize: token.imagePreviewOperationSize
  }), _ref3)), _defineProperty(_ref4, previewCls + "-switch-left", {
    insetInlineStart: token.marginSM
  }), _defineProperty(_ref4, previewCls + "-switch-right", {
    insetInlineEnd: token.marginSM
  }), _ref4;
};
export var genImagePreviewStyle = function genImagePreviewStyle(token) {
  var _ref6;
  var motionEaseOut = token.motionEaseOut,
    previewCls = token.previewCls,
    motionDurationSlow = token.motionDurationSlow,
    componentCls = token.componentCls;
  return [_defineProperty({}, componentCls + "-preview-root", (_ref6 = {}, _defineProperty(_ref6, previewCls, {
    height: '100%',
    textAlign: 'center',
    pointerEvents: 'none'
  }), _defineProperty(_ref6, previewCls + "-body", _extends(_extends({}, genBoxStyle()), {
    overflow: 'hidden'
  })), _defineProperty(_ref6, previewCls + "-img", {
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'middle',
    transform: 'scale3d(1, 1, 1)',
    cursor: 'grab',
    transition: "transform " + motionDurationSlow + " " + motionEaseOut + " 0s",
    userSelect: 'none',
    pointerEvents: 'auto',
    '&-wrapper': _extends(_extends({}, genBoxStyle()), {
      transition: "transform " + motionDurationSlow + " " + motionEaseOut + " 0s",
      '&::before': {
        display: 'inline-block',
        width: 1,
        height: '50%',
        marginInlineEnd: -1,
        content: '""'
      }
    })
  }), _defineProperty(_ref6, previewCls + "-moving", _defineProperty({}, previewCls + "-preview-img", {
    cursor: 'grabbing',
    '&-wrapper': {
      transitionDuration: '0s'
    }
  })), _ref6)), // Override
  _defineProperty({}, componentCls + "-preview-root", _defineProperty({}, previewCls + "-wrap", {
    zIndex: token.zIndexPopup
  })),
  // Preview operations & switch
  {
    '&': [genPreviewOperationsStyle(token), genPreviewSwitchStyle(token)]
  }];
};
var genImageStyle = function genImageStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, (_componentCls = {
    position: 'relative',
    display: 'inline-block'
  }, _defineProperty(_componentCls, componentCls + "-img", {
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle'
  }), _defineProperty(_componentCls, componentCls + "-img-placeholder", {
    backgroundColor: token.colorBgContainerDisabled,
    backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '30%'
  }), _defineProperty(_componentCls, componentCls + "-mask", _extends({}, genImageMaskStyle(token))), _defineProperty(_componentCls, componentCls + "-mask:hover", {
    opacity: 1
  }), _defineProperty(_componentCls, componentCls + "-placeholder", _extends({}, genBoxStyle())), _componentCls));
};
var genPreviewMotion = function genPreviewMotion(token) {
  var _ref11;
  var previewCls = token.previewCls;
  return _ref11 = {}, _defineProperty(_ref11, previewCls + "-root", initZoomMotion(token, 'zoom')), _defineProperty(_ref11, "&", initFadeMotion(token, true)), _ref11;
};
// ============================== Export ==============================
export default genComponentStyleHook('Image', function (token) {
  var imagePreviewOperationColor = new TinyColor(token.colorTextLightSolid);
  var previewCls = token.componentCls + "-preview";
  var imageToken = mergeToken(token, {
    previewCls: previewCls,
    imagePreviewOperationColor: imagePreviewOperationColor.toRgbString(),
    imagePreviewOperationDisabledColor: new TinyColor(imagePreviewOperationColor).setAlpha(0.25).toRgbString(),
    modalMaskBg: new TinyColor('#000').setAlpha(0.45).toRgbString(),
    imagePreviewOperationSize: token.fontSizeIcon * 1.5,
    imagePreviewSwitchSize: token.controlHeightLG
  });
  return [genImageStyle(imageToken), genImagePreviewStyle(imageToken), genModalMaskStyle(mergeToken(imageToken, {
    componentCls: previewCls
  })), genPreviewMotion(imageToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 80
  };
});
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { initMoveMotion, initSlideMotion, slideDownIn, slideDownOut, slideUpIn, slideUpOut } from '../../style/motion';
import { resetComponent, textEllipsis } from '../../style';
var genItemStyle = function genItemStyle(token) {
  var controlPaddingHorizontal = token.controlPaddingHorizontal;
  return {
    position: 'relative',
    display: 'block',
    minHeight: token.controlHeight,
    padding: (token.controlHeight - token.fontSize * token.lineHeight) / 2 + "px " + controlPaddingHorizontal + "px",
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: 'border-box'
  };
};
var genSingleStyle = function genSingleStyle(token) {
  var _disabled, _option, _extends2;
  var antCls = token.antCls,
    componentCls = token.componentCls;
  var selectItemCls = componentCls + "-item";
  return [_defineProperty({}, componentCls + "-dropdown", _extends(_extends({}, resetComponent(token)), (_extends2 = {
    position: 'absolute',
    top: -9999,
    zIndex: token.zIndexPopup,
    boxSizing: 'border-box',
    padding: token.paddingXXS,
    overflow: 'hidden',
    fontSize: token.fontSize,
    // Fix select render lag of long text in chrome
    // https://github.com/ant-design/ant-design/issues/11456
    // https://github.com/ant-design/ant-design/issues/11843
    fontVariant: 'initial',
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadowSecondary
  }, _defineProperty(_extends2, "\n            &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-bottomLeft,\n            &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-bottomLeft\n          ", {
    animationName: slideUpIn
  }), _defineProperty(_extends2, "\n            &" + antCls + "-slide-up-enter" + antCls + "-slide-up-enter-active&-placement-topLeft,\n            &" + antCls + "-slide-up-appear" + antCls + "-slide-up-appear-active&-placement-topLeft\n          ", {
    animationName: slideDownIn
  }), _defineProperty(_extends2, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-bottomLeft", {
    animationName: slideUpOut
  }), _defineProperty(_extends2, "&" + antCls + "-slide-up-leave" + antCls + "-slide-up-leave-active&-placement-topLeft", {
    animationName: slideDownOut
  }), _defineProperty(_extends2, '&-hidden', {
    display: 'none'
  }), _defineProperty(_extends2, '&-empty', {
    color: token.colorTextDisabled
  }), _defineProperty(_extends2, selectItemCls + "-empty", _extends(_extends({}, genItemStyle(token)), {
    color: token.colorTextDisabled
  })), _defineProperty(_extends2, "" + selectItemCls, _extends(_extends({}, genItemStyle(token)), {
    cursor: 'pointer',
    transition: "background " + token.motionDurationSlow + " ease",
    borderRadius: token.borderRadiusSM,
    // =========== Group ============
    '&-group': {
      color: token.colorTextDescription,
      fontSize: token.fontSizeSM,
      cursor: 'default'
    },
    // =========== Option ===========
    '&-option': (_option = {
      display: 'flex',
      '&-content': _extends({
        flex: 'auto'
      }, textEllipsis),
      '&-state': {
        flex: 'none'
      }
    }, _defineProperty(_option, "&-active:not(" + selectItemCls + "-option-disabled)", {
      backgroundColor: token.controlItemBgHover
    }), _defineProperty(_option, "&-selected:not(" + selectItemCls + "-option-disabled)", _defineProperty({
      color: token.colorText,
      fontWeight: token.fontWeightStrong,
      backgroundColor: token.controlItemBgActive
    }, selectItemCls + "-option-state", {
      color: token.colorPrimary
    })), _defineProperty(_option, '&-disabled', (_disabled = {}, _defineProperty(_disabled, "&" + selectItemCls + "-option-selected", {
      backgroundColor: token.colorBgContainerDisabled
    }), _defineProperty(_disabled, "color", token.colorTextDisabled), _defineProperty(_disabled, "cursor", 'not-allowed'), _disabled)), _defineProperty(_option, '&-grouped', {
      paddingInlineStart: token.controlPaddingHorizontal * 2
    }), _option)
  })), _defineProperty(_extends2, '&-rtl', {
    direction: 'rtl'
  }), _extends2))),
  // Follow code may reuse in other components
  initSlideMotion(token, 'slide-up'), initSlideMotion(token, 'slide-down'), initMoveMotion(token, 'move-up'), initMoveMotion(token, 'move-down')];
};
export default genSingleStyle;
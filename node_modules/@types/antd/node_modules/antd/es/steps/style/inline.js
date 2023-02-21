import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genStepsInlineStyle = function genStepsInlineStyle(token) {
  var _icon, _extends3, _ref2;
  var componentCls = token.componentCls,
    inlineDotSize = token.inlineDotSize,
    inlineTitleColor = token.inlineTitleColor,
    inlineTailColor = token.inlineTailColor;
  var containerPaddingTop = token.paddingXS + token.lineWidth;
  var titleStyle = _defineProperty({}, componentCls + "-item-container " + componentCls + "-item-content " + componentCls + "-item-title", {
    color: inlineTitleColor
  });
  return _defineProperty({}, "&" + componentCls + "-inline", _defineProperty({
    width: 'auto',
    display: 'inline-flex'
  }, componentCls + "-item", (_ref2 = {
    flex: 'none',
    '&-container': _defineProperty({
      padding: containerPaddingTop + "px " + token.paddingXXS + "px 0",
      margin: "0 " + token.marginXXS / 2 + "px",
      borderRadius: token.borderRadiusSM,
      cursor: 'pointer',
      transition: "background-color " + token.motionDurationMid,
      '&:hover': {
        background: token.controlItemBgHover
      }
    }, "&[role='button']:hover", {
      opacity: 1
    }),
    '&-icon': (_icon = {
      width: inlineDotSize,
      height: inlineDotSize,
      marginInlineStart: "calc(50% - " + inlineDotSize / 2 + "px)"
    }, _defineProperty(_icon, "> " + componentCls + "-icon", {
      top: 0
    }), _defineProperty(_icon, componentCls + "-icon-dot", {
      borderRadius: token.fontSizeSM / 4
    }), _icon),
    '&-content': {
      width: 'auto',
      marginTop: token.marginXS - token.lineWidth
    },
    '&-title': {
      color: inlineTitleColor,
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM,
      fontWeight: 'normal',
      marginBottom: token.marginXXS / 2
    },
    '&-description': {
      display: 'none'
    },
    '&-tail': {
      marginInlineStart: 0,
      top: containerPaddingTop + inlineDotSize / 2,
      transform: "translateY(-50%)",
      '&:after': {
        width: '100%',
        height: token.lineWidth,
        borderRadius: 0,
        marginInlineStart: 0,
        background: inlineTailColor
      }
    }
  }, _defineProperty(_ref2, "&:first-child " + componentCls + "-item-tail", {
    width: '50%',
    marginInlineStart: '50%'
  }), _defineProperty(_ref2, "&:last-child " + componentCls + "-item-tail", {
    display: 'block',
    width: '50%'
  }), _defineProperty(_ref2, '&-wait', _extends(_defineProperty({}, componentCls + "-item-icon " + componentCls + "-icon " + componentCls + "-icon-dot", {
    backgroundColor: token.colorBorderBg,
    border: token.lineWidth + "px " + token.lineType + " " + inlineTailColor
  }), titleStyle)), _defineProperty(_ref2, '&-finish', _extends((_extends3 = {}, _defineProperty(_extends3, componentCls + "-item-tail::after", {
    backgroundColor: inlineTailColor
  }), _defineProperty(_extends3, componentCls + "-item-icon " + componentCls + "-icon " + componentCls + "-icon-dot", {
    backgroundColor: inlineTailColor,
    border: token.lineWidth + "px " + token.lineType + " " + inlineTailColor
  }), _extends3), titleStyle)), _defineProperty(_ref2, '&-error', titleStyle), _defineProperty(_ref2, '&-active, &-process', _extends(_defineProperty({}, componentCls + "-item-icon", {
    width: inlineDotSize,
    height: inlineDotSize,
    marginInlineStart: "calc(50% - " + inlineDotSize / 2 + "px)",
    top: 0
  }), titleStyle)), _defineProperty(_ref2, "&:not(" + componentCls + "-item-active) > " + componentCls + "-item-container[role='button']:hover", _defineProperty({}, componentCls + "-item-title", {
    color: inlineTitleColor
  })), _ref2)));
};
export default genStepsInlineStyle;
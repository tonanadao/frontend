import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusStyle, resetComponent, textEllipsis } from '../../style';
import genMotionStyle from './motion';
var genCardStyle = function genCardStyle(token) {
  var _ref, _ref4, _ref6, _ref10, _ref12, _ref14;
  var componentCls = token.componentCls,
    tabsCardHorizontalPadding = token.tabsCardHorizontalPadding,
    tabsCardHeadBackground = token.tabsCardHeadBackground,
    tabsCardGutter = token.tabsCardGutter,
    colorSplit = token.colorSplit;
  return _defineProperty({}, componentCls + "-card", (_ref14 = {}, _defineProperty(_ref14, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref = {}, _defineProperty(_ref, componentCls + "-tab", {
    margin: 0,
    padding: tabsCardHorizontalPadding,
    background: tabsCardHeadBackground,
    border: token.lineWidth + "px " + token.lineType + " " + colorSplit,
    transition: "all " + token.motionDurationSlow + " " + token.motionEaseInOut
  }), _defineProperty(_ref, componentCls + "-tab-active", {
    color: token.colorPrimary,
    background: token.colorBgContainer
  }), _defineProperty(_ref, componentCls + "-ink-bar", {
    visibility: 'hidden'
  }), _ref)), _defineProperty(_ref14, "&" + componentCls + "-top, &" + componentCls + "-bottom", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab + " + componentCls + "-tab", {
    marginLeft: {
      _skip_check_: true,
      value: tabsCardGutter + "px"
    }
  }))), _defineProperty(_ref14, "&" + componentCls + "-top", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref4 = {}, _defineProperty(_ref4, componentCls + "-tab", {
    borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0"
  }), _defineProperty(_ref4, componentCls + "-tab-active", {
    borderBottomColor: token.colorBgContainer
  }), _ref4))), _defineProperty(_ref14, "&" + componentCls + "-bottom", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref6 = {}, _defineProperty(_ref6, componentCls + "-tab", {
    borderRadius: "0 0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px"
  }), _defineProperty(_ref6, componentCls + "-tab-active", {
    borderTopColor: token.colorBgContainer
  }), _ref6))), _defineProperty(_ref14, "&" + componentCls + "-left, &" + componentCls + "-right", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab + " + componentCls + "-tab", {
    marginTop: tabsCardGutter + "px"
  }))), _defineProperty(_ref14, "&" + componentCls + "-left", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref10 = {}, _defineProperty(_ref10, componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: token.borderRadiusLG + "px 0 0 " + token.borderRadiusLG + "px"
    }
  }), _defineProperty(_ref10, componentCls + "-tab-active", {
    borderRightColor: {
      _skip_check_: true,
      value: token.colorBgContainer
    }
  }), _ref10))), _defineProperty(_ref14, "&" + componentCls + "-right", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref12 = {}, _defineProperty(_ref12, componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: "0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0"
    }
  }), _defineProperty(_ref12, componentCls + "-tab-active", {
    borderLeftColor: {
      _skip_check_: true,
      value: token.colorBgContainer
    }
  }), _ref12))), _ref14));
};
var genDropdownStyle = function genDropdownStyle(token) {
  var componentCls = token.componentCls,
    tabsHoverColor = token.tabsHoverColor,
    dropdownEdgeChildVerticalPadding = token.dropdownEdgeChildVerticalPadding;
  return _defineProperty({}, componentCls + "-dropdown", _extends(_extends({}, resetComponent(token)), _defineProperty({
    position: 'absolute',
    top: -9999,
    left: {
      _skip_check_: true,
      value: -9999
    },
    zIndex: token.zIndexPopup,
    display: 'block',
    '&-hidden': {
      display: 'none'
    }
  }, componentCls + "-dropdown-menu", {
    maxHeight: token.tabsDropdownHeight,
    margin: 0,
    padding: dropdownEdgeChildVerticalPadding + "px 0",
    overflowX: 'hidden',
    overflowY: 'auto',
    textAlign: {
      _skip_check_: true,
      value: 'left'
    },
    listStyleType: 'none',
    backgroundColor: token.colorBgContainer,
    backgroundClip: 'padding-box',
    borderRadius: token.borderRadiusLG,
    outline: 'none',
    boxShadow: token.boxShadow,
    '&-item': _extends(_extends({}, textEllipsis), {
      display: 'flex',
      alignItems: 'center',
      minWidth: token.tabsDropdownWidth,
      margin: 0,
      padding: token.paddingXXS + "px " + token.paddingSM + "px",
      color: token.colorText,
      fontWeight: 'normal',
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      cursor: 'pointer',
      transition: "all " + token.motionDurationSlow,
      '> span': {
        flex: 1,
        whiteSpace: 'nowrap'
      },
      '&-remove': {
        flex: 'none',
        marginLeft: {
          _skip_check_: true,
          value: token.marginSM
        },
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        '&:hover': {
          color: tabsHoverColor
        }
      },
      '&:hover': {
        background: token.controlItemBgHover
      },
      '&-disabled': {
        '&, &:hover': {
          color: token.colorTextDisabled,
          background: 'transparent',
          cursor: 'not-allowed'
        }
      }
    })
  })));
};
var genPositionStyle = function genPositionStyle(token) {
  var _ref17, _ref18, _ref23, _ref24, _ref25, _ref29, _ref32, _ref33;
  var componentCls = token.componentCls,
    margin = token.margin,
    colorSplit = token.colorSplit;
  return _ref33 = {}, _defineProperty(_ref33, componentCls + "-top, " + componentCls + "-bottom", _defineProperty({
    flexDirection: 'column'
  }, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref18 = {
    margin: "0 0 " + margin + "px 0",
    '&::before': {
      position: 'absolute',
      right: {
        _skip_check_: true,
        value: 0
      },
      left: {
        _skip_check_: true,
        value: 0
      },
      borderBottom: token.lineWidth + "px " + token.lineType + " " + colorSplit,
      content: "''"
    }
  }, _defineProperty(_ref18, componentCls + "-ink-bar", {
    height: token.lineWidthBold,
    '&-animated': {
      transition: "width " + token.motionDurationSlow + ", left " + token.motionDurationSlow + ",\n            right " + token.motionDurationSlow
    }
  }), _defineProperty(_ref18, componentCls + "-nav-wrap", (_ref17 = {
    '&::before, &::after': {
      top: 0,
      bottom: 0,
      width: token.controlHeight
    },
    '&::before': {
      left: {
        _skip_check_: true,
        value: 0
      },
      boxShadow: token.boxShadowTabsOverflowLeft
    },
    '&::after': {
      right: {
        _skip_check_: true,
        value: 0
      },
      boxShadow: token.boxShadowTabsOverflowRight
    }
  }, _defineProperty(_ref17, "&" + componentCls + "-nav-wrap-ping-left::before", {
    opacity: 1
  }), _defineProperty(_ref17, "&" + componentCls + "-nav-wrap-ping-right::after", {
    opacity: 1
  }), _ref17)), _ref18))), _defineProperty(_ref33, componentCls + "-top", _defineProperty({}, "> " + componentCls + "-nav,\n        > div > " + componentCls + "-nav", _defineProperty({
    '&::before': {
      bottom: 0
    }
  }, componentCls + "-ink-bar", {
    bottom: 0
  }))), _defineProperty(_ref33, componentCls + "-bottom", (_ref23 = {}, _defineProperty(_ref23, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({
    order: 1,
    marginTop: margin + "px",
    marginBottom: 0,
    '&::before': {
      top: 0
    }
  }, componentCls + "-ink-bar", {
    top: 0
  })), _defineProperty(_ref23, "> " + componentCls + "-content-holder, > div > " + componentCls + "-content-holder", {
    order: 0
  }), _ref23)), _defineProperty(_ref33, componentCls + "-left, " + componentCls + "-right", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref25 = {
    flexDirection: 'column',
    minWidth: token.controlHeight * 1.25
  }, _defineProperty(_ref25, componentCls + "-tab", {
    padding: token.paddingXS + "px " + token.paddingLG + "px",
    textAlign: 'center'
  }), _defineProperty(_ref25, componentCls + "-tab + " + componentCls + "-tab", {
    margin: token.margin + "px 0 0 0"
  }), _defineProperty(_ref25, componentCls + "-nav-wrap", (_ref24 = {
    flexDirection: 'column',
    '&::before, &::after': {
      right: {
        _skip_check_: true,
        value: 0
      },
      left: {
        _skip_check_: true,
        value: 0
      },
      height: token.controlHeight
    },
    '&::before': {
      top: 0,
      boxShadow: token.boxShadowTabsOverflowTop
    },
    '&::after': {
      bottom: 0,
      boxShadow: token.boxShadowTabsOverflowBottom
    }
  }, _defineProperty(_ref24, "&" + componentCls + "-nav-wrap-ping-top::before", {
    opacity: 1
  }), _defineProperty(_ref24, "&" + componentCls + "-nav-wrap-ping-bottom::after", {
    opacity: 1
  }), _ref24)), _defineProperty(_ref25, componentCls + "-ink-bar", {
    width: token.lineWidthBold,
    '&-animated': {
      transition: "height " + token.motionDurationSlow + ", top " + token.motionDurationSlow
    }
  }), _defineProperty(_ref25, componentCls + "-nav-list, " + componentCls + "-nav-operations", {
    flex: '1 0 auto',
    flexDirection: 'column'
  }), _ref25))), _defineProperty(_ref33, componentCls + "-left", (_ref29 = {}, _defineProperty(_ref29, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({}, componentCls + "-ink-bar", {
    right: {
      _skip_check_: true,
      value: 0
    }
  })), _defineProperty(_ref29, "> " + componentCls + "-content-holder, > div > " + componentCls + "-content-holder", _defineProperty({
    marginLeft: {
      _skip_check_: true,
      value: "-" + token.lineWidth + "px"
    },
    borderLeft: {
      _skip_check_: true,
      value: token.lineWidth + "px " + token.lineType + " " + token.colorBorder
    }
  }, "> " + componentCls + "-content > " + componentCls + "-tabpane", {
    paddingLeft: {
      _skip_check_: true,
      value: token.paddingLG
    }
  })), _ref29)), _defineProperty(_ref33, componentCls + "-right", (_ref32 = {}, _defineProperty(_ref32, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({
    order: 1
  }, componentCls + "-ink-bar", {
    left: {
      _skip_check_: true,
      value: 0
    }
  })), _defineProperty(_ref32, "> " + componentCls + "-content-holder, > div > " + componentCls + "-content-holder", _defineProperty({
    order: 0,
    marginRight: {
      _skip_check_: true,
      value: -token.lineWidth
    },
    borderRight: {
      _skip_check_: true,
      value: token.lineWidth + "px " + token.lineType + " " + token.colorBorder
    }
  }, "> " + componentCls + "-content > " + componentCls + "-tabpane", {
    paddingRight: {
      _skip_check_: true,
      value: token.paddingLG
    }
  })), _ref32)), _ref33;
};
var genSizeStyle = function genSizeStyle(token) {
  var _ref41, _ref44, _ref45;
  var componentCls = token.componentCls,
    padding = token.padding;
  return _ref45 = {}, _defineProperty(_ref45, componentCls, {
    '&-small': _defineProperty({}, "> " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab", {
      padding: token.paddingXS + "px 0",
      fontSize: token.fontSize
    })),
    '&-large': _defineProperty({}, "> " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab", {
      padding: padding + "px 0",
      fontSize: token.fontSizeLG
    }))
  }), _defineProperty(_ref45, componentCls + "-card", (_ref44 = {}, _defineProperty(_ref44, "&" + componentCls + "-small", (_ref41 = {}, _defineProperty(_ref41, "> " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab", {
    padding: token.paddingXXS * 1.5 + "px " + padding + "px"
  })), _defineProperty(_ref41, "&" + componentCls + "-bottom", _defineProperty({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: "0 0 " + token.borderRadius + "px " + token.borderRadius + "px"
  })), _defineProperty(_ref41, "&" + componentCls + "-top", _defineProperty({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: token.borderRadius + "px " + token.borderRadius + "px 0 0"
  })), _defineProperty(_ref41, "&" + componentCls + "-right", _defineProperty({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: "0 " + token.borderRadius + "px " + token.borderRadius + "px 0"
    }
  })), _defineProperty(_ref41, "&" + componentCls + "-left", _defineProperty({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: token.borderRadius + "px 0 0 " + token.borderRadius + "px"
    }
  })), _ref41)), _defineProperty(_ref44, "&" + componentCls + "-large", _defineProperty({}, "> " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab", {
    padding: token.paddingXS + "px " + padding + "px " + token.paddingXXS * 1.5 + "px"
  }))), _ref44)), _ref45;
};
var genTabStyle = function genTabStyle(token) {
  var _tabCls, _ref46;
  var componentCls = token.componentCls,
    tabsActiveColor = token.tabsActiveColor,
    tabsHoverColor = token.tabsHoverColor,
    iconCls = token.iconCls,
    tabsHorizontalGutter = token.tabsHorizontalGutter;
  var tabCls = componentCls + "-tab";
  return _ref46 = {}, _defineProperty(_ref46, tabCls, (_tabCls = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    padding: token.paddingSM + "px 0",
    fontSize: token.fontSize + "px",
    background: 'transparent',
    border: 0,
    outline: 'none',
    cursor: 'pointer',
    '&-btn, &-remove': _extends({
      '&:focus:not(:focus-visible), &:active': {
        color: tabsActiveColor
      }
    }, genFocusStyle(token)),
    '&-btn': {
      outline: 'none',
      transition: 'all 0.3s'
    },
    '&-remove': {
      flex: 'none',
      marginRight: {
        _skip_check_: true,
        value: -token.marginXXS
      },
      marginLeft: {
        _skip_check_: true,
        value: token.marginXS
      },
      color: token.colorTextDescription,
      fontSize: token.fontSizeSM,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      transition: "all " + token.motionDurationSlow,
      '&:hover': {
        color: token.colorTextHeading
      }
    },
    '&:hover': {
      color: tabsHoverColor
    }
  }, _defineProperty(_tabCls, "&" + tabCls + "-active " + tabCls + "-btn", {
    color: token.colorPrimary,
    textShadow: token.tabsActiveTextShadow
  }), _defineProperty(_tabCls, "&" + tabCls + "-disabled", {
    color: token.colorTextDisabled,
    cursor: 'not-allowed'
  }), _defineProperty(_tabCls, "&" + tabCls + "-disabled " + tabCls + "-btn, &" + tabCls + "-disabled " + componentCls + "-remove", {
    '&:focus, &:active': {
      color: token.colorTextDisabled
    }
  }), _defineProperty(_tabCls, "& " + tabCls + "-remove " + iconCls, {
    margin: 0
  }), _defineProperty(_tabCls, iconCls, {
    marginRight: {
      _skip_check_: true,
      value: token.marginSM
    }
  }), _tabCls)), _defineProperty(_ref46, tabCls + " + " + tabCls, {
    margin: {
      _skip_check_: true,
      value: "0 0 0 " + tabsHorizontalGutter + "px"
    }
  }), _ref46;
};
var genRtlStyle = function genRtlStyle(token) {
  var _ref48, _ref50, _ref51, _rtlCls, _ref55;
  var componentCls = token.componentCls,
    tabsHorizontalGutter = token.tabsHorizontalGutter,
    iconCls = token.iconCls,
    tabsCardGutter = token.tabsCardGutter;
  var rtlCls = componentCls + "-rtl";
  return _ref55 = {}, _defineProperty(_ref55, rtlCls, (_rtlCls = {
    direction: 'rtl'
  }, _defineProperty(_rtlCls, componentCls + "-nav", _defineProperty({}, componentCls + "-tab", (_ref48 = {
    margin: {
      _skip_check_: true,
      value: "0 0 0 " + tabsHorizontalGutter + "px"
    }
  }, _defineProperty(_ref48, componentCls + "-tab:last-of-type", {
    marginLeft: {
      _skip_check_: true,
      value: 0
    }
  }), _defineProperty(_ref48, iconCls, {
    marginRight: {
      _skip_check_: true,
      value: 0
    },
    marginLeft: {
      _skip_check_: true,
      value: token.marginSM + "px"
    }
  }), _defineProperty(_ref48, componentCls + "-tab-remove", _defineProperty({
    marginRight: {
      _skip_check_: true,
      value: token.marginXS + "px"
    },
    marginLeft: {
      _skip_check_: true,
      value: "-" + token.marginXXS + "px"
    }
  }, iconCls, {
    margin: 0
  })), _ref48))), _defineProperty(_rtlCls, "&" + componentCls + "-left", (_ref50 = {}, _defineProperty(_ref50, "> " + componentCls + "-nav", {
    order: 1
  }), _defineProperty(_ref50, "> " + componentCls + "-content-holder", {
    order: 0
  }), _ref50)), _defineProperty(_rtlCls, "&" + componentCls + "-right", (_ref51 = {}, _defineProperty(_ref51, "> " + componentCls + "-nav", {
    order: 0
  }), _defineProperty(_ref51, "> " + componentCls + "-content-holder", {
    order: 1
  }), _ref51)), _defineProperty(_rtlCls, "&" + componentCls + "-card" + componentCls + "-top, &" + componentCls + "-card" + componentCls + "-bottom", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({}, componentCls + "-tab + " + componentCls + "-tab", {
    marginRight: {
      _skip_check_: true,
      value: tabsCardGutter + "px"
    },
    marginLeft: {
      _skip_check_: true,
      value: 0
    }
  }))), _rtlCls)), _defineProperty(_ref55, componentCls + "-dropdown-rtl", {
    direction: 'rtl'
  }), _defineProperty(_ref55, componentCls + "-menu-item", _defineProperty({}, componentCls + "-dropdown-rtl", {
    textAlign: {
      _skip_check_: true,
      value: 'right'
    }
  })), _ref55;
};
var genTabsStyle = function genTabsStyle(token) {
  var _ref56, _extends3, _extends4, _ref60;
  var componentCls = token.componentCls,
    tabsCardHorizontalPadding = token.tabsCardHorizontalPadding,
    tabsCardHeight = token.tabsCardHeight,
    tabsCardGutter = token.tabsCardGutter,
    tabsHoverColor = token.tabsHoverColor,
    tabsActiveColor = token.tabsActiveColor,
    colorSplit = token.colorSplit;
  return _ref60 = {}, _defineProperty(_ref60, componentCls, _extends(_extends(_extends(_extends({}, resetComponent(token)), (_extends3 = {
    display: 'flex'
  }, _defineProperty(_extends3, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref56 = {
    position: 'relative',
    display: 'flex',
    flex: 'none',
    alignItems: 'center'
  }, _defineProperty(_ref56, componentCls + "-nav-wrap", {
    position: 'relative',
    display: 'flex',
    flex: 'auto',
    alignSelf: 'stretch',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transform: 'translate(0)',
    // >>>>> Ping shadow
    '&::before, &::after': {
      position: 'absolute',
      zIndex: 1,
      opacity: 0,
      transition: "opacity " + token.motionDurationSlow,
      content: "''",
      pointerEvents: 'none'
    }
  }), _defineProperty(_ref56, componentCls + "-nav-list", {
    position: 'relative',
    display: 'flex',
    transition: "opacity " + token.motionDurationSlow
  }), _defineProperty(_ref56, componentCls + "-nav-operations", {
    display: 'flex',
    alignSelf: 'stretch'
  }), _defineProperty(_ref56, componentCls + "-nav-operations-hidden", {
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none'
  }), _defineProperty(_ref56, componentCls + "-nav-more", {
    position: 'relative',
    padding: tabsCardHorizontalPadding,
    background: 'transparent',
    border: 0,
    '&::after': {
      position: 'absolute',
      right: {
        _skip_check_: true,
        value: 0
      },
      bottom: 0,
      left: {
        _skip_check_: true,
        value: 0
      },
      height: token.controlHeightLG / 8,
      transform: 'translateY(100%)',
      content: "''"
    }
  }), _defineProperty(_ref56, componentCls + "-nav-add", _extends({
    minWidth: tabsCardHeight + "px",
    marginLeft: {
      _skip_check_: true,
      value: tabsCardGutter + "px"
    },
    padding: "0 " + token.paddingXS + "px",
    background: 'transparent',
    border: token.lineWidth + "px " + token.lineType + " " + colorSplit,
    borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0",
    outline: 'none',
    cursor: 'pointer',
    transition: "all " + token.motionDurationSlow + " " + token.motionEaseInOut,
    '&:hover': {
      color: tabsHoverColor
    },
    '&:active, &:focus:not(:focus-visible)': {
      color: tabsActiveColor
    }
  }, genFocusStyle(token))), _ref56)), _defineProperty(_extends3, componentCls + "-extra-content", {
    flex: 'none'
  }), _defineProperty(_extends3, componentCls + "-ink-bar", {
    position: 'absolute',
    background: token.colorPrimary,
    pointerEvents: 'none'
  }), _extends3)), genTabStyle(token)), (_extends4 = {}, _defineProperty(_extends4, componentCls + "-content", {
    position: 'relative',
    width: '100%'
  }), _defineProperty(_extends4, componentCls + "-content-holder", {
    flex: 'auto',
    minWidth: 0,
    minHeight: 0
  }), _defineProperty(_extends4, componentCls + "-tabpane", {
    outline: 'none',
    '&-hidden': {
      display: 'none'
    }
  }), _extends4))), _defineProperty(_ref60, componentCls + "-centered", _defineProperty({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", _defineProperty({}, componentCls + "-nav-wrap", _defineProperty({}, "&:not([class*='" + componentCls + "-nav-wrap-ping'])", {
    justifyContent: 'center'
  })))), _ref60;
};
// ============================== Export ==============================
export default genComponentStyleHook('Tabs', function (token) {
  var tabsCardHeight = token.controlHeightLG;
  var tabsToken = mergeToken(token, {
    tabsHoverColor: token.colorPrimaryHover,
    tabsActiveColor: token.colorPrimaryActive,
    tabsCardHorizontalPadding: (tabsCardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth + "px " + token.padding + "px",
    tabsCardHeight: tabsCardHeight,
    tabsCardGutter: token.marginXXS / 2,
    tabsHorizontalGutter: 32,
    tabsCardHeadBackground: token.colorFillAlter,
    dropdownEdgeChildVerticalPadding: token.paddingXXS,
    tabsActiveTextShadow: '0 0 0.25px currentcolor',
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120
  });
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), genMotionStyle(tabsToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
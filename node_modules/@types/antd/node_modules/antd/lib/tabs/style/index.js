"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var _motion = _interopRequireDefault(require("./motion"));
var genCardStyle = function genCardStyle(token) {
  var _ref, _ref4, _ref6, _ref10, _ref12, _ref14;
  var componentCls = token.componentCls,
    tabsCardHorizontalPadding = token.tabsCardHorizontalPadding,
    tabsCardHeadBackground = token.tabsCardHeadBackground,
    tabsCardGutter = token.tabsCardGutter,
    colorSplit = token.colorSplit;
  return (0, _defineProperty2["default"])({}, componentCls + "-card", (_ref14 = {}, (0, _defineProperty2["default"])(_ref14, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref = {}, (0, _defineProperty2["default"])(_ref, componentCls + "-tab", {
    margin: 0,
    padding: tabsCardHorizontalPadding,
    background: tabsCardHeadBackground,
    border: token.lineWidth + "px " + token.lineType + " " + colorSplit,
    transition: "all " + token.motionDurationSlow + " " + token.motionEaseInOut
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-tab-active", {
    color: token.colorPrimary,
    background: token.colorBgContainer
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-ink-bar", {
    visibility: 'hidden'
  }), _ref)), (0, _defineProperty2["default"])(_ref14, "&" + componentCls + "-top, &" + componentCls + "-bottom", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab + " + componentCls + "-tab", {
    marginLeft: {
      _skip_check_: true,
      value: tabsCardGutter + "px"
    }
  }))), (0, _defineProperty2["default"])(_ref14, "&" + componentCls + "-top", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref4 = {}, (0, _defineProperty2["default"])(_ref4, componentCls + "-tab", {
    borderRadius: token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0 0"
  }), (0, _defineProperty2["default"])(_ref4, componentCls + "-tab-active", {
    borderBottomColor: token.colorBgContainer
  }), _ref4))), (0, _defineProperty2["default"])(_ref14, "&" + componentCls + "-bottom", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref6 = {}, (0, _defineProperty2["default"])(_ref6, componentCls + "-tab", {
    borderRadius: "0 0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px"
  }), (0, _defineProperty2["default"])(_ref6, componentCls + "-tab-active", {
    borderTopColor: token.colorBgContainer
  }), _ref6))), (0, _defineProperty2["default"])(_ref14, "&" + componentCls + "-left, &" + componentCls + "-right", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab + " + componentCls + "-tab", {
    marginTop: tabsCardGutter + "px"
  }))), (0, _defineProperty2["default"])(_ref14, "&" + componentCls + "-left", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref10 = {}, (0, _defineProperty2["default"])(_ref10, componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: token.borderRadiusLG + "px 0 0 " + token.borderRadiusLG + "px"
    }
  }), (0, _defineProperty2["default"])(_ref10, componentCls + "-tab-active", {
    borderRightColor: {
      _skip_check_: true,
      value: token.colorBgContainer
    }
  }), _ref10))), (0, _defineProperty2["default"])(_ref14, "&" + componentCls + "-right", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref12 = {}, (0, _defineProperty2["default"])(_ref12, componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: "0 " + token.borderRadiusLG + "px " + token.borderRadiusLG + "px 0"
    }
  }), (0, _defineProperty2["default"])(_ref12, componentCls + "-tab-active", {
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
  return (0, _defineProperty2["default"])({}, componentCls + "-dropdown", (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), (0, _defineProperty2["default"])({
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
    '&-item': (0, _extends5["default"])((0, _extends5["default"])({}, _style.textEllipsis), {
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
  return _ref33 = {}, (0, _defineProperty2["default"])(_ref33, componentCls + "-top, " + componentCls + "-bottom", (0, _defineProperty2["default"])({
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
  }, (0, _defineProperty2["default"])(_ref18, componentCls + "-ink-bar", {
    height: token.lineWidthBold,
    '&-animated': {
      transition: "width " + token.motionDurationSlow + ", left " + token.motionDurationSlow + ",\n            right " + token.motionDurationSlow
    }
  }), (0, _defineProperty2["default"])(_ref18, componentCls + "-nav-wrap", (_ref17 = {
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
  }, (0, _defineProperty2["default"])(_ref17, "&" + componentCls + "-nav-wrap-ping-left::before", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_ref17, "&" + componentCls + "-nav-wrap-ping-right::after", {
    opacity: 1
  }), _ref17)), _ref18))), (0, _defineProperty2["default"])(_ref33, componentCls + "-top", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav,\n        > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({
    '&::before': {
      bottom: 0
    }
  }, componentCls + "-ink-bar", {
    bottom: 0
  }))), (0, _defineProperty2["default"])(_ref33, componentCls + "-bottom", (_ref23 = {}, (0, _defineProperty2["default"])(_ref23, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({
    order: 1,
    marginTop: margin + "px",
    marginBottom: 0,
    '&::before': {
      top: 0
    }
  }, componentCls + "-ink-bar", {
    top: 0
  })), (0, _defineProperty2["default"])(_ref23, "> " + componentCls + "-content-holder, > div > " + componentCls + "-content-holder", {
    order: 0
  }), _ref23)), (0, _defineProperty2["default"])(_ref33, componentCls + "-left, " + componentCls + "-right", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref25 = {
    flexDirection: 'column',
    minWidth: token.controlHeight * 1.25
  }, (0, _defineProperty2["default"])(_ref25, componentCls + "-tab", {
    padding: token.paddingXS + "px " + token.paddingLG + "px",
    textAlign: 'center'
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-tab + " + componentCls + "-tab", {
    margin: token.margin + "px 0 0 0"
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-nav-wrap", (_ref24 = {
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
  }, (0, _defineProperty2["default"])(_ref24, "&" + componentCls + "-nav-wrap-ping-top::before", {
    opacity: 1
  }), (0, _defineProperty2["default"])(_ref24, "&" + componentCls + "-nav-wrap-ping-bottom::after", {
    opacity: 1
  }), _ref24)), (0, _defineProperty2["default"])(_ref25, componentCls + "-ink-bar", {
    width: token.lineWidthBold,
    '&-animated': {
      transition: "height " + token.motionDurationSlow + ", top " + token.motionDurationSlow
    }
  }), (0, _defineProperty2["default"])(_ref25, componentCls + "-nav-list, " + componentCls + "-nav-operations", {
    flex: '1 0 auto',
    flexDirection: 'column'
  }), _ref25))), (0, _defineProperty2["default"])(_ref33, componentCls + "-left", (_ref29 = {}, (0, _defineProperty2["default"])(_ref29, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-ink-bar", {
    right: {
      _skip_check_: true,
      value: 0
    }
  })), (0, _defineProperty2["default"])(_ref29, "> " + componentCls + "-content-holder, > div > " + componentCls + "-content-holder", (0, _defineProperty2["default"])({
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
  })), _ref29)), (0, _defineProperty2["default"])(_ref33, componentCls + "-right", (_ref32 = {}, (0, _defineProperty2["default"])(_ref32, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({
    order: 1
  }, componentCls + "-ink-bar", {
    left: {
      _skip_check_: true,
      value: 0
    }
  })), (0, _defineProperty2["default"])(_ref32, "> " + componentCls + "-content-holder, > div > " + componentCls + "-content-holder", (0, _defineProperty2["default"])({
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
  return _ref45 = {}, (0, _defineProperty2["default"])(_ref45, componentCls, {
    '&-small': (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab", {
      padding: token.paddingXS + "px 0",
      fontSize: token.fontSize
    })),
    '&-large': (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab", {
      padding: padding + "px 0",
      fontSize: token.fontSizeLG
    }))
  }), (0, _defineProperty2["default"])(_ref45, componentCls + "-card", (_ref44 = {}, (0, _defineProperty2["default"])(_ref44, "&" + componentCls + "-small", (_ref41 = {}, (0, _defineProperty2["default"])(_ref41, "> " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab", {
    padding: token.paddingXXS * 1.5 + "px " + padding + "px"
  })), (0, _defineProperty2["default"])(_ref41, "&" + componentCls + "-bottom", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: "0 0 " + token.borderRadius + "px " + token.borderRadius + "px"
  })), (0, _defineProperty2["default"])(_ref41, "&" + componentCls + "-top", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: token.borderRadius + "px " + token.borderRadius + "px 0 0"
  })), (0, _defineProperty2["default"])(_ref41, "&" + componentCls + "-right", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: "0 " + token.borderRadius + "px " + token.borderRadius + "px 0"
    }
  })), (0, _defineProperty2["default"])(_ref41, "&" + componentCls + "-left", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav " + componentCls + "-tab", {
    borderRadius: {
      _skip_check_: true,
      value: token.borderRadius + "px 0 0 " + token.borderRadius + "px"
    }
  })), _ref41)), (0, _defineProperty2["default"])(_ref44, "&" + componentCls + "-large", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab", {
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
  return _ref46 = {}, (0, _defineProperty2["default"])(_ref46, tabCls, (_tabCls = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    padding: token.paddingSM + "px 0",
    fontSize: token.fontSize + "px",
    background: 'transparent',
    border: 0,
    outline: 'none',
    cursor: 'pointer',
    '&-btn, &-remove': (0, _extends5["default"])({
      '&:focus:not(:focus-visible), &:active': {
        color: tabsActiveColor
      }
    }, (0, _style.genFocusStyle)(token)),
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
  }, (0, _defineProperty2["default"])(_tabCls, "&" + tabCls + "-active " + tabCls + "-btn", {
    color: token.colorPrimary,
    textShadow: token.tabsActiveTextShadow
  }), (0, _defineProperty2["default"])(_tabCls, "&" + tabCls + "-disabled", {
    color: token.colorTextDisabled,
    cursor: 'not-allowed'
  }), (0, _defineProperty2["default"])(_tabCls, "&" + tabCls + "-disabled " + tabCls + "-btn, &" + tabCls + "-disabled " + componentCls + "-remove", {
    '&:focus, &:active': {
      color: token.colorTextDisabled
    }
  }), (0, _defineProperty2["default"])(_tabCls, "& " + tabCls + "-remove " + iconCls, {
    margin: 0
  }), (0, _defineProperty2["default"])(_tabCls, iconCls, {
    marginRight: {
      _skip_check_: true,
      value: token.marginSM
    }
  }), _tabCls)), (0, _defineProperty2["default"])(_ref46, tabCls + " + " + tabCls, {
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
  return _ref55 = {}, (0, _defineProperty2["default"])(_ref55, rtlCls, (_rtlCls = {
    direction: 'rtl'
  }, (0, _defineProperty2["default"])(_rtlCls, componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab", (_ref48 = {
    margin: {
      _skip_check_: true,
      value: "0 0 0 " + tabsHorizontalGutter + "px"
    }
  }, (0, _defineProperty2["default"])(_ref48, componentCls + "-tab:last-of-type", {
    marginLeft: {
      _skip_check_: true,
      value: 0
    }
  }), (0, _defineProperty2["default"])(_ref48, iconCls, {
    marginRight: {
      _skip_check_: true,
      value: 0
    },
    marginLeft: {
      _skip_check_: true,
      value: token.marginSM + "px"
    }
  }), (0, _defineProperty2["default"])(_ref48, componentCls + "-tab-remove", (0, _defineProperty2["default"])({
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
  })), _ref48))), (0, _defineProperty2["default"])(_rtlCls, "&" + componentCls + "-left", (_ref50 = {}, (0, _defineProperty2["default"])(_ref50, "> " + componentCls + "-nav", {
    order: 1
  }), (0, _defineProperty2["default"])(_ref50, "> " + componentCls + "-content-holder", {
    order: 0
  }), _ref50)), (0, _defineProperty2["default"])(_rtlCls, "&" + componentCls + "-right", (_ref51 = {}, (0, _defineProperty2["default"])(_ref51, "> " + componentCls + "-nav", {
    order: 0
  }), (0, _defineProperty2["default"])(_ref51, "> " + componentCls + "-content-holder", {
    order: 1
  }), _ref51)), (0, _defineProperty2["default"])(_rtlCls, "&" + componentCls + "-card" + componentCls + "-top, &" + componentCls + "-card" + componentCls + "-bottom", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-tab + " + componentCls + "-tab", {
    marginRight: {
      _skip_check_: true,
      value: tabsCardGutter + "px"
    },
    marginLeft: {
      _skip_check_: true,
      value: 0
    }
  }))), _rtlCls)), (0, _defineProperty2["default"])(_ref55, componentCls + "-dropdown-rtl", {
    direction: 'rtl'
  }), (0, _defineProperty2["default"])(_ref55, componentCls + "-menu-item", (0, _defineProperty2["default"])({}, componentCls + "-dropdown-rtl", {
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
  return _ref60 = {}, (0, _defineProperty2["default"])(_ref60, componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.resetComponent)(token)), (_extends3 = {
    display: 'flex'
  }, (0, _defineProperty2["default"])(_extends3, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (_ref56 = {
    position: 'relative',
    display: 'flex',
    flex: 'none',
    alignItems: 'center'
  }, (0, _defineProperty2["default"])(_ref56, componentCls + "-nav-wrap", {
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
  }), (0, _defineProperty2["default"])(_ref56, componentCls + "-nav-list", {
    position: 'relative',
    display: 'flex',
    transition: "opacity " + token.motionDurationSlow
  }), (0, _defineProperty2["default"])(_ref56, componentCls + "-nav-operations", {
    display: 'flex',
    alignSelf: 'stretch'
  }), (0, _defineProperty2["default"])(_ref56, componentCls + "-nav-operations-hidden", {
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none'
  }), (0, _defineProperty2["default"])(_ref56, componentCls + "-nav-more", {
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
  }), (0, _defineProperty2["default"])(_ref56, componentCls + "-nav-add", (0, _extends5["default"])({
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
  }, (0, _style.genFocusStyle)(token))), _ref56)), (0, _defineProperty2["default"])(_extends3, componentCls + "-extra-content", {
    flex: 'none'
  }), (0, _defineProperty2["default"])(_extends3, componentCls + "-ink-bar", {
    position: 'absolute',
    background: token.colorPrimary,
    pointerEvents: 'none'
  }), _extends3)), genTabStyle(token)), (_extends4 = {}, (0, _defineProperty2["default"])(_extends4, componentCls + "-content", {
    position: 'relative',
    width: '100%'
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-content-holder", {
    flex: 'auto',
    minWidth: 0,
    minHeight: 0
  }), (0, _defineProperty2["default"])(_extends4, componentCls + "-tabpane", {
    outline: 'none',
    '&-hidden': {
      display: 'none'
    }
  }), _extends4))), (0, _defineProperty2["default"])(_ref60, componentCls + "-centered", (0, _defineProperty2["default"])({}, "> " + componentCls + "-nav, > div > " + componentCls + "-nav", (0, _defineProperty2["default"])({}, componentCls + "-nav-wrap", (0, _defineProperty2["default"])({}, "&:not([class*='" + componentCls + "-nav-wrap-ping'])", {
    justifyContent: 'center'
  })))), _ref60;
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Tabs', function (token) {
  var tabsCardHeight = token.controlHeightLG;
  var tabsToken = (0, _internal.mergeToken)(token, {
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
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), (0, _motion["default"])(tabsToken)];
}, function (token) {
  return {
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
exports["default"] = _default;
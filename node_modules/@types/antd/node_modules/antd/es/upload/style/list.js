import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { clearFix, textEllipsis } from '../../style';
var genListStyle = function genListStyle(token) {
  var _actionsCls, _itemCls, _actionsCls2, _ref, _extends2;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    iconCls = token.iconCls,
    fontSize = token.fontSize,
    lineHeight = token.lineHeight;
  var itemCls = componentCls + "-list-item";
  var actionsCls = itemCls + "-actions";
  var actionCls = itemCls + "-action";
  var listItemHeightSM = Math.round(fontSize * lineHeight);
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, componentCls + "-list", _extends(_extends({}, clearFix()), (_extends2 = {
    lineHeight: token.lineHeight
  }, _defineProperty(_extends2, itemCls, (_itemCls = {
    position: 'relative',
    height: token.lineHeight * fontSize,
    marginTop: token.marginXS,
    fontSize: fontSize,
    display: 'flex',
    alignItems: 'center',
    transition: "background-color " + token.motionDurationSlow,
    '&:hover': {
      backgroundColor: token.controlItemBgHover
    }
  }, _defineProperty(_itemCls, itemCls + "-name", _extends(_extends({}, textEllipsis), {
    padding: "0 " + token.paddingXS + "px",
    lineHeight: lineHeight,
    flex: 'auto',
    transition: "all " + token.motionDurationSlow
  })), _defineProperty(_itemCls, actionsCls, (_actionsCls = {}, _defineProperty(_actionsCls, actionCls, {
    opacity: 0
  }), _defineProperty(_actionsCls, "" + actionCls + antCls + "-btn-sm", {
    height: listItemHeightSM,
    border: 0,
    lineHeight: 1,
    // FIXME: should not override small button
    '> span': {
      transform: 'scale(1)'
    }
  }), _defineProperty(_actionsCls, "\n              " + actionCls + ":focus,\n              &.picture " + actionCls + "\n            ", {
    opacity: 1
  }), _defineProperty(_actionsCls, iconCls, {
    color: token.colorTextDescription,
    transition: "all " + token.motionDurationSlow
  }), _defineProperty(_actionsCls, "&:hover " + iconCls, {
    color: token.colorText
  }), _actionsCls)), _defineProperty(_itemCls, componentCls + "-icon " + iconCls, {
    color: token.colorTextDescription,
    fontSize: fontSize
  }), _defineProperty(_itemCls, itemCls + "-progress", {
    position: 'absolute',
    bottom: -token.uploadProgressOffset,
    width: '100%',
    paddingInlineStart: fontSize + token.paddingXS,
    fontSize: fontSize,
    lineHeight: 0,
    pointerEvents: 'none',
    '> div': {
      margin: 0
    }
  }), _itemCls)), _defineProperty(_extends2, itemCls + ":hover " + actionCls, {
    opacity: 1,
    color: token.colorText
  }), _defineProperty(_extends2, itemCls + "-error", (_ref = {
    color: token.colorError
  }, _defineProperty(_ref, itemCls + "-name, " + componentCls + "-icon " + iconCls, {
    color: token.colorError
  }), _defineProperty(_ref, actionsCls, (_actionsCls2 = {}, _defineProperty(_actionsCls2, iconCls + ", " + iconCls + ":hover", {
    color: token.colorError
  }), _defineProperty(_actionsCls2, actionCls, {
    opacity: 1
  }), _actionsCls2)), _ref)), _defineProperty(_extends2, componentCls + "-list-item-container", {
    transition: "opacity " + token.motionDurationSlow + ", height " + token.motionDurationSlow,
    // For smooth removing animation
    '&::before': {
      display: 'table',
      width: 0,
      height: 0,
      content: '""'
    }
  }), _extends2))));
};
export default genListStyle;
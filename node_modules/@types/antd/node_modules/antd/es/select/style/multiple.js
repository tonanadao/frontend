import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { mergeToken } from '../../theme/internal';
import { resetIcon } from '../../style';
var FIXED_ITEM_MARGIN = 2;
function getSelectItemStyle(_ref) {
  var controlHeightSM = _ref.controlHeightSM,
    controlHeight = _ref.controlHeight,
    borderWidth = _ref.lineWidth;
  var selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  var selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
}
function genSizeStyle(token, suffix) {
  var _ref2, _extends2, _ref3, _ref5, _ref6;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  var selectOverflowPrefixCls = componentCls + "-selection-overflow";
  var selectItemHeight = token.controlHeightSM;
  var _getSelectItemStyle = getSelectItemStyle(token),
    _getSelectItemStyle2 = _slicedToArray(_getSelectItemStyle, 1),
    selectItemDist = _getSelectItemStyle2[0];
  var suffixCls = suffix ? componentCls + "-" + suffix : '';
  return _defineProperty({}, componentCls + "-multiple" + suffixCls, (_ref6 = {
    fontSize: token.fontSize
  }, _defineProperty(_ref6, selectOverflowPrefixCls, {
    position: 'relative',
    display: 'flex',
    flex: 'auto',
    flexWrap: 'wrap',
    maxWidth: '100%',
    '&-item': {
      flex: 'none',
      alignSelf: 'center',
      maxWidth: '100%',
      display: 'inline-flex'
    }
  }), _defineProperty(_ref6, componentCls + "-selector", (_ref2 = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    // Multiple is little different that horizontal is follow the vertical
    padding: selectItemDist - FIXED_ITEM_MARGIN + "px " + FIXED_ITEM_MARGIN * 2 + "px",
    borderRadius: token.borderRadius
  }, _defineProperty(_ref2, componentCls + "-show-search&", {
    cursor: 'text'
  }), _defineProperty(_ref2, componentCls + "-disabled&", {
    background: token.colorBgContainerDisabled,
    cursor: 'not-allowed'
  }), _defineProperty(_ref2, '&:after', {
    display: 'inline-block',
    width: 0,
    margin: FIXED_ITEM_MARGIN + "px 0",
    lineHeight: selectItemHeight + "px",
    content: '"\\a0"'
  }), _ref2)), _defineProperty(_ref6, "\n        &" + componentCls + "-show-arrow " + componentCls + "-selector,\n        &" + componentCls + "-allow-clear " + componentCls + "-selector\n      ", {
    paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
  }), _defineProperty(_ref6, componentCls + "-selection-item", (_ref3 = {
    position: 'relative',
    display: 'flex',
    flex: 'none',
    boxSizing: 'border-box',
    maxWidth: '100%',
    height: selectItemHeight,
    marginTop: FIXED_ITEM_MARGIN,
    marginBottom: FIXED_ITEM_MARGIN,
    lineHeight: selectItemHeight - token.lineWidth * 2 + "px",
    background: token.colorFillSecondary,
    border: token.lineWidth + "px solid " + token.colorSplit,
    borderRadius: token.borderRadiusSM,
    cursor: 'default',
    transition: "font-size " + token.motionDurationSlow + ", line-height " + token.motionDurationSlow + ", height " + token.motionDurationSlow,
    userSelect: 'none',
    marginInlineEnd: FIXED_ITEM_MARGIN * 2,
    paddingInlineStart: token.paddingXS,
    paddingInlineEnd: token.paddingXS / 2
  }, _defineProperty(_ref3, componentCls + "-disabled&", {
    color: token.colorTextDisabled,
    borderColor: token.colorBorder,
    cursor: 'not-allowed'
  }), _defineProperty(_ref3, '&-content', {
    display: 'inline-block',
    marginInlineEnd: token.paddingXS / 2,
    overflow: 'hidden',
    whiteSpace: 'pre',
    textOverflow: 'ellipsis'
  }), _defineProperty(_ref3, '&-remove', _extends(_extends({}, resetIcon()), (_extends2 = {
    display: 'inline-block',
    color: token.colorIcon,
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 'inherit',
    cursor: 'pointer'
  }, _defineProperty(_extends2, "> " + iconCls, {
    verticalAlign: '-0.2em'
  }), _defineProperty(_extends2, '&:hover', {
    color: token.colorIconHover
  }), _extends2))), _ref3)), _defineProperty(_ref6, selectOverflowPrefixCls + "-item + " + selectOverflowPrefixCls + "-item", _defineProperty({}, componentCls + "-selection-search", {
    marginInlineStart: 0
  })), _defineProperty(_ref6, componentCls + "-selection-search", (_ref5 = {
    display: 'inline-flex',
    position: 'relative',
    maxWidth: '100%',
    marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist
  }, _defineProperty(_ref5, "\n          &-input,\n          &-mirror\n        ", {
    height: selectItemHeight,
    fontFamily: token.fontFamily,
    lineHeight: selectItemHeight + "px",
    transition: "all " + token.motionDurationSlow
  }), _defineProperty(_ref5, '&-input', {
    width: '100%',
    minWidth: 4.1 // fix search cursor missing
  }), _defineProperty(_ref5, '&-mirror', {
    position: 'absolute',
    top: 0,
    insetInlineStart: 0,
    insetInlineEnd: 'auto',
    zIndex: 999,
    whiteSpace: 'pre',
    visibility: 'hidden'
  }), _ref5)), _defineProperty(_ref6, componentCls + "-selection-placeholder ", {
    position: 'absolute',
    top: '50%',
    insetInlineStart: token.inputPaddingHorizontalBase,
    insetInlineEnd: token.inputPaddingHorizontalBase,
    transform: 'translateY(-50%)',
    transition: "all " + token.motionDurationSlow
  }), _ref6));
}
export default function genMultipleStyle(token) {
  var _ref8;
  var componentCls = token.componentCls;
  var smallToken = mergeToken(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  var _getSelectItemStyle3 = getSelectItemStyle(token),
    _getSelectItemStyle4 = _slicedToArray(_getSelectItemStyle3, 2),
    smSelectItemMargin = _getSelectItemStyle4[1];
  return [genSizeStyle(token),
  // ======================== Small ========================
  // Shared
  genSizeStyle(smallToken, 'sm'), // Padding
  _defineProperty({}, componentCls + "-multiple" + componentCls + "-sm", (_ref8 = {}, _defineProperty(_ref8, componentCls + "-selection-placeholder", {
    insetInlineStart: token.controlPaddingHorizontalSM - token.lineWidth,
    insetInlineEnd: 'auto'
  }), _defineProperty(_ref8, componentCls + "-selection-search", {
    marginInlineStart: smSelectItemMargin
  }), _ref8)),
  // ======================== Large ========================
  // Shared
  genSizeStyle(mergeToken(token, {
    fontSize: token.fontSizeLG,
    controlHeight: token.controlHeightLG,
    controlHeightSM: token.controlHeight,
    borderRadius: token.borderRadiusLG,
    borderRadiusSM: token.borderRadius
  }), 'lg')];
}
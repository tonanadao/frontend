import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genActiveStyle, genBasicInputStyle, genDisabledStyle, genPlaceholderStyle, genStatusStyle, initInputToken } from '../../input/style';
import { genComponentStyleHook } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
var genMentionsStyle = function genMentionsStyle(token) {
  var _extends3;
  var componentCls = token.componentCls,
    colorTextDisabled = token.colorTextDisabled,
    controlItemBgHover = token.controlItemBgHover,
    controlPaddingHorizontal = token.controlPaddingHorizontal,
    colorText = token.colorText,
    motionDurationSlow = token.motionDurationSlow,
    lineHeight = token.lineHeight,
    controlHeight = token.controlHeight,
    inputPaddingHorizontal = token.inputPaddingHorizontal,
    inputPaddingVertical = token.inputPaddingVertical,
    fontSize = token.fontSize,
    colorBgElevated = token.colorBgElevated,
    borderRadiusLG = token.borderRadiusLG,
    boxShadowSecondary = token.boxShadowSecondary;
  var itemPaddingVertical = Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2);
  return _defineProperty({}, "" + componentCls, _extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), genBasicInputStyle(token)), {
    position: 'relative',
    display: 'inline-block',
    height: 'auto',
    padding: 0,
    overflow: 'hidden',
    lineHeight: lineHeight,
    whiteSpace: 'pre-wrap',
    verticalAlign: 'bottom'
  }), genStatusStyle(token)), (_extends3 = {
    '&-disabled': {
      '> textarea': _extends({}, genDisabledStyle(token))
    },
    '&-focused': _extends({}, genActiveStyle(token))
  }, _defineProperty(_extends3, "&-affix-wrapper " + componentCls + "-suffix", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: inputPaddingHorizontal,
    bottom: 0,
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    margin: 'auto'
  }), _defineProperty(_extends3, "> textarea, " + componentCls + "-measure", {
    color: colorText,
    boxSizing: 'border-box',
    minHeight: controlHeight - 2,
    margin: 0,
    padding: inputPaddingVertical + "px " + inputPaddingHorizontal + "px",
    overflow: 'inherit',
    overflowX: 'hidden',
    overflowY: 'auto',
    fontWeight: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    fontStyle: 'inherit',
    fontVariant: 'inherit',
    fontSizeAdjust: 'inherit',
    fontStretch: 'inherit',
    lineHeight: 'inherit',
    direction: 'inherit',
    letterSpacing: 'inherit',
    whiteSpace: 'inherit',
    textAlign: 'inherit',
    verticalAlign: 'top',
    wordWrap: 'break-word',
    wordBreak: 'inherit',
    tabSize: 'inherit'
  }), _defineProperty(_extends3, '> textarea', _extends({
    width: '100%',
    border: 'none',
    outline: 'none',
    resize: 'none',
    backgroundColor: 'inherit'
  }, genPlaceholderStyle(token.colorTextPlaceholder))), _defineProperty(_extends3, componentCls + "-measure", {
    position: 'absolute',
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0,
    zIndex: -1,
    color: 'transparent',
    pointerEvents: 'none',
    '> span': {
      display: 'inline-block',
      minHeight: '1em'
    }
  }), _defineProperty(_extends3, '&-dropdown', _extends(_extends({}, resetComponent(token)), _defineProperty({
    position: 'absolute',
    top: -9999,
    insetInlineStart: -9999,
    zIndex: token.zIndexPopup,
    boxSizing: 'border-box',
    fontSize: fontSize,
    fontVariant: 'initial',
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    outline: 'none',
    boxShadow: boxShadowSecondary,
    '&-hidden': {
      display: 'none'
    }
  }, componentCls + "-dropdown-menu", {
    maxHeight: token.dropdownHeight,
    marginBottom: 0,
    paddingInlineStart: 0,
    overflow: 'auto',
    listStyle: 'none',
    outline: 'none',
    '&-item': _extends(_extends({}, textEllipsis), {
      position: 'relative',
      display: 'block',
      minWidth: token.controlItemWidth,
      padding: itemPaddingVertical + "px " + controlPaddingHorizontal + "px",
      color: colorText,
      fontWeight: 'normal',
      lineHeight: lineHeight,
      cursor: 'pointer',
      transition: "background " + motionDurationSlow + " ease",
      '&:hover': {
        backgroundColor: controlItemBgHover
      },
      '&:first-child': {
        borderStartStartRadius: borderRadiusLG,
        borderStartEndRadius: borderRadiusLG,
        borderEndStartRadius: 0,
        borderEndEndRadius: 0
      },
      '&:last-child': {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
        borderEndStartRadius: borderRadiusLG,
        borderEndEndRadius: borderRadiusLG
      },
      '&-disabled': {
        color: colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover': {
          color: colorTextDisabled,
          backgroundColor: controlItemBgHover,
          cursor: 'not-allowed'
        }
      },
      '&-selected': {
        color: colorText,
        fontWeight: token.fontWeightStrong,
        backgroundColor: controlItemBgHover
      },
      '&-active': {
        backgroundColor: controlItemBgHover
      }
    })
  }))), _extends3)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Mentions', function (token) {
  var mentionsToken = initInputToken(token);
  return [genMentionsStyle(mentionsToken)];
}, function (token) {
  return {
    dropdownHeight: 250,
    controlItemWidth: 100,
    zIndexPopup: token.zIndexPopupBase + 50
  };
});
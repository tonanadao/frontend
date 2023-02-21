import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
/*
.typography-title(@fontSize; @fontWeight; @lineHeight; @headingColor; @headingMarginBottom;) {
  margin-bottom: @headingMarginBottom;
  color: @headingColor;
  font-weight: @fontWeight;
  fontSize: @fontSize;
  line-height: @lineHeight;
}
*/
import { gold } from '@ant-design/colors';
import { initInputToken } from '../../input/style';
import { operationUnit } from '../../style';
// eslint-disable-next-line import/prefer-default-export
var getTitleStyle = function getTitleStyle(fontSize, lineHeight, color, token) {
  var sizeMarginHeadingVerticalEnd = token.sizeMarginHeadingVerticalEnd,
    fontWeightStrong = token.fontWeightStrong;
  return {
    marginBottom: sizeMarginHeadingVerticalEnd,
    color: color,
    fontWeight: fontWeightStrong,
    fontSize: fontSize,
    lineHeight: lineHeight
  };
};
// eslint-disable-next-line import/prefer-default-export
export var getTitleStyles = function getTitleStyles(token) {
  var headings = [1, 2, 3, 4, 5];
  var styles = {};
  headings.forEach(function (headingLevel) {
    styles["\n      h" + headingLevel + "&,\n      div&-h" + headingLevel + ",\n      div&-h" + headingLevel + " > textarea,\n      h" + headingLevel + "\n    "] = getTitleStyle(token["fontSizeHeading" + headingLevel], token["lineHeightHeading" + headingLevel], token.colorTextHeading, token);
  });
  return styles;
};
export var getLinkStyles = function getLinkStyles(token) {
  var componentCls = token.componentCls;
  return {
    'a&, a': _extends(_extends({}, operationUnit(token)), _defineProperty({
      textDecoration: token.linkDecoration,
      '&:active, &:hover': {
        textDecoration: token.linkHoverDecoration
      }
    }, "&[disabled], &" + componentCls + "-disabled", {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      '&:active, &:hover': {
        color: token.colorTextDisabled
      },
      '&:active': {
        pointerEvents: 'none'
      }
    }))
  };
};
export var getResetStyles = function getResetStyles() {
  return {
    code: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.2em 0.1em',
      fontSize: '85%',
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3
    },
    kbd: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.15em 0.1em',
      fontSize: '90%',
      background: 'rgba(150, 150, 150, 0.06)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderBottomWidth: 2,
      borderRadius: 3
    },
    mark: {
      padding: 0,
      // FIXME hardcode in v4
      backgroundColor: gold[2]
    },
    'u, ins': {
      textDecoration: 'underline',
      textDecorationSkipInk: 'auto'
    },
    's, del': {
      textDecoration: 'line-through'
    },
    strong: {
      fontWeight: 600
    },
    // list
    'ul, ol': {
      marginInline: 0,
      marginBlock: '0 1em',
      padding: 0,
      li: {
        marginInline: '20px 0',
        marginBlock: 0,
        paddingInline: '4px 0',
        paddingBlock: 0
      }
    },
    ul: {
      listStyleType: 'circle',
      ul: {
        listStyleType: 'disc'
      }
    },
    ol: {
      listStyleType: 'decimal'
    },
    // pre & block
    'pre, blockquote': {
      margin: '1em 0'
    },
    pre: {
      padding: '0.4em 0.6em',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3,
      // Compatible for marked
      code: {
        display: 'inline',
        margin: 0,
        padding: 0,
        fontSize: 'inherit',
        fontFamily: 'inherit',
        background: 'transparent',
        border: 0
      }
    },
    blockquote: {
      paddingInline: '0.6em 0',
      paddingBlock: 0,
      borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
      opacity: 0.85
    }
  };
};
export var getEditableStyles = function getEditableStyles(token) {
  var _editContent;
  var componentCls = token.componentCls;
  var inputToken = initInputToken(token);
  var inputShift = inputToken.inputPaddingVertical + 1;
  return {
    '&-edit-content': (_editContent = {
      position: 'relative',
      'div&': {
        insetInlineStart: -token.paddingSM,
        marginTop: -inputShift,
        marginBottom: "calc(1em - " + inputShift + "px)"
      }
    }, _defineProperty(_editContent, componentCls + "-edit-content-confirm", {
      position: 'absolute',
      insetInlineEnd: token.marginXS + 2,
      insetBlockEnd: token.marginXS,
      color: token.colorTextDescription,
      // default style
      fontWeight: 'normal',
      fontSize: token.fontSize,
      fontStyle: 'normal',
      pointerEvents: 'none'
    }), _defineProperty(_editContent, "textarea", {
      margin: '0!important',
      // Fix Editable Textarea flash in Firefox
      MozTransition: 'none',
      height: '1em'
    }), _editContent)
  };
};
export var getCopiableStyles = function getCopiableStyles(token) {
  return {
    '&-copy-success': _defineProperty({}, "\n    &,\n    &:hover,\n    &:focus", {
      color: token.colorSuccess
    })
  };
};
export var getEllipsisStyles = function getEllipsisStyles() {
  var _ref;
  return _ref = {}, _defineProperty(_ref, "\n  a&-ellipsis,\n  span&-ellipsis\n  ", {
    display: 'inline-block',
    maxWidth: '100%'
  }), _defineProperty(_ref, '&-single-line', {
    whiteSpace: 'nowrap'
  }), _defineProperty(_ref, '&-ellipsis-single-line', {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // https://blog.csdn.net/iefreer/article/details/50421025
    'a&, span&': {
      verticalAlign: 'bottom'
    }
  }), _defineProperty(_ref, '&-ellipsis-multiple-line', {
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  }), _ref;
};
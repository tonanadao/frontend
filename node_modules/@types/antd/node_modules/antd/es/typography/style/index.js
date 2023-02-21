import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { genComponentStyleHook } from '../../theme/internal';
import { getCopiableStyles, getEditableStyles, getEllipsisStyles, getLinkStyles, getResetStyles, getTitleStyles } from './mixins';
import { operationUnit } from '../../style';
var genTypographyStyle = function genTypographyStyle(token) {
  var _extends3;
  var componentCls = token.componentCls,
    sizeMarginHeadingVerticalStart = token.sizeMarginHeadingVerticalStart;
  return _defineProperty({}, componentCls, _extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends(_defineProperty({
    color: token.colorText,
    wordBreak: 'break-word',
    lineHeight: token.lineHeight,
    '&&-secondary': {
      color: token.colorTextDescription
    },
    '&&-success': {
      color: token.colorSuccess
    },
    '&&-warning': {
      color: token.colorWarning
    },
    '&&-danger': {
      color: token.colorError,
      'a&:active, a&:focus': {
        color: token.colorErrorActive
      },
      'a&:hover': {
        color: token.colorErrorHover
      }
    },
    '&&-disabled': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed',
      userSelect: 'none'
    }
  }, "\n        div&,\n        p\n      ", {
    marginBottom: '1em'
  }), getTitleStyles(token)), (_extends3 = {}, _defineProperty(_extends3, "\n      & + h1&,\n      & + h2&,\n      & + h3&,\n      & + h4&,\n      & + h5&\n      ", {
    marginTop: sizeMarginHeadingVerticalStart
  }), _defineProperty(_extends3, "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5", _defineProperty({}, "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ", {
    marginTop: sizeMarginHeadingVerticalStart
  })), _extends3)), getResetStyles()), getLinkStyles(token)), _defineProperty({}, "\n        " + componentCls + "-expand,\n        " + componentCls + "-edit,\n        " + componentCls + "-copy\n      ", _extends(_extends({}, operationUnit(token)), {
    marginInlineStart: token.marginXXS
  }))), getEditableStyles(token)), getCopiableStyles(token)), getEllipsisStyles()), {
    '&-rtl': {
      direction: 'rtl'
    }
  }));
};
// ============================== Export ==============================
export default genComponentStyleHook('Typography', function (token) {
  return [genTypographyStyle(token)];
}, {
  sizeMarginHeadingVerticalStart: '1.2em',
  sizeMarginHeadingVerticalEnd: '0.5em'
});
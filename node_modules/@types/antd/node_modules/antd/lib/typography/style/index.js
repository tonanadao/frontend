"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _internal = require("../../theme/internal");
var _mixins = require("./mixins");
var _style = require("../../style");
var genTypographyStyle = function genTypographyStyle(token) {
  var _extends3;
  var componentCls = token.componentCls,
    sizeMarginHeadingVerticalStart = token.sizeMarginHeadingVerticalStart;
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _extends5["default"])((0, _defineProperty2["default"])({
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
  }), (0, _mixins.getTitleStyles)(token)), (_extends3 = {}, (0, _defineProperty2["default"])(_extends3, "\n      & + h1&,\n      & + h2&,\n      & + h3&,\n      & + h4&,\n      & + h5&\n      ", {
    marginTop: sizeMarginHeadingVerticalStart
  }), (0, _defineProperty2["default"])(_extends3, "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5", (0, _defineProperty2["default"])({}, "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ", {
    marginTop: sizeMarginHeadingVerticalStart
  })), _extends3)), (0, _mixins.getResetStyles)()), (0, _mixins.getLinkStyles)(token)), (0, _defineProperty2["default"])({}, "\n        " + componentCls + "-expand,\n        " + componentCls + "-edit,\n        " + componentCls + "-copy\n      ", (0, _extends5["default"])((0, _extends5["default"])({}, (0, _style.operationUnit)(token)), {
    marginInlineStart: token.marginXXS
  }))), (0, _mixins.getEditableStyles)(token)), (0, _mixins.getCopiableStyles)(token)), (0, _mixins.getEllipsisStyles)()), {
    '&-rtl': {
      direction: 'rtl'
    }
  }));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Typography', function (token) {
  return [genTypographyStyle(token)];
}, {
  sizeMarginHeadingVerticalStart: '1.2em',
  sizeMarginHeadingVerticalEnd: '0.5em'
});
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genPaginationStyle = function genPaginationStyle(token) {
  var _ref;
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (_ref = {}, (0, _defineProperty2["default"])(_ref, componentCls + "-pagination" + antCls + "-pagination", {
    margin: token.margin + "px 0"
  }), (0, _defineProperty2["default"])(_ref, componentCls + "-pagination", {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: token.paddingXS,
    '> *': {
      flex: 'none'
    },
    '&-left': {
      justifyContent: 'flex-start'
    },
    '&-center': {
      justifyContent: 'center'
    },
    '&-right': {
      justifyContent: 'flex-end'
    }
  }), _ref));
};
var _default = genPaginationStyle;
exports["default"] = _default;
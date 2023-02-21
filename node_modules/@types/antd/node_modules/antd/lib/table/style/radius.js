"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var genRadiusStyle = function genRadiusStyle(token) {
  var _componentCls;
  var componentCls = token.componentCls,
    tableRadius = token.tableRadius;
  return (0, _defineProperty2["default"])({}, componentCls + "-wrapper", (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, componentCls + "-title", {
    borderRadius: tableRadius + "px " + tableRadius + "px 0 0"
  }), (0, _defineProperty2["default"])(_componentCls, componentCls + "-title + " + componentCls + "-container", {
    borderStartStartRadius: 0,
    borderStartEndRadius: 0,
    table: {
      borderRadius: 0,
      '> thead > tr:first-child': {
        'th:first-child': {
          borderRadius: 0
        },
        'th:last-child': {
          borderRadius: 0
        }
      }
    }
  }), (0, _defineProperty2["default"])(_componentCls, '&-container', {
    borderStartStartRadius: tableRadius,
    borderStartEndRadius: tableRadius,
    'table > thead > tr:first-child': {
      'th:first-child': {
        borderStartStartRadius: tableRadius
      },
      'th:last-child': {
        borderStartEndRadius: tableRadius
      }
    }
  }), (0, _defineProperty2["default"])(_componentCls, '&-footer', {
    borderRadius: "0 0 " + tableRadius + "px " + tableRadius + "px"
  }), _componentCls)));
};
var _default = genRadiusStyle;
exports["default"] = _default;
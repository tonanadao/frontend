"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FileTextOutlined = _interopRequireDefault(require("@ant-design/icons/FileTextOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var FloatButtonContent = function FloatButtonContent(props) {
  var icon = props.icon,
    description = props.description,
    prefixCls = props.prefixCls,
    className = props.className;
  var defaultElement = /*#__PURE__*/_react["default"].createElement("div", {
    className: prefixCls + "-icon"
  }, /*#__PURE__*/_react["default"].createElement(_FileTextOutlined["default"], null));
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: props.onClick,
    onFocus: props.onFocus,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    className: (0, _classnames["default"])(className, prefixCls + "-content")
  }, icon || description ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, icon && /*#__PURE__*/_react["default"].createElement("div", {
    className: prefixCls + "-icon"
  }, icon), description && /*#__PURE__*/_react["default"].createElement("div", {
    className: prefixCls + "-description"
  }, description)) : defaultElement);
};
var _default = /*#__PURE__*/(0, _react.memo)(FloatButtonContent);
exports["default"] = _default;
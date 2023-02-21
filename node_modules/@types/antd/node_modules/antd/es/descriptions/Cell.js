import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import classNames from 'classnames';
import * as React from 'react';
function notEmpty(val) {
  return val !== undefined && val !== null;
}
var Cell = function Cell(_ref) {
  var itemPrefixCls = _ref.itemPrefixCls,
    component = _ref.component,
    span = _ref.span,
    className = _ref.className,
    style = _ref.style,
    labelStyle = _ref.labelStyle,
    contentStyle = _ref.contentStyle,
    bordered = _ref.bordered,
    label = _ref.label,
    content = _ref.content,
    colon = _ref.colon;
  var Component = component;
  if (bordered) {
    var _classNames;
    return /*#__PURE__*/React.createElement(Component, {
      className: classNames((_classNames = {}, _defineProperty(_classNames, itemPrefixCls + "-item-label", notEmpty(label)), _defineProperty(_classNames, itemPrefixCls + "-item-content", notEmpty(content)), _classNames), className),
      style: style,
      colSpan: span
    }, notEmpty(label) && /*#__PURE__*/React.createElement("span", {
      style: labelStyle
    }, label), notEmpty(content) && /*#__PURE__*/React.createElement("span", {
      style: contentStyle
    }, content));
  }
  return /*#__PURE__*/React.createElement(Component, {
    className: classNames(itemPrefixCls + "-item", className),
    style: style,
    colSpan: span
  }, /*#__PURE__*/React.createElement("div", {
    className: itemPrefixCls + "-item-container"
  }, (label || label === 0) && /*#__PURE__*/React.createElement("span", {
    className: classNames(itemPrefixCls + "-item-label", _defineProperty({}, itemPrefixCls + "-item-no-colon", !colon)),
    style: labelStyle
  }, label), (content || content === 0) && /*#__PURE__*/React.createElement("span", {
    className: classNames(itemPrefixCls + "-item-content"),
    style: contentStyle
  }, content)));
};
export default Cell;
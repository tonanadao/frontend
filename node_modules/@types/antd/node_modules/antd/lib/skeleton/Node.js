"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _DotChartOutlined = _interopRequireDefault(require("@ant-design/icons/DotChartOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _style = _interopRequireDefault(require("./style"));
var _configProvider = require("../config-provider");
var SkeletonNode = function SkeletonNode(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active,
    children = props.children;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cls = (0, _classnames["default"])(prefixCls, prefixCls + "-element", (0, _defineProperty2["default"])({}, prefixCls + "-active", active), hashId, className);
  var content = children !== null && children !== void 0 ? children : /*#__PURE__*/React.createElement(_DotChartOutlined["default"], null);
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])(prefixCls + "-image", className),
    style: style
  }, content)));
};
var _default = SkeletonNode;
exports["default"] = _default;
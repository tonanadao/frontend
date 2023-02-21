"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _FileTextOutlined = _interopRequireDefault(require("@ant-design/icons/FileTextOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcMotion = _interopRequireDefault(require("rc-motion"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _FloatButton = _interopRequireWildcard(require("./FloatButton"));
var _configProvider = require("../config-provider");
var _context = require("./context");
var _style = _interopRequireDefault(require("./style"));
var FloatButtonGroup = function FloatButtonGroup(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/_react["default"].createElement(_FileTextOutlined["default"], null) : _props$icon,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], null) : _props$closeIcon,
    description = props.description,
    trigger = props.trigger,
    children = props.children,
    onOpenChange = props.onOpenChange;
  var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
    direction = _useContext.direction,
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls(_FloatButton.floatButtonPrefixCls, customizePrefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var groupPrefixCls = prefixCls + "-group";
  var groupCls = (0, _classnames["default"])(groupPrefixCls, hashId, className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, groupPrefixCls + "-rtl", direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, groupPrefixCls + "-" + shape, shape), (0, _defineProperty2["default"])(_classNames, groupPrefixCls + "-" + shape + "-shadow", !trigger), _classNames));
  var wrapperCls = (0, _classnames["default"])(hashId, groupPrefixCls + "-wrap");
  var _useMergedState = (0, _useMergedState3["default"])(false, {
      value: props.open
    }),
    _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  var clickAction = (0, _react.useRef)({});
  var hoverAction = (0, _react.useRef)({});
  if (trigger === 'click') {
    clickAction.current = {
      onClick: function onClick() {
        setOpen(function (prevState) {
          onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!prevState);
          return !prevState;
        });
      }
    };
  }
  if (trigger === 'hover') {
    hoverAction.current = {
      onMouseEnter: function onMouseEnter() {
        setOpen(true);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
      },
      onMouseLeave: function onMouseLeave() {
        setOpen(false);
        onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
      }
    };
  }
  return wrapSSR( /*#__PURE__*/_react["default"].createElement(_context.FloatButtonGroupProvider, {
    value: shape
  }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: groupCls,
    style: style
  }, hoverAction.current), trigger && ['click', 'hover'].includes(trigger) ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
    visible: open,
    motionName: groupPrefixCls + "-wrap"
  }, function (_ref) {
    var motionClassName = _ref.className;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])(motionClassName, wrapperCls)
    }, children);
  }), /*#__PURE__*/_react["default"].createElement(_FloatButton["default"], (0, _extends2["default"])({
    type: type,
    shape: shape,
    icon: open ? closeIcon : icon,
    description: description
  }, clickAction.current))) : children)));
};
var _default = /*#__PURE__*/(0, _react.memo)(FloatButtonGroup);
exports["default"] = _default;
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
var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _rcSteps = _interopRequireDefault(require("rc-steps"));
var React = _interopRequireWildcard(require("react"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _configProvider = require("../config-provider");
var _useBreakpoint2 = _interopRequireDefault(require("../grid/hooks/useBreakpoint"));
var _progress = _interopRequireDefault(require("../progress"));
var _useLegacyItems = _interopRequireDefault(require("./useLegacyItems"));
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Steps = function Steps(props) {
  var _classNames;
  var percent = props.percent,
    size = props.size,
    className = props.className,
    direction = props.direction,
    items = props.items,
    _props$responsive = props.responsive,
    responsive = _props$responsive === void 0 ? true : _props$responsive,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    children = props.children,
    restProps = __rest(props, ["percent", "size", "className", "direction", "items", "responsive", "current", "children"]);
  var _useBreakpoint = (0, _useBreakpoint2["default"])(responsive),
    xs = _useBreakpoint.xs;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    rtlDirection = _React$useContext.direction;
  var realDirectionValue = React.useMemo(function () {
    return responsive && xs ? 'vertical' : direction;
  }, [xs, direction]);
  var prefixCls = getPrefixCls('steps', props.prefixCls);
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var isInline = props.type === 'inline';
  var iconPrefix = getPrefixCls('', props.iconPrefix);
  var mergedItems = (0, _useLegacyItems["default"])(items, children);
  var mergedPercent = isInline ? undefined : percent;
  var stepsClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", rtlDirection === 'rtl'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-with-progress", mergedPercent !== undefined), _classNames), className, hashId);
  var icons = {
    finish: /*#__PURE__*/React.createElement(_CheckOutlined["default"], {
      className: prefixCls + "-finish-icon"
    }),
    error: /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
      className: prefixCls + "-error-icon"
    })
  };
  var stepIconRender = function stepIconRender(_ref) {
    var node = _ref.node,
      status = _ref.status;
    if (status === 'process' && mergedPercent !== undefined) {
      // currently it's hard-coded, since we can't easily read the actually width of icon
      var progressWidth = size === 'small' ? 32 : 40;
      // iconWithProgress
      return /*#__PURE__*/React.createElement("div", {
        className: prefixCls + "-progress-icon"
      }, /*#__PURE__*/React.createElement(_progress["default"], {
        type: "circle",
        percent: mergedPercent,
        width: progressWidth,
        strokeWidth: 4,
        format: function format() {
          return null;
        }
      }), node);
    }
    return node;
  };
  var itemRender = function itemRender(item, stepItem) {
    return item.description ? /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: item.description
    }, stepItem) : stepItem;
  };
  return wrapSSR( /*#__PURE__*/React.createElement(_rcSteps["default"], (0, _extends2["default"])({
    icons: icons
  }, restProps, {
    current: current,
    size: size,
    items: mergedItems,
    itemRender: isInline ? itemRender : undefined,
    stepIcon: stepIconRender,
    direction: realDirectionValue,
    prefixCls: prefixCls,
    iconPrefix: iconPrefix,
    className: stepsClassName
  })));
};
Steps.Step = _rcSteps["default"].Step;
var _default = Steps;
exports["default"] = _default;
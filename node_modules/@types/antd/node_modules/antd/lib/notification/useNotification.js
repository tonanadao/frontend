"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useNotification;
exports.useInternalNotification = useInternalNotification;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _rcNotification = require("rc-notification");
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _util = require("./util");
var _warning = _interopRequireDefault(require("../_util/warning"));
var _style = _interopRequireDefault(require("./style"));
var _PurePanel = require("./PurePanel");
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
var DEFAULT_OFFSET = 24;
var DEFAULT_DURATION = 4.5;
var Holder = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var top = props.top,
    bottom = props.bottom,
    staticPrefixCls = props.prefixCls,
    staticGetContainer = props.getContainer,
    maxCount = props.maxCount,
    rtl = props.rtl,
    onAllRemoved = props.onAllRemoved;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = staticPrefixCls || getPrefixCls('notification');
  // =============================== Style ===============================
  var getStyle = function getStyle(placement) {
    return (0, _util.getPlacementStyle)(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET);
  };
  // Style
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    hashId = _useStyle2[1];
  var getClassName = function getClassName() {
    return (0, _classnames["default"])(hashId, (0, _defineProperty2["default"])({}, prefixCls + "-rtl", rtl));
  };
  // ============================== Motion ===============================
  var getNotificationMotion = function getNotificationMotion() {
    return (0, _util.getMotion)(prefixCls);
  };
  // ============================== Origin ===============================
  var _useRcNotification = (0, _rcNotification.useNotification)({
      prefixCls: prefixCls,
      style: getStyle,
      className: getClassName,
      motion: getNotificationMotion,
      closable: true,
      closeIcon: (0, _PurePanel.getCloseIcon)(prefixCls),
      duration: DEFAULT_DURATION,
      getContainer: function getContainer() {
        return (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body;
      },
      maxCount: maxCount,
      onAllRemoved: onAllRemoved
    }),
    _useRcNotification2 = (0, _slicedToArray2["default"])(_useRcNotification, 2),
    api = _useRcNotification2[0],
    holder = _useRcNotification2[1];
  // ================================ Ref ================================
  React.useImperativeHandle(ref, function () {
    return (0, _extends2["default"])((0, _extends2["default"])({}, api), {
      prefixCls: prefixCls,
      hashId: hashId
    });
  });
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
function useInternalNotification(notificationConfig) {
  var holderRef = React.useRef(null);
  // ================================ API ================================
  var wrapAPI = React.useMemo(function () {
    // Wrap with notification content
    // >>> Open
    var open = function open(config) {
      if (!holderRef.current) {
        process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Notification', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : void 0;
        return;
      }
      var _holderRef$current = holderRef.current,
        originOpen = _holderRef$current.open,
        prefixCls = _holderRef$current.prefixCls,
        hashId = _holderRef$current.hashId;
      var noticePrefixCls = prefixCls + "-notice";
      var message = config.message,
        description = config.description,
        icon = config.icon,
        type = config.type,
        _config$placement = config.placement,
        placement = _config$placement === void 0 ? 'topRight' : _config$placement,
        btn = config.btn,
        className = config.className,
        restConfig = __rest(config, ["message", "description", "icon", "type", "placement", "btn", "className"]);
      return originOpen((0, _extends2["default"])((0, _extends2["default"])({}, restConfig), {
        content: /*#__PURE__*/React.createElement(_PurePanel.PureContent, {
          prefixCls: noticePrefixCls,
          icon: icon,
          type: type,
          message: message,
          description: description,
          btn: btn
        }),
        placement: placement,
        className: (0, _classnames["default"])(type && noticePrefixCls + "-" + type, hashId, className)
      }));
    };
    // >>> destroy
    var destroy = function destroy(key) {
      var _a, _b;
      if (key !== undefined) {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
      } else {
        (_b = holderRef.current) === null || _b === void 0 ? void 0 : _b.destroy();
      }
    };
    var clone = {
      open: open,
      destroy: destroy
    };
    var keys = ['success', 'info', 'warning', 'error'];
    keys.forEach(function (type) {
      clone[type] = function (config) {
        return open((0, _extends2["default"])((0, _extends2["default"])({}, config), {
          type: type
        }));
      };
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/React.createElement(Holder, (0, _extends2["default"])({
    key: "holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
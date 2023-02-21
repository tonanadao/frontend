"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMessage;
exports.useInternalMessage = useInternalMessage;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var React = _interopRequireWildcard(require("react"));
var _rcNotification = require("rc-notification");
var _classnames = _interopRequireDefault(require("classnames"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _util = require("./util");
var _warning = _interopRequireDefault(require("../_util/warning"));
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
var DEFAULT_OFFSET = 8;
var DEFAULT_DURATION = 3;
var Holder = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var top = props.top,
    staticPrefixCls = props.prefixCls,
    staticGetContainer = props.getContainer,
    maxCount = props.maxCount,
    rtl = props.rtl,
    transitionName = props.transitionName,
    onAllRemoved = props.onAllRemoved;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = staticPrefixCls || getPrefixCls('message');
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    hashId = _useStyle2[1];
  // =============================== Style ===============================
  var getStyle = function getStyle() {
    return {
      left: '50%',
      transform: 'translateX(-50%)',
      top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
    };
  };
  var getClassName = function getClassName() {
    return (0, _classnames["default"])(hashId, rtl ? prefixCls + "-rtl" : '');
  };
  // ============================== Motion ===============================
  var getNotificationMotion = function getNotificationMotion() {
    return (0, _util.getMotion)(prefixCls, transitionName);
  };
  // ============================ Close Icon =============================
  var mergedCloseIcon = /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-x"
  }, /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: prefixCls + "-close-icon"
  }));
  // ============================== Origin ===============================
  var _useRcNotification = (0, _rcNotification.useNotification)({
      prefixCls: prefixCls,
      style: getStyle,
      className: getClassName,
      motion: getNotificationMotion,
      closable: false,
      closeIcon: mergedCloseIcon,
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
var keyIndex = 0;
function useInternalMessage(notificationConfig) {
  var holderRef = React.useRef(null);
  // ================================ API ================================
  var wrapAPI = React.useMemo(function () {
    // Wrap with notification content
    // >>> close
    var close = function close(key) {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    // >>> Open
    var open = function open(config) {
      if (!holderRef.current) {
        process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Message', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : void 0;
        var fakeResult = function fakeResult() {};
        fakeResult.then = function () {};
        return fakeResult;
      }
      var _holderRef$current = holderRef.current,
        originOpen = _holderRef$current.open,
        prefixCls = _holderRef$current.prefixCls,
        hashId = _holderRef$current.hashId;
      var noticePrefixCls = prefixCls + "-notice";
      var content = config.content,
        icon = config.icon,
        type = config.type,
        key = config.key,
        className = config.className,
        _onClose = config.onClose,
        restConfig = __rest(config, ["content", "icon", "type", "key", "className", "onClose"]);
      var mergedKey = key;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = "antd-message-" + keyIndex;
      }
      return (0, _util.wrapPromiseFn)(function (resolve) {
        originOpen((0, _extends2["default"])((0, _extends2["default"])({}, restConfig), {
          key: mergedKey,
          content: /*#__PURE__*/React.createElement(_PurePanel.PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content),
          placement: 'top',
          className: (0, _classnames["default"])(type && noticePrefixCls + "-" + type, hashId, className),
          onClose: function onClose() {
            _onClose === null || _onClose === void 0 ? void 0 : _onClose();
            resolve();
          }
        }));
        // Return close function
        return function () {
          close(mergedKey);
        };
      });
    };
    // >>> destroy
    var destroy = function destroy(key) {
      var _a;
      if (key !== undefined) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    var clone = {
      open: open,
      destroy: destroy
    };
    var keys = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(function (type) {
      var typeOpen = function typeOpen(jointContent, duration, onClose) {
        var config;
        if (jointContent && (0, _typeof2["default"])(jointContent) === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        // Params
        var mergedDuration;
        var mergedOnClose;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        var mergedConfig = (0, _extends2["default"])((0, _extends2["default"])({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type: type
        });
        return open(mergedConfig);
      };
      clone[type] = typeOpen;
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
function useMessage(notificationConfig) {
  return useInternalMessage(notificationConfig);
}
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.actWrapper = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _render = require("rc-util/lib/React/render");
var React = _interopRequireWildcard(require("react"));
var _configProvider = _interopRequireWildcard(require("../config-provider"));
var _PurePanel = _interopRequireDefault(require("./PurePanel"));
var _useNotification = _interopRequireWildcard(require("./useNotification"));
var notification = null;
var act = function act(callback) {
  return callback();
};
var taskQueue = [];
var defaultGlobalConfig = {};
function getGlobalContext() {
  var _defaultGlobalConfig = defaultGlobalConfig,
    globalPrefixCls = _defaultGlobalConfig.prefixCls,
    globalGetContainer = _defaultGlobalConfig.getContainer,
    rtl = _defaultGlobalConfig.rtl,
    maxCount = _defaultGlobalConfig.maxCount,
    top = _defaultGlobalConfig.top,
    bottom = _defaultGlobalConfig.bottom;
  var mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : (0, _configProvider.globalConfig)().getPrefixCls('notification');
  var mergedContainer = (globalGetContainer === null || globalGetContainer === void 0 ? void 0 : globalGetContainer()) || document.body;
  return {
    prefixCls: mergedPrefixCls,
    container: mergedContainer,
    rtl: rtl,
    maxCount: maxCount,
    top: top,
    bottom: bottom
  };
}
var GlobalHolder = /*#__PURE__*/React.forwardRef(function (_, ref) {
  var _React$useState = React.useState(),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    prefixCls = _React$useState2[0],
    setPrefixCls = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    container = _React$useState4[0],
    setContainer = _React$useState4[1];
  var _React$useState5 = React.useState(),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    maxCount = _React$useState6[0],
    setMaxCount = _React$useState6[1];
  var _React$useState7 = React.useState(),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    rtl = _React$useState8[0],
    setRTL = _React$useState8[1];
  var _React$useState9 = React.useState(),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    top = _React$useState10[0],
    setTop = _React$useState10[1];
  var _React$useState11 = React.useState(),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    bottom = _React$useState12[0],
    setBottom = _React$useState12[1];
  var _useInternalNotificat = (0, _useNotification.useInternalNotification)({
      prefixCls: prefixCls,
      getContainer: function getContainer() {
        return container;
      },
      maxCount: maxCount,
      rtl: rtl,
      top: top,
      bottom: bottom
    }),
    _useInternalNotificat2 = (0, _slicedToArray2["default"])(_useInternalNotificat, 2),
    api = _useInternalNotificat2[0],
    holder = _useInternalNotificat2[1];
  var global = (0, _configProvider.globalConfig)();
  var rootPrefixCls = global.getRootPrefixCls();
  var rootIconPrefixCls = global.getIconPrefixCls();
  var sync = function sync() {
    var _getGlobalContext = getGlobalContext(),
      nextGlobalPrefixCls = _getGlobalContext.prefixCls,
      nextGlobalContainer = _getGlobalContext.container,
      nextGlobalMaxCount = _getGlobalContext.maxCount,
      nextGlobalRTL = _getGlobalContext.rtl,
      nextTop = _getGlobalContext.top,
      nextBottom = _getGlobalContext.bottom;
    setPrefixCls(nextGlobalPrefixCls);
    setContainer(nextGlobalContainer);
    setMaxCount(nextGlobalMaxCount);
    setRTL(nextGlobalRTL);
    setTop(nextTop);
    setBottom(nextBottom);
  };
  React.useEffect(sync, []);
  React.useImperativeHandle(ref, function () {
    var instance = (0, _extends2["default"])({}, api);
    Object.keys(instance).forEach(function (method) {
      instance[method] = function () {
        sync();
        return api[method].apply(api, arguments);
      };
    });
    return {
      instance: instance,
      sync: sync
    };
  });
  return /*#__PURE__*/React.createElement(_configProvider["default"], {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls
  }, holder);
});
function flushNotice() {
  if (!notification) {
    var holderFragment = document.createDocumentFragment();
    var newNotification = {
      fragment: holderFragment
    };
    notification = newNotification;
    // Delay render to avoid sync issue
    act(function () {
      (0, _render.render)( /*#__PURE__*/React.createElement(GlobalHolder, {
        ref: function ref(node) {
          var _ref = node || {},
            instance = _ref.instance,
            sync = _ref.sync;
          Promise.resolve().then(function () {
            if (!newNotification.instance && instance) {
              newNotification.instance = instance;
              newNotification.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!notification.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(function (task) {
    // eslint-disable-next-line default-case
    switch (task.type) {
      case 'open':
        {
          act(function () {
            notification.instance.open((0, _extends2["default"])((0, _extends2["default"])({}, defaultGlobalConfig), task.config));
          });
          break;
        }
      case 'destroy':
        act(function () {
          notification === null || notification === void 0 ? void 0 : notification.instance.destroy(task.key);
        });
        break;
    }
  });
  // Clean up
  taskQueue = [];
}
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
var methods = ['success', 'info', 'warning', 'error'];
function setNotificationGlobalConfig(config) {
  defaultGlobalConfig = (0, _extends2["default"])((0, _extends2["default"])({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(function () {
    var _a;
    (_a = notification === null || notification === void 0 ? void 0 : notification.sync) === null || _a === void 0 ? void 0 : _a.call(notification);
  });
}
function open(config) {
  taskQueue.push({
    type: 'open',
    config: config
  });
  flushNotice();
}
function destroy(key) {
  taskQueue.push({
    type: 'destroy',
    key: key
  });
  flushNotice();
}
var baseStaticMethods = {
  open: open,
  destroy: destroy,
  config: setNotificationGlobalConfig,
  useNotification: _useNotification["default"],
  _InternalPanelDoNotUseOrYouWillBeFired: _PurePanel["default"]
};
var staticMethods = baseStaticMethods;
methods.forEach(function (type) {
  staticMethods[type] = function (config) {
    return open((0, _extends2["default"])((0, _extends2["default"])({}, config), {
      type: type
    }));
  };
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
var noop = function noop() {};
/** @private Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
var actWrapper = noop;
exports.actWrapper = actWrapper;
if (process.env.NODE_ENV === 'test') {
  exports.actWrapper = actWrapper = function actWrapper(wrapper) {
    act = wrapper;
  };
}
var _default = staticMethods;
exports["default"] = _default;
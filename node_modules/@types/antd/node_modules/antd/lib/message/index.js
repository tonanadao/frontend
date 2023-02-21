"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.actWrapper = exports.actDestroy = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _render = require("rc-util/lib/React/render");
var React = _interopRequireWildcard(require("react"));
var _configProvider = _interopRequireWildcard(require("../config-provider"));
var _PurePanel = _interopRequireDefault(require("./PurePanel"));
var _useMessage = _interopRequireWildcard(require("./useMessage"));
var _util = require("./util");
var methods = ['success', 'info', 'warning', 'error', 'loading'];
var message = null;
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
    top = _defaultGlobalConfig.top;
  var mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : (0, _configProvider.globalConfig)().getPrefixCls('message');
  var mergedContainer = (globalGetContainer === null || globalGetContainer === void 0 ? void 0 : globalGetContainer()) || document.body;
  return {
    prefixCls: mergedPrefixCls,
    container: mergedContainer,
    rtl: rtl,
    maxCount: maxCount,
    top: top
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
  var _useInternalMessage = (0, _useMessage.useInternalMessage)({
      prefixCls: prefixCls,
      getContainer: function getContainer() {
        return container;
      },
      maxCount: maxCount,
      rtl: rtl,
      top: top
    }),
    _useInternalMessage2 = (0, _slicedToArray2["default"])(_useInternalMessage, 2),
    api = _useInternalMessage2[0],
    holder = _useInternalMessage2[1];
  var global = (0, _configProvider.globalConfig)();
  var rootPrefixCls = global.getRootPrefixCls();
  var rootIconPrefixCls = global.getIconPrefixCls();
  var sync = function sync() {
    var _getGlobalContext = getGlobalContext(),
      nextGlobalPrefixCls = _getGlobalContext.prefixCls,
      nextGlobalContainer = _getGlobalContext.container,
      nextGlobalMaxCount = _getGlobalContext.maxCount,
      nextGlobalRTL = _getGlobalContext.rtl,
      nextTop = _getGlobalContext.top;
    setPrefixCls(nextGlobalPrefixCls);
    setContainer(nextGlobalContainer);
    setMaxCount(nextGlobalMaxCount);
    setRTL(nextGlobalRTL);
    setTop(nextTop);
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
  if (!message) {
    var holderFragment = document.createDocumentFragment();
    var newMessage = {
      fragment: holderFragment
    };
    message = newMessage;
    // Delay render to avoid sync issue
    act(function () {
      (0, _render.render)( /*#__PURE__*/React.createElement(GlobalHolder, {
        ref: function ref(node) {
          var _ref = node || {},
            instance = _ref.instance,
            sync = _ref.sync;
          // React 18 test env will throw if call immediately in ref
          Promise.resolve().then(function () {
            if (!newMessage.instance && instance) {
              newMessage.instance = instance;
              newMessage.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!message.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(function (task) {
    var type = task.type,
      skipped = task.skipped;
    // Only `skipped` when user call notice but cancel it immediately
    // and instance not ready
    if (!skipped) {
      switch (type) {
        case 'open':
          {
            act(function () {
              var closeFn = message.instance.open((0, _extends2["default"])((0, _extends2["default"])({}, defaultGlobalConfig), task.config));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
            break;
          }
        case 'destroy':
          act(function () {
            message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
          });
          break;
        // Other type open
        default:
          {
            act(function () {
              var _message$instance;
              var closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0, _toConsumableArray2["default"])(task.args));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
          }
      }
    }
  });
  // Clean up
  taskQueue = [];
}
function setMessageGlobalConfig(config) {
  defaultGlobalConfig = (0, _extends2["default"])((0, _extends2["default"])({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(function () {
    var _a;
    (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
  });
}
function open(config) {
  var result = (0, _util.wrapPromiseFn)(function (resolve) {
    var closeFn;
    var task = {
      type: 'open',
      config: config,
      resolve: resolve,
      setCloseFn: function setCloseFn(fn) {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return function () {
      if (closeFn) {
        act(function () {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function typeOpen(type, args) {
  var result = (0, _util.wrapPromiseFn)(function (resolve) {
    var closeFn;
    var task = {
      type: type,
      args: args,
      resolve: resolve,
      setCloseFn: function setCloseFn(fn) {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return function () {
      if (closeFn) {
        act(function () {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
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
  config: setMessageGlobalConfig,
  useMessage: _useMessage["default"],
  _InternalPanelDoNotUseOrYouWillBeFired: _PurePanel["default"]
};
var staticMethods = baseStaticMethods;
methods.forEach(function (type) {
  staticMethods[type] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return typeOpen(type, args);
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
/** @private Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
var actDestroy = noop;
exports.actDestroy = actDestroy;
if (process.env.NODE_ENV === 'test') {
  exports.actDestroy = actDestroy = function actDestroy() {
    message = null;
  };
}
var _default = staticMethods;
exports["default"] = _default;
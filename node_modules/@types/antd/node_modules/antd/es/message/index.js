import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { render } from "rc-util/es/React/render";
import * as React from 'react';
import ConfigProvider, { globalConfig } from '../config-provider';
import PurePanel from './PurePanel';
import useMessage, { useInternalMessage } from './useMessage';
import { wrapPromiseFn } from './util';
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
  var mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : globalConfig().getPrefixCls('message');
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
    _React$useState2 = _slicedToArray(_React$useState, 2),
    prefixCls = _React$useState2[0],
    setPrefixCls = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    container = _React$useState4[0],
    setContainer = _React$useState4[1];
  var _React$useState5 = React.useState(),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    maxCount = _React$useState6[0],
    setMaxCount = _React$useState6[1];
  var _React$useState7 = React.useState(),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    rtl = _React$useState8[0],
    setRTL = _React$useState8[1];
  var _React$useState9 = React.useState(),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    top = _React$useState10[0],
    setTop = _React$useState10[1];
  var _useInternalMessage = useInternalMessage({
      prefixCls: prefixCls,
      getContainer: function getContainer() {
        return container;
      },
      maxCount: maxCount,
      rtl: rtl,
      top: top
    }),
    _useInternalMessage2 = _slicedToArray(_useInternalMessage, 2),
    api = _useInternalMessage2[0],
    holder = _useInternalMessage2[1];
  var global = globalConfig();
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
    var instance = _extends({}, api);
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
  return /*#__PURE__*/React.createElement(ConfigProvider, {
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
      render( /*#__PURE__*/React.createElement(GlobalHolder, {
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
              var closeFn = message.instance.open(_extends(_extends({}, defaultGlobalConfig), task.config));
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
              var closeFn = (_message$instance = message.instance)[type].apply(_message$instance, _toConsumableArray(task.args));
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
  defaultGlobalConfig = _extends(_extends({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(function () {
    var _a;
    (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
  });
}
function open(config) {
  var result = wrapPromiseFn(function (resolve) {
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
  var result = wrapPromiseFn(function (resolve) {
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
  useMessage: useMessage,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
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
export var actWrapper = noop;
if (process.env.NODE_ENV === 'test') {
  actWrapper = function actWrapper(wrapper) {
    act = wrapper;
  };
}
/** @private Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
export var actDestroy = noop;
if (process.env.NODE_ENV === 'test') {
  actDestroy = function actDestroy() {
    message = null;
  };
}
export default staticMethods;
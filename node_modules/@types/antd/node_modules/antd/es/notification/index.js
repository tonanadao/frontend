import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { render } from "rc-util/es/React/render";
import * as React from 'react';
import ConfigProvider, { globalConfig } from '../config-provider';
import PurePanel from './PurePanel';
import useNotification, { useInternalNotification } from './useNotification';
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
  var mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : globalConfig().getPrefixCls('notification');
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
  var _React$useState11 = React.useState(),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    bottom = _React$useState12[0],
    setBottom = _React$useState12[1];
  var _useInternalNotificat = useInternalNotification({
      prefixCls: prefixCls,
      getContainer: function getContainer() {
        return container;
      },
      maxCount: maxCount,
      rtl: rtl,
      top: top,
      bottom: bottom
    }),
    _useInternalNotificat2 = _slicedToArray(_useInternalNotificat, 2),
    api = _useInternalNotificat2[0],
    holder = _useInternalNotificat2[1];
  var global = globalConfig();
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
  if (!notification) {
    var holderFragment = document.createDocumentFragment();
    var newNotification = {
      fragment: holderFragment
    };
    notification = newNotification;
    // Delay render to avoid sync issue
    act(function () {
      render( /*#__PURE__*/React.createElement(GlobalHolder, {
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
            notification.instance.open(_extends(_extends({}, defaultGlobalConfig), task.config));
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
  defaultGlobalConfig = _extends(_extends({}, defaultGlobalConfig), config);
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
  useNotification: useNotification,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
};
var staticMethods = baseStaticMethods;
methods.forEach(function (type) {
  staticMethods[type] = function (config) {
    return open(_extends(_extends({}, config), {
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
export var actWrapper = noop;
if (process.env.NODE_ENV === 'test') {
  actWrapper = function actWrapper(wrapper) {
    act = wrapper;
  };
}
export default staticMethods;
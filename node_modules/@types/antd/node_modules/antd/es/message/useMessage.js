import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import { useNotification as useRcNotification } from 'rc-notification';
import classNames from 'classnames';
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import { getMotion, wrapPromiseFn } from './util';
import warning from '../_util/warning';
import { PureContent } from './PurePanel';
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
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = staticPrefixCls || getPrefixCls('message');
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
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
    return classNames(hashId, rtl ? prefixCls + "-rtl" : '');
  };
  // ============================== Motion ===============================
  var getNotificationMotion = function getNotificationMotion() {
    return getMotion(prefixCls, transitionName);
  };
  // ============================ Close Icon =============================
  var mergedCloseIcon = /*#__PURE__*/React.createElement("span", {
    className: prefixCls + "-close-x"
  }, /*#__PURE__*/React.createElement(CloseOutlined, {
    className: prefixCls + "-close-icon"
  }));
  // ============================== Origin ===============================
  var _useRcNotification = useRcNotification({
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
    _useRcNotification2 = _slicedToArray(_useRcNotification, 2),
    api = _useRcNotification2[0],
    holder = _useRcNotification2[1];
  // ================================ Ref ================================
  React.useImperativeHandle(ref, function () {
    return _extends(_extends({}, api), {
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
export function useInternalMessage(notificationConfig) {
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
        process.env.NODE_ENV !== "production" ? warning(false, 'Message', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : void 0;
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
      return wrapPromiseFn(function (resolve) {
        originOpen(_extends(_extends({}, restConfig), {
          key: mergedKey,
          content: /*#__PURE__*/React.createElement(PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content),
          placement: 'top',
          className: classNames(type && noticePrefixCls + "-" + type, hashId, className),
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
        if (jointContent && _typeof(jointContent) === 'object' && 'content' in jointContent) {
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
        var mergedConfig = _extends(_extends({
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
  return [wrapAPI, /*#__PURE__*/React.createElement(Holder, _extends({
    key: "holder"
  }, notificationConfig, {
    ref: holderRef
  }))];
}
export default function useMessage(notificationConfig) {
  return useInternalMessage(notificationConfig);
}
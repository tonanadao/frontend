import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import { ConfigContext } from '../config-provider';
import { getPlacementStyle, getMotion } from './util';
import warning from '../_util/warning';
import useStyle from './style';
import { getCloseIcon, PureContent } from './PurePanel';
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
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = staticPrefixCls || getPrefixCls('notification');
  // =============================== Style ===============================
  var getStyle = function getStyle(placement) {
    return getPlacementStyle(placement, top !== null && top !== void 0 ? top : DEFAULT_OFFSET, bottom !== null && bottom !== void 0 ? bottom : DEFAULT_OFFSET);
  };
  // Style
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    hashId = _useStyle2[1];
  var getClassName = function getClassName() {
    return classNames(hashId, _defineProperty({}, prefixCls + "-rtl", rtl));
  };
  // ============================== Motion ===============================
  var getNotificationMotion = function getNotificationMotion() {
    return getMotion(prefixCls);
  };
  // ============================== Origin ===============================
  var _useRcNotification = useRcNotification({
      prefixCls: prefixCls,
      style: getStyle,
      className: getClassName,
      motion: getNotificationMotion,
      closable: true,
      closeIcon: getCloseIcon(prefixCls),
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
export function useInternalNotification(notificationConfig) {
  var holderRef = React.useRef(null);
  // ================================ API ================================
  var wrapAPI = React.useMemo(function () {
    // Wrap with notification content
    // >>> Open
    var open = function open(config) {
      if (!holderRef.current) {
        process.env.NODE_ENV !== "production" ? warning(false, 'Notification', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.') : void 0;
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
      return originOpen(_extends(_extends({}, restConfig), {
        content: /*#__PURE__*/React.createElement(PureContent, {
          prefixCls: noticePrefixCls,
          icon: icon,
          type: type,
          message: message,
          description: description,
          btn: btn
        }),
        placement: placement,
        className: classNames(type && noticePrefixCls + "-" + type, hashId, className)
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
        return open(_extends(_extends({}, config), {
          type: type
        }));
      };
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
export default function useNotification(notificationConfig) {
  return useInternalNotification(notificationConfig);
}
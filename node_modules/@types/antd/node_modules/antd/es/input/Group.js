import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import classNames from 'classnames';
import * as React from 'react';
import { useContext, useMemo } from 'react';
import { ConfigContext } from '../config-provider';
import { FormItemInputContext } from '../form/context';
import useStyle from './style';
var Group = function Group(props) {
  var _classNames;
  var _useContext = useContext(ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  var prefixCls = getPrefixCls('input-group', customizePrefixCls);
  var inputPrefixCls = getPrefixCls('input');
  var _useStyle = useStyle(inputPrefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-lg", props.size === 'large'), _defineProperty(_classNames, prefixCls + "-sm", props.size === 'small'), _defineProperty(_classNames, prefixCls + "-compact", props.compact), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), hashId, className);
  var formItemContext = useContext(FormItemInputContext);
  var groupFormItemContext = useMemo(function () {
    return _extends(_extends({}, formItemContext), {
      isFormItemInput: false
    });
  }, [formItemContext]);
  return wrapSSR( /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, /*#__PURE__*/React.createElement(FormItemInputContext.Provider, {
    value: groupFormItemContext
  }, props.children)));
};
export default Group;
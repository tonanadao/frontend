import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import DotChartOutlined from "@ant-design/icons/es/icons/DotChartOutlined";
import classNames from 'classnames';
import * as React from 'react';
import useStyle from './style';
import { ConfigContext } from '../config-provider';
var SkeletonNode = function SkeletonNode(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active,
    children = props.children;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var cls = classNames(prefixCls, prefixCls + "-element", _defineProperty({}, prefixCls + "-active", active), hashId, className);
  var content = children !== null && children !== void 0 ? children : /*#__PURE__*/React.createElement(DotChartOutlined, null);
  return wrapSSR( /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames(prefixCls + "-image", className),
    style: style
  }, content)));
};
export default SkeletonNode;
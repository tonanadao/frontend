import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
/* eslint-disable import/prefer-default-export */
import classNames from 'classnames';
import { PresetColorTypes } from '../_util/colors';
var PresetColorRegex = new RegExp("^(" + PresetColorTypes.join('|') + ")(-inverse)?$");
export function parseColor(prefixCls, color) {
  var className = classNames(_defineProperty({}, prefixCls + "-" + color, color && PresetColorRegex.test(color)));
  var overlayStyle = {};
  var arrowStyle = {};
  if (color && !PresetColorRegex.test(color)) {
    overlayStyle.background = color;
    // @ts-ignore
    arrowStyle['--antd-arrow-background-color'] = color;
  }
  return {
    className: className,
    overlayStyle: overlayStyle,
    arrowStyle: arrowStyle
  };
}
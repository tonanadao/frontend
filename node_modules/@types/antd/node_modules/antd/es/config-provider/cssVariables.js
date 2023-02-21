/* eslint-disable import/prefer-default-export, prefer-destructuring */
import { generate } from '@ant-design/colors';
import { TinyColor } from '@ctrl/tinycolor';
import canUseDom from "rc-util/es/Dom/canUseDom";
import { updateCSS } from "rc-util/es/Dom/dynamicCSS";
import warning from '../_util/warning';
var dynamicStyleMark = "-ant-" + Date.now() + "-" + Math.random();
export function getStyle(globalPrefixCls, theme) {
  var variables = {};
  var formatColor = function formatColor(color, updater) {
    var clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  var fillColor = function fillColor(colorVal, type) {
    var baseColor = new TinyColor(colorVal);
    var colorPalettes = generate(baseColor.toRgbString());
    variables[type + "-color"] = formatColor(baseColor);
    variables[type + "-color-disabled"] = colorPalettes[1];
    variables[type + "-color-hover"] = colorPalettes[4];
    variables[type + "-color-active"] = colorPalettes[6];
    variables[type + "-color-outline"] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[type + "-color-deprecated-bg"] = colorPalettes[0];
    variables[type + "-color-deprecated-border"] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    var primaryColor = new TinyColor(theme.primaryColor);
    var primaryColors = generate(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach(function (color, index) {
      variables["primary-" + (index + 1)] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, function (c) {
      return c.lighten(35);
    });
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, function (c) {
      return c.lighten(20);
    });
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, function (c) {
      return c.tint(20);
    });
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, function (c) {
      return c.tint(50);
    });
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, function (c) {
      return c.setAlpha(c.getAlpha() * 0.12);
    });
    var primaryActiveColor = new TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, function (c) {
      return c.setAlpha(c.getAlpha() * 0.3);
    });
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, function (c) {
      return c.darken(2);
    });
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  var cssList = Object.keys(variables).map(function (key) {
    return "--" + globalPrefixCls + "-" + key + ": " + variables[key] + ";";
  });
  return ("\n  :root {\n    " + cssList.join('\n') + "\n  }\n  ").trim();
}
export function registerTheme(globalPrefixCls, theme) {
  var style = getStyle(globalPrefixCls, theme);
  if (canUseDom()) {
    updateCSS(style, dynamicStyleMark + "-dynamic-theme");
  } else {
    process.env.NODE_ENV !== "production" ? warning(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.') : void 0;
  }
}
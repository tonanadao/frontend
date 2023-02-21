"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useTheme;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));
var _shallowequal = _interopRequireDefault(require("shallowequal"));
var _internal = require("../../theme/internal");
function useTheme(theme, parentTheme) {
  var themeConfig = theme || {};
  var parentThemeConfig = themeConfig.inherit === false || !parentTheme ? _internal.defaultConfig : parentTheme;
  var mergedTheme = (0, _useMemo["default"])(function () {
    if (!theme) {
      return parentTheme;
    }
    // Override
    var mergedComponents = (0, _extends2["default"])({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(function (componentName) {
      mergedComponents[componentName] = (0, _extends2["default"])((0, _extends2["default"])({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    // Base token
    return (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, parentThemeConfig), themeConfig), {
      token: (0, _extends2["default"])((0, _extends2["default"])({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents
    });
  }, [themeConfig, parentThemeConfig], function (prev, next) {
    return prev.some(function (prevTheme, index) {
      var nextTheme = next[index];
      return !(0, _shallowequal["default"])(prevTheme, nextTheme);
    });
  });
  return mergedTheme;
}
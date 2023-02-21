import _extends from "@babel/runtime/helpers/esm/extends";
import useMemo from "rc-util/es/hooks/useMemo";
import shallowEqual from 'shallowequal';
import { defaultConfig } from '../../theme/internal';
export default function useTheme(theme, parentTheme) {
  var themeConfig = theme || {};
  var parentThemeConfig = themeConfig.inherit === false || !parentTheme ? defaultConfig : parentTheme;
  var mergedTheme = useMemo(function () {
    if (!theme) {
      return parentTheme;
    }
    // Override
    var mergedComponents = _extends({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(function (componentName) {
      mergedComponents[componentName] = _extends(_extends({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    // Base token
    return _extends(_extends(_extends({}, parentThemeConfig), themeConfig), {
      token: _extends(_extends({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents
    });
  }, [themeConfig, parentThemeConfig], function (prev, next) {
    return prev.some(function (prevTheme, index) {
      var nextTheme = next[index];
      return !shallowEqual(prevTheme, nextTheme);
    });
  });
  return mergedTheme;
}
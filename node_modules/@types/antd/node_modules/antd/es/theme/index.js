import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
/* eslint-disable import/prefer-default-export */
import { defaultConfig, useToken as useInternalToken } from './internal';
import defaultAlgorithm from './themes/default';
import darkAlgorithm from './themes/dark';
import compactAlgorithm from './themes/compact';
// ZombieJ: We export as object to user but array in internal.
// This is used to minimize the bundle size for antd package but safe to refactor as object also.
// Please do not export internal `useToken` directly to avoid something export unexpected.
/** Get current context Design Token. Will be different if you are using nest theme config. */
function useToken() {
  var _useInternalToken = useInternalToken(),
    _useInternalToken2 = _slicedToArray(_useInternalToken, 3),
    theme = _useInternalToken2[0],
    token = _useInternalToken2[1],
    hashId = _useInternalToken2[2];
  return {
    theme: theme,
    token: token,
    hashId: hashId
  };
}
export default {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: defaultConfig,
  /** Default seedToken */
  defaultSeed: defaultConfig.token,
  useToken: useToken,
  defaultAlgorithm: defaultAlgorithm,
  darkAlgorithm: darkAlgorithm,
  compactAlgorithm: compactAlgorithm
};
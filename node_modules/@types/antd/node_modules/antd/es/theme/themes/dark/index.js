import _extends from "@babel/runtime/helpers/esm/extends";
import { generate } from '@ant-design/colors';
import { defaultPresetColors } from '../seed';
import genColorMapToken from '../shared/genColorMapToken';
import { generateColorPalettes, generateNeutralColorPalettes } from './colors';
import defaultAlgorithm from '../default';
var derivative = function derivative(token, mapToken) {
  var colorPalettes = Object.keys(defaultPresetColors).map(function (colorKey) {
    var colors = generate(token[colorKey], {
      theme: 'dark'
    });
    return new Array(10).fill(1).reduce(function (prev, _, i) {
      prev[colorKey + "-" + (i + 1)] = colors[i];
      return prev;
    }, {});
  }).reduce(function (prev, cur) {
    prev = _extends(_extends({}, prev), cur);
    return prev;
  }, {});
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : defaultAlgorithm(token);
  return _extends(_extends(_extends({}, mergedMapToken), colorPalettes), genColorMapToken(token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  }));
};
export default derivative;
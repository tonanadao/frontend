import { TinyColor } from '@ctrl/tinycolor';
export var getAlphaColor = function getAlphaColor(baseColor, alpha) {
  return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
};
export var getSolidColor = function getSolidColor(baseColor, brightness) {
  var instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
var genControlHeight = function genControlHeight(token) {
  var controlHeight = token.controlHeight;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
export default genControlHeight;
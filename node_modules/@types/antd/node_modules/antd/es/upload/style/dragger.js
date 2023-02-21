import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genDraggerStyle = function genDraggerStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    iconCls = token.iconCls;
  return _defineProperty({}, componentCls + "-wrapper", _defineProperty({}, componentCls + "-drag", (_ref3 = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    background: token.colorFillAlter,
    border: token.lineWidth + "px dashed " + token.colorBorder,
    borderRadius: token.borderRadiusLG,
    cursor: 'pointer',
    transition: "border-color " + token.motionDurationSlow
  }, _defineProperty(_ref3, componentCls, {
    padding: token.padding + "px 0"
  }), _defineProperty(_ref3, componentCls + "-btn", {
    display: 'table',
    width: '100%',
    height: '100%',
    outline: 'none'
  }), _defineProperty(_ref3, componentCls + "-drag-container", {
    display: 'table-cell',
    verticalAlign: 'middle'
  }), _defineProperty(_ref3, "&:not(" + componentCls + "-disabled):hover", {
    borderColor: token.colorPrimaryHover
  }), _defineProperty(_ref3, "p" + componentCls + "-drag-icon", _defineProperty({
    marginBottom: token.margin
  }, iconCls, {
    color: token.colorPrimary,
    fontSize: token.uploadThumbnailSize
  })), _defineProperty(_ref3, "p" + componentCls + "-text", {
    margin: "0 0 " + token.marginXXS + "px",
    color: token.colorTextHeading,
    fontSize: token.fontSizeLG
  }), _defineProperty(_ref3, "p" + componentCls + "-hint", {
    color: token.colorTextDescription,
    fontSize: token.fontSize
  }), _defineProperty(_ref3, "&" + componentCls + "-disabled", _defineProperty({
    cursor: 'not-allowed'
  }, "p" + componentCls + "-drag-icon " + iconCls + ",\n            p" + componentCls + "-text,\n            p" + componentCls + "-hint\n          ", {
    color: token.colorTextDisabled
  })), _ref3)));
};
export default genDraggerStyle;
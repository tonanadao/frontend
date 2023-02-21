import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var genSizeStyle = function genSizeStyle(token) {
  var componentCls = token.componentCls;
  var getSizeStyle = function getSizeStyle(size, paddingVertical, paddingHorizontal, fontSize) {
    var _ref2;
    return _defineProperty({}, "" + componentCls + componentCls + "-" + size, (_ref2 = {
      fontSize: fontSize
    }, _defineProperty(_ref2, "\n        " + componentCls + "-title,\n        " + componentCls + "-footer,\n        " + componentCls + "-thead > tr > th,\n        " + componentCls + "-tbody > tr > td,\n        tfoot > tr > th,\n        tfoot > tr > td\n      ", {
      padding: paddingVertical + "px " + paddingHorizontal + "px"
    }), _defineProperty(_ref2, componentCls + "-filter-trigger", {
      marginInlineEnd: "-" + paddingHorizontal / 2 + "px"
    }), _defineProperty(_ref2, componentCls + "-expanded-row-fixed", {
      margin: "-" + paddingVertical + "px -" + paddingHorizontal + "px"
    }), _defineProperty(_ref2, componentCls + "-tbody", _defineProperty({}, componentCls + "-wrapper:only-child " + componentCls, {
      marginBlock: "-" + paddingVertical + "px",
      marginInline: token.tableExpandColumnWidth - paddingHorizontal + "px -" + paddingHorizontal + "px"
    })), _defineProperty(_ref2, componentCls + "-selection-column", {
      paddingInlineStart: paddingHorizontal / 4 + "px"
    }), _ref2));
  };
  return _defineProperty({}, componentCls + "-wrapper", _extends(_extends({}, getSizeStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle, token.tableFontSizeMiddle)), getSizeStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall, token.tableFontSizeSmall)));
};
export default genSizeStyle;
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent, textEllipsis } from '../../style';
var genBorderedStyle = function genBorderedStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    descriptionsSmallPadding = token.descriptionsSmallPadding,
    descriptionsDefaultPadding = token.descriptionsDefaultPadding,
    descriptionsMiddlePadding = token.descriptionsMiddlePadding,
    descriptionsBg = token.descriptionsBg;
  return _defineProperty({}, "&" + componentCls + "-bordered", (_ref3 = {}, _defineProperty(_ref3, componentCls + "-view", {
    border: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    '> table': {
      tableLayout: 'auto',
      borderCollapse: 'collapse'
    }
  }), _defineProperty(_ref3, componentCls + "-item-label, " + componentCls + "-item-content", {
    padding: descriptionsDefaultPadding,
    borderInlineEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    '&:last-child': {
      borderInlineEnd: 'none'
    }
  }), _defineProperty(_ref3, componentCls + "-item-label", {
    backgroundColor: descriptionsBg,
    '&::after': {
      display: 'none'
    }
  }), _defineProperty(_ref3, componentCls + "-row", {
    borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    '&:last-child': {
      borderBottom: 'none'
    }
  }), _defineProperty(_ref3, "&" + componentCls + "-middle", _defineProperty({}, componentCls + "-item-label, " + componentCls + "-item-content", {
    padding: descriptionsMiddlePadding
  })), _defineProperty(_ref3, "&" + componentCls + "-small", _defineProperty({}, componentCls + "-item-label, " + componentCls + "-item-content", {
    padding: descriptionsSmallPadding
  })), _ref3));
};
var genDescriptionStyles = function genDescriptionStyles(token) {
  var _container, _extends2;
  var componentCls = token.componentCls,
    descriptionsExtraColor = token.descriptionsExtraColor,
    descriptionItemPaddingBottom = token.descriptionItemPaddingBottom,
    descriptionsItemLabelColonMarginRight = token.descriptionsItemLabelColonMarginRight,
    descriptionsItemLabelColonMarginLeft = token.descriptionsItemLabelColonMarginLeft,
    descriptionsTitleMarginBottom = token.descriptionsTitleMarginBottom;
  return _defineProperty({}, componentCls, _extends(_extends(_extends({}, resetComponent(token)), genBorderedStyle(token)), (_extends2 = {}, _defineProperty(_extends2, "&-rtl", {
    direction: 'rtl'
  }), _defineProperty(_extends2, componentCls + "-header", {
    display: 'flex',
    alignItems: 'center',
    marginBottom: descriptionsTitleMarginBottom
  }), _defineProperty(_extends2, componentCls + "-title", _extends(_extends({}, textEllipsis), {
    flex: 'auto',
    color: token.colorText,
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeLG,
    lineHeight: token.lineHeightLG
  })), _defineProperty(_extends2, componentCls + "-extra", {
    marginInlineStart: 'auto',
    color: descriptionsExtraColor,
    fontSize: token.fontSize
  }), _defineProperty(_extends2, componentCls + "-view", {
    width: '100%',
    borderRadius: token.borderRadiusLG,
    table: {
      width: '100%',
      tableLayout: 'fixed'
    }
  }), _defineProperty(_extends2, componentCls + "-row", {
    '> th, > td': {
      paddingBottom: descriptionItemPaddingBottom
    },
    '&:last-child': {
      borderBottom: 'none'
    }
  }), _defineProperty(_extends2, componentCls + "-item-label", _defineProperty({
    color: token.colorText,
    fontWeight: 'normal',
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    textAlign: "start",
    '&::after': {
      content: '":"',
      position: 'relative',
      top: -0.5,
      marginInline: descriptionsItemLabelColonMarginLeft + "px " + descriptionsItemLabelColonMarginRight + "px"
    }
  }, "&" + componentCls + "-item-no-colon::after", {
    content: '""'
  })), _defineProperty(_extends2, componentCls + "-item-no-label", {
    '&::after': {
      margin: 0,
      content: '""'
    }
  }), _defineProperty(_extends2, componentCls + "-item-content", {
    display: 'table-cell',
    flex: 1,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  }), _defineProperty(_extends2, componentCls + "-item", {
    paddingBottom: 0,
    verticalAlign: 'top',
    '&-container': (_container = {
      display: 'flex'
    }, _defineProperty(_container, componentCls + "-item-label", {
      display: 'inline-flex',
      alignItems: 'baseline'
    }), _defineProperty(_container, componentCls + "-item-content", {
      display: 'inline-flex',
      alignItems: 'baseline'
    }), _container)
  }), _defineProperty(_extends2, '&-middle', _defineProperty({}, componentCls + "-row", {
    '> th, > td': {
      paddingBottom: token.paddingSM
    }
  })), _defineProperty(_extends2, '&-small', _defineProperty({}, componentCls + "-row", {
    '> th, > td': {
      paddingBottom: token.paddingXS
    }
  })), _extends2)));
};
// ============================== Export ==============================
export default genComponentStyleHook('Descriptions', function (token) {
  var descriptionsBg = token.colorFillAlter;
  var descriptionsTitleMarginBottom = token.fontSizeSM * token.lineHeightSM;
  var descriptionsExtraColor = token.colorText;
  var descriptionsSmallPadding = token.paddingXS + "px " + token.padding + "px";
  var descriptionsDefaultPadding = token.padding + "px " + token.paddingLG + "px";
  var descriptionsMiddlePadding = token.paddingSM + "px " + token.paddingLG + "px";
  var descriptionItemPaddingBottom = token.padding;
  var descriptionsItemLabelColonMarginRight = token.marginXS;
  var descriptionsItemLabelColonMarginLeft = token.marginXXS / 2;
  var descriptionToken = mergeToken(token, {
    descriptionsBg: descriptionsBg,
    descriptionsTitleMarginBottom: descriptionsTitleMarginBottom,
    descriptionsExtraColor: descriptionsExtraColor,
    descriptionItemPaddingBottom: descriptionItemPaddingBottom,
    descriptionsSmallPadding: descriptionsSmallPadding,
    descriptionsDefaultPadding: descriptionsDefaultPadding,
    descriptionsMiddlePadding: descriptionsMiddlePadding,
    descriptionsItemLabelColonMarginRight: descriptionsItemLabelColonMarginRight,
    descriptionsItemLabelColonMarginLeft: descriptionsItemLabelColonMarginLeft
  });
  return [genDescriptionStyles(descriptionToken)];
});
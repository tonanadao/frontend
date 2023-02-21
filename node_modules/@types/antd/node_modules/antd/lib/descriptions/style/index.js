"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _internal = require("../../theme/internal");
var _style = require("../../style");
var genBorderedStyle = function genBorderedStyle(token) {
  var _ref3;
  var componentCls = token.componentCls,
    descriptionsSmallPadding = token.descriptionsSmallPadding,
    descriptionsDefaultPadding = token.descriptionsDefaultPadding,
    descriptionsMiddlePadding = token.descriptionsMiddlePadding,
    descriptionsBg = token.descriptionsBg;
  return (0, _defineProperty2["default"])({}, "&" + componentCls + "-bordered", (_ref3 = {}, (0, _defineProperty2["default"])(_ref3, componentCls + "-view", {
    border: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    '> table': {
      tableLayout: 'auto',
      borderCollapse: 'collapse'
    }
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-item-label, " + componentCls + "-item-content", {
    padding: descriptionsDefaultPadding,
    borderInlineEnd: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    '&:last-child': {
      borderInlineEnd: 'none'
    }
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-item-label", {
    backgroundColor: descriptionsBg,
    '&::after': {
      display: 'none'
    }
  }), (0, _defineProperty2["default"])(_ref3, componentCls + "-row", {
    borderBottom: token.lineWidth + "px " + token.lineType + " " + token.colorSplit,
    '&:last-child': {
      borderBottom: 'none'
    }
  }), (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-middle", (0, _defineProperty2["default"])({}, componentCls + "-item-label, " + componentCls + "-item-content", {
    padding: descriptionsMiddlePadding
  })), (0, _defineProperty2["default"])(_ref3, "&" + componentCls + "-small", (0, _defineProperty2["default"])({}, componentCls + "-item-label, " + componentCls + "-item-content", {
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
  return (0, _defineProperty2["default"])({}, componentCls, (0, _extends3["default"])((0, _extends3["default"])((0, _extends3["default"])({}, (0, _style.resetComponent)(token)), genBorderedStyle(token)), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, "&-rtl", {
    direction: 'rtl'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-header", {
    display: 'flex',
    alignItems: 'center',
    marginBottom: descriptionsTitleMarginBottom
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-title", (0, _extends3["default"])((0, _extends3["default"])({}, _style.textEllipsis), {
    flex: 'auto',
    color: token.colorText,
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeLG,
    lineHeight: token.lineHeightLG
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-extra", {
    marginInlineStart: 'auto',
    color: descriptionsExtraColor,
    fontSize: token.fontSize
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-view", {
    width: '100%',
    borderRadius: token.borderRadiusLG,
    table: {
      width: '100%',
      tableLayout: 'fixed'
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-row", {
    '> th, > td': {
      paddingBottom: descriptionItemPaddingBottom
    },
    '&:last-child': {
      borderBottom: 'none'
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item-label", (0, _defineProperty2["default"])({
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
  })), (0, _defineProperty2["default"])(_extends2, componentCls + "-item-no-label", {
    '&::after': {
      margin: 0,
      content: '""'
    }
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item-content", {
    display: 'table-cell',
    flex: 1,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    wordBreak: 'break-word',
    overflowWrap: 'break-word'
  }), (0, _defineProperty2["default"])(_extends2, componentCls + "-item", {
    paddingBottom: 0,
    verticalAlign: 'top',
    '&-container': (_container = {
      display: 'flex'
    }, (0, _defineProperty2["default"])(_container, componentCls + "-item-label", {
      display: 'inline-flex',
      alignItems: 'baseline'
    }), (0, _defineProperty2["default"])(_container, componentCls + "-item-content", {
      display: 'inline-flex',
      alignItems: 'baseline'
    }), _container)
  }), (0, _defineProperty2["default"])(_extends2, '&-middle', (0, _defineProperty2["default"])({}, componentCls + "-row", {
    '> th, > td': {
      paddingBottom: token.paddingSM
    }
  })), (0, _defineProperty2["default"])(_extends2, '&-small', (0, _defineProperty2["default"])({}, componentCls + "-row", {
    '> th, > td': {
      paddingBottom: token.paddingXS
    }
  })), _extends2)));
};
// ============================== Export ==============================
var _default = (0, _internal.genComponentStyleHook)('Descriptions', function (token) {
  var descriptionsBg = token.colorFillAlter;
  var descriptionsTitleMarginBottom = token.fontSizeSM * token.lineHeightSM;
  var descriptionsExtraColor = token.colorText;
  var descriptionsSmallPadding = token.paddingXS + "px " + token.padding + "px";
  var descriptionsDefaultPadding = token.padding + "px " + token.paddingLG + "px";
  var descriptionsMiddlePadding = token.paddingSM + "px " + token.paddingLG + "px";
  var descriptionItemPaddingBottom = token.padding;
  var descriptionsItemLabelColonMarginRight = token.marginXS;
  var descriptionsItemLabelColonMarginLeft = token.marginXXS / 2;
  var descriptionToken = (0, _internal.mergeToken)(token, {
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
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_VERTICAL_CONTENT_RADIUS = void 0;
exports["default"] = getArrowStyle;
exports.getArrowOffset = getArrowOffset;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _roundedArrow = require("./roundedArrow");
function connectArrowCls(classList) {
  var showArrowCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return classList.map(function (cls) {
    return "" + showArrowCls + cls;
  }).join(',');
}
var MAX_VERTICAL_CONTENT_RADIUS = 8;
exports.MAX_VERTICAL_CONTENT_RADIUS = MAX_VERTICAL_CONTENT_RADIUS;
function getArrowOffset(options) {
  var maxVerticalContentRadius = MAX_VERTICAL_CONTENT_RADIUS;
  var sizePopupArrow = options.sizePopupArrow,
    contentRadius = options.contentRadius,
    borderRadiusOuter = options.borderRadiusOuter,
    limitVerticalRadius = options.limitVerticalRadius;
  var arrowInnerOffset = sizePopupArrow / 2 - Math.ceil(borderRadiusOuter * (Math.sqrt(2) - 1));
  var dropdownArrowOffset = (contentRadius > 12 ? contentRadius + 2 : 12) - arrowInnerOffset;
  var dropdownArrowOffsetVertical = limitVerticalRadius ? maxVerticalContentRadius - arrowInnerOffset : dropdownArrowOffset;
  return {
    dropdownArrowOffset: dropdownArrowOffset,
    dropdownArrowOffsetVertical: dropdownArrowOffsetVertical
  };
}
function getArrowStyle(token, options) {
  var _componentCls;
  var componentCls = token.componentCls,
    sizePopupArrow = token.sizePopupArrow,
    marginXXS = token.marginXXS,
    borderRadiusXS = token.borderRadiusXS,
    borderRadiusOuter = token.borderRadiusOuter,
    boxShadowPopoverArrow = token.boxShadowPopoverArrow;
  var colorBg = options.colorBg,
    showArrowCls = options.showArrowCls,
    _options$contentRadiu = options.contentRadius,
    contentRadius = _options$contentRadiu === void 0 ? token.borderRadiusLG : _options$contentRadiu,
    limitVerticalRadius = options.limitVerticalRadius;
  var _getArrowOffset = getArrowOffset({
      sizePopupArrow: sizePopupArrow,
      contentRadius: contentRadius,
      borderRadiusOuter: borderRadiusOuter,
      limitVerticalRadius: limitVerticalRadius
    }),
    dropdownArrowOffsetVertical = _getArrowOffset.dropdownArrowOffsetVertical,
    dropdownArrowOffset = _getArrowOffset.dropdownArrowOffset;
  var dropdownArrowDistance = sizePopupArrow / 2 + marginXXS;
  return (0, _defineProperty2["default"])({}, componentCls, (_componentCls = {}, (0, _defineProperty2["default"])(_componentCls, componentCls + "-arrow", [(0, _extends2["default"])((0, _extends2["default"])({
    position: 'absolute',
    zIndex: 1,
    display: 'block'
  }, (0, _roundedArrow.roundedArrow)(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBg, boxShadowPopoverArrow)), {
    '&:before': {
      background: colorBg
    }
  })]), (0, _defineProperty2["default"])(_componentCls, ["&-placement-top " + componentCls + "-arrow", "&-placement-topLeft " + componentCls + "-arrow", "&-placement-topRight " + componentCls + "-arrow"].join(','), {
    bottom: 0,
    transform: 'translateY(100%) rotate(180deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-top " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: '50%'
    },
    transform: 'translateX(-50%) translateY(100%) rotate(180deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-topLeft " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-topRight " + componentCls + "-arrow", {
    right: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_componentCls, ["&-placement-bottom " + componentCls + "-arrow", "&-placement-bottomLeft " + componentCls + "-arrow", "&-placement-bottomRight " + componentCls + "-arrow"].join(','), {
    top: 0,
    transform: "translateY(-100%)"
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-bottom " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: '50%'
    },
    transform: "translateX(-50%) translateY(-100%)"
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-bottomLeft " + componentCls + "-arrow", {
    left: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-bottomRight " + componentCls + "-arrow", {
    right: {
      _skip_check_: true,
      value: dropdownArrowOffset
    }
  }), (0, _defineProperty2["default"])(_componentCls, ["&-placement-left " + componentCls + "-arrow", "&-placement-leftTop " + componentCls + "-arrow", "&-placement-leftBottom " + componentCls + "-arrow"].join(','), {
    right: {
      _skip_check_: true,
      value: 0
    },
    transform: 'translateX(100%) rotate(90deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-left " + componentCls + "-arrow", {
    top: {
      _skip_check_: true,
      value: '50%'
    },
    transform: 'translateY(-50%) translateX(100%) rotate(90deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-leftTop " + componentCls + "-arrow", {
    top: dropdownArrowOffsetVertical
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-leftBottom " + componentCls + "-arrow", {
    bottom: dropdownArrowOffsetVertical
  }), (0, _defineProperty2["default"])(_componentCls, ["&-placement-right " + componentCls + "-arrow", "&-placement-rightTop " + componentCls + "-arrow", "&-placement-rightBottom " + componentCls + "-arrow"].join(','), {
    left: {
      _skip_check_: true,
      value: 0
    },
    transform: 'translateX(-100%) rotate(-90deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-right " + componentCls + "-arrow", {
    top: {
      _skip_check_: true,
      value: '50%'
    },
    transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)'
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-rightTop " + componentCls + "-arrow", {
    top: dropdownArrowOffsetVertical
  }), (0, _defineProperty2["default"])(_componentCls, "&-placement-rightBottom " + componentCls + "-arrow", {
    bottom: dropdownArrowOffsetVertical
  }), (0, _defineProperty2["default"])(_componentCls, connectArrowCls(["&-placement-topLeft", "&-placement-top", "&-placement-topRight"], showArrowCls), {
    paddingBottom: dropdownArrowDistance
  }), (0, _defineProperty2["default"])(_componentCls, connectArrowCls(["&-placement-bottomLeft", "&-placement-bottom", "&-placement-bottomRight"], showArrowCls), {
    paddingTop: dropdownArrowDistance
  }), (0, _defineProperty2["default"])(_componentCls, connectArrowCls(["&-placement-leftTop", "&-placement-left", "&-placement-leftBottom"], showArrowCls), {
    paddingRight: {
      _skip_check_: true,
      value: dropdownArrowDistance
    }
  }), (0, _defineProperty2["default"])(_componentCls, connectArrowCls(["&-placement-rightTop", "&-placement-right", "&-placement-rightBottom"], showArrowCls), {
    paddingLeft: {
      _skip_check_: true,
      value: dropdownArrowDistance
    }
  }), _componentCls));
}
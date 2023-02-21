"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _button = _interopRequireDefault(require("../button"));
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var panelRender = function panelRender(props, current, type) {
  var prefixCls = props.prefixCls,
    _props$total = props.total,
    total = _props$total === void 0 ? 1 : _props$total,
    title = props.title,
    onClose = props.onClose,
    onPrev = props.onPrev,
    onNext = props.onNext,
    onFinish = props.onFinish,
    cover = props.cover,
    description = props.description,
    nextButtonProps = props.nextButtonProps,
    prevButtonProps = props.prevButtonProps,
    stepRender = props.stepRender;
  var isLastStep = current === total - 1;
  var prevBtnClick = function prevBtnClick() {
    onPrev === null || onPrev === void 0 ? void 0 : onPrev();
    if (typeof (prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.onClick) === 'function') {
      prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.onClick();
    }
  };
  var nextBtnClick = function nextBtnClick() {
    if (isLastStep) {
      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    } else {
      onNext === null || onNext === void 0 ? void 0 : onNext();
    }
    if (typeof (nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.onClick) === 'function') {
      nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.onClick();
    }
  };
  var headerNode;
  if (title) {
    headerNode = /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-header"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-title"
    }, title));
  }
  var descriptionNode;
  if (description) {
    descriptionNode = /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-description"
    }, description);
  }
  var coverNode;
  if (cover) {
    coverNode = /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-cover"
    }, cover);
  }
  var mergedSlickNode = typeof stepRender === 'function' && stepRender(current, total) || (0, _toConsumableArray2["default"])(Array.from({
    length: total
  }).keys()).map(function (stepItem, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: stepItem,
      className: (0, _classnames["default"])(index === current && prefixCls + "-slider-active", prefixCls + "-slider")
    });
  });
  var slickNode = total > 1 ? mergedSlickNode : null;
  var mainBtnType = type === 'primary' ? 'default' : 'primary';
  var secondaryBtnProps = {
    type: 'default',
    ghost: type === 'primary'
  };
  return /*#__PURE__*/_react["default"].createElement(_LocaleReceiver["default"], {
    componentName: "Tour",
    defaultLocale: _en_US["default"].Tour
  }, function (contextLocale) {
    var _a, _b;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_CloseOutlined["default"], {
      className: prefixCls + "-close",
      onClick: onClose
    }), coverNode, headerNode, descriptionNode, /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-footer"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-sliders"
    }, slickNode), /*#__PURE__*/_react["default"].createElement("div", {
      className: prefixCls + "-buttons"
    }, current !== 0 ? /*#__PURE__*/_react["default"].createElement(_button["default"], (0, _extends2["default"])({}, secondaryBtnProps, prevButtonProps, {
      onClick: prevBtnClick,
      size: "small",
      className: prefixCls + "-prev-btn"
    }), (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.children) !== null && _a !== void 0 ? _a : contextLocale.Previous) : null, /*#__PURE__*/_react["default"].createElement(_button["default"], (0, _extends2["default"])({
      type: mainBtnType
    }, nextButtonProps, {
      onClick: nextBtnClick,
      size: "small",
      className: prefixCls + "-next-btn"
    }), (_b = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.children) !== null && _b !== void 0 ? _b : isLastStep ? contextLocale.Finish : contextLocale.Next))));
  });
};
var _default = panelRender;
exports["default"] = _default;
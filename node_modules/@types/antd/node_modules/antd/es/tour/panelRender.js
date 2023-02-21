import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import classNames from 'classnames';
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import Button from '../button';
import defaultLocale from '../locale/en_US';
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
    headerNode = /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-title"
    }, title));
  }
  var descriptionNode;
  if (description) {
    descriptionNode = /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-description"
    }, description);
  }
  var coverNode;
  if (cover) {
    coverNode = /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-cover"
    }, cover);
  }
  var mergedSlickNode = typeof stepRender === 'function' && stepRender(current, total) || _toConsumableArray(Array.from({
    length: total
  }).keys()).map(function (stepItem, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: stepItem,
      className: classNames(index === current && prefixCls + "-slider-active", prefixCls + "-slider")
    });
  });
  var slickNode = total > 1 ? mergedSlickNode : null;
  var mainBtnType = type === 'primary' ? 'default' : 'primary';
  var secondaryBtnProps = {
    type: 'default',
    ghost: type === 'primary'
  };
  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Tour",
    defaultLocale: defaultLocale.Tour
  }, function (contextLocale) {
    var _a, _b;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CloseOutlined, {
      className: prefixCls + "-close",
      onClick: onClose
    }), coverNode, headerNode, descriptionNode, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-sliders"
    }, slickNode), /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-buttons"
    }, current !== 0 ? /*#__PURE__*/React.createElement(Button, _extends({}, secondaryBtnProps, prevButtonProps, {
      onClick: prevBtnClick,
      size: "small",
      className: prefixCls + "-prev-btn"
    }), (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.children) !== null && _a !== void 0 ? _a : contextLocale.Previous) : null, /*#__PURE__*/React.createElement(Button, _extends({
      type: mainBtnType
    }, nextButtonProps, {
      onClick: nextBtnClick,
      size: "small",
      className: prefixCls + "-next-btn"
    }), (_b = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.children) !== null && _b !== void 0 ? _b : isLastStep ? contextLocale.Finish : contextLocale.Next))));
  });
};
export default panelRender;
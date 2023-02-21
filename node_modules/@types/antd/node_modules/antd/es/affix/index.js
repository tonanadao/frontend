import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import throttleByAnimationFrame from '../_util/throttleByAnimationFrame';
import useStyle from './style';
import { addObserveTarget, getFixedBottom, getFixedTop, getTargetRect, removeObserveTarget } from './utils';
function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}
var AffixStatus;
(function (AffixStatus) {
  AffixStatus[AffixStatus["None"] = 0] = "None";
  AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
})(AffixStatus || (AffixStatus = {}));
var Affix = /*#__PURE__*/function (_React$Component) {
  _inherits(Affix, _React$Component);
  var _super = _createSuper(Affix);
  function Affix() {
    var _this;
    _classCallCheck(this, Affix);
    _this = _super.apply(this, arguments);
    _this.state = {
      status: AffixStatus.None,
      lastAffix: false,
      prevTarget: null
    };
    _this.getOffsetTop = function () {
      var _this$props = _this.props,
        offsetBottom = _this$props.offsetBottom,
        offsetTop = _this$props.offsetTop;
      return offsetBottom === undefined && offsetTop === undefined ? 0 : offsetTop;
    };
    _this.getOffsetBottom = function () {
      return _this.props.offsetBottom;
    };
    _this.savePlaceholderNode = function (node) {
      _this.placeholderNode = node;
    };
    _this.saveFixedNode = function (node) {
      _this.fixedNode = node;
    };
    // =================== Measure ===================
    _this.measure = function () {
      var _this$state = _this.state,
        status = _this$state.status,
        lastAffix = _this$state.lastAffix;
      var onChange = _this.props.onChange;
      var targetFunc = _this.getTargetFunc();
      if (status !== AffixStatus.Prepare || !_this.fixedNode || !_this.placeholderNode || !targetFunc) {
        return;
      }
      var offsetTop = _this.getOffsetTop();
      var offsetBottom = _this.getOffsetBottom();
      var targetNode = targetFunc();
      if (!targetNode) {
        return;
      }
      var newState = {
        status: AffixStatus.None
      };
      var targetRect = getTargetRect(targetNode);
      var placeholderReact = getTargetRect(_this.placeholderNode);
      var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
      var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);
      if (placeholderReact.top === 0 && placeholderReact.left === 0 && placeholderReact.width === 0 && placeholderReact.height === 0) {
        return;
      }
      if (fixedTop !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          top: fixedTop,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      } else if (fixedBottom !== undefined) {
        newState.affixStyle = {
          position: 'fixed',
          bottom: fixedBottom,
          width: placeholderReact.width,
          height: placeholderReact.height
        };
        newState.placeholderStyle = {
          width: placeholderReact.width,
          height: placeholderReact.height
        };
      }
      newState.lastAffix = !!newState.affixStyle;
      if (onChange && lastAffix !== newState.lastAffix) {
        onChange(newState.lastAffix);
      }
      _this.setState(newState);
    };
    // @ts-ignore TS6133
    _this.prepareMeasure = function () {
      // event param is used before. Keep compatible ts define here.
      _this.setState({
        status: AffixStatus.Prepare,
        affixStyle: undefined,
        placeholderStyle: undefined
      });
      // Test if `updatePosition` called
      if (process.env.NODE_ENV === 'test') {
        var onTestUpdatePosition = _this.props.onTestUpdatePosition;
        onTestUpdatePosition === null || onTestUpdatePosition === void 0 ? void 0 : onTestUpdatePosition();
      }
    };
    _this.updatePosition = throttleByAnimationFrame(function () {
      _this.prepareMeasure();
    });
    _this.lazyUpdatePosition = throttleByAnimationFrame(function () {
      var targetFunc = _this.getTargetFunc();
      var affixStyle = _this.state.affixStyle;
      // Check position change before measure to make Safari smooth
      if (targetFunc && affixStyle) {
        var offsetTop = _this.getOffsetTop();
        var offsetBottom = _this.getOffsetBottom();
        var targetNode = targetFunc();
        if (targetNode && _this.placeholderNode) {
          var targetRect = getTargetRect(targetNode);
          var placeholderReact = getTargetRect(_this.placeholderNode);
          var fixedTop = getFixedTop(placeholderReact, targetRect, offsetTop);
          var fixedBottom = getFixedBottom(placeholderReact, targetRect, offsetBottom);
          if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
            return;
          }
        }
      }
      // Directly call prepare measure since it's already throttled.
      _this.prepareMeasure();
    });
    return _this;
  }
  _createClass(Affix, [{
    key: "getTargetFunc",
    value: function getTargetFunc() {
      var getTargetContainer = this.context.getTargetContainer;
      var target = this.props.target;
      if (target !== undefined) {
        return target;
      }
      return getTargetContainer !== null && getTargetContainer !== void 0 ? getTargetContainer : getDefaultTarget;
    }
    // Event handler
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var targetFunc = this.getTargetFunc();
      if (targetFunc) {
        // [Legacy] Wait for parent component ref has its value.
        // We should use target as directly element instead of function which makes element check hard.
        this.timeout = setTimeout(function () {
          addObserveTarget(targetFunc(), _this2);
          // Mock Event object.
          _this2.updatePosition();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevTarget = this.state.prevTarget;
      var targetFunc = this.getTargetFunc();
      var newTarget = (targetFunc === null || targetFunc === void 0 ? void 0 : targetFunc()) || null;
      if (prevTarget !== newTarget) {
        removeObserveTarget(this);
        if (newTarget) {
          addObserveTarget(newTarget, this);
          // Mock Event object.
          this.updatePosition();
        }
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          prevTarget: newTarget
        });
      }
      if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
        this.updatePosition();
      }
      this.measure();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      removeObserveTarget(this);
      this.updatePosition.cancel();
      // https://github.com/ant-design/ant-design/issues/22683
      this.lazyUpdatePosition.cancel();
    }
    // =================== Render ===================
  }, {
    key: "render",
    value: function render() {
      var _classNames;
      var _this$state2 = this.state,
        affixStyle = _this$state2.affixStyle,
        placeholderStyle = _this$state2.placeholderStyle;
      var _this$props2 = this.props,
        affixPrefixCls = _this$props2.affixPrefixCls,
        rootClassName = _this$props2.rootClassName,
        children = _this$props2.children;
      var className = classNames((_classNames = {}, _defineProperty(_classNames, rootClassName, !!affixStyle), _defineProperty(_classNames, affixPrefixCls, !!affixStyle), _classNames));
      var props = omit(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange', 'affixPrefixCls', 'rootClassName']);
      // Omit this since `onTestUpdatePosition` only works on test.
      if (process.env.NODE_ENV === 'test') {
        props = omit(props, ['onTestUpdatePosition']);
      }
      return /*#__PURE__*/React.createElement(ResizeObserver, {
        onResize: this.updatePosition
      }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
        ref: this.savePlaceholderNode
      }), affixStyle && /*#__PURE__*/React.createElement("div", {
        style: placeholderStyle,
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("div", {
        className: className,
        ref: this.saveFixedNode,
        style: affixStyle
      }, /*#__PURE__*/React.createElement(ResizeObserver, {
        onResize: this.updatePosition
      }, children))));
    }
  }]);
  return Affix;
}(React.Component);
Affix.contextType = ConfigContext;
var AffixFC = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var customizePrefixCls = props.prefixCls;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var affixPrefixCls = getPrefixCls('affix', customizePrefixCls);
  var _useStyle = useStyle(affixPrefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var AffixProps = _extends(_extends({}, props), {
    affixPrefixCls: affixPrefixCls,
    rootClassName: hashId
  });
  return wrapSSR( /*#__PURE__*/React.createElement(Affix, _extends({}, AffixProps, {
    ref: ref
  })));
});
if (process.env.NODE_ENV !== 'production') {
  AffixFC.displayName = 'Affix';
}
export default AffixFC;
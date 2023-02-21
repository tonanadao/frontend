"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListContext = exports.ListConsumer = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));
var _grid = require("../grid");
var _useBreakpoint = _interopRequireDefault(require("../grid/hooks/useBreakpoint"));
var _pagination = _interopRequireDefault(require("../pagination"));
var _spin = _interopRequireDefault(require("../spin"));
var _responsiveObserve = require("../_util/responsiveObserve");
var _Item = _interopRequireDefault(require("./Item"));
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var ListContext = /*#__PURE__*/React.createContext({});
exports.ListContext = ListContext;
var ListConsumer = ListContext.Consumer;
exports.ListConsumer = ListConsumer;
function List(_a) {
  var _classNames;
  var _a$pagination = _a.pagination,
    pagination = _a$pagination === void 0 ? false : _a$pagination,
    customizePrefixCls = _a.prefixCls,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? false : _a$bordered,
    _a$split = _a.split,
    split = _a$split === void 0 ? true : _a$split,
    className = _a.className,
    children = _a.children,
    itemLayout = _a.itemLayout,
    loadMore = _a.loadMore,
    grid = _a.grid,
    _a$dataSource = _a.dataSource,
    dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
    size = _a.size,
    header = _a.header,
    footer = _a.footer,
    _a$loading = _a.loading,
    loading = _a$loading === void 0 ? false : _a$loading,
    rowKey = _a.rowKey,
    renderItem = _a.renderItem,
    locale = _a.locale,
    rest = __rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  var paginationObj = pagination && (0, _typeof2["default"])(pagination) === 'object' ? pagination : {};
  var _React$useState = React.useState(paginationObj.defaultCurrent || 1),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    paginationCurrent = _React$useState2[0],
    setPaginationCurrent = _React$useState2[1];
  var _React$useState3 = React.useState(paginationObj.defaultPageSize || 10),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    paginationSize = _React$useState4[0],
    setPaginationSize = _React$useState4[1];
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    renderEmpty = _React$useContext.renderEmpty,
    direction = _React$useContext.direction;
  var defaultPaginationProps = {
    current: 1,
    total: 0
  };
  var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
    return function (page, pageSize) {
      setPaginationCurrent(page);
      setPaginationSize(pageSize);
      if (pagination && pagination[eventName]) {
        pagination[eventName](page, pageSize);
      }
    };
  };
  var onPaginationChange = triggerPaginationEvent('onChange');
  var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');
  var renderInnerItem = function renderInnerItem(item, index) {
    if (!renderItem) return null;
    var key;
    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = "list-item-" + index;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: key
    }, renderItem(item, index));
  };
  var isSomethingAfterLastItem = function isSomethingAfterLastItem() {
    return !!(loadMore || pagination || footer);
  };
  var renderEmptyFunc = function renderEmptyFunc(prefixCls, renderEmptyHandler) {
    return /*#__PURE__*/React.createElement("div", {
      className: prefixCls + "-empty-text"
    }, locale && locale.emptyText || renderEmptyHandler('List'));
  };
  var prefixCls = getPrefixCls('list', customizePrefixCls);
  // Style
  var _useStyle = (0, _style["default"])(prefixCls),
    _useStyle2 = (0, _slicedToArray2["default"])(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  var loadingProp = loading;
  if (typeof loadingProp === 'boolean') {
    loadingProp = {
      spinning: loadingProp
    };
  }
  var isLoading = loadingProp && loadingProp.spinning;
  // large => lg
  // small => sm
  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, prefixCls + "-vertical", itemLayout === 'vertical'), (0, _defineProperty2["default"])(_classNames, prefixCls + "-" + sizeCls, sizeCls), (0, _defineProperty2["default"])(_classNames, prefixCls + "-split", split), (0, _defineProperty2["default"])(_classNames, prefixCls + "-bordered", bordered), (0, _defineProperty2["default"])(_classNames, prefixCls + "-loading", isLoading), (0, _defineProperty2["default"])(_classNames, prefixCls + "-grid", !!grid), (0, _defineProperty2["default"])(_classNames, prefixCls + "-something-after-last-item", isSomethingAfterLastItem()), (0, _defineProperty2["default"])(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
  var paginationProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, defaultPaginationProps), {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }), pagination || {});
  var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }
  var paginationContent = pagination ? /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-pagination"
  }, /*#__PURE__*/React.createElement(_pagination["default"], (0, _extends2["default"])({}, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))) : null;
  var splitDataSource = (0, _toConsumableArray2["default"])(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = (0, _toConsumableArray2["default"])(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  var needResponsive = Object.keys(grid || {}).some(function (key) {
    return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
  });
  var screens = (0, _useBreakpoint["default"])(needResponsive);
  var currentBreakpoint = React.useMemo(function () {
    for (var i = 0; i < _responsiveObserve.responsiveArray.length; i += 1) {
      var breakpoint = _responsiveObserve.responsiveArray[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return undefined;
  }, [screens]);
  var colStyle = React.useMemo(function () {
    if (!grid) {
      return undefined;
    }
    var columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: 100 / columnCount + "%",
        maxWidth: 100 / columnCount + "%"
      };
    }
  }, [grid === null || grid === void 0 ? void 0 : grid.column, currentBreakpoint]);
  var childrenContent = isLoading && /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    var items = splitDataSource.map(function (item, index) {
      return renderInnerItem(item, index);
    });
    childrenContent = grid ? /*#__PURE__*/React.createElement(_grid.Row, {
      gutter: grid.gutter
    }, React.Children.map(items, function (child) {
      return /*#__PURE__*/React.createElement("div", {
        key: child === null || child === void 0 ? void 0 : child.key,
        style: colStyle
      }, child);
    })) : /*#__PURE__*/React.createElement("ul", {
      className: prefixCls + "-items"
    }, items);
  } else if (!children && !isLoading) {
    childrenContent = renderEmptyFunc(prefixCls, renderEmpty || _defaultRenderEmpty["default"]);
  }
  var paginationPosition = paginationProps.position || 'bottom';
  var contextValue = React.useMemo(function () {
    return {
      grid: grid,
      itemLayout: itemLayout
    };
  }, [JSON.stringify(grid), itemLayout]);
  return wrapSSR( /*#__PURE__*/React.createElement(ListContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-header"
  }, header), /*#__PURE__*/React.createElement(_spin["default"], (0, _extends2["default"])({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-footer"
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent)));
}
List.Item = _Item["default"];
var _default = List;
exports["default"] = _default;
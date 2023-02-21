import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from 'classnames';
// eslint-disable-next-line import/no-named-as-default
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import defaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import { Row } from '../grid';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import Pagination from '../pagination';
import Spin from '../spin';
import { responsiveArray } from '../_util/responsiveObserve';
import Item from './Item';
// CSSINJS
import useStyle from './style';
export var ListContext = /*#__PURE__*/React.createContext({});
export var ListConsumer = ListContext.Consumer;
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
  var paginationObj = pagination && _typeof(pagination) === 'object' ? pagination : {};
  var _React$useState = React.useState(paginationObj.defaultCurrent || 1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    paginationCurrent = _React$useState2[0],
    setPaginationCurrent = _React$useState2[1];
  var _React$useState3 = React.useState(paginationObj.defaultPageSize || 10),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    paginationSize = _React$useState4[0],
    setPaginationSize = _React$useState4[1];
  var _React$useContext = React.useContext(ConfigContext),
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
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
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
  var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-vertical", itemLayout === 'vertical'), _defineProperty(_classNames, prefixCls + "-" + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + "-split", split), _defineProperty(_classNames, prefixCls + "-bordered", bordered), _defineProperty(_classNames, prefixCls + "-loading", isLoading), _defineProperty(_classNames, prefixCls + "-grid", !!grid), _defineProperty(_classNames, prefixCls + "-something-after-last-item", isSomethingAfterLastItem()), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _classNames), className, hashId);
  var paginationProps = _extends(_extends(_extends({}, defaultPaginationProps), {
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
  }, /*#__PURE__*/React.createElement(Pagination, _extends({}, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))) : null;
  var splitDataSource = _toConsumableArray(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = _toConsumableArray(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  var needResponsive = Object.keys(grid || {}).some(function (key) {
    return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
  });
  var screens = useBreakpoint(needResponsive);
  var currentBreakpoint = React.useMemo(function () {
    for (var i = 0; i < responsiveArray.length; i += 1) {
      var breakpoint = responsiveArray[i];
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
    childrenContent = grid ? /*#__PURE__*/React.createElement(Row, {
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
    childrenContent = renderEmptyFunc(prefixCls, renderEmpty || defaultRenderEmpty);
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
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-header"
  }, header), /*#__PURE__*/React.createElement(Spin, _extends({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/React.createElement("div", {
    className: prefixCls + "-footer"
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent)));
}
List.Item = Item;
export default List;
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { genComponentStyleHook, mergeToken } from '../../theme/internal';
// ============================== Row-Shared ==============================
var genGridRowStyle = function genGridRowStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, {
    display: 'flex',
    flexFlow: 'row wrap',
    minWidth: 0,
    '&::before, &::after': {
      display: 'flex'
    },
    '&-no-wrap': {
      flexWrap: 'nowrap'
    },
    // The origin of the X-axis
    '&-start': {
      justifyContent: 'flex-start'
    },
    // The center of the X-axis
    '&-center': {
      justifyContent: 'center'
    },
    // The opposite of the X-axis
    '&-end': {
      justifyContent: 'flex-end'
    },
    '&-space-between': {
      justifyContent: 'space-between'
    },
    '&-space-around ': {
      justifyContent: 'space-around'
    },
    // Align at the top
    '&-top': {
      alignItems: 'flex-start'
    },
    // Align at the center
    '&-middle': {
      alignItems: 'center'
    },
    '&-bottom': {
      alignItems: 'flex-end'
    }
  });
};
// ============================== Col-Shared ==============================
var genGridColStyle = function genGridColStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, {
    position: 'relative',
    maxWidth: '100%',
    // Prevent columns from collapsing when empty
    minHeight: 1
  });
};
var genLoopGridColumnsStyle = function genLoopGridColumnsStyle(token, sizeCls) {
  var componentCls = token.componentCls,
    gridColumns = token.gridColumns;
  var gridColumnsStyle = {};
  for (var i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle["" + componentCls + sizeCls + "-" + i] = {
        display: 'none'
      };
      gridColumnsStyle[componentCls + "-push-" + i] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle[componentCls + "-pull-" + i] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-push-" + i] = {
        insetInlineStart: 'auto'
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-pull-" + i] = {
        insetInlineEnd: 'auto'
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-offset-" + i] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-order-" + i] = {
        order: 0
      };
    } else {
      gridColumnsStyle["" + componentCls + sizeCls + "-" + i] = {
        display: 'block',
        flex: "0 0 " + i / gridColumns * 100 + "%",
        maxWidth: i / gridColumns * 100 + "%"
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-push-" + i] = {
        insetInlineStart: i / gridColumns * 100 + "%"
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-pull-" + i] = {
        insetInlineEnd: i / gridColumns * 100 + "%"
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-offset-" + i] = {
        marginInlineStart: i / gridColumns * 100 + "%"
      };
      gridColumnsStyle["" + componentCls + sizeCls + "-order-" + i] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
var genGridStyle = function genGridStyle(token, sizeCls) {
  return genLoopGridColumnsStyle(token, sizeCls);
};
var genGridMediaStyle = function genGridMediaStyle(token, screenSize, sizeCls) {
  return _defineProperty({}, "@media (min-width: " + screenSize + "px)", _extends({}, genGridStyle(token, sizeCls)));
};
// ============================== Export ==============================
export var useRowStyle = genComponentStyleHook('Grid', function (token) {
  return [genGridRowStyle(token)];
});
export var useColStyle = genComponentStyleHook('Grid', function (token) {
  var gridToken = mergeToken(token, {
    gridColumns: 24 // Row is divided into 24 parts in Grid
  });

  var gridMediaSizesMap = {
    '-sm': gridToken.screenSMMin,
    '-md': gridToken.screenMDMin,
    '-lg': gridToken.screenLGMin,
    '-xl': gridToken.screenXLMin,
    '-xxl': gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ''), genGridStyle(gridToken, '-xs'), Object.keys(gridMediaSizesMap).map(function (key) {
    return genGridMediaStyle(gridToken, gridMediaSizesMap[key], key);
  }).reduce(function (pre, cur) {
    return _extends(_extends({}, pre), cur);
  }, {})];
});
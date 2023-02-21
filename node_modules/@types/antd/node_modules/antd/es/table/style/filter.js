import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { resetComponent } from '../../style';
var genFilterStyle = function genFilterStyle(token) {
  var _ref, _ref3, _extends2, _ref6;
  var componentCls = token.componentCls,
    antCls = token.antCls,
    iconCls = token.iconCls,
    tableFilterDropdownWidth = token.tableFilterDropdownWidth,
    tableFilterDropdownSearchWidth = token.tableFilterDropdownSearchWidth,
    paddingXXS = token.paddingXXS,
    paddingXS = token.paddingXS,
    colorText = token.colorText,
    lineWidth = token.lineWidth,
    lineType = token.lineType,
    tableBorderColor = token.tableBorderColor,
    tableHeaderIconColor = token.tableHeaderIconColor,
    fontSizeSM = token.fontSizeSM,
    tablePaddingHorizontal = token.tablePaddingHorizontal,
    borderRadius = token.borderRadius,
    motionDurationSlow = token.motionDurationSlow,
    colorTextDescription = token.colorTextDescription,
    colorPrimary = token.colorPrimary,
    colorPrimaryActive = token.colorPrimaryActive,
    tableHeaderFilterActiveBg = token.tableHeaderFilterActiveBg,
    colorTextDisabled = token.colorTextDisabled,
    tableFilterDropdownBg = token.tableFilterDropdownBg,
    tableFilterDropdownHeight = token.tableFilterDropdownHeight,
    controlItemBgHover = token.controlItemBgHover,
    boxShadow = token.boxShadow;
  var dropdownPrefixCls = antCls + "-dropdown";
  var tableFilterDropdownPrefixCls = componentCls + "-filter-dropdown";
  var treePrefixCls = antCls + "-tree";
  var tableBorder = lineWidth + "px " + lineType + " " + tableBorderColor;
  return [_defineProperty({}, componentCls + "-wrapper", (_ref = {}, _defineProperty(_ref, componentCls + "-filter-column", {
    display: 'flex',
    justifyContent: 'space-between'
  }), _defineProperty(_ref, componentCls + "-filter-trigger", {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBlock: -paddingXXS,
    marginInline: paddingXXS + "px " + -tablePaddingHorizontal / 2 + "px",
    padding: "0 " + paddingXXS + "px",
    color: tableHeaderIconColor,
    fontSize: fontSizeSM,
    borderRadius: borderRadius,
    cursor: 'pointer',
    transition: "all " + motionDurationSlow,
    '&:hover': {
      color: colorTextDescription,
      background: tableHeaderFilterActiveBg
    },
    '&.active': {
      color: colorPrimary
    }
  }), _ref)), _defineProperty({}, antCls + "-dropdown", _defineProperty({}, tableFilterDropdownPrefixCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
    minWidth: tableFilterDropdownWidth,
    backgroundColor: tableFilterDropdownBg,
    borderRadius: borderRadius,
    boxShadow: boxShadow
  }, _defineProperty(_extends2, dropdownPrefixCls + "-menu", {
    // https://github.com/ant-design/ant-design/issues/4916
    // https://github.com/ant-design/ant-design/issues/19542
    maxHeight: tableFilterDropdownHeight,
    overflowX: 'hidden',
    border: 0,
    boxShadow: 'none',
    '&:empty::after': {
      display: 'block',
      padding: paddingXS + "px 0",
      color: colorTextDisabled,
      fontSize: fontSizeSM,
      textAlign: 'center',
      content: '"Not Found"'
    }
  }), _defineProperty(_extends2, tableFilterDropdownPrefixCls + "-tree", (_ref3 = {
    paddingBlock: paddingXS + "px 0",
    paddingInline: paddingXS
  }, _defineProperty(_ref3, treePrefixCls, {
    padding: 0
  }), _defineProperty(_ref3, treePrefixCls + "-treenode " + treePrefixCls + "-node-content-wrapper:hover", {
    backgroundColor: controlItemBgHover
  }), _defineProperty(_ref3, treePrefixCls + "-treenode-checkbox-checked " + treePrefixCls + "-node-content-wrapper", {
    '&, &:hover': {
      backgroundColor: colorPrimaryActive
    }
  }), _ref3)), _defineProperty(_extends2, tableFilterDropdownPrefixCls + "-search", {
    padding: paddingXS,
    borderBottom: tableBorder,
    '&-input': _defineProperty({
      input: {
        minWidth: tableFilterDropdownSearchWidth
      }
    }, iconCls, {
      color: colorTextDisabled
    })
  }), _defineProperty(_extends2, tableFilterDropdownPrefixCls + "-checkall", {
    width: '100%',
    marginBottom: paddingXXS,
    marginInlineStart: paddingXXS
  }), _defineProperty(_extends2, tableFilterDropdownPrefixCls + "-btns", {
    display: 'flex',
    justifyContent: 'space-between',
    padding: paddingXS - lineWidth + "px " + paddingXS + "px",
    overflow: 'hidden',
    backgroundColor: 'inherit',
    borderTop: tableBorder
  }), _extends2)))), // Dropdown Menu & SubMenu
  _defineProperty({}, antCls + "-dropdown " + tableFilterDropdownPrefixCls + ", " + tableFilterDropdownPrefixCls + "-submenu", (_ref6 = {}, _defineProperty(_ref6, antCls + "-checkbox-wrapper + span", {
    paddingInlineStart: paddingXS,
    color: colorText
  }), _defineProperty(_ref6, "> ul", {
    maxHeight: 'calc(100vh - 130px)',
    overflowX: 'hidden',
    overflowY: 'auto'
  }), _ref6))];
};
export default genFilterStyle;
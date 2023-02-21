import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import SkeletonAvatar from './Avatar';
import SkeletonButton from './Button';
import SkeletonNode from './Node';
import Element from './Element';
import SkeletonImage from './Image';
import SkeletonInput from './Input';
import Paragraph from './Paragraph';
import Title from './Title';
import useStyle from './style';
function getComponentProps(prop) {
  if (prop && _typeof(prop) === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = function Skeleton(props) {
  var customizePrefixCls = props.prefixCls,
    loading = props.loading,
    className = props.className,
    style = props.style,
    children = props.children,
    _props$avatar = props.avatar,
    avatar = _props$avatar === void 0 ? false : _props$avatar,
    _props$title = props.title,
    title = _props$title === void 0 ? true : _props$title,
    _props$paragraph = props.paragraph,
    paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
    active = props.active,
    round = props.round;
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var _useStyle = useStyle(prefixCls),
    _useStyle2 = _slicedToArray(_useStyle, 2),
    wrapSSR = _useStyle2[0],
    hashId = _useStyle2[1];
  if (loading || !('loading' in props)) {
    var _classNames;
    var hasAvatar = !!avatar;
    var hasTitle = !!title;
    var hasParagraph = !!paragraph;
    // Avatar
    var avatarNode;
    if (hasAvatar) {
      var avatarProps = _extends(_extends({
        prefixCls: prefixCls + "-avatar"
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/React.createElement("div", {
        className: prefixCls + "-header"
      }, /*#__PURE__*/React.createElement(Element, _extends({}, avatarProps)));
    }
    var contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      var $title;
      if (hasTitle) {
        var titleProps = _extends(_extends({
          prefixCls: prefixCls + "-title"
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/React.createElement(Title, _extends({}, titleProps));
      }
      // Paragraph
      var paragraphNode;
      if (hasParagraph) {
        var paragraphProps = _extends(_extends({
          prefixCls: prefixCls + "-paragraph"
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/React.createElement(Paragraph, _extends({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/React.createElement("div", {
        className: prefixCls + "-content"
      }, $title, paragraphNode);
    }
    var cls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + "-with-avatar", hasAvatar), _defineProperty(_classNames, prefixCls + "-active", active), _defineProperty(_classNames, prefixCls + "-rtl", direction === 'rtl'), _defineProperty(_classNames, prefixCls + "-round", round), _classNames), className, hashId);
    return wrapSSR( /*#__PURE__*/React.createElement("div", {
      className: cls,
      style: style
    }, avatarNode, contentNode));
  }
  return typeof children !== 'undefined' ? children : null;
};
Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Input = SkeletonInput;
Skeleton.Image = SkeletonImage;
Skeleton.Node = SkeletonNode;
export default Skeleton;
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MessageContext } from './Provider';
import { MESSAGE_ICONS } from './constants';

const LeftIcon = ({ as, children, ...otherProps }) => {
  const Component = as || 'span';
  const { type, content } = useContext(MessageContext);
  let child;
  if (children) {
    child = React.cloneElement(children, {
      type,
      content,
      ...otherProps
    });
  }
  return (
    <Component {...otherProps}>{child || MESSAGE_ICONS[type] || ''}</Component>
  );
};

LeftIcon.defaultProps = {};

LeftIcon.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
export default LeftIcon;

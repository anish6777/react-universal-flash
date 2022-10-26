import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MessageContext } from './Provider';
import { MESSAGE_ICONS } from './constants';

const Link = ({ as, children, ...otherProps }) => {
  const Component = as || 'a';
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

Link.defaultProps = {};

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node
};
export default Link;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MessageContext } from './Provider';

const Text = ({ as, children, ...otherProps }) => {
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
  return <Component {...otherProps}>{child || content || ''}</Component>;
};

Text.defaultProps = {};

Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};
export default Text;

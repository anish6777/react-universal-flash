import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MESSAGE_ICONS } from './constants';
import { MessageContext } from './Provider';

const CloseIcon = ({ as, children, ...otherProps }) => {
  const Component = as || 'span';
  const { deleteFlash } = useContext(MessageContext);
  let child;
  if (children) {
    child = React.cloneElement(children, {
      deleteFlash,
      ...otherProps
    });
  }
  return <Component {...otherProps}>{child || MESSAGE_ICONS.close}</Component>;
};

CloseIcon.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default CloseIcon;

import React from 'react';
import PropTypes from 'prop-types';

import { MESSAGE_ICONS } from './constants';
import useDataMap from './useDataMap';

const CloseIcon = ({
  as,
  children,
  childIndex,
  propIndex,
  propName,
  className,
  ...otherProps
}) => {
  const Component = as || 'span';
  const { deleteFlash, dataChild, dataProps } = useDataMap(
    childIndex,
    propIndex,
    propName
  );
  let child;
  if (children) {
    child = React.cloneElement(children, {
      deleteFlash,
      ...otherProps
    });
  }
  return (
    <Component
      className={className || 'ruv-close-icon'}
      {...dataProps}
      {...otherProps}
    >
      {child || dataChild || MESSAGE_ICONS.close}
    </Component>
  );
};

CloseIcon.defaultProps = {
  className: ''
};

CloseIcon.propTypes = {
  as: PropTypes.string,
  childIndex: PropTypes.number,
  propIndex: PropTypes.number,
  propName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default CloseIcon;

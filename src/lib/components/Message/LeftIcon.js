import React from 'react';
import PropTypes from 'prop-types';

import { MESSAGE_ICONS } from './constants';
import useDataMap from './useDataMap';

const LeftIcon = ({
  as,
  children,
  className,
  childIndex,
  propIndex,
  propName,
  ...otherProps
}) => {
  const Component = as || 'span';
  const { dataChild, dataProps } = useDataMap(childIndex, propIndex, propName);
  let child;
  if (children) {
    if (React.isValidElement(children)) {
      child = React.cloneElement(children, {
        dataChild,
        ...dataProps,
        ...otherProps
      });
    } else {
      child = children;
    }
  }
  return (
    <Component
      className={className || 'ruv-left-icon'}
      {...dataProps}
      {...otherProps}
    >
      {child || MESSAGE_ICONS[dataChild] || dataChild || ''}
    </Component>
  );
};

LeftIcon.defaultProps = {
  className: ''
};

LeftIcon.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  childIndex: PropTypes.number,
  propIndex: PropTypes.number,
  propName: PropTypes.string
};
export default LeftIcon;

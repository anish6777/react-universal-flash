import React from 'react';
import PropTypes from 'prop-types';

import useDataMap from './useDataMap';

const Text = ({
  as,
  children,
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
    <Component {...dataProps} {...otherProps}>
      {dataChild || child || ''}
    </Component>
  );
};

Text.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  childIndex: PropTypes.number,
  propIndex: PropTypes.number,
  propName: PropTypes.string
};
export default Text;

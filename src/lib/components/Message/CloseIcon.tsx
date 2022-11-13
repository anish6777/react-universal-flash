import React from 'react';
import PropTypes from 'prop-types';

import { MESSAGE_ICONS } from './constants';

import useDataMap from './useDataMap';
import { ComponentProps } from './Message.types';

type OwnProps = {
  propName?: string;
  propIndex?: number;
  childIndex?: number;
  className?: string;
};

const defaultElement = 'span';

const CloseIcon = <C extends React.ElementType = typeof defaultElement>({
  as,
  children,
  childIndex,
  propIndex,
  propName,
  className,
  ...otherProps
}: ComponentProps<C, OwnProps>) => {
  const Component = as || 'span';
  const { deleteFlash, dataChild, dataProps } = useDataMap(
    childIndex,
    propIndex,
    propName
  );
  let child;
  if (children) {
    if (React.isValidElement(children)) {
      child = React.cloneElement(children, {
        deleteFlash,
        ...otherProps
      });
    } else {
      child = children;
    }
  }
  return (
    <Component
      className={className || 'ruv-close-icon'}
      {...dataProps}
      {...otherProps}
      onClick={() => {
        deleteFlash();
      }}
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

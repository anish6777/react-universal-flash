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

const LeftIcon = <C extends React.ElementType = typeof defaultElement>({
  as,
  children,
  className,
  childIndex,
  propIndex,
  propName,
  ...otherProps
}: ComponentProps<C, OwnProps>) => {
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
      {child ||
        MESSAGE_ICONS[dataChild as keyof typeof MESSAGE_ICONS] ||
        dataChild ||
        ''}
    </Component>
  );
};

LeftIcon.defaultProps = {
  className: ''
};

export default LeftIcon;

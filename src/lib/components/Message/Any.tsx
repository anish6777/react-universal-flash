import React from 'react';

import useDataMap from './useDataMap';
import { ComponentProps } from './Message.types';

type OwnProps = {
  propName?: string;
  propIndex?: number;
  childIndex?: number;
};

const defaultElement = 'span';

const Any = <C extends React.ElementType = typeof defaultElement>({
  as,
  children,
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
    <Component {...dataProps} {...otherProps}>
      {dataChild || child || ''}
    </Component>
  );
};

Any.defaultProps = {
  className: '',
  as: defaultElement
};

export default Any;

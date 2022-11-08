import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { deleteflash } from '../../flashCreator';
import { POSITION_CLASSES, MESSAGE_COMPONENT_ERROR } from './constants';

import { FlashList } from './../../types';
import './Flashbox.css';

type OwnProps = {
  flashes: FlashList;
  style?: React.CSSProperties;
  position: keyof typeof POSITION_CLASSES;
  className?: string;
};

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type ComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

const defaultElement = 'div';

const FlashBox = <C extends React.ElementType = typeof defaultElement>({
  as,
  flashes,
  child,
  style,
  position,
  className,
  ...otherProps
}: ComponentProps<C, OwnProps>) => {
  const Container = as || 'div';
  const flashesToShow = useMemo(
    () =>
      flashes.map((v) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: v.id,
            deleteFlash: deleteflash.bind(null, v.id),
            ...v
          });
        } else {
          console.error(MESSAGE_COMPONENT_ERROR);
          return <></>;
        }
      }),
    [flashes, child]
  );

  return (
    <React.Fragment>
      <Container
        style={style}
        className={`ruv ${
          POSITION_CLASSES[(position || '') as keyof typeof POSITION_CLASSES]
        } ${className}`}
        id="flash-box"
        {...otherProps}
      >
        {flashesToShow}
      </Container>
    </React.Fragment>
  );
};

FlashBox.defaultProps = {
  flashes: [],
  position: '',
  className: ''
};

export default FlashBox;

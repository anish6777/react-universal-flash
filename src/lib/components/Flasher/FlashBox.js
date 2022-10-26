import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { deleteflash } from './../../flashCreator';
import { POSITION_CLASSES, MESSAGE_COMPONENT_ERROR } from './constants';

import './Flashbox.css';

export function FlashBox({
  as,
  flashes,
  child,
  style,
  position,
  className,
  ...otherProps
}) {
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
        className={`ruv ${POSITION_CLASSES[position || '']} ${className}`}
        id="flash-box"
        {...otherProps}
      >
        {flashesToShow}
      </Container>
    </React.Fragment>
  );
}

FlashBox.defaultProps = {
  flashes: [],
  position: '',
  className: ''
};

FlashBox.propTypes = {
  flashes: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object,
  position: PropTypes.string,
  as: PropTypes.string,
  child: PropTypes.element,
  className: PropTypes.string
};

export default FlashBox;

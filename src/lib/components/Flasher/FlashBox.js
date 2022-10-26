import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { deleteflash } from './../../flashCreator';
import DefaultFlash from './../DefaultFlash';
import { positionClasses } from './../../constants';

import './Flashbox.css';

export function FlashBox({
  as,
  flashes,
  child,
  style,
  position,
  className,
  ...remainingProps
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
          return <DefaultFlash key={v.id} {...v} />;
        }
      }),
    [flashes, child]
  );

  return (
    <React.Fragment>
      {flashes.length > 0 ? (
        <Container
          style={style}
          className={`container ${
            positionClasses[position || '']
          } ${className}`}
          id="flash-box"
          {...remainingProps}
        >
          {flashesToShow}
        </Container>
      ) : (
        <></>
      )}
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

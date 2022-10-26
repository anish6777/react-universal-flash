import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FlashBox from './FlashBox';
import { setUpdateFlashes } from './../flashCreator';
import { initialStyle } from './../constants';
import { getStyle } from './../util';

const Flasher = ({ children, position, width, customStyles }) => {
  const [flashes, setFlashes] = useState([]);
  const [defaultStyle, setDefaultStyle] = useState(initialStyle);
  useEffect(() => {
    if (width) {
      setDefaultStyle({ minWidth: width, ...defaultStyle });
    }
  }, [width]);
  const boxStyle = useMemo(
    () => getStyle(position, defaultStyle, customStyles),
    [position, customStyles, defaultStyle]
  );
  useEffect(() => {
    setUpdateFlashes(setFlashes);
  }, [setFlashes]);
  return <FlashBox flashes={flashes} child={children} style={boxStyle} />;
};

Flasher.propTypes = {
  position: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.element,
  customStyles: PropTypes.object
};

export default Flasher;

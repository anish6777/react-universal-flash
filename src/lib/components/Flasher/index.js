import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FlashBox from './FlashBox';
import { setUpdateFlashes, deleteAllFlashes } from './../../flashCreator';

const Flasher = ({ children, ...otherProps }) => {
  const [flashes, setFlashes] = useState([]);
  useEffect(() => {
    setUpdateFlashes(setFlashes);
    return () => {
      deleteAllFlashes();
    };
  }, [setFlashes]);
  return <FlashBox flashes={flashes} child={children} {...otherProps} />;
};

Flasher.propTypes = {
  position: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.object
};

export default Flasher;

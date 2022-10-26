import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FlashBox from './FlashBox';
import { setUpdateFlashes } from './../../flashCreator';

const Flasher = ({ children, ...remainingProps }) => {
  const [flashes, setFlashes] = useState([]);
  useEffect(() => {
    setUpdateFlashes(setFlashes);
  }, [setFlashes]);
  return <FlashBox flashes={flashes} child={children} {...remainingProps} />;
};

Flasher.propTypes = {
  position: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.object
};

export default Flasher;

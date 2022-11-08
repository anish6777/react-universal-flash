import React, { useState, useEffect } from 'react';

import { setUpdateFlashes, deleteAllFlashes } from '../../flashCreator';

export const RenderFlash = ({ children }: { children: Function }) => {
  const [flashes, setFlashes] = useState([]);
  useEffect(() => {
    setUpdateFlashes(setFlashes);
    return () => {
      deleteAllFlashes();
    };
  }, [setFlashes]);
  return children(flashes);
};

export default RenderFlash;

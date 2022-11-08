import React, { useState, useEffect } from 'react';

import FlashBox from './FlashBox';
import RenderFlash from './RenderFlash';

import { FlashList } from './../../types';

export const Flasher = (props: React.PropsWithChildren) => {
  return (
    <RenderFlash>
      {({ flashes }: { flashes: FlashList }) => (
        <FlashBox flashes={flashes} {...props} />
      )}
    </RenderFlash>
  );
};

export default Flasher;

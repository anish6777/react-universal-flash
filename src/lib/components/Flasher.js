import React, { useReducer, useMemo, useState, useEffect } from "react";
import FlashBox from "./FlashBox";
import { flashes, setForceUpdate } from "./../flasher";
import { initialStyle } from "./../constants";
import { getStyle } from "./../util";

const Flasher = ({ children, position,width, customStyles }) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [defaultStyle, setDefaultStyle] = useState(initialStyle);
  useEffect(() => {
    if (width) {
      setDefaultStyle({ minWidth: width, ...defaultStyle });
    }
  }, [width]);
  const boxStyle = useMemo(
    () => getStyle(position, defaultStyle,customStyles),
    [position,customStyles,defaultStyle]
  );
  useEffect(() => {
    setForceUpdate(forceUpdate);
  }, [forceUpdate]);
  return <FlashBox flashes={flashes} child={children} style={boxStyle} />;
};

export default Flasher;

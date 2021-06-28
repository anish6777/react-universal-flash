import React from "react";
import PropTypes from "prop-types";

import { flashStyle } from "./../constants";

const DefaultFlash = ({ id, type, content }) => (
  <div id={`flash-${id}`} style={flashStyle} type={type}>
    {content}
  </div>
);

export default DefaultFlash;

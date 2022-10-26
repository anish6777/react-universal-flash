import React from 'react';
import PropTypes from 'prop-types';
import { flashStyle } from './../constants';

const DefaultFlash = ({ id, type, content }) => (
  <div id={`flash-${id}`} style={flashStyle} type={type}>
    {content}
  </div>
);

DefaultFlash.propTypes = {
  id: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default DefaultFlash;

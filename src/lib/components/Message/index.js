import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import LeftIcon from './LeftIcon';
import Link from './Link';
import CloseIcon from './CloseIcon';
import { MESSAGE_CLASSES } from './constants';
import useDataMap from './useDataMap';

import './Message.css';

const Message = ({
  id,
  deleteFlash,
  children,
  as,
  data,
  contentIndex,
  typeIndex,
  className,
  ...otherProps
}) => {
  const Component = as || 'div';
  const { setData, setDeleteFlash } = useDataMap();
  useEffect(() => {
    setData(data);
    setDeleteFlash(deleteFlash);
  }, []);
  return (
    <Component
      id={`ruv-message-${id}`}
      className={`ruv-message ${
        (typeIndex !== undefined &&
          data &&
          data[typeIndex] &&
          MESSAGE_CLASSES[data[typeIndex]]) ||
        ''
      } ${className}`}
      {...otherProps}
    >
      {children ||
        (contentIndex !== undefined && data && data[contentIndex]) ||
        ''}
    </Component>
  );
};

Message.defaultProps = {
  className: '',
  data: [],
  contentIndex: 0,
  typeIndex: 1
};

Message.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  deleteFlash: PropTypes.func,
  data: PropTypes.array,
  typeIndex: PropTypes.number,
  contentIndex: PropTypes.number,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Message.Link = Link;
Message.Text = Text;
Message.LeftIcon = LeftIcon;
Message.CloseIcon = CloseIcon;

export default Message;

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import LeftIcon from './LeftIcon';
import Any from './Any';
import CloseIcon from './CloseIcon';
import { MESSAGE_CLASSES } from './constants';
import { MessageProvider } from './Provider';

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
  const value = useMemo(
    () => ({ id, data, deleteFlash }),
    [id, data, deleteFlash]
  );

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
      <MessageProvider value={value}>
        {children ||
          (contentIndex !== undefined && data && data[contentIndex]) ||
          ''}
      </MessageProvider>
    </Component>
  );
};

Message.defaultProps = {
  className: '',
  data: []
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

Message.Any = Any;
Message.Text = Text;
Message.LeftIcon = LeftIcon;
Message.CloseIcon = CloseIcon;

export default Message;

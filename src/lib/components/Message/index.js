import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import LeftIcon from './LeftIcon';
import Link from './Link';
import CloseIcon from './CloseIcon';
import { MessageProvider } from './Provider';
import { MESSAGE_CLASSES } from './constants';

import './Message.css';

const Message = ({
  id,
  content,
  deleteFlash,
  children,
  as,
  type,
  className,
  ...otherProps
}) => {
  const Component = as || 'div';
  const value = useMemo(
    () => ({ content, type, deleteFlash }),
    [content, type, deleteFlash]
  );
  return (
    <Component
      id={`ruv-message-${id}`}
      className={`ruv-message ${MESSAGE_CLASSES[type] || ''} ${className}`}
      {...otherProps}
    >
      <MessageProvider value={value}>{children || content}</MessageProvider>
    </Component>
  );
};

Message.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  deleteFlash: PropTypes.func,
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

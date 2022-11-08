import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import LeftIcon from './LeftIcon';
import Any from './Any';
import CloseIcon from './CloseIcon';
import { MESSAGE_CLASSES } from './constants';
import { MessageProvider } from './Provider';

import { ComponentProps, ProviderValue } from './Message.types';

import './Message.css';

type OwnProps = {
  deleteFlash: Function;
  contentIndex?: number;
  typeIndex?: number;
  data?: Array<any>;
  className?: string;
  id: string;
};

const defaultElement = 'div';

const Message = <C extends React.ElementType = typeof defaultElement>({
  id,
  deleteFlash,
  children,
  as,
  data,
  contentIndex,
  typeIndex,
  className,
  ...otherProps
}: ComponentProps<C, OwnProps>) => {
  const Component = as || 'div';
  const value = useMemo<ProviderValue>(
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
          MESSAGE_CLASSES[data[typeIndex] as keyof typeof MESSAGE_CLASSES]) ||
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

Message.Any = Any;
Message.Text = Text;
Message.LeftIcon = LeftIcon;
Message.CloseIcon = CloseIcon;

export default Message;

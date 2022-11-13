import React from 'react';
import { ComponentProps } from './Message.types';
declare type OwnProps = {
    propName?: string;
    propIndex?: number;
    childIndex?: number;
    className?: string;
};
declare const LeftIcon: {
    <C extends React.ElementType<any> = "span">({ as, children, className, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C, OwnProps>): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export default LeftIcon;

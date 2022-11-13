import React from 'react';
import { ComponentProps } from './Message.types';
declare type OwnProps = {
    propName?: string;
    propIndex?: number;
    childIndex?: number;
};
declare const Text: <C extends React.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C, OwnProps>) => JSX.Element;
export default Text;

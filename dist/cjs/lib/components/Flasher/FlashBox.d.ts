import React from 'react';
import { POSITION_CLASSES } from './constants';
import { FlashList } from "./../../types";
import './Flashbox.css';
declare type OwnProps = {
    flashes: FlashList;
    style?: React.CSSProperties;
    position: keyof typeof POSITION_CLASSES;
    className?: string;
};
export declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
export declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
export declare type ComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
declare const FlashBox: {
    <C extends React.ElementType<any> = "div">({ as, flashes, child, style, position, className, ...otherProps }: ComponentProps<C, OwnProps>): JSX.Element;
    defaultProps: {
        flashes: never[];
        position: string;
        className: string;
    };
};
export default FlashBox;

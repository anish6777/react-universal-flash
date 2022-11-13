/// <reference types="react" />
import React$1 from 'react';
import PropTypes from 'prop-types';

declare const Flasher: (props: React$1.PropsWithChildren) => JSX.Element;

declare const RenderFlash: ({ children }: {
    children: Function;
}) => any;

declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
declare type ComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

declare type OwnProps = {
    deleteFlash: Function;
    contentIndex?: number;
    typeIndex?: number;
    data?: Array<any>;
    className?: string;
    id: string;
};
declare const Message: {
    <C extends React$1.ElementType<any> = "div">({ id, deleteFlash, children, as, data, contentIndex, typeIndex, className, ...otherProps }: ComponentProps<C, OwnProps>): JSX.Element;
    defaultProps: {
        className: string;
        data: never[];
    };
    Any: {
        <C_1 extends React$1.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C_1, {
            propName?: string | undefined;
            propIndex?: number | undefined;
            childIndex?: number | undefined;
        }>): JSX.Element;
        defaultProps: {
            className: string;
            as: string;
        };
    };
    Text: <C_2 extends React$1.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C_2, {
        propName?: string | undefined;
        propIndex?: number | undefined;
        childIndex?: number | undefined;
    }>) => JSX.Element;
    LeftIcon: {
        <C_3 extends React$1.ElementType<any> = "span">({ as, children, className, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C_3, {
            propName?: string | undefined;
            propIndex?: number | undefined;
            childIndex?: number | undefined;
            className?: string | undefined;
        }>): JSX.Element;
        defaultProps: {
            className: string;
        };
    };
    CloseIcon: {
        <C_4 extends React$1.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, className, ...otherProps }: ComponentProps<C_4, {
            propName?: string | undefined;
            propIndex?: number | undefined;
            childIndex?: number | undefined;
            className?: string | undefined;
        }>): JSX.Element;
        defaultProps: {
            className: string;
        };
        propTypes: {
            as: PropTypes.Requireable<string>;
            childIndex: PropTypes.Requireable<number>;
            propIndex: PropTypes.Requireable<number>;
            propName: PropTypes.Requireable<string>;
            className: PropTypes.Requireable<string>;
            children: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        };
    };
};

declare const flash: (timeout?: number, ...args: Array<any>) => void;
declare const deleteAllFlashes: () => void;

export { Flasher, Message, RenderFlash, deleteAllFlashes, flash };

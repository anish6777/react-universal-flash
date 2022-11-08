import React from 'react';
import PropTypes from 'prop-types';
import { ComponentProps } from './Message.types';
import './Message.css';
declare type OwnProps = {
    deleteFlash: Function;
    contentIndex?: number;
    typeIndex?: number;
    data?: Array<any>;
    className?: string;
    id: string;
};
declare const Message: {
    <C extends React.ElementType<any> = "div">({ id, deleteFlash, children, as, data, contentIndex, typeIndex, className, ...otherProps }: ComponentProps<C, OwnProps>): JSX.Element;
    defaultProps: {
        className: string;
        data: never[];
    };
    Any: {
        <C_1 extends React.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C_1, {
            propName?: string | undefined;
            propIndex?: number | undefined;
            childIndex?: number | undefined;
        }>): JSX.Element;
        defaultProps: {
            className: string;
            as: string;
        };
    };
    Text: <C_2 extends React.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C_2, {
        propName?: string | undefined;
        propIndex?: number | undefined;
        childIndex?: number | undefined;
    }>) => JSX.Element;
    LeftIcon: {
        <C_3 extends React.ElementType<any> = "span">({ as, children, className, childIndex, propIndex, propName, ...otherProps }: ComponentProps<C_3, {
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
        <C_4 extends React.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, className, ...otherProps }: ComponentProps<C_4, {
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
export default Message;

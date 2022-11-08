import React from 'react';
import PropTypes from 'prop-types';
import { ComponentProps } from './Message.types';
declare type OwnProps = {
    propName?: string;
    propIndex?: number;
    childIndex?: number;
    className?: string;
};
declare const CloseIcon: {
    <C extends React.ElementType<any> = "span">({ as, children, childIndex, propIndex, propName, className, ...otherProps }: ComponentProps<C, OwnProps>): JSX.Element;
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
export default CloseIcon;

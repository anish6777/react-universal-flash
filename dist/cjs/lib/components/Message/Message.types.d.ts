/// <reference types="react" />
export declare type AsProp<C extends React.ElementType> = {
    as?: C;
};
export declare type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
export declare type ComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
export declare type ProviderValue = {
    id: string;
    data: any[] | undefined;
    deleteFlash: Function;
};

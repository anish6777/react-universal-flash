/// <reference types="react" />
export default function useDataMap(childIndex?: number, propIndex?: number, propName?: string): {
    dataChild: import("react").ElementType<any> | undefined;
    dataProps: {
        children?: import("react").ReactNode;
    };
    data: any[] | undefined;
    id: string;
    deleteFlash: Function;
};

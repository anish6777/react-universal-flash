import { useMemo, useContext } from 'react';

import { MessageContext } from './Provider';

import { ProviderValue } from './Message.types';

type Values = {
  dataChild?: React.ElementType;
  dataProps: React.PropsWithChildren;
};

export default function useDataMap(
  childIndex?: number,
  propIndex?: number,
  propName?: string
) {
  const { data, id, deleteFlash } = useContext<ProviderValue>(MessageContext);
  const value = useMemo(() => {
    const dataValues: Values = { dataProps: {} };
    if (childIndex !== undefined && data) {
      dataValues.dataChild = data[childIndex];
    }
    if (
      propIndex !== undefined &&
      propName &&
      data &&
      data[propIndex] !== undefined
    ) {
      dataValues.dataProps[propName as keyof React.PropsWithChildren] =
        data[propIndex];
    }
    return {
      dataChild: dataValues.dataChild,
      dataProps: dataValues.dataProps,
      data,
      id,
      deleteFlash
    };
  }, [data, childIndex, propName, propIndex]);
  return value;
}

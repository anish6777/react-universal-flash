import { useMemo, useContext } from 'react';

import { MessageContext } from './Provider';

export default function useDataMap(childIndex, propIndex, propName) {
  const { data, id, deleteFlash } = useContext(MessageContext);
  const value = useMemo(() => {
    const dataValues = { dataProps: {} };
    if (childIndex !== undefined && data) {
      dataValues.dataChild = data[childIndex];
    }
    if (
      propIndex !== undefined &&
      propName &&
      data &&
      data[propIndex] !== undefined
    ) {
      dataValues.dataProps[propName] = data[propIndex];
    }
    return { ...dataValues, data, id, deleteFlash };
  }, [data, childIndex, propName, propIndex]);
  return value;
}
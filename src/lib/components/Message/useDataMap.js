import { useMemo, useState } from 'react';

export default function useDataMap(childIndex, propIndex, propName) {
  const [data, setData] = useState([]);
  const [deleteFlash, setDeleteFlash] = useState(null);
  const value = useMemo(() => {
    const dataValues = { dataProps: {} };
    if (childIndex && data) {
      dataValues.dataChild = data[childIndex];
    }
    if (propIndex && propName && data) {
      dataValues.dataProps = { propName: data[propIndex] };
    }
    return { ...dataValues, data, deleteFlash, setDeleteFlash, setData };
  }, [data, childIndex, propName, propIndex, deleteFlash]);
  return value;
}

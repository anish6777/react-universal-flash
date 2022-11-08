import { FlashList } from './types';

const { flash, setUpdateFlashes, deleteflash, deleteAllFlashes } = (() => {
  let updateFlashes: Function | undefined;
  const flashes = new Map();

  function communicateChange() {
    if (updateFlashes) {
      const flashList: FlashList = [];
      flashes.forEach((v) => {
        flashList.push({ id: v.id, data: v.arguments });
      });
      updateFlashes(flashList);
    }
  }

  function flash(timeout = 6000, ...args: Array<any>) {
    const currentTime = new Date().getTime();
    const id = currentTime + '_' + flashes.size;
    setTimeout(() => {
      deleteflash(id);
    }, timeout);
    flashes.set(id, { id, arguments: args });
    communicateChange();
  }

  function setUpdateFlashes(func: Function) {
    updateFlashes = func;
  }

  function deleteflash(id: string) {
    flashes.delete(id);
    communicateChange();
  }

  function deleteAllFlashes() {
    flashes.clear();
    communicateChange();
  }

  return {
    setUpdateFlashes,
    flash,
    deleteflash,
    deleteAllFlashes
  };
})();

export { flash, setUpdateFlashes, deleteflash, deleteAllFlashes };

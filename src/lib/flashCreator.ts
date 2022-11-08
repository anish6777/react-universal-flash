import { FlashList, FlashItem } from './types';

const { flash, setUpdateFlashes, deleteAllFlashes } = (() => {
  let updateFlashes: Function | undefined;
  const flashes = new Map();

  function communicateChange() {
    if (updateFlashes) {
      const flashList: FlashList = [];
      flashes.forEach((v) => {
        flashList.push({ ...v, deleteFlash: v.deleteFlash.bind(v) });
      });
      updateFlashes(flashList);
    }
  }
  const flash: FlashItem = {
    deleteFlash: function () {
      flashes.delete(this.id);
      communicateChange();
    }
  };

  function createFlash(timeout = 6000, ...args: Array<any>) {
    const currentTime = new Date().getTime();
    const id = currentTime + '_' + flashes.size;
    const newFlash = <FlashItem>Object.create(flash);
    newFlash.id = id;
    newFlash.data = args;
    setTimeout(() => {
      newFlash.deleteFlash();
    }, timeout);
    flashes.set(id, newFlash);
    communicateChange();
  }

  function setUpdateFlashes(func: Function) {
    updateFlashes = func;
  }

  function deleteAllFlashes() {
    flashes.clear();
    communicateChange();
  }

  return {
    setUpdateFlashes,
    flash: createFlash,
    deleteAllFlashes
  };
})();

export { flash, setUpdateFlashes, deleteAllFlashes };

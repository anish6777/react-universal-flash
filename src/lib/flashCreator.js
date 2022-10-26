const { flash, setUpdateFlashes, deleteflash } = (() => {
  let updateFlashes;
  const flashes = new Map();

  function communicateChange() {
    if (updateFlashes) {
      const flashList = [];
      flashes.forEach((v) => {
        flashList.push({ id: v.id, type: v.type, content: v.content });
      });
      updateFlashes(flashList);
    }
  }

  function flash(content, timeout = 6000, type) {
    const currentTime = new Date().getTime();
    const id = currentTime + '_' + flashes.size;
    setTimeout(() => {
      deleteflash(id);
    }, timeout);
    flashes.set(id, { id, content, type });
    communicateChange();
  }

  function setUpdateFlashes(func) {
    updateFlashes = func;
  }

  function deleteflash(id) {
    flashes.delete(id);
    communicateChange();
  }

  return {
    setUpdateFlashes,
    flash,
    deleteflash
  };
})();

export { flash, setUpdateFlashes, deleteflash };

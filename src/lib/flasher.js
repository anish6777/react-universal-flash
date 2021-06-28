function Flash(id, content, type) {
  this.content = content;
  this.id = id;
  this.type = type;
}

let flashes = [];
let forceUpdate;

function flash(content, timeout = 6000, type) {
  const currentflashes = [...flashes];
  let currentTime = new Date().getTime();
  let flashKey = currentTime + "_" + currentflashes.length;
  window.setTimeout(() => {
    deleteflash(flashKey);
  }, timeout);
  let flashNode = new Flash(flashKey, content, type);
  currentflashes.push(flashNode);
  setflashes(currentflashes);
}

function setflashes(newflashes) {
  flashes = [...newflashes];
  if (forceUpdate) {
    forceUpdate();
  }
}

function deleteflash(id) {
  const currentflashes = [...flashes];
  const flash = currentflashes.find((v) => {
    return v.id === id;
  });
  if (flash) {
    const activeflashes = currentflashes.filter((v) => {
      return v.id !== id;
    });
    setflashes(activeflashes);
  }
}

function setForceUpdate(func) {
  forceUpdate = func;
}

export { flashes, flash, setForceUpdate, deleteflash };

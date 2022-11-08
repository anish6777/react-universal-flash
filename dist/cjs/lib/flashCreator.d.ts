declare const flash: (timeout?: number, ...args: Array<any>) => void, setUpdateFlashes: (func: Function) => void, deleteflash: (id: string) => void, deleteAllFlashes: () => void;
export { flash, setUpdateFlashes, deleteflash, deleteAllFlashes };

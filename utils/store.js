import store from 'store';

export const getStorage = key => store.get(key);
export const setStorage = (key, value) => store.set(key, value);
export const removeStorage = () => store.remove();
export const clearStorage = () => store.clearAll();


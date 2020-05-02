import store from 'store'

export const getStorage = key => store.get(key)
export const setStorage = (key, value) => store.set(key, value)
export const removeStorage = key => store.remove(key)
export const clearStorage = () => store.clearAll()

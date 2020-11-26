import store from 'store'

export const getStorage = (key: string) => store.get(key)
export const setStorage = (key: string, value: any) => store.set(key, value)
export const removeStorage = (key: string) => store.remove(key)
export const clearStorage = () => store.clearAll()

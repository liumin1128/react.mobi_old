import { useEffect, useRef } from 'react'

// 第二个参数是[], 返回onUnmount函数, 类似componentWillUnmount
export const useOnUnmount = onUnmount =>
  useEffect(() => {
    return () => onUnmount && onUnmount()
    // eslint-disable-next-line
  }, [])

// 第二个参数是[], 返回onMount函数, 类似componentDidMount
export const useOnMount = onMount =>
  useEffect(() => {
    if (onMount) onMount()
    // eslint-disable-next-line
  }, [])

// 整合onMount, onUnmount
export const useLifecycleHooks = ({ onMount, onUnmount }) =>
  useEffect(() => {
    if (onMount) onMount()
    return () => onUnmount && onUnmount()
    // eslint-disable-next-line
  }, [])

/* eslint-disable no-console */
// 整合打印组件生命周期
export const useLogger = (name, props) => {
  useLifecycleHooks({
    onMount: () => console.log(`${name} has mounted`),
    onUnmount: () => console.log(`${name} has unmounted`),
  })
  useEffect(() => {
    console.log('Props updated', props)
  })
}

// 获取之前的props或者state
export const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export function useInterval(callback, time = 300) {
  // const intervalFn = useRef();   [1]
  const intervalFn = useRef({})
  useEffect(() => {
    //   intervalFn.current = callback;  [2]
    intervalFn.current.callback = callback
  })
  useEffect(() => {
    // const timer = ......   [3]
    intervalFn.current.timer = setInterval(() => {
      intervalFn.current()
    }, time)
    //  return ()=>{ clearInterval(timer) }   [4]
    return () => {
      // eslint-disable-next-line
      intervalFn.current.timer && clearInterval(intervalFn.current.timer)
    }
  }, [time])
  return {
    clear: () => {
      // eslint-disable-next-line
      intervalFn.current.timer && clearInterval(intervalFn.current.timer)
    },
  } //  [5]
}
// const timer = useInterval(()=>{
//   // you code ...
// })
// timer.claer() // 直接清理

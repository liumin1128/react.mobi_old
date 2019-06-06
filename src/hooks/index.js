import { useEffect, useRef } from 'react';

// 第二个参数是[], 返回onUnmount函数, 类似componentWillUnmount
export const useOnUnmount = onUnmount => useEffect(() => {
  return () => onUnmount && onUnmount();
}, []);

// 第二个参数是[], 返回onMount函数, 类似componentDidMount
export const useOnMount = onMount => useEffect(() => {
  if (onMount) onMount();
}, []);

// 整合onMount, onUnmount
export const useLifecycleHooks = ({ onMount, onUnmount }) => useEffect(() => {
  if (onMount) onMount();
  return () => onUnmount && onUnmount();
}, []);

// 整合打印组件生命周期
export const useLogger = (name, props) => {
  useLifecycleHooks({
    onMount: () => console.log(`${name} has mounted`),
    onUnmount: () => console.log(`${name} has unmounted`),
  });
  useEffect(() => {
    console.log('Props updated', props);
  });
};

// 获取之前的props或者state
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

import { useOnMount, useOnUnmount } from '@/hooks';

let timer;

export default function useLoop() {
  // useOnMount(() => {
  //   loop();
  // });

  useOnUnmount(() => {
    clearTimeout(timer);
  });

  function loop(cb, t = 60000) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
      loop(cb, t);
    }, t);
  }

  return [ loop ];
}

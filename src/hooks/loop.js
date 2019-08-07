import { useOnMount, useOnUnmount } from '@/hooks';

let timer;

export default function useLoop(cb, t = 60000) {
  useOnMount(() => {
    loop();
  });

  useOnUnmount(() => {
    clearTimeout(timer);
  });

  function loop() {
    timer = setTimeout(() => {
      cb();
      loop();
    }, t);
  }
}

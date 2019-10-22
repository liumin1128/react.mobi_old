// 监听 visibility change 事件
document.addEventListener('visibilitychange', () => {
  const isHidden = document.hidden;
  if (isHidden) {
    document.title = '小邋遢，你要去哪！';
  } else {
    document.title = '常回家看看';
    setTimeout(() => {
      document.title = '盗火 一个年轻的知识社区';
    }, 3000);
  }
});

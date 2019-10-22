
/* eslint-disable */

(function (i, s, o, g, r, a, m) {
  i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);

}, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
}(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));
ga('create', 'UA-91762675-2', 'auto');
ga('require', 'GTM-NXMHGV2');
ga('send', 'pageview');

// 监听 visibility change 事件
document.addEventListener('visibilitychange', () => {
  const isHidden = document.hidden;
  if (isHidden) {
    document.title = '小邋遢，你要去哪！';
  } else {
    // document.title = '常回家看看';
    // setTimeout(() => {
      document.title = '盗火 一个年轻的知识社区';
    // }, 1000);
  }
});

// <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// <script>
//   (adsbygoogle = window.adsbygoogle || []).push({
//     google_ad_client: "ca-pub-5887271219203522",
//     enable_page_level_ads: true
//   });
// </script>


// (adsbygoogle = window.adsbygoogle || []).push({
//   google_ad_client: "ca-pub-5887271219203522",
//   enable_page_level_ads: true
// });


// Hotjar Tracking Code for www.react.mobi
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1536562,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
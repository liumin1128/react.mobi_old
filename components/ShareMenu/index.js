import React, { PureComponent } from 'react';
import Menus from '@/components/Menus';

export default class ShareMenu extends PureComponent {
  render() {
    const {
      children,
      url = 'https://react.mobi',
      title = '盗火，一个年轻的知识社区',
      description = '盗火，一个年轻的知识社区',
      nickname = '本王今年八岁',
    } = this.props;

    return (
      <Menus
        options={[
          { label: '分享到新浪微博', key: 'weibo', onClick: () => { window.open(`http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank', 'width=600,height=400'); } },
          { label: '分享到QQ空间', key: 'qzone', onClick: () => { window.open(`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&desc=${encodeURIComponent(description)}&summary=${encodeURIComponent(description)}&site=${encodeURIComponent(nickname)}`, '_blank', 'width=600,height=400'); } },
          { label: '分享给QQ好友', key: 'qq', onClick: () => { window.open(`https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${title}&desc=&summary=${encodeURIComponent(description)}&site=${encodeURIComponent(nickname)}`, '_blank', 'width=770,height=620'); } },
        ]}
      >
        {children}
      </Menus>
    );
  }
}

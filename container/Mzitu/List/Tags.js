import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

@withRouter
export default class Tags extends PureComponent {
  handleChange = (_, value) => {
    const { router } = this.props;
    router.push({ pathname: '/mzitu', query: { type: value } });
  }

  render() {
    return (
      <Tabs
        // value={this.state.value}
        value="xinggan"
        indicatorColor="primary"
        textColor="primary"
        onChange={this.handleChange}
      >
        <Tab label="性感" value="xinggan" />
        <Tab label="清纯" value="mm" />
        <Tab label="最热" value="hot" />
        <Tab label="随缘" value="hotpage" />
      </Tabs>
    );
  }
}

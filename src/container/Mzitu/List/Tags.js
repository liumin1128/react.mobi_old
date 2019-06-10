import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

@withRouter
export default class Tags extends PureComponent {
  handleChange = (_, value) => {
    const { router } = this.props;
    router.push({ pathname: '/mzitu', query: { type: value } });
  }

  render() {
    const { router } = this.props;
    const { type } = router.query;
    return (
      <Fragment>
        {
          // <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          //   <Typography style={{ marginBottom: 0 }} variant="h5" gutterBottom>
          //   妹子图
          //   </Typography>
          <Tabs
            // value={this.state.value}
            value={type || 'xinggan'}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
            // centered
          >
            <Tab style={{ minWidth: 'auto' }} label="性感" value="xinggan" />
            <Tab style={{ minWidth: 'auto' }} label="清纯" value="mm" />
            <Tab style={{ minWidth: 'auto' }} label="最热" value="hot" />
            <Tab style={{ minWidth: 'auto' }} label="日本" value="japan" />
            <Tab style={{ minWidth: 'auto' }} label="台湾" value="taiwan" />
            <Tab style={{ minWidth: 'auto' }} label="随缘" value="hotpage" />
          </Tabs>
          // </div>
        }
        <Divider style={{ marginTop: -1 }} />
      </Fragment>
    );
  }
}

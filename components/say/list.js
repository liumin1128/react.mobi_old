import React from 'react';
import { connect } from 'react-redux';
import Item from './item';
import Loading from '../../components/loading';

function mapStateToProps({ say }) {
  const { list = [], isEnd } = say;
  return {
    list,
    isEnd,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    leave: () => {
      console.log('leave');
    },
    more: payload => dispatch({
      type: 'say/more',
      payload,
    }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(({
  list, isEnd, more, leave,
}) => {
  return (<div>
    {
      list.map(i => (
        <div key={i._id} >
          <Item {...i} />
        </div>))
    }
    <Loading
      isEnd={isEnd}
      onEnter={more}
      onLeave={leave}
    />
  </div>);
});

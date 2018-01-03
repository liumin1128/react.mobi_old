import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
// import { MenuItem } from 'material-ui/Menu';
// import Select from 'material-ui/Select';
import Input from '../../components/input';
import Button from '../../components/button';

const styles = (theme) => {
  console.log('theme');
  console.log(theme);
  return {
    formRoot: {
      padding: 32,
      '@media (min-width:600px)': {
        maxWidth: 400,
        // border: '1px red solid',
        margin: '0 auto',
      },
    },
    input: {
      marginBottom: 16,
      width: '100%',
      // border: '1px solid #ced4da',
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // padding: 1,
      // borderRadius: 3,
    },
    phone: {
      flex: 1,
      display: 'flex',
    },
    select: {
      width: 100,
    },
  };
};

@connect(({ news }) => ({
  current: news.current,
}))
@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes } = this.props;
    return (<div>
      <section>
        <div className={classes.formRoot}>
          <FormGroup>
            {
            // <div className={classes.phone}>
            //   <Select className={classes.select} value={10} displayEmpty name="age">
            //     <MenuItem value="">
            //       <em>None</em>
            //     </MenuItem>
            //     <MenuItem value={10}>Ten</MenuItem>
            //     <MenuItem value={20}>Twenty</MenuItem>
            //     <MenuItem value={30}>Thirty</MenuItem>
            //   </Select>
            //   <Input className={classes.input} placeholder="手机号" />
            // </div>
          }
            <Input className={classes.input} placeholder="手机号" />
            <Input className={classes.input} placeholder="密码" />
            <FormControlLabel
              control={
                <Checkbox
              // checked={this.state.checkedF}
              // onChange={this.handleChange('checkedF')}
                  value="checkedF"
                />
              }
              label="记住密码"
            />
          </FormGroup>
          <Button>登录</Button>
        </div>
      </section>
    </div>);
  }
}

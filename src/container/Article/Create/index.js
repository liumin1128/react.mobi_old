import React, { useRef } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import RichEditor from '@/components/Form/RichEditor';
import useStyles from './styles';
import formKeys from './formKeys';
import validate from './validate';

const json = '{"blocks":[{"key":"fnng1","text":"2121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"798as","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"49cc7","text":"212121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"image","mutability":"IMMUTABLE","data":{"src":"https://imgs.react.mobi/FlWDA30s6yWJNLdf3t1PFQDLRueF"}}}}';

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [ open, setOpen ] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const editor = useRef();

  function onSubmit(values) {
    const json2 = editor.current.getJSON();
    console.log('values');
    console.log(values);
    console.log(json2);
  }

  const initialValues = {
    title: '信息',
    description: '信息',
    type: '开发者',
    // cover: 'https://imgs.react.mobi/FlWDA30s6yWJNLdf3t1PFQDLRueF',
    tags: [ '11', '22' ],
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Persistent drawer
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Box>
          <Paper>
            <RichEditor
              initialValue={JSON.parse(json)}
              ref={editor}
            />
          </Paper>
        </Box>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
            <form id="createArticleForm" onSubmit={handleSubmit}>
              <Box p={3}>
                {
                  formKeys.map((i) => (
                    <Field
                      {...i}
                      key={i.key}
                      name={i.key}
                      label={i.label}
                      type="text"
                      margin="normal"
                      fullWidth
                    />
                  ))
                }
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  type="submit"
                >
                      保存
                </Button>
              </Box>
            </form>
          )}
        />
      </Drawer>
    </div>
  );
}

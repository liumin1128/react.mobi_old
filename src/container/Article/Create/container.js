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


export default function ArticleCreateContainer({
  values: { json, ...initialValues }, onSubmit,
}) {
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

  function _onSubmit(values) {
    const _json = editor.current.getJSON();
    onSubmit({
      josn: JSON.stringify(_json),
      ...values,
    });
  }

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
        <Box
          display="flex"
          flexDirection="column"
          height={'100%'}
        >
          <Box>
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
          </Box>
          <Box flex={1}>
            <Form
              onSubmit={_onSubmit}
              initialValues={initialValues}
              validate={validate}
              render={({ handleSubmit }) => (
                <form
                  style={{ height: '100%' }}
                  // id="createArticleForm"
                  onSubmit={handleSubmit}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    height={'100%'}
                    p={3}
                  >
                    <Box flex={1}>
                      {
                        formKeys.map((i) => {
                          if (i.render) return i.render();
                          return (
                            <Field
                              {...i}
                              key={i.key}
                              name={i.key}
                              label={i.label}
                              margin="normal"
                            />
                          );
                        })
                      }
                    </Box>

                    <Box>
                      <Box mt={2} />
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        fullWidth
                      >
                      保存
                      </Button>
                    </Box>
                  </Box>
                </form>
              )}
            />
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

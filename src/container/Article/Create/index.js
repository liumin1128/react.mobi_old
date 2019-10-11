
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Form, Field } from 'react-final-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Affix from '@/components/Affix';
import TextField from '@/components/Form/TextField';
import RichEditor from '@/components/Form/RichEditor';

import useStyles from './styles';
import formKeys from './formKeys';
import validate from './validate';

// const EidtorWithNoSSR = dynamic(
//   () => import('@/components/DraftEidtor'),
//   { ssr: false, loading: Skeleton },
// );


const json = '{"blocks":[{"key":"fnng1","text":"2121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"798as","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"49cc7","text":"212121","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"image","mutability":"IMMUTABLE","data":{"src":"https://imgs.react.mobi/FlWDA30s6yWJNLdf3t1PFQDLRueF"}}}}';

function Index() {
  const classes = useStyles();

  const editor = useRef();

  function onSubmit() {

  }
  return (
    <>
      <Form
        onSubmit={onSubmit}
        // initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
          <form id="createArticleForm" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item md={8} xs={12}>
                <Box>
                  <Paper>
                    <RichEditor
                      initialValue={JSON.parse(json)}
                      ref={editor}
                      // debug
                    />
                  </Paper>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Affix offsetTop={64}>

                  <Box>
                    <Paper>
                      <Box p={2}>
                        {
                        formKeys.map((i) => (
                          <Field
                            {...i}
                            key={i.key}
                            name={i.key}
                            label={i.label}
                            component={TextField}
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
                    </Paper>
                  </Box>
                </Affix>
              </Grid>
            </Grid>
          </form>
        )}
      />
      <Button
        onClick={() => {
          console.log('editor');
          console.log(editor.current.getJSON());
        }}
      >
Button
      </Button>
    </>
  );
}

// Index.Sider = FlatList;

export default Index;

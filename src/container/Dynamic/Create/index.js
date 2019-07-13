import React, { useState } from 'react';
import { DYNAMIC_CREATE, DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import Form from './Form';

const teststs = '3123<img src="https://imgs.react.mobi/emoticon/xjh/04.gif" class="emoji" alt="[xjh_04]"><div></div><img src="https://imgs.react.mobi/emoticon/xjh/04.gif" class="emoji" alt="[xjh_04]">2313<div></div>312<img src="https://imgs.react.mobi/emoticon/xjh/04.gif" class="emoji" alt="[xjh_04]"><img src="https://imgs.react.mobi/emoticon/xjh/10.gif" class="emoji" alt="[xjh_10]"><img src="https://imgs.react.mobi/emoticon/xjh/05.gif" class="emoji" alt="[xjh_05]">';

function html2text(html) {
  return html.replace(/(.*?)<img.*?alt="(.*?)">/ig, '$1$2')
    .replace(/<br>/ig, '')
    .replace(/<div>/ig, '\n')
    .replace(/<\/div>/ig, '');
}

function DynamicCreate() {
  const [ status, setStatus ] = useState('default');
  const createDynamic = useMutation(DYNAMIC_CREATE);
  return (
    <Form
      initialValues={{
        pictures: [
          // 'https://imgs.react.mobi/FugLdcExrep8XP8b9UGklaZS3_Xf',
          // 'https://imgs.react.mobi/FhSW2PlU3vcJg3s4rn8Ah6LOPZhh',
          // 'https://imgs.react.mobi/FppdySI-horw1rk81FCt2hHU_e8E',
          // 'https://imgs.react.mobi/FgXlzlzCZjWodl1-7VyTWQ89Lqek',
        ],
        content: html2text(teststs),
        // [xjh_04]321321`,
      }}
      onSubmit={(values, form) => {
        setStatus('loading');
        createDynamic({ input: values }, {
          update: (store, { data: { result: { status: code, message, data: result } } }) => {
            setStatus('default');
            if (code === 200) {
              if (form) form.reset();
              const data = store.readQuery({ query: DYNAMIC_LIST });
              data.list.unshift(result);
              store.writeQuery({ query: DYNAMIC_LIST, data });
            } else {
              Snackbar.error(message);
            }
          },
        });
      }}
      status={status}
    />
  );
}

export default DynamicCreate;

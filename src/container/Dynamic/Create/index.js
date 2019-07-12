import React, { useState } from 'react';
import { DYNAMIC_CREATE, DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import Form from './Form';

function DynamicCreate() {
  const [ status, setStatus ] = useState('default');
  const createDynamic = useMutation(DYNAMIC_CREATE);
  return (
    <Form
      initialValues={{
        pictures: [
          'https://imgs.react.mobi/FugLdcExrep8XP8b9UGklaZS3_Xf',
          'https://imgs.react.mobi/FhSW2PlU3vcJg3s4rn8Ah6LOPZhh',
          'https://imgs.react.mobi/FppdySI-horw1rk81FCt2hHU_e8E',
          'https://imgs.react.mobi/FgXlzlzCZjWodl1-7VyTWQ89Lqek',
        ],
        content: '即将于 8 月 30 日发售的 NS 游戏《星魂之链》已开启预购下载，游戏容量为 10.9GB。该游戏支持玩家使用「任天堂游戏兑换券（Nintendo Catalog Ticket）」购买。#任天堂#',
      }}
      onSubmit={(values, form) => {
        console.log('values');
        console.log(values);
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

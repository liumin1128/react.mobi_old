import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// import vCardsJS from "vcards-js";
// import XLSX from "xlsx";
import dynamicFile from 'dynamic-file';

export const xlsx2Json = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      const data = e.target.result;
      const temp = window.XLSX.read(data, {
        type: 'binary',
      });
      const result = window.XLSX.utils.sheet_to_json(temp.Sheets[temp.SheetNames[0]]);
      resolve(result);
    };
  });
};

export const json2vcf = (data, name) => {


  const url = window.URL.createObjectURL(
    new Blob([data], {
      type: ''
    })
  );
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', name + '.vcf');
  document.body.appendChild(link);
  link.click();
};

function getVcfData(list) {
  let string = ''
  list.map(i => {
    string+=`

BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${i.firstname}
N;CHARSET=UTF-8:;${i.firstname};;;
TEL;TYPE=WORK,VOICE:${i.phone}
REV:2019-11-20T10:27:13.060Z
END:VCARD

    `
  })

  return string;
}

class Index extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      status: 'loading'
    }
  }

  async componentDidMount() {

    await dynamicFile([
      '/xlsx.full.min.js',
    ]);

    this.setState({ status: 'done'})


  }

  handleChange = async (e) => {
    const { files } = e.target;
    const name = files[0].name.split('.')[0];
    const list = await xlsx2Json(files[0]);
    json2vcf(getVcfData(list), name);
  }

  render() {
    const { status } = this.state;

    if(status === 'loading') return (
    <Box p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    
    <CircularProgress />

    </Box>)

    return (
      <Box p={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography variant="h6">Excel转通讯录</Typography>
      <Box mb={3}></Box>

      <Button variant="contained" color="primary" mt={2} style={{ width:'100%', maxWidth: '300px', textAlign:'center', padding: 16,position: 'relative', fontWeight: 'bold', borderRadius: 32 }}>
        <input style={{ position: 'absolute', left: 0, top: 0, height: '100%',opacity: 0, width: '100%',backgroundColor: 'red' }} onChange={this.handleChange} type="file" />
      点击转换
      </Button>
      <Box mb={3}></Box>
      <a href={'/tamplate.xlsx'} style={{ color: '#999'}}>点击下载模板</a>
    </Box>
  )
  }
}

export default Index;

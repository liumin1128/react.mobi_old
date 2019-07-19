import Link from 'next/link';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import NavTabs from '@/components/NavTabs';
import DynamicList from '@/container/Dynamic/List';
import useStyles from './styles';


function Profile() {
  const classes = useStyles();

  return (
    <Box>
      <Card>
        <Box className={classes.root} p={2}>
          <Typography variant="h6">111212</Typography>
        </Box>
        <NavTabs
          navList={[
            { label: '动态', pathname: '/' },
            { label: '关注', pathname: '/2' },
            { label: '收藏', pathname: '/3' },
          ]}
        />
      </Card>

      <Box mt={2} />
      <DynamicList />
    </Box>
  );
}

export default Profile;

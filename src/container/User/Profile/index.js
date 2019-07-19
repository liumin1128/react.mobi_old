import Link from 'next/link';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NavTabs from '@/components/NavTabs';
import useStyles from './styles';


function Profile() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.root} p={2}>
        <Typography variant="h6">111212</Typography>
      </Box>
      <NavTabs
        navList={[
          // { label: '推荐', pathname: '/' },
          { label: '最新', pathname: '/' },
          { label: '最热', pathname: '/2' },
          // { label: '前端', pathname: '/web' },
          // { label: '后端', pathname: '/node' },
          // { label: '游戏', pathname: '/game' },
          // { label: '动画', pathname: '/cartoon' },
          // { label: '电影', pathname: '/movie' },
          // { label: '读书', pathname: '/book' },
          // { label: '生活', pathname: '/life' },
        ]}
      />
    </Box>
  );
}

export default Profile;

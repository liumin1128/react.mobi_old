import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default ({ children, title }) => (
  <Card>
    {title && (
      <>
        <Box p={2}>
          <Typography>{title}</Typography>
        </Box>
        <Divider />
      </>
    )}
    <Box p={2}>{children}</Box>
  </Card>
);

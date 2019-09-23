import React from 'react';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

function Alert({ type, onClose, message, description, closable }) {
  return (
    <>
      <Card color="red" style={{ background: 'rgba(0,0,0,0.1)' }}>
        <ButtonBase style={{ width: '100%' }}>
          <Box p={1} display="flex" justifyContent="center">
            <Typography variant="caption">
              {message}
            </Typography>
          </Box>
        </ButtonBase>
      </Card>
    </>
  );
}


export default Alert;

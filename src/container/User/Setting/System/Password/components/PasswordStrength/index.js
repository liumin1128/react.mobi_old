import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { checkPasswordStrength } from '@/utils/common';


function PasswordStrength({ password = '' }) {
  const strength = checkPasswordStrength(password);
  const color = {
    0: '#a8071a',
    1: '#ffec3d',
    2: '#bae637',
    3: '#73d13d',
    4: '#52c41a',
  };
  const strList = {
    0: '',
    1: '弱',
    2: '一般',
    3: '强',
    4: '非常强',
  };
  return (
    <Box width={120} display="flex" justifyContent="flex-end" alignItems="center">
      <Typography variant="caption" style={{ fontSize: 10 }}>
        {strList[strength]}
      </Typography>
      {
            new Array(strength).fill('x').map((_, idx) => idx).map(i => (
              <Box
                key={i}
                ml={0.125}
                mb={0.125}
                bgcolor={color[strength]}
                width={10}
                height={10}
              />
            ))
        }
    </Box>
  );
}

export default PasswordStrength;

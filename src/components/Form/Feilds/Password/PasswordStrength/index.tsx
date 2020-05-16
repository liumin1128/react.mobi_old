import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

function checkPasswordStrength(password: string) {
  if (password.length < 8) {
    return 0
  }
  let strength = 0
  if (password.match(/([0-9])+/)) {
    strength += 1
  }
  if (password.match(/([a-z])+/)) {
    strength += 1
  }
  if (password.match(/([A-Z])+/)) {
    strength += 1
  }
  if (password.match(/[^a-zA-Z0-9]+/)) {
    strength += 1
  }
  // const reg = new RegExp(
  //   "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]",
  // );
  // if (password.match(reg)) {
  //   strength += 1;
  // }
  return strength
}

const color = {
  0: '#a8071a',
  1: '#ffec3d',
  2: '#bae637',
  3: '#73d13d',
  4: '#52c41a',
}
const strList = {
  0: '',
  1: '弱',
  2: '一般',
  3: '强',
  4: '非常强',
}

function PasswordStrength({ password = '' }: { password: string }) {
  const strength = checkPasswordStrength(password) as 0 | 1 | 2 | 3 | 4

  return (
    <Box width={120} display='flex' justifyContent='flex-end' alignItems='center'>
      <Typography variant='caption' style={{ fontSize: 10 }}>
        {strList[strength]}
      </Typography>
      {new Array(strength)
        .fill('x')
        .map((_, idx) => idx)
        .map(i => (
          <Box key={i} ml={0.125} mb={0.125} bgcolor={color[strength]} width={10} height={10} />
        ))}
    </Box>
  )
}

export default PasswordStrength

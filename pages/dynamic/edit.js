import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import Content from '@/container/Dynamic/Edit';

function DynamicDetail() {
  return (
    <Box display="flex" justifyContent="center">
      <Box width="100%" maxWidth={600}>
        <Card>
          <Box p={2}>
            <Content />
          </Box>
        </Card>
      </Box>
    </Box>

  );
}

export default DynamicDetail;

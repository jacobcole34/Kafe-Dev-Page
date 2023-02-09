import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import Caro from '../assets/Caro.png';
import Jacob from '../assets/Jacob.png';
import Kp from '../assets/KP.png';
import Oliver from '../assets/Oliver.png';
import Yirou from '../assets/Yirou.png';

function Team(){
  return( 
    <Container spacing={2}> 

      <Typography variant='h5'>Meet the Team</Typography>
      <Stack direction="row" spacing={5} marginTop={5}>
        <Button 
          sx= {{ 
            minHeight: 200, 
            minWidth: 200, 
            marginBottom: 0 }} 
          style= {{backgroundImage:`url(${Caro})`}}>
        </Button>

        <Button 
          sx= {{ 
            minHeight: 200, 
            minWidth: 200, 
            marginBottom: 0 }} 
          style= {{backgroundImage:`url(${Jacob})`}}>
        </Button>

        <Button 
          sx= {{ 
            minHeight: 200, 
            minWidth: 200, 
            marginBottom: 0 }} 
          style= {{backgroundImage:`url(${Kp})`}}>
        </Button>

        <Button 
          sx= {{ 
            minHeight: 200, 
            minWidth: 200, 
            marginBottom: 0 }} 
          style= {{backgroundImage:`url(${Oliver})`}}>
        </Button>

        <Button 
          sx= {{ 
            minHeight: 200, 
            minWidth: 200, 
            marginBottom: 0 }} 
          style= {{backgroundImage:`url(${Yirou})`}}>
        </Button>
      </Stack>

      <Stack direction="row" spacing={5} marginLeft={7}>
        <Typography variant="h5" minWidth={200}>Caro</Typography>
        <Typography variant="h5" minWidth={200}>Jacob</Typography>
        <Typography variant="h5" minWidth={200}>Kpange </Typography>
        <Typography variant="h5" minWidth={200}>Oliver</Typography>
        <Typography variant="h5" minWidth={200}>Yirou</Typography>
      </Stack>
    </Container>  

  );
}


export default Team;


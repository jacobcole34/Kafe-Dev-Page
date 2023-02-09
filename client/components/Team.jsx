import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
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
        <Typography variant="h5" minWidth={200}>Caro
        <Button variant="text" size="large" href="https://www.linkedin.com/in/carolina-llano-g%C3%B3mez/" startIcon={<LinkedInIcon fontSize="large"/>}></Button>
        </Typography>

        <Typography variant="h5" minWidth={200}>Jacob
        <Button variant="text" size="large" href="https://github.com/oslabs-beta/Kafe" startIcon={<GitHubIcon />}></Button>
        <Button variant="text" size="large" href="https://www.linkedin.com/company/kafe-kafka/" startIcon={<LinkedInIcon fontSize="large"/>}></Button>
        </Typography>

        <Typography variant="h5" minWidth={200}>Kpange
        <Button variant="text" size="large" href="https://github.com/oslabs-beta/Kafe" startIcon={<GitHubIcon />}></Button>
        <Button variant="text" size="large" href="https://www.linkedin.com/company/kafe-kafka/" startIcon={<LinkedInIcon fontSize="large"/>}></Button>
        </Typography>

        <Typography variant="h5" minWidth={200}>Oliver
        <Button variant="text" size="large" href="https://github.com/oslabs-beta/Kafe" startIcon={<GitHubIcon />}></Button>
        <Button variant="text" size="large" href="https://www.linkedin.com/company/kafe-kafka/" startIcon={<LinkedInIcon fontSize="large"/>}></Button>
        </Typography>

        <Typography variant="h5" minWidth={200}>Yirou
        <Button variant="text" size="large" href="https://github.com/oslabs-beta/Kafe" startIcon={<GitHubIcon />}></Button>
        <Button variant="text" size="large" href="https://www.linkedin.com/company/kafe-kafka/" startIcon={<LinkedInIcon fontSize="large"/>}></Button>
        </Typography>
      </Stack>
    </Container>

  );
}


export default Team;


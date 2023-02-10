/* eslint-disable indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Typography, Button, TextField, Stack, InputAdornment } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
};

const btnStyle = {minWidth: 200,
  textTransform: 'unset',
  color: 'palette.primary.dark',
  fontSize: 18,
  marginLeft: 10,
};

function Banner(){
  const handleClick = () => {
    const textField = document.querySelector('#text-field');
    textField.select();
    document.execCommand('copy');

    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 1000);
  };

  const [copy, setCopy] = useState(false);


  return(
    <Grid container spacing={2}>
      <Stack
        direction="column"
        spacing={5}
        margin={10}>

        <Container >
          <Typography variant="h1"><b>Kafé</b></Typography>
          <Typography variant="h2">an <b>open source</b> monitoring, visualization, and management tool for Apache Kafka </Typography>
        </Container>

        <Stack
          direction="row"
          spacing={5}>
          <Button
            variant="contained"
            sx={btnStyle}>
              Get Started</Button>
          <TextField id='text-field' value= 'npm install kafe-dlq' sx={{fontSize: 18}} InputProps={{
            endAdornment: (
              copy ? <div> Copied! </div> : <InputAdornment position="end">
                <ContentCopyIcon />
              </InputAdornment>
            ),
          }} onClick = {handleClick}></TextField>
        </Stack>

      </Stack>
    </Grid>

  );
}

export default Banner;


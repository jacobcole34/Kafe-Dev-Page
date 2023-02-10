import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Team from '../components/Team';
import Features from '../components/Features';

function Dashboard(){

  const featuresRef = useRef(null); //represents features section
  const teamRef = useRef(null); //represents team section

  // console.log('line 13', featuresRef.current);

  // useEffect(() => {
  //   const element = featuresRef.current;
  //   console.log('line 17',  element); //
  // }, []);

  const scrollToFeatures = (e) => {
    featuresRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  const scrollToTeam = () => {
    teamRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return(
    <>
      <Grid container sx={{ minHeight: '100%'}}>

        <Grid item md={12} sx={{ minHeight: '120px'}}>
          <Navbar
          scrollToFeatures = {scrollToFeatures}
          scrollToTeam = {scrollToTeam}/>
        </Grid>

        <Grid item md={12} sx={{ background: 'linear-gradient(to top, #CCE1EB, white)', minHeight: '400px'}}>
          <Banner />
        </Grid>

        <Grid item md={12} sx={{ bgcolor: 'primary.light', minHeight: '50vh' }}>
          <div ref={featuresRef}>
            <Features/>
          </div>
        </Grid>

        <Grid item md={12} sx={{ bgcolor: 'primary.light', minHeight: '50vh' }}>
          <div ref={teamRef}>
            <Team/>
          </div>
        </Grid>

      </Grid>
    </>
  );
}

export default Dashboard;
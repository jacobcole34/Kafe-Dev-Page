import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
// import clusterPNG from '../assets/features/cluster_hierarchy_tree.png';
import clusterGif from '../assets/features/d3.gif';
import realTimeGif from '../assets/features/clusterRealTime.gif';
import clusterManagerGif from '../assets/features/clusterManager.gif';
import dlqGif from '../assets/features/dlq.gif';


function Features() {

  return(
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4}}>
      <Typography variant='h2'><b>Features</b></Typography>
      <br></br>

      <Grid spacing={8} maxWidth="xl" sx={{ mt: 4, mb: 4}}>
        <Typography variant='h3'> Cluster Tree </Typography>
        <Typography variant='h5' sx={{mb: 5}}> A graphical representation of your entire Kafka cluster, rendered with a D3 tree </Typography>
        <Grid style={{display: 'flex'}}>
           <Grid container spacing={2}>
             <img src={clusterGif}/>
           </Grid>
           <Grid spacing={3}>
             <Typography variant='h5' sx={{mb: 5}}> • Navigate to the "Home" tab to view your Kafka cluster rendered as a tree </Typography>
             <Typography variant='h5' sx={{mb: 5}}> • Each node can be expanded/collapsed for viewing convenience </Typography>
             <Typography variant='h5' sx={{mb: 5}}> • Quickly identify which broker each topic partition is assigned to </Typography>
           </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Typography variant='h3'> Realtime Metrics </Typography>
        <Typography variant='h5' sx={{mb: 5}}>Real time charts to track important metrics that reflect the health of your Kafka cluster.</Typography>
        <Grid style={{display: 'flex'}}>
            <Box>
              <Typography variant='h5'> • Kafe provides metrics for your cluster and individual brokers </Typography>
              <Typography variant='h5'> • Keep track of CPU and memory consumption and visualize the overall health of your Kafka cluster in "Cluster Summary" </Typography>
              <Typography variant='h5'> • Monitor each broker's traffic volume while tracking producer and consumer lag</Typography>
            </Box>
            <img src={realTimeGif}/>
        </Grid>
      </Grid>

      <Grid>
        <Typography variant='h3' sx={{mb: 5}}> Cluster Manager </Typography>
        <Typography variant='h5'>An intuitive, easy-to-use GUI tool to manage your cluster.</Typography>
         <Grid container spacing={3} style={{display: 'flex'}}>
            <Grid item xs={12} md={6}>
              <img src={clusterManagerGif}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h6'> • Monitor and manage your topics in your Kafka cluster </Typography>
              <Typography variant='h6'> • Insights to your partition replicas by topic</Typography>
              <Typography variant='h6'> • Create topic, delete topic, delete messages and reassign partition </Typography>
            </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Typography variant='h3' sx={{mb: 5}}> Dead Letter Queue </Typography>
        <Typography variant='h5'> Kafe offers troubleshooting support and failed message processing with a Dead Letter Queue implementation. Visited our companion application Kafe-DLQ for more information.</Typography>
        <Grid style={{display: 'flex'}}>

            <Box item xs={12} md={6}>
              <Typography variant='h6'> • Dead letter queue table to display all faield messages by topic </Typography>
              <Typography variant='h6'> • Dynamic analytical tools to view troubled topic breakdown </Typography>
              <Typography variant='h6'> • Visualization of trailing failed messages with time select option </Typography>
            </Box>
            <img src={dlqGif}/>
        </Grid>

      </Grid>

      {/* <Typography variant='h5'>
      Kafka is impressive without a doubt, but it does carry a set of implementation challenges–especially for engineers new to the platform.
      First and foremost, Kafka is headless, lacking a GUI interface or any readable way to interact with the application outside the command line. Second, Kafka is complex and carries a significant amount of maintenance overhead. A Kafka cluster requires continual load rebalancing for optimal performance. And finally, as a living data ecosystem, Kafka requires significant monitoring and visibility to ensure its ongoing health.
      Kafe is a free and open source.
        <br></br>
        <br></br>
      Kafè allows Kafka engineers to: <br></br>
        1.  Visualize the Kafka cluster through its brokers, topics, and replicas. <br></br>
        2.  Monitor health metrics like CPU, memory usage, and in-sync replicas.<br></br>
        3.  Create and delete topics.<br></br>
        4.  Reassign topic replicas. <br></br>
        5.  Track unconsumed messages via the Dead Letter Queue (DLQ), alerting engineers when consumer applications are failing to process streaming data.
        <br></br> <br></br>

      Kafè comes packaged with a pre-configured Docker container, composed of three Kafka brokers, Zookeeper, and Prometheus to enable data scraping from the Java Virtual Machine (JVM).
      Engineers eager to manage and monitor Kafka via Kafè need only compose up the container and start working with the tool.
        <br></br><br></br>

      </Typography> */}

    </Container>
  );
}

export default Features;
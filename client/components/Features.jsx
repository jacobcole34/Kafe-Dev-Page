import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import clusterGif from '../assets/features/d3.gif';
import realTimeGif from '../assets/features/clusterRealTime.gif';
import clusterManagerGif from '../assets/features/clusterManager.gif';
import dlqGif from '../assets/features/dlq.gif';
import { forwardRef } from 'react';


function Features(featuresRef) {

return(

<Container>
<Stack
   direction="column"
   marginTop={6}
   spacing={5}>
    <Typography variant='h5'sx={{color:'primary.dark'}}><b>Features</b></Typography>
    </Stack>
    <br></br>
    <Accordion defaultExpanded={true} sx={{ color:'primary.dark', backgroundColor:'primary.light', boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant='h6'>Cluster Tree</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6'>
          A graphical representation of your entire Kafka cluster, rendered with a D3 tree.
          </Typography>
          <Stack marginTop={3} direction="row" spacing={5}>
          <img src={clusterGif}/>
          <Stack direction ="column" spacing={2}>
          <FreeBreakfastIcon/>
          <Typography variant='h6'>Navigate to the "Home" tab to view your Kafka cluster rendered as a tree. </Typography>
          <FreeBreakfastIcon/>
       <Typography variant='h6'> Each node can be expanded/collapsed for viewing convenience. </Typography>
       <FreeBreakfastIcon/>
       <Typography variant='h6'> Quickly identify which broker each topic partition is assigned to. </Typography>
          </Stack>
       </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ color:'primary.dark', backgroundColor:'primary.light', boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant='h6'>Realtime Metrics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6'>
          Real time charts to track important metrics that reflect the health of your Kafka cluster.
          </Typography>
          <Stack marginTop={3} direction="row" spacing={5}>
          <img src={realTimeGif}/>
          <Stack direction ="column" spacing={2}>
          <FreeBreakfastIcon sx={{ color:'secondary.dark'}}/>
          <Typography variant='h6'> Kafe provides metrics for your cluster and individual brokers. </Typography>
          <FreeBreakfastIcon/>
       <Typography variant='h6'> Keep track of CPU and memory consumption and visualize the overall health of your Kafka cluster in "Cluster Summary." </Typography>
       <FreeBreakfastIcon/>
       <Typography variant='h6'> Monitor each broker's traffic volume while tracking producer and consumer lag. </Typography>
          </Stack>
       </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ color:'primary.dark', backgroundColor:'primary.light', boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant='h6'>Cluster Manager</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6'>
         An intuitive, easy-to-use GUI tool to manage your cluster.
          </Typography>
          <Stack marginTop={3} direction="row" spacing={5}>
          <img src={clusterManagerGif}/>
          <Stack direction ="column" spacing={2}>
          <FreeBreakfastIcon/>
          <Typography variant='h6'> Monitor and manage the topics in your Kafka cluster. </Typography>
          <FreeBreakfastIcon/>
       <Typography variant='h6'> Each node can be expanded/collapsed for viewing convenience. </Typography>
       <FreeBreakfastIcon/>
       <Typography variant='h6'> Quickly identify which broker each topic partition is assigned to. </Typography>
          </Stack>
       </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ color:'primary.dark', backgroundColor:'primary.light', boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography variant='h6'>Dead Letter Queue </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6'>
          Kafe offers troubleshooting support and failed message processing with a Dead Letter Queue implementation. Visited our companion application Kafe-DLQ for more information.
          </Typography>
          <Stack marginTop={3} direction="row" spacing={5}>
          <img src={dlqGif}/>
          <Stack direction ="column" spacing={2}>
          <FreeBreakfastIcon/>
          <Typography variant='h6'>Dead letter queue table to display all failed messages by topic. </Typography>
          <FreeBreakfastIcon/>
       <Typography variant='h6'> Insights to your partition replicas by topic. </Typography>
       <FreeBreakfastIcon/>
       <Typography variant='h6'> Visualization of trailing failed messages with time select option. </Typography>
          </Stack>
       </Stack>
        </AccordionDetails>
      </Accordion>

</Container>
  );
}

export default Features;


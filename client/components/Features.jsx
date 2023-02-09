import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';

function Features() {
  return(
    <Container>
      <Typography variant='h5'><b>Features</b></Typography>
      <br></br>
      <Typography variant='h5'> 
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
            
      </Typography>
      
    </Container>
  );
}

export default Features;
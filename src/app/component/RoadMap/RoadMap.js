import React from 'react';
import './RoadMap.scss';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const RoadMap = () => {
  const line = {
    display: 'flex',
    'padding-left': 0,
  };

  const line1 = {
    display: 'flex',
    'padding-right': '0',
    margin: 0,
    transform: 'translate(-100%, 0px)',
  };

  const paperstyle = {
    width: '100%',
    margin: '0',
    height: '100%',
  };

  const dot = {
    transform: 'rotate(180deg)',
  };

  return (
    <Timeline align="left" className="RoadMap">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent style={line}>
          <div className="RoadMap-box"> </div>
          <div className="RoadMap-Inner">
            <div className="RoadMap-Circle"></div>
          </div>

          <Paper className="RoadMap-Card" style={paperstyle}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent style={line1}>
          <Paper className="RoadMap-Card" style={paperstyle}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
          <div className="RoadMap-Inner">
            <div className="RoadMap-Circle"></div>
          </div>
          <div className="RoadMap-box"> </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent style={line}>
          <div className="RoadMap-box"> </div>
          <div className="RoadMap-Inner">
            <div className="RoadMap-Circle"></div>
          </div>

          <Paper className="RoadMap-Card" style={paperstyle}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
};

export default RoadMap;

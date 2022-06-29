import React, { useRef, useEffect, useState } from 'react';
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
  const [offset, setOffset] = useState(0);
  const [height, setHeight] = useState(0);
  const [animationHeight, setanimationHeight] = useState(100);
  const ref = useRef(null);


  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

useEffect(() => {
  // let ola = height + (offset * 4) + animationHeight;
  // if(height*16 >= animationHeight) {
    
    
  //   setanimationHeight(ola);

  // }
  
  if (offset < prevCount ) { // Up
    const decrementHeight = animationHeight - height;

    setanimationHeight(decrementHeight);

    if (ref.current.offsetTop >= offset) {
      setanimationHeight(100);
    }
  }
  
  if (offset > prevCount && height*64 >= animationHeight) {// Down
    const incrementHeight = height + animationHeight;

    setanimationHeight(incrementHeight);
  }

  
console.log(ref.current.offsetTop )

}, [offset]);

useEffect(() => {
  setHeight(ref.current.clientHeight * 7 / 64);

  // ref.current.clientHeight;
});

const usePrevious = (data) => {
  const ref = React.useRef();

  useEffect( ()=> {
    ref.current = data
  }, [data])

  return ref.current
}

const prevCount = usePrevious(offset);

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
    padding: '20px 20px'
  };

  const dot = {
    transform: 'rotate(180deg)',
  };

  const scrollAnimation = {
    height: animationHeight + 'px'
  };



  return (
    <Timeline align="left" className="RoadMap" >
      {height}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector ref={ref} />
          <div className='RoadMap-ScrollLine' style={scrollAnimation}></div>
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

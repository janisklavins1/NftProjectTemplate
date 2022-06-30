import React, { useRef, useEffect, useState } from 'react';
import './RoadMapItem.scss'
import {
  useAnimation,
  motion
} from 'framer-motion/dist/framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FaRegClock, FaCheckCircle } from 'react-icons/fa';

const RoadMapItem = ({ Header, Content, Direction, AnimationStart, Done }) => {
  const controls = useAnimation();
  const [refe, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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

    
  };

  const verLineAnimation = {
    visible: {
      'background-color': 'yellow',
      transition: { duration: 2 },
      height: '500px',
      'z-index': '201',
    },
    hidden: { 'background-color': 'pink', height: '100px' },
  };

  const horLineAnimation = {
    visible: {
      transition: { 'border-color': '6s linear' },
      'border-color': ' yellow',
      'z-index': '200',
    },
    hidden: { 'border-bottom': '3px solid black' },
  };

  const AnimatedLine = () => {
    if (AnimationStart) {
      return (
        <motion.div
          className="RoadMap-ScrollLine"
          ref={refe}
          animate={controls}
          variants={verLineAnimation}
          initial="hidden"
        ></motion.div>
      );
    }
  };

  const ConentText = () => {
    if (Done) {
        return(
            <>
                <FaCheckCircle /> {Content}
            </>
        );
    }
    
    return(
        <>
            <FaRegClock /> {Content}
        </>
    );
  };

  const ItemRight = () => {
    return (
      <TimelineItem className="RoadMapItem-">
        <TimelineSeparator>
          <TimelineConnector />
          {AnimatedLine()}
        </TimelineSeparator>

        <TimelineContent style={line}>
          <motion.div
            className="RoadMap-box"
            animate={controls}
            variants={horLineAnimation}
            initial="hidden"
          ></motion.div>
          <div className="RoadMap-Inner">
            <div className="RoadMap-Circle"></div>
          </div>

          <motion.Paper className="RoadMapItem-Card" style={paperstyle}>
            <div className='RoadMapItem-Card-Content'>
              <div className="RoadMapItem-Card-Header">{Header}</div>
              <Typography className='RoadMapItem-Card-Text'>{ConentText()}</Typography>
            </div>
          </motion.Paper>
        </TimelineContent>
      </TimelineItem>
    );
  };

  const ItemLeft = () => {
    return (
      <TimelineItem className="RoadMapItem-">
        <TimelineSeparator>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent style={line1}>
          <Paper className="RoadMap-Card" style={paperstyle}>
            <Typography variant="h6" component="span">
              {Header}
            </Typography>
            <Typography>{ConentText()}</Typography>
          </Paper>
          <div className="RoadMap-Inner">
            <div className="RoadMap-Circle"></div>
          </div>
          <motion.div
            className="RoadMap-box"
            animate={controls}
            variants={horLineAnimation}
            initial="hidden"
          ></motion.div>
        </TimelineContent>
      </TimelineItem>
    );
  };

  if (Direction === 'right') {
    return(

        ItemRight()

    );
  }

  if (Direction === 'left') {
    return ItemLeft();
  }

  return <></>;
};

export default RoadMapItem;

import React, {  useEffect } from 'react';
import './RoadMapItem.scss';
import { useAnimation, motion } from 'framer-motion/dist/framer-motion';
import { useInView } from 'react-intersection-observer';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import { FaRegClock, FaCheckCircle } from 'react-icons/fa';

const RoadMapItem = ({
  Time,
  Header,
  Content,
  Number,
  Direction,
  AnimationStart,
  Done,
  Alternate,
  MobileScreen,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
    margin: '0',
  };

  const verLineAnimation = {
    visible: {
      'background-color': 'yellow',
      transition: { duration: 2 },
      height: '100vh',
      'z-index': '201',
      'border-radius': '10px',
    },
    hidden: {
      'background-color': 'pink',
      height: '100px',
      'border-radius': '10px',
    },
  };

  const horLineAnimation = {
    visible: {
      transition: { 'border-color': '6s linear' },
      'border-color': ' yellow',
      'z-index': '200',
    },
    hidden: { 'border-bottom': '3px solid white' },
  };

  const AnimatedLine = () => {
    if (AnimationStart) {
      return (
        <motion.div
          className="RoadMapItem-ScrollLine"
          ref={ref}
          animate={controls}
          variants={verLineAnimation}
          initial="hidden"
        ></motion.div>
      );
    }
  };

  const ConentText = () => {
    if (Done) {
      return (
        <div className="RoadMapItem-Card-Font">
          <div>
            <FaCheckCircle /> {Content}
          </div>
          <div>
            <FaCheckCircle /> {Content}
          </div>
          <div>
            <FaCheckCircle /> {Content}
          </div>
          <div>
            <FaCheckCircle /> {Content}
          </div>
        </div>
      );
    }

    return (
      <div className="RoadMapItem-Card-Font">
        <p>
          <FaRegClock /> {Content}
        </p>
      </div>
    );
  };

  const ItemRight = () => {
    return (
      <TimelineItem className="RoadMapItem-">
        <TimelineSeparator>
          <TimelineConnector className="RoadMapItem-Connector" />
          {AnimatedLine()}
        </TimelineSeparator>

        <TimelineContent style={line}>
          <motion.div
            className="RoadMapItem-Box"
            animate={controls}
            variants={horLineAnimation}
            initial="hidden"
          ></motion.div>
          <div className="RoadMapItem-Inner">
            <div className="RoadMapItem-Circle"></div>
          </div>

          <motion.Paper className="RoadMapItem-Card" style={paperstyle}>
            <div className="RoadMapItem-Card-Content">
              <div className="RoadMapItem-Card-Header">{Header}</div>
              <Typography className="RoadMapItem-Card-Text">
                {ConentText()}
              </Typography>
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
          <TimelineConnector className="RoadMapItem-Connector" />
        </TimelineSeparator>

        <TimelineContent style={line1}>
          <motion.Paper className="RoadMapItem-Card" style={paperstyle}>
            <div className="RoadMapItem-Card-Content">
              <div className="RoadMapItem-Card-Header">{Header}</div>
              <Typography className="RoadMapItem-Card-Text">
                {ConentText()}
              </Typography>
            </div>
          </motion.Paper>
          <div className="RoadMapItem-Inner">
            <div className="RoadMapItem-Circle"></div>
          </div>
          <motion.div
            className="RoadMapItem-Box"
            animate={controls}
            variants={horLineAnimation}
            initial="hidden"
          ></motion.div>
        </TimelineContent>
      </TimelineItem>
    );
  };

  const ItemAlternateRight = () => {
    return (
      <TimelineItem ref={ref}>
        {!MobileScreen && (
          <TimelineOppositeContent>
            <Typography variant="body1" className="RoadMapItemV2-Right-Time" component={'span'}>
              <div className="RoadMapItemV2-Right-Time-Card">{Time}</div>
            </Typography>
          </TimelineOppositeContent>
        )}

        <TimelineSeparator>
          <TimelineDot className="RoadMapItemV2-Dot">
            <FaRegClock />
          </TimelineDot>
          <TimelineConnector className="RoadMapItemV2-Line" />
        </TimelineSeparator>
        <TimelineContent className="RoadMapItemV2-CardSpacing">
          <motion.div
            className="RoadMapItemV2-Right-Content"
            animate={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="RoadMapItemV2-Right-Content-Container">
              <Typography
                variant="h6"
                component="h1"
                className="RoadMapItemV2-Header"
              >
                <span className="RoadMapItemV2-Number">{Number}.</span> {Header}
              </Typography>
              <Typography className="RoadMapItemV2-Text">{Content}</Typography>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    );
  };

  const ItemAlternateLeft = () => {
    return (
      <TimelineItem>
        {!MobileScreen && (
          <TimelineOppositeContent>
            <Typography variant="body1" className="RoadMapItemV2-Left-Time" component={'span'}>
              <div className="RoadMapItemV2-Left-Time-Card">{Time}</div>
            </Typography>
          </TimelineOppositeContent>
        )}

        <TimelineSeparator>
          <TimelineDot className="RoadMapItemV2-Dot">
            <FaRegClock />
          </TimelineDot>
          <TimelineConnector className="RoadMapItemV2-Line" />
        </TimelineSeparator>
        <TimelineContent className="RoadMapItemV2-CardSpacing">
          <motion.div
            animate={{ scale: 0.5 }}
            className="RoadMapItemV2-Left-Content"
            whileInView={{ scale: 1 }}
          >
            <div className="RoadMapItemV2-Left-Content-Container">
              <Typography
                variant="h6"
                component="h1"
                className="RoadMapItemV2-Header"
              >
                <span className="RoadMapItemV2-Number">{Number}.</span> {Header}
              </Typography>
              <Typography className="RoadMapItemV2-Text">{Content}</Typography>
            </div>
          </motion.div>
        </TimelineContent>
      </TimelineItem>
    );
  };

  if (!Alternate) {
    if (Direction === 'right') {
      return ItemRight();
    }

    if (Direction === 'left') {
      return ItemLeft();
    }
  }

  // For Alternate mode you still choose direction to apply correct style
  if (Alternate) {
    if (Direction === 'right') {
      return ItemAlternateRight();
    }
    if (Direction === 'left') {
      return ItemAlternateLeft();
    }
  }

  return <></>;
};

export default RoadMapItem;

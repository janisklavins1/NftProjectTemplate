import React, { useRef, useEffect, useState } from 'react';
import './RoadMap.scss';
import Timeline from '@material-ui/lab/Timeline';
import RoadMapItem from '../RoadMapItem/RoadMapItem';


const RoadMap = () => {

  return (
    <Timeline align="left" className="RoadMap">
      <RoadMapItem Header="Test" Content={'asd'} Direction="right" AnimationStart Done />
      <RoadMapItem Header="Test" Content={'asd'} Direction="left" Done/>
      <RoadMapItem Header="Test" Content={'asd'} Direction="right" Done={false}/>
      <RoadMapItem Header="Test" Content={'asd'} Direction="left" Done={false}/>
      <RoadMapItem Header="Test" Content={'asd'} Direction="right" Done={false}/>
      <RoadMapItem Header="Test" Content={'asd'} Direction="left" Done={false}/>
    </Timeline>
  );
};

export default RoadMap;

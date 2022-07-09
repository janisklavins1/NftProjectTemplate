import React, { useRef, useEffect, useState } from 'react';
import './RoadMap.scss';
import Timeline from '@material-ui/lab/Timeline';
import RoadMapItem from '../RoadMapItem/RoadMapItem';
import { useMediaQuery } from 'react-responsive';

const RoadMap = ({version}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 910px)` });

  if (version === 1) {
    return (
      <div className="RoadMap-Container">
        <div className="RoadMap-TimeLine">
          <Timeline align="left">
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Direction="right"
              AnimationStart
              Done

            />
            <RoadMapItem Header="Test" Content={'asd'} Direction="left" Done />
            <RoadMapItem
              Header="Test"
              Content={'asd'}
              Direction="right"
              Done={false}
            />
            <RoadMapItem
              Header="Test"
              Content={'asd'}
              Direction="left"
              Done={false}
            />
            <RoadMapItem
              Header="Test"
              Content={'asd'}
              Direction="right"
              Done={false}
            />
            <RoadMapItem
              Header="Test"
              Content={'asd'}
              Direction="left"
              Done={false}
            />
          </Timeline>
        </div>
      </div>
    );
  }

  if (version === 2) {
    return (
      <div className="RoadMap-Container">
        <div className="RoadMap-TimeLine">
          <Timeline
            align={!isMobile ? 'alternate' : 'left'}
            className="RoadMapV2"
          >
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="right"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="left"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="right"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="left"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="right"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="left"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="right"
              MobileScreen={isMobile}
            />
            <RoadMapItem
              Header="Test"
              Content={'asdasdaszxc zczxc asdas'}
              Done
              Alternate
              Direction="left"
              MobileScreen={isMobile}
            />
          </Timeline>
        </div>
      </div>
    );
  }

  return <></>;
  
};

export default RoadMap;

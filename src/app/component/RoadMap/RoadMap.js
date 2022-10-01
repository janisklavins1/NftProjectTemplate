import React from 'react';
import './RoadMap.scss';
import Timeline from '@material-ui/lab/Timeline';
import RoadMapItem from '../RoadMapItem/RoadMapItem';
import { useMediaQuery } from 'react-responsive';


const RoadMap = ({version, data}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 910px)` });

  const renderItem = (index, obj) => {

    //  every 2 item goes to right side
    if (index % 2 === 0) {
      return (
        <RoadMapItem
          Time={obj.time}
          Header={obj.heading}
          Content={obj.content}
          Number={index+1}
          Done
          Alternate
          Direction={'right'}
          MobileScreen={isMobile}
          key={index}
        />
      );
    }

    return (
      <RoadMapItem
        Time={obj.time}
        Header={obj.heading}
        Content={obj.content}
        Number={index+1}
        Done
        Alternate
        Direction={'left'}
        MobileScreen={isMobile}
        key={index}
      />
    );
  };

  if (version === null || data === null) {
    return <></>;
  }

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
      <>
        <h2 className='Title' id="RoadMap">ROAD MAP</h2>
        <div className="RoadMap-Container" >
          <div className="RoadMap-TimeLine">
            <Timeline
              align={!isMobile ? 'alternate' : 'left'}
              className="RoadMapV2"
            >
              {data.map((obj, index) => renderItem(index, obj))}
            </Timeline>
          </div>
        </div>
      </>
    );
  }

  return <></>;
  
};

export default RoadMap;

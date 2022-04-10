import React from 'react';
import './Team.scss';
const Team = ({ data, bigHeader, smallHeader }) => {
  //url, image, name, role - data is an array of object [{}, {}, {}...]

  const renderItems = (memberObject, idx) => {
    return (
      <div className="Team-Container" key={idx}>
        <a href={memberObject.url}>
          <img
            src={memberObject.image}
            alt={memberObject.name}
            target="_blank"
          />
        </a>
        <p className="Team-Name">{memberObject.name}</p>
        <p className="Team-Role">{memberObject.role}</p>
      </div>
    );
  };

  return (
    <footer className="Team">
      <div className="Team-Heading">
        <div className="Team-SmallHeading">{smallHeader}</div>
        <div className="Team-BigHeading">{bigHeader}</div>
      </div>
      <div className="Team-Wrapper">
        {data.map((data, idx) => renderItems(data, idx))}
      </div>
    </footer>
  );
};

export default Team;

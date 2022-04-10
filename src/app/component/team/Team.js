import React from 'react';
import './Team.scss';
const Team = ({ data, header }) => {
  //url, image, name, role

  const renderItems = (memberObject, idx) => {
    return (
      <div className="Team-Container" key={idx}>
        <a href={memberObject.url}>
          <img src={memberObject.image} alt={memberObject.name} />
        </a>
        <p>{memberObject.name}</p>
        <p>{memberObject.role}</p>
      </div>
    );
  };

  return (
    <footer className="Team">
      <div className="Team-Heading">{header}</div>
      <div className="Team-Wrapper">
        {data.map((data, idx) => renderItems(data, idx))}
      </div>
    </footer>
  );
};

export default Team;

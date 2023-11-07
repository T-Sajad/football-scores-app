import React from 'react';
import standingData from '../../data/get-standings.json';
import Standings from './Standings';

function StandingsList() {
  const standings = standingData.response[0].league.standings[0]; // Note the correct property name here

  return (
    <div>
      <ul>
        {standings.map((standing) => (
          <Standings standing={standing} />
        ))}
      </ul>
    </div>
  );
}

export default StandingsList;

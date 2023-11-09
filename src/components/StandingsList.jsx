import React from 'react';
import standingData from '../../data/get-standings.json';
import Standings from './Standings';

function StandingsList() {
  const standings = standingData.response[0].league.standings[0]; // Note the correct property name here

  return (
    <table>
      <tr>
        <th>Pos</th>
        <th>club</th>
        <th>PTS</th>
        <th>GD</th>
      </tr>
      {standings.map((standing) => (
        <Standings standing={standing} />
      ))}
    </table>
  );
}

export default StandingsList;

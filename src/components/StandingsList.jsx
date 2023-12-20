import React from 'react';
import Standings from './Standings';
import dataLoader, { STANDINGS } from '../data-loader.js';

function StandingsList() {
  const standings = dataLoader(STANDINGS);
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

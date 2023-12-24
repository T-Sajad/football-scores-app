import React from 'react';
import Standings from './Standings';
import { useState, useEffect } from 'react';
import dataLoader, { STANDINGS } from '../data-loader.js';

function StandingsList() {
  const [standings, setStandings] = useState([]);

  const fetchData = async () => {
    const data = await dataLoader(STANDINGS);
    setStandings(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

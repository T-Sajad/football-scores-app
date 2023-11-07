import React from 'react';

function Standings({ standing }) {
  return <li>{`${standing.rank}. ${standing.team.name}`}</li>;
}

export default Standings;

import { tr } from 'date-fns/locale';
import React from 'react';

function Standings({ standing }) {
  return (
    <tr>
      <td className="values">{standing.rank}</td>
      <td className="values">{standing.team.name}</td>
      <td className="values">{standing.points}</td>
      <td className="values">{standing.goalsDiff}</td>
    </tr>
  );
}

export default Standings;

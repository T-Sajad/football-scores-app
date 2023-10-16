import React from 'react';

function Fixture({ fixture }) {
  return (
    <div class="Fixture" key={fixture.fixture.id}>
      <h2>{new Date(fixture.fixture.date).toLocaleString()}</h2>
      <h3>
        {`${fixture.teams.home.name}`}
        <img
          width="75pxpx"
          height="75px"
          src={fixture.teams.home.logo}
        />
        {`${fixture.score.fulltime.home}-${fixture.score.fulltime.away}`}
        <img
          width="75pxpx"
          height="75px"
          src={fixture.teams.away.logo}
        />
        {`${fixture.teams.away.name}`}
      </h3>
    </div>
  );
}
export default Fixture;

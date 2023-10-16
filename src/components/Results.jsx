import fixturedata from '../../data/get-fixtures-en.json';
import { useState } from 'react';
import FixtureList from './FixtureList';
console.log(fixturedata);
import { startOfDay, subDays, endOfDay } from 'date-fns';

function Results() {
  const fixtures = fixturedata.response;
  //const [filteredUsers, setFilteredUsers] = useState(fixture)
  const [filteredUsers, setFilteredUsers] = useState(
    filterSevenDays(fixtures)
  );

  // TODO this is also a candidate for unit testing!
  function filterSevenDays(fixtureData) {
    const todaysdate = new Date();
    // https://date-fns.org/v2.30.0/docs/addDays
    const startDate = startOfDay(todaysdate);
    const endDate = endOfDay(subDays(todaysdate, 6));
    console.log(
      `filtering between ${startDate.toISOString()} and ${endDate.toISOString()}`
    );
    return fixtureData.filter((fixtureData) => {
      const { fixture } = fixtureData;
      const gameday = new Date(fixture.date);
      if (gameday >= endDate && gameday <= startDate) {
        return fixture;
      }
    });
  }

  return (
    <div>
      <div>
        <FixtureList fixtures={filteredUsers} />
      </div>
    </div>
  );
}

export default Results;

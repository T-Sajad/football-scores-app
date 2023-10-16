import fixturedata from '../../data/get-fixtures-en.json';
import FixtureList from './FixtureList';
import { useState } from 'react';
console.log(fixturedata);
import { startOfDay, addDays, endOfDay } from 'date-fns';

function Upcoming() {
  const fixtures = fixturedata.response;
  const [searchItem, setSearchItem] = useState('');
  //const [filteredUsers, setFilteredUsers] = useState(fixture)
  const [filteredUsers, setFilteredUsers] = useState(
    filterSevenDays(fixtures)
  );
  // console.log(filteredUsers)

  // TODO give this a more meaningful name, like `filterByName`
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    // TODO this actual filter function is a great candidate for unit testing!
    const filteredItems = fixtures.filter(
      (fixtures) =>
        fixtures.teams.home.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        fixtures.teams.away.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  // TODO this is also a candidate for unit testing!
  function filterSevenDays(fixtureData) {
    const todaysdate = new Date();
    // https://date-fns.org/v2.30.0/docs/addDays
    const startDate = startOfDay(todaysdate);
    const endDate = endOfDay(addDays(todaysdate, 6));
    console.log(
      `filtering between ${startDate.toISOString()} and ${endDate.toISOString()}`
    );
    return fixtureData.filter((fixtureData) => {
      const { fixture } = fixtureData;
      const gameday = new Date(fixture.date);
      if (gameday >= startDate && gameday <= endDate) {
        return fixture;
      }
    });
  }

  return (
    <div>
      {/* <input 
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='team'
        /> */}
      <div>
        <FixtureList fixtures={filteredUsers} />
      </div>
    </div>
  );
}

export default Upcoming;

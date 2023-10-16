import fixturedata from '../../data/get-fixtures-en.json';
import FixtureList from './FixtureList';
import { useState } from 'react';
console.log(fixturedata);

// TODO should input be a drop down list rather than free text input?
// TODO can you auto-generate a list of teams from the fixture data to popupate the drop down?

const calculateVisibleFixtures = (allFixtures, searchTerm) => {
  if (!searchTerm) {
    return [];
  }

  searchTerm = searchTerm.toLowerCase();

  return allFixtures.filter(
    (fixture) =>
      fixture.teams.home.name.toLowerCase().includes(searchTerm) ||
      fixture.teams.away.name.toLowerCase().includes(searchTerm)
  );
};

function Byteams() {
  const fixtures = fixturedata.response;
  const [searchItem, setSearchItem] = useState('');
  const [filterFixtures, setFilterFixtures] = useState([]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = calculateVisibleFixtures(
      fixtures,
      searchTerm
    );
    setFilterFixtures(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="team"
      />
      <div>
        <FixtureList fixtures={filterFixtures} />
      </div>
    </div>
  );
}

export default Byteams;

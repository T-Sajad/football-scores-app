import standingData from '../data/get-standing.json';
import fixturedata from '../data/get-fixtures-en.json';

export const STANDINGS = 'standings';
export const FIXTURES = 'fixtures';

function loadData(name) {
  if (name == STANDINGS) {
    return standingData.response[0].league.standings[0];
  } else if (name == FIXTURES) {
    return fixturedata;
  } else {
    throw new Error('Name is not recognised!');
  }
}

export default loadData;

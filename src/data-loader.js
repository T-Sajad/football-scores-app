import standingData from '../data/get-standing.json';
import fixturedata from '../data/get-fixtures-en.json';

export const STANDINGS = 'standings';
export const FIXTURES = 'fixtures';

function loadData(name) {
  return new Promise((resolve, reject) => {
    if (name == STANDINGS) {
      resolve(standingData.response[0].league.standings[0]);
    } else if (name == FIXTURES) {
      resolve(fixturedata);
    } else {
      reject(Error('Name is not recognised!'));
    }
  });
}

/**
 * Useage:
 *
 * old version:
 * const data = loadData("standings")
 *
 * promise version:
 * loadData("standings").then((data) => {
 *    console.log(data)
 * })
 *
 * await version:
 * const data = await loadData("standings")
 *
 */

export default loadData;

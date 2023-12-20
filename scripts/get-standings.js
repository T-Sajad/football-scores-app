import helper from './fetchhelper.js';

const url =
  'https://api-football-beta.p.rapidapi.com/standings?season=2023&league=39';
const name = 'get-standings';

helper(url, name);

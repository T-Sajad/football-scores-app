import helper from './fetchhelper.js';

const url =
  'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023';
const name = 'get-fixtures-en';

helper(url, name);

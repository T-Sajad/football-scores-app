import helper from './fetchhelper.js';

const url =
  'https://api-football-v1.p.rapidapi.com/v3/leagues?code=GB';
const name = 'get-leagues-en';
helper(url, name);

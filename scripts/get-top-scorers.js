import helper from './fetchhelper.js';

const url =
  'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=4&season=2008';
const name = 'get-top-scorers';
helper(url, name);

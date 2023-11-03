import 'dotenv/config';
import fs from 'node:fs';

const url =
  'https://api-football-beta.p.rapidapi.com/standings?season=2023&league=39';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  fs.writeFileSync('./data/get-standings.json', result);
} catch (error) {
  console.error(error);
}

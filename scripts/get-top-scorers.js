import 'dotenv/config'
import fs from 'node:fs';

const url = 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=4&season=2008';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

// console.log(process.env.API_KEY)

try {
	const response = await fetch(url, options);
	const result = await response.json();
  fs.writeFileSync('./data/get-top-scorers.json', JSON.stringify(result, null, 2))
} catch (error) {
	console.error(error);
}
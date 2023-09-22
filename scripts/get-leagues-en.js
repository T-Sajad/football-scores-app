import 'dotenv/config'
import fs from 'node:fs';

const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues?code=GB';
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
  fs.writeFileSync('./data/get-leagues-en.json', JSON.stringify(result, null, 2))
} catch (error) {
	console.error(error);
}
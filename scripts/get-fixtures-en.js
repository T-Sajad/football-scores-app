import 'dotenv/config'
import fs from 'node:fs';

const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023';
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
  fs.writeFileSync('./data/get-fixtures-en.json', JSON.stringify(result, null, 2))
} catch (error) {
	console.error(error);
}
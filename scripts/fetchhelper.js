import 'dotenv/config';
import fs from 'node:fs';

async function helper(url, name) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
    },
  };

  try {
    console.log(url);
    const response = await fetch(url, options);
    const result = await response.text();
    fs.writeFileSync(`./data/${name}.json`, result);
  } catch (error) {
    console.error(error);
  }
}

export default helper;

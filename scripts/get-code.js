import 'dotenv/config';
import fs from 'node:fs';

const candidateId = 374;
const url = `https://apply.scorchsoft.dev/api/candidate/${candidateId}/get-code`;
const options = {
  method: 'POST',
  body: JSON.stringify({
    email: 'tsajad300@gmail.com',
    password: 'I4GecxtO',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
};

// console.log(process.env.API_KEY)

try {
  const response = await fetch(url, options);
  const result = await response.text();
  fs.writeFileSync('./data/get-code.json', result);
} catch (error) {
  console.error(error);
}

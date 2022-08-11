const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Benett',
    birthLocation: 'Chicago, Illinois',
  },
  unknown: {
    age: 0,
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

// app.get('/api', (request, response) => {
//   response.json(rappers);
// });

app.get('/api/:name', (request, response) => {
  const rappersName = request.params.name.toLowerCase();
  if (rappers[rappersName]) {
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers['unknown']);
  }
});

app.listen(PORT, () => {
  console.log(`The sever is now running on port ${PORT}! Betta Go Catch It!`);
});

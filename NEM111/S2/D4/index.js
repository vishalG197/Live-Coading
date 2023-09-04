const fs = require('fs');
const express = require('express');
const app = express();
const data = require('./db.json');

app.use(express.json());

let port = 3000;

// Helper function to write to the database JSON file
function writeDatabase(data) {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
}

// Logger Middleware
app.use((req, res, next) => {
  const { method, url, headers } = req;
  const userAgent = headers['user-agent'];
  const logString = `Method:${method}, Route:${url}, user-agent:${userAgent}\n`;

  fs.appendFile('logs.txt', logString, (err) => {
    if (err) console.error('Error writing to logs.txt:', err);
  });

  next();
});

// Validator Middleware
const validator = (req, res, next) => {
  const { role, pass } = req.query;

  if ((req.method === 'PATCH' || req.method === 'DELETE') && role !== 'leader' && pass !== '4534') {
    return res.status(403).send('You are not authorized to perform this operation.');
  }

  next();
};

// Marvel and DC Routes
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end("<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>");
});

app.get('/marvel', (req, res) => {
  const { alias } = req.query;
  if (!alias) {
    return res.status(200).json(data.marvel);
  }

  const filteredMarvel = data.marvel.filter((char) => char.alias === alias);
  res.status(200).json(filteredMarvel);
});

app.get('/marvel/:id', (req, res) => {
  const { id } = req.params;
  const character = data.marvel.find((char) => char.id === parseInt(id));

  if (!character) {
    return res.status(404).json({ error: 'Character not found' });
  }

  res.status(200).json(character[0]);
});

app.get('/dc', (req, res) => {
  const { alias } = req.query;
  if (!alias) {
    return res.status(200).json(data.dc);
  }

  const filteredDC = data.dc.filter((char) => char.alias === alias);
  res.status(200).json(filteredDC);
});

app.get('/dc/:id', (req, res) => {
  const { id } = req.params;
  const character = data.dc.find((char) => char.id === parseInt(id));

  if (!character) {
    return res.status(404).json({ error: 'Character not found' });
  }

  res.status(200).json(character[0]);
});

app.post('/marvel/addnew', (req, res) => {
  data.marvel.push(req.body);
  writeDatabase(data);
  res.status(200).send('New superhero has been added');
});

app.post('/dc/addnew', (req, res) => {
  data.dc.push(req.body);
  writeDatabase(data);
  res.status(200).send('New superhero has been added');
});

app.get('/winningteam', (req, res) => {
  let marvelPowerSum = data.marvel.reduce((total, character) => total + character.power_level, 0);
  let dcPowerSum = data.dc.reduce((total, character) => total + character.power_level, 0);

  if (dcPowerSum > marvelPowerSum) {
    return res.status(200).json(data.dc);
  } else {
    return res.status(200).json(data.marvel);
  }
});

app.patch('/marvel/update/:id', validator, (req, res) => {
  const { id } = req.params;
  const index = data.marvel.findIndex((char) => char.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Character not found' });
  }

  data.marvel[index] = { ...data.marvel[index], ...req.body };
  writeDatabase(data);
  res.status(200).send('Patched Character Details');
});

app.patch('/dc/update/:id', validator, (req, res) => {
  const { id } = req.params;
  const index = data.dc.findIndex((char) => char.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Character not found' });
  }

  data.dc[index] = { ...data.dc[index], ...req.body };
  writeDatabase(data);
  res.status(200).send('Patched Character Details');
});

app.delete('/marvel/delete/:id', validator, (req, res) => {
  const { id } = req.params;
  data.marvel = data.marvel.filter((char) => char.id !== parseInt(id));
  writeDatabase(data);
  res.status(200).send('Deleted Character Details');
});

app.delete('/dc/delete/:id', validator, (req, res) => {
  const { id } = req.params;
  data.dc = data.dc.filter((char) => char.id !== parseInt(id));
  writeDatabase(data);
  res.status(200).send('Deleted Character Details');
});

// run server
app.listen(port, () => {
  console.log(`listening on port : http://localhost:${port}`);
});

// export
module.exports = app;

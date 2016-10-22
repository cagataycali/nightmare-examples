/*
  These server is demonstrate how to create webserver for example.
*/
const express = require('express');
const app = express();
const E = require('3x3c');

app.get('/hi', (req, res) => {
  console.log(req.query.name, req.query.surname);
  const data = {
    name,
    surname
  } = req.query;
  res.json(data)
});

app.get('/', (req, res) => {
  res.json({hi: 'there'})
});

module.exports = () => {
  app.listen(9000, () => {
    console.log('Example app listening on port 9000!');
  });
}

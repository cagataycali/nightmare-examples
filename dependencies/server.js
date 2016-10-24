/*
  These server is demonstrate how to create webserver for example.
*/
const express = require('express');
const app = express();

app.get('/hi', (req, res) => {
  res.json(req.query)
});

app.get('/', (req, res) => {
  res.json({hi: 'there'})
});

module.exports = () => {
  app.listen(9000, () => {
    console.log('Example app listening on port 9000!');
  });
}

var express    = require('express');
var Webtask    = require('webtask-tools');
var request    = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendStatus(200);
});

// Get Request for random GIF from Giphy API
app.get('/random', (req, res) => {
  const api_key = 'api_key=tx2DVz5Vd18GgvuQa3AAQxKLMXEluYhM';
  const request_url = 'https://api.giphy.com/v1/gifs/random?' + api_key + '&filter=PG-13';
  request(request_url, (error, response, body) => {
      body = JSON.parse(body);
      const gif = {
        id: body.data.id,
        url: body.data.image_original_url
      };
      res.json(gif);
  });
});

// Create a GIF w/caption
app.post('/', (req, res) => {
  res.send('creating');
});

// CLASH
// Retrieve GIFs
app.get('/versus', (req, res) => {
  res.send('retrieving versus');
});

app.post('/vote', (req, res) => {
  res.send('voting');
});

// LEADERBOARD
app.get('/leaderboard', (req, res) => {
  res.send('the leaderboards');
});
module.exports = Webtask.fromExpress(app);

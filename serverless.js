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
  // we're going to use webtask storage for our db
  // webtaskContext.storage
  req.webtaskContext.storage.get((err, data) => {
    // Check if our list is initialized
    data = data || [];
    // push our request object onto the list
    data.push(req.body);
    // Save it
    req.webtaskContext.storage.set(data, err => {
      if(err) throw err;
      res.json({ message: 'Storage Successful' });
    });
  });
});

// CLASH
// Retrieve GIFs
app.get('/versus', (req, res) => {
  req.webtaskContext.storage.get((err, data) => {
      _.shuffle(data);
      const twoGIFS = data.slice(0, 2);
      res.json(twoGIFS);
  });
});

// POST for Voting /vote
app.post('/vote', (req, res) => {
  // DB lookup
  req.webtaskContext.storage.get((err, data) => {
      // Search for index of GIF
      const index = data.findIndex(gif => {
          return gif.id === req.body.id;
      });
      // Increment the vote based on index
      data[index].votes += 1;

      req.webtaskContext.storage.set(data, err => {
          res.json("GIF successfully voted for & updated")
      });
  });
});

// LEADERBOARD
app.get('/leaderboard', (req, res) => {
  res.send('the leaderboards');
});
module.exports = Webtask.fromExpress(app);

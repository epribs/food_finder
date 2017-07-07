
// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var axios=require('axios');
var querystring=require('querystring');
const app = express();
const yelp = require('yelp-fusion');

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.post('/api/yelp/auth/', function(req, res) {

  var formattedZip = req.params.zip;
  var formattedRadius = req.params.radius;
  yelp.accessToken(APIData.client_Id, APIData.client_Secret).then(response => {
    
    const client = yelp.client(response.jsonBody.access_token);

    client.search({
      location: formattedZip,
      radius: formattedRadius
    }).then(response => {
      console.log(response.jsonBody.businesses[0].name);
    });
    }).catch(e => {
      console.log(e);
    });
})
app.get('/api/yelp/whatever')
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
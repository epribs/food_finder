// var axios = require('Axios');
// var APIKey = require('./ApiKey');
var APIData = require('./APIData');

var Yelp = require('node-yelp-fusion');

var yelp = new Yelp({ id:APIData.client_id , secret:APIData.client_secret });

module.exports = yelp;
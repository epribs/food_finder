'use strict';
var APIData = require('./APIData');
var axios=require('axios');
const yelp = require('yelp-fusion');

var helpers = {
	runQuery: function(zipCode, searchRadius) {
		var formattedZip = zipCode.trim();
		var formattedRadius = searchRadius;
		axios.post('/api/yelp/auth/', {
    params: {
    	zip: formattedZip, 
    	radius: formattedRadius
    }
  }).then((response) => {
			//do stuff with response
		})
		console.log("Query Run");
		
	}
}

module.exports = helpers;
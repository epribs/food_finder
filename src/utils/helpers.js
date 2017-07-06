var axios = require('Axios');
// var APIKey = require('./ApiKey');
var APIData = require('./APIData');
var Yelp = require('node-yelp-fusion');
var yelp = new Yelp({ id:APIData.client_id , secret:APIData.client_secret });

var helpers ={
	runQuery: function(zip, radius) {
		var formattedZip = zip.trim();
		var formattedRadius = radius.trim();

		console.log("Query Run");
		return yelp.search({
			params: {
				location: formattedZip,
				radius: formattedRadius
			}
		})
		.then(function(res){
			res.json(res);
		});
	}
}

module.exports = helpers;
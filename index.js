require('node-jsx').install({extension: '.jsx'});

var express = require('express');
var app = express();

/* get html template */
var fs = require('fs');
var template = fs.readFileSync('./dist/index.html', 'utf8');

/* get app data */
var appData = {};
var request = require('request');
request({
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Liverpool,uk',
		json: true
	},
	function (err, res) {
		appData = res.body;
	});

/* get server rendered data */
app.get('/', function (req, res) {
	var initialContent = require('./server/server.jsx')(appData);
	var templateWithData = template.replace('{{appData}}', JSON.stringify(appData));
	var templateWithDataAndInitialContent = templateWithData.replace('{{initialContent}}', initialContent);
	res.send(templateWithDataAndInitialContent);
});

app.use('/', express.static('./dist/'))

var port = 9876;
app.listen(port, function(){
	console.log('Server listening on ' + port)
});
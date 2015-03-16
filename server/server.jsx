var React = require('react');
var App = require('./../app/app.jsx');

module.exports = function(data) {
	if (!data) return '';

	return React.renderToString(<App data={data} />);
}
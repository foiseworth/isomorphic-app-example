var React = require('react');

var App = React.createClass({
	render: function() {
		var weatherInfo = Object.keys(this.props.data.main).map(function(key) {
			return (
				<li key={key}>{key}: {this.props.data.main[key]}</li>
			)
		}.bind(this));

		return (
			<div>
				<h1>App</h1>
				<ul>
					{weatherInfo}
				</ul>
			</div>
		)
	}
});

module.exports = App;
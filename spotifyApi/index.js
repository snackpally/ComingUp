require('dotenv').config();
var spotifyApi = require('spotify-web-api-node');

var creds = {
	clientId: process.env.clientId,
	clientSecret: process.env.clientSecret,
	redirectUri: 'http://localhost:3000/callback'
};
var spotifyApp = new spotifyApi(creds);

var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';

spotifyApp.authorizationCodeGrant(code).then(
	function (data) {
		console.log('The token expires in ' + data.body['expires_in']);
		console.log('The access token is ' + data.body['access_token']);
		console.log('The refresh token is ' + data.body['refresh_token']);

		// Set the access token on the API object to use it in later calls
		spotifyApi.setAccessToken(data.body['access_token']);
		spotifyApi.setRefreshToken(data.body['refresh_token']);
	},
	function (err) {
		console.log('Something went wrong!', err);
	}
);

module.exports = spotifyApp;
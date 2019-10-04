require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const url = require('url');
const bodyparser = require('body-parser')

app.use(cors('*'));
app.use(bodyparser.json())

//Spotify Endpoints
var reUrl = `http://localhost:${process.env.PORT}/callback`;
app.get('/login', function (req, res) {
	var scopes = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize' +
		'?response_type=code' +
		'&client_id=' + process.env.CLIENTID +
		(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
		'&redirect_uri=' + encodeURIComponent(reUrl));
});

app.get('/callback', (req, res) => {
	let allUrl = url.parse(req.url).search.split('=')[1];
	res.send({
		"token":allUrl,
		"status":200 
	});
})

//Data Api Endpoints
app.post('/events', (req, res) =>{
	//move api calls into here req.body will be json of values for query string
	console.log(req.body);
	res.send(req.body);
})

app.listen(port, ()=>{
	console.log(`app is listening on port ${port}`);
})



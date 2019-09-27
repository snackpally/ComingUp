require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(cors('*'));


var reUrl = `http://localhost:${process.env.PORT}/callback`;
app.get('/login', function (req, res) {
	var scopes = 'user-read-private user-read-email';
	res.redirect('https://accounts.spotify.com/authorize' +
		'?response_type=code' +
		'&client_id=' + process.env.CLIENTID +
		(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
		'&redirect_uri=' + encodeURIComponent(reUrl));
});

app.get('/', (req, res) => {
	res.send("Hello World");
})

app.get('/callback', (req, res) => {
	res.sendStatus(200);
})

app.listen(port, ()=>{
	console.log(`app is listening on port ${port}`);
})

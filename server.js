var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.send('To log in - go to: /login');
});

app.get('/login', function(req, res) {
	res.render('login', {
		url: "/auth/google"
	});
});

app.get('/auth/google', function(req, res) {
	res.render('google', {
		back: "/login"
	});
});


app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});
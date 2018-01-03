const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// stt & uber routes
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Example route
app.use(express.static(path.join(__dirname, '../public')));
//app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


// START SOCKET SERVER STUFF
const server            = require('http').Server(app);

// WIDGET Routes
app.use('/', routes);

const PORT = process.env.PORT || 8080;
server.listen(8080, function(error) {
  error
      ? console.error(error)
      : console.info(`==> 🌎 Listening on port ${PORT}!`);
});

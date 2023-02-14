// server init + mods
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.json());

app.get("/", (req, res) => {
  const query = req.params.query;
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${query}`;

  fetch(unsplashUrl, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => console.error(error));
});

app.get('/', function(req, res){
  const query = req.query.query;
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${query}`;

  fetch(unsplashUrl, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching data." });
    }
  );
});

// server route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// user connected even handler
io.on('connection', function(socket){
  
  // log & broadcast connect event
  console.log('a user connected');
  
  // log disconnect event
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  // message received event handler
  socket.on('message', function(msg){
    // log chat msg
    console.log('message: ' + msg);
    
    // broadcast chat msg to others
    socket.broadcast.emit('message', msg);
    
    // save message to db
    var message = new Message ({
      message : msg
    });
    message.save(function (err, saved) {
      if (err) {
	return console.log('error saving to db');
      }
    })
  });

  
});

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});
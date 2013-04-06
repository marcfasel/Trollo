var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , url = require('url')
  , service = require('./services/service.js');


app.listen(8090);

function handler (req, res) {
  var uri = url.parse(req.url).pathname;
  if (uri=="/") {
    uri="/public/index.html";
  }
  fs.readFile(__dirname + uri,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading Trollo.');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  // Initial connection from client to server
  console.log("Sending initial get_board event")
  socket.emit('get_board',service.getBoard());
  socket.on('create_new_card', function (data) {
    console.log("Receiving create_new_card event")
    console.log(data);
    var listId = data.listId;
    var card = data.card;
    service.addCard(card,listId);
    console.log("Sending get_board event to update board")
    io.sockets.emit('get_board',service.getBoard());
  });
});



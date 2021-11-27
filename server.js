let express = require("express");
let app = express();
//var app = require('express')();
const { initContent } = require('./config/pageContent')

let http = require('http').createServer(app);
let io = require('socket.io')(http);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/init', (req, res) => {
  console.log('server -> init req')
  res.json(initContent)
})

//socket
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  /* setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000); */

});


http.listen(port,()=>{
  console.log("*Listening on port ", port);
});

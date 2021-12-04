const { response } = require("express");
//const cors = require('cors')
let express = require("express");
let dbObj = require("./db/connection")

let app = express();

//var app = require('express')();

let http = require('http').createServer(app);
let io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.json())
//app.use(cors())

app.get('/init', (req, response) => {
  console.log('-> init req')
  dbObj.getDB().collection("page-content").find({}).toArray((err, res) => {
    if (err) {
      throw err
    }
    response.send(res)
  })
})

app.post('/bookReq', (req, res) => {  
  const content = req.body
  if (content) {
    dbObj.getDB().collection("book-applications").insertOne(content)
    res.sendStatus(204)
  } else {
    res.sendStatus(500)
  }
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

dbObj.connectToDatabase((err) => {
  if (err) {
    console.error(err)
    process.exit() // nodejs
  }
  
  http.listen(port,()=>{
    console.log("*Listening on port ", port);
  });
})


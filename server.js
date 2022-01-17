const { response } = require("express");
//const cors = require('cors')
let express = require("express");
const { CLOSING } = require("ws");
let dbObj = require("./dbConnection")
let projectsRoute = require('./routes')

let app = express();

let http = require('http').createServer(app);
let io = require('socket.io')(http);
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use('/api', projectsRoute)
//app.use(cors())

//socket
io.on('connection', (socket) => {
  let randomN = parseInt(Math.random() * 10)
  console.log(`=> a user connected: ${randomN}`);
  socket.on('disconnect', () => {
    console.log('=> user disconnected');
  });
  socket.emit("newConnection", `a new page opened - ${randomN}`)
});

http.listen(port,()=>{
  console.log("=> *Listening on port ", port);
});

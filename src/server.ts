import * as express from 'express';
import * as socket_io from 'socket.io';
import * as http from 'http';

import Socketeer from './socketeer'

export class Server {

  public app: express.Application;

  constructor() {
    this.app = express();

    // configure all that need to be, maybe reading form a file
    this.config();

    this.addRoutes();
  }

  public start() {
    let http_server = http.createServer(this.app);
    let socketeer = new Socketeer(http_server);

    // let io = socket_io(http_server);
    //
    // io.sockets.on('connection', (socket) => {
    //   console.log('user connected');
    //
    //   socket.on('chat message', function(msg: any){
    //     console.log('message: ' + msg);
    //     io.emit('chat message', msg);
    //   });
    //
    //   socket.on('disconnect', function() {
    //     console.log('user disconnected');
    //   });
    // });

    http_server.listen(3000, () => {
      console.log('App stared and listening to port 3000');
    });
  }

  public config() {
    this.app.use(express.static(__dirname + '/client/'));

    this.app.get('/', (req, res) => {
      res.sendFile(__dirname + '/client/index.html');
    });

  }

  public addRoutes() {

  }
}

import * as socket_io from 'socket.io';

/**
  Tout ce qui est managment du socket
*/

export default class Socketeer {

  public io: any;

  /**
   * http_server : node.js http.Server
   */
  constructor(http_server) {
    let _self = this;
    this.io = socket_io(http_server);
    this.io.sockets.on('connection', (socket) => {
      console.log('user connected');
      socket.broadcast.emit('chat message', 'user connected');

      socket.on('chat message', (msg: any) => self_.parseMessage(socket, msg));

      socket.on('disconnect', function() {
        console.log('user disconnected');
        _self.io.emit('chat message', 'user disconnected');
      });
    }
  }

  parseMessage(socket: any, msg: any) {
    _self.io.emit('chat message', msg);
  }
}

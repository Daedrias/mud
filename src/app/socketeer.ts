import * as socket_io from 'socket.io';
import MessageParser from './message_parser';

/**
 * Tout ce qui est managment du socket
 */

export default class Socketeer {

  public io: any;
  /**
   * http_server : node.js http.Server
   */
  constructor(http_server: any) {
    let _self = this;
    this.io = socket_io(http_server);
    this.io.sockets.on('connection', (client: any) => {
      console.log('user connected');
      client.broadcast.emit('chat message', 'user connected');

      client.on('chat message', (msg: any) => this.parseMessage(client, msg));

      client.on('disconnect', function() {
        console.log('user disconnected');
        _self.io.emit('chat message', 'user disconnected');
      });
    });
  }

  public parseMessage(socket: any, msg: any) {
    MessageParser.parse(msg);
    this.io.emit('chat message', msg);
  }
}

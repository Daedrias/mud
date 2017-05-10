import * as socket_io from 'socket.io';

import MessageParser from '../message_parser';

export default class Player {

  socket: any;

  name: string;
  hp_current: number;
  hp_max: number;

  constructor(_socket:any) {
    this.socket = _socket
    // on configure le comportement du socket
    this.socket.on('chat message', (msg: any) => this.executeCommand(msg));
  }

  public executeCommand(msg: string) {
    let command = MessageParser.parse(msg);
    this.socket.emit('chat message', 'user connected');
    
  }

  public disconnect() {

  }
}

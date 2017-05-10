import * as express from 'express';
import * as socket_io from 'socket.io';
import * as http from 'http';

import Player from './model/player';

export default class MudServer {

  public app: express.Application;
  public io: any;
  public players: Array<Player>;
  public mobs: Array<any>;

  constructor() {
    this.players = [];
  }

  executeCommand() {

  }
}

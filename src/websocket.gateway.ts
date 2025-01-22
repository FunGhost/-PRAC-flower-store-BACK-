import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  afterInit(server: Server): any {
    console.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]): any {
    console.log('Connected: ', client.id);
  }

  handleDisconnect(client: Socket): any {
    console.log('Disconnected: ', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    console.log('Socket message', message);
    this.server.emit('message', `Echo: ${message}`);
  }
}

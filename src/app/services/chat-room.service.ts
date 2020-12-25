import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {io} from 'socket.io-client';

@Injectable()
export class ChatRoomService {
  private SOCKET_ENDPOINT = 'https://cs447covidchatservice.herokuapp.com/';
  private Socket_PORT_ForLOCAL = 'http://localhost:3000';
  private socket; // io('http://localhost:3000/rooms');

  private userID: string;
  private roomId: string;

  constructor() {

  }

  // tslint:disable-next-line:typedef
  joinChatRoom(data) {
    this.socket.emit('join', data);
  }

  // tslint:disable-next-line:typedef
  forNewUserJoinToChatRoom() {
    this.socket = io(this.SOCKET_ENDPOINT);
    const observable = new Observable<{ username: string, text: string, createdAt: Date}>(observer => {
      this.socket.on('new user joined', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

  // tslint:disable-next-line:typedef
  leftChatRoomByUserActions() {
    const observable = new Observable<{ username: string, text: string, createdAt: Date }>(observer => {
      this.socket.on('left room', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  // tslint:disable-next-line:typedef
  sendMessageToAllUsers(data) {
    this.socket.emit('message', data);
  }

  // tslint:disable-next-line:typedef
  takenNewMessageFromOtherUsers() {
    // tslint:disable-next-line:ban-types
    const observable = new Observable<{ username: string, text: string, createdAt: Date}>(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

  // tslint:disable-next-line:typedef
  leaveRoom(data) {
    this.socket.emit('leave', data);
  }
}

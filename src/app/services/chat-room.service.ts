import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable()
export class ChatRoomService {

  private socket; // io('http://localhost:3000/rooms');

  private userID: string;
  private roomId: string;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  enterChatRoom(data) {
    this.socket.emit('join', data);
  }

  // tslint:disable-next-line:typedef
  forNewUserJoinToChatRoom(roomNumber: string) {
    this.socket = io('http://localhost:3000/rooms', {query: {roomNumber}});
    const observable = new Observable<{ user: string, message: string }>(observer => {
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
    const observable = new Observable<{ user: string, message: string }>(observer => {
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
    const observable = new Observable<{ user: string, message: string }>(observer => {
      this.socket.on('new message', (data) => {
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

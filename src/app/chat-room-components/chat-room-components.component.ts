import {Component, Input, OnInit} from '@angular/core';
import {ChatRoomService} from '../services/chat-room.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-room-components',
  templateUrl: './chat-room-components.component.html',
  styleUrls: ['./chat-room-components.component.css'],
  providers: [ChatRoomService]
})
export class ChatRoomComponentsComponent {
  connectedServer = true;
  user: string;
  room: string;
  messageText: string;
  messageArray: Array<{ username: string, text: string, createdAt: Date }> = [];

  constructor(private roomService: ChatRoomService, private route: ActivatedRoute) {

    this.user = this.route.snapshot.queryParamMap.get('userId');
    this.room = this.route.snapshot.queryParamMap.get('roomID');
    console.log(this.room);
    this.roomService.forNewUserJoinToChatRoom()
      .subscribe(data => this.messageArray.push(data));


    this.roomService.leftChatRoomByUserActions()
      .subscribe(data => this.messageArray.push(data));

    this.roomService.takenNewMessageFromOtherUsers()
      .subscribe(data => this.messageArray.push(data));

    this.join();
  }

  // tslint:disable-next-line:typedef
  join() {
    this.roomService.joinChatRoom({username: this.user, room: this.room});
  }

  // tslint:disable-next-line:typedef
  leave() {
    this.roomService.leaveRoom({username: this.user, room: this.room});
  }

  // tslint:disable-next-line:typedef
  sendMessage() {
    console.log(this.messageText);
    this.roomService.sendMessageToAllUsers({username: this.user, room: this.room, message: this.messageText});
  }

}

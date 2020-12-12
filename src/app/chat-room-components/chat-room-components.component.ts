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
  connectedServer = false;
  user: string;
  room: string;
  messageText: string;
  messageArray: Array<{ user: string, message: string }> = [];

  constructor(private roomService: ChatRoomService, private route: ActivatedRoute) {

    this.user = this.route.snapshot.queryParamMap.get('userId');
    this.room = this.route.snapshot.queryParamMap.get('roomID');
    this.roomService.forNewUserJoinToChatRoom(this.room)
      .subscribe(data => this.messageArray.push(data));


    this.roomService.leftChatRoomByUserActions()
      .subscribe(data => this.messageArray.push(data));

    this.roomService.takenNewMessageFromOtherUsers()
      .subscribe(data => this.messageArray.push(data));
  }

  // tslint:disable-next-line:typedef
  join() {
    this.roomService.enterChatRoom({user: this.user, room: this.room});
  }

  // tslint:disable-next-line:typedef
  leave() {
    this.roomService.leaveRoom({user: this.user, room: this.room});
  }

  // tslint:disable-next-line:typedef
  sendMessage() {
    this.roomService.sendMessageToAllUsers({user: this.user, room: this.room, message: this.messageText});
  }

}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ChatRoomService} from '../services/chat-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorRoomService} from '../services/covid.service';
import {EncryptService} from '../services/encrypt.service';

@Component({
  selector: 'app-chat-room-components',
  templateUrl: './chat-room-components.component.html',
  styleUrls: ['./chat-room-components.component.css'],
  providers: [ChatRoomService]
})
export class ChatRoomComponentsComponent implements OnDestroy {
  connectedServer = false;
  user: string;
  room: string;
  messageText: string;
  messageArray: Array<{ username: string, text: string, createdAt: Date }> = [];
  doctorEmail: string;
  doctorOrNot = false;

  constructor(private roomService: ChatRoomService, private route: ActivatedRoute,
              private service: DoctorRoomService, private router: Router, private encryptService: EncryptService) {
    this.messageText = '';
    this.doctorEmail = this.route.snapshot.queryParamMap.get('email');
    this.user = this.route.snapshot.queryParamMap.get('userId');
    this.room = this.route.snapshot.queryParamMap.get('roomID');
    console.log('DOCTOR MAIL:' + this.doctorEmail);
    if (this.doctorEmail !== '-') {
      console.log('DOCTOR TRUE:' + this.doctorEmail);
      this.doctorOrNot = true;
    }
    if (!this.doctorOrNot) {
      this.service.checkRoomActiveOrNot(this.room).subscribe(
        (result) => {
          this.checkResult(result);
        },
        (error) => {
          console.log('ROOM: ' + this.room);
          // this.router.navigate(['patient/doctor-selection']);
        }
      );
    } else {
      this.checkResult('true');
    }
  }

  // tslint:disable-next-line:typedef
  checkResult(result) {
    if (result === 'true') {
      this.connectedServer = true;
      this.roomService.socketConnect();
      /*this.roomService.forNewUserJoinToChatRoom()
        .subscribe(data => this.messageArray.push(data));*/

      this.roomService.doctorLeftRoom()
        .subscribe(data => this.checkDoctorIsLeft(this.encryptService.decryptData(data)));

      this.roomService.takenNewMessageFromOtherUsers()
        .subscribe(data => this.messageArray.push(this.encryptService.decryptData(data)));

      this.join();
    } else {
      this.router.navigate(['patient/doctor-selection']);
    }
  }

  // tslint:disable-next-line:typedef
  join() {
    this.roomService.joinChatRoom({username: this.user, room: this.room, email: this.doctorEmail});
  }

  // tslint:disable-next-line:typedef
  leave() {
    this.roomService.leaveRoom({username: this.user, room: this.room, email: this.doctorEmail});
    this.gotoHome();
  }

  // tslint:disable-next-line:typedef
  sendMessage() {
    console.log(this.messageText);
    if (this.messageText !== '') {
      this.roomService.sendMessageToAllUsers(this.encryptService.encryptData({
        username: this.user,
        room: this.room,
        email: this.doctorEmail,
        message: this.messageText
      }));
      this.messageText = '';
    }
  }

  // tslint:disable-next-line:typedef
  gotoHome() {
    this.router.navigate(['home']);
  }

  private checkDoctorIsLeft(data: { username: string; text: string; createdAt: Date }) {
    console.log(data.text);
    if (data.text === 'doctor left') {
      console.log(data.text);
      this.connectedServer = false;
      this.roomService.leaveRoom({username: this.user, room: this.room, email: this.doctorEmail});
    }
  }

  ngOnDestroy(): void {
    console.log("1");
    this.roomService.leaveRoom({username: this.user, room: this.room, email: this.doctorEmail});
  }
}

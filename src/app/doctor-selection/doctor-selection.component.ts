import {Component, OnInit} from '@angular/core';
import {ChatRoomService} from '../services/chat-room.service';
import {Router} from '@angular/router';
import {DoctorRoomService} from '../services/covid.service';

@Component({
  selector: 'app-doctor-selection',
  templateUrl: './doctor-selection.component.html',
  styleUrls: ['./doctor-selection.component.css']
})
export class DoctorSelectionComponent implements OnInit {
  userID: any;
  allRooms: any;

  constructor(private router: Router, private doctorRoomService: DoctorRoomService) {
  }

  ngOnInit(): void {
    this.doctorRoomService.getAllDoctorRooms().subscribe(
      (result) => this.allRooms = result,
      (error) => console.log(error)
    );
    this.doctorRoomService.getUserID().subscribe(
      ( result ) => this.userID = result,
      (error => console.log(error))
    );
  }

  gotoChatRoom(user: string, room: string): void {
    this.router.navigate(['/chatroom'], {queryParams: {userId: this.userID, roomID: room}});
  }
}

class DoctorRoomType {
  user: string;
  room: string;
}


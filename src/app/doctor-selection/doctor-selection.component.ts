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
      (result) => {
        this.allRooms = result
        this.allRooms.forEach(doctor=> {
          this.doctorRoomService.checkRoomActiveOrNot(doctor.room).subscribe(
            (result) => {
              if (result === 'true') {
                doctor.isActive = true;
              }
              else{
                doctor.isActive = false;
              }
            },
            (error) => {
              doctor.isActive = false;
            }
          );
       });
      },
      (error) => this.router.navigate(['home'])
    );
    this.doctorRoomService.getUserID().subscribe(
      (result) => this.userID = result,
      (error => this.router.navigate(['home']))
    );
  }

  gotoChatRoom(user: string, room: string): void {
    this.router.navigate(['/chatroom'], {queryParams: {email: '-', userId: this.userID, roomID: room}});
  }
}

class DoctorRoomType {
  user: string;
  room: string;
}

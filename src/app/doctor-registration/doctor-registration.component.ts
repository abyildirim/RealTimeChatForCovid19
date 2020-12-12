import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  singIn(): void {
    this.router.navigate(['/doctor']);
  }

  singUp(): void {
    this.router.navigate(['/signup']);
  }
}

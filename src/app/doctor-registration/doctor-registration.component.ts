import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  singIn(): void {
    this.router.navigate(['doctor/registration/sing-up']);
  }

  singUp(): void {
    this.router.navigate(['doctor/registration/sing-up']);
  }
}

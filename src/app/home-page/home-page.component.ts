import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  audio;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.audio = new Audio();
    this.audio.src = '../../assets/audio/information.mp3';
    this.audio.load();
    this.audio.play();
  }
  routeDoctor(): void {
    this.router.navigate(['doctor/registration']);
  }

  routePatient(): void {
    this.router.navigate(['patient/doctor-selection']);
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

}

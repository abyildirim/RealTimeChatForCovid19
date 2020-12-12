import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WellComePageComponent} from './well-come-page/well-come-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import { DoctorSelectionComponent } from './doctor-selection/doctor-selection.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'sign-up', component: WellComePageComponent},
  {path: 'doctor/registeration', component: DoctorRegistrationComponent},
  {path: 'patient/doctor-selection', component: DoctorSelectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

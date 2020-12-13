import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up-component/sign-up.component';
import {HomePageComponent} from './home-page/home-page.component';
import { DoctorSelectionComponent } from './doctor-selection/doctor-selection.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import {ChatRoomComponentsComponent} from './chat-room-components/chat-room-components.component';
import {SignInComponent} from './sign-in-component/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'doctor/registration', component: DoctorRegistrationComponent},
  {path: 'patient/doctor-selection', component: DoctorSelectionComponent},
  {path: 'chatroom', component: ChatRoomComponentsComponent},
  {path: 'doctor/registration/sign-in', component: SignInComponent},
  {path: 'doctor/registration/sing-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

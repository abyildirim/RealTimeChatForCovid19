import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DialogElementsExampleDialogComponent, SignUpComponent} from './sign-up-component/sign-up.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomePageComponent } from './home-page/home-page.component';
import { DoctorSelectionComponent } from './doctor-selection/doctor-selection.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import {ChatRoomComponentsComponent} from './chat-room-components/chat-room-components.component';
import {DialogForNoPasswordComponent, SignInComponent} from './sign-in-component/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DialogElementsExampleDialogComponent,
    HomePageComponent,
    DoctorSelectionComponent,
    DoctorRegistrationComponent,
    HomePageComponent,
    ChatRoomComponentsComponent,
    SignInComponent,
    DialogForNoPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

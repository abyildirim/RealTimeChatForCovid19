import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DialogElementsExampleDialog, WellComePageComponent} from './well-come-page/well-come-page.component';
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
import {ReactiveFormsModule} from '@angular/forms';
import { HastaComponent } from './hasta/hasta.component';
import { DocktorComponent } from './docktor/docktor.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomePageComponent } from './home-page/home-page.component';
import { DoctorSelectionComponentComponent } from './doctor-selection-component/doctor-selection-component.component';
import { DoctorSelectionComponent } from './doctor-selection/doctor-selection.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    WellComePageComponent,
    DialogElementsExampleDialog,
    HastaComponent,
    DocktorComponent,
    HomePageComponent,
    DoctorSelectionComponentComponent,
    DoctorSelectionComponent,
    DoctorRegistrationComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

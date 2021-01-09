import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DoctorRoomService} from '../services/covid.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-well-come-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnChanges {

  alert_message: String = "";
  alert_flag: Boolean = false;
  submitted = false;

  genders: any = [{name: 'Male', value: 0}, {name: 'Female', value: 1}];
  doctorOrPatient: any = [{name: 'doctor', value: 0}, {name: 'hasta', value: 1}];

  doctorArea: any = [
  {name: 'Infectious Disease Physician', value: 'Infectious Disease Physician'},
  {name: 'Dermatologist', value: 'Dermatologist'},
  {name: 'Neurologist', value: 'Neurologist'},
  {name: 'Cardiologist', value: 'Cardiologist'},
  {name: 'Psychiatrist', value: 'Psychiatrist'}];

  personalform = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.email],
    age: ['', Validators.required],
    phonenumber: ['', Validators.required],
    birthdate: ['', Validators.required],
    gender: ['', Validators.required],
    doctorArea: ['', Validators.required],
    password: ['', Validators.required]
  });

  private subscription = new Subscription();

  onChange: any = (_: PersonalInfoForm) => {
  }
  onTouch: any = () => {
  }


  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private service: DoctorRoomService, alertConfig: NgbAlertConfig) {
    alertConfig.type = 'danger';
  }

  ngOnInit(): void {
    this.subscription.add(
      this.personalform.valueChanges.subscribe((value: PersonalInfoForm) => {
        this.onChange(value);
      })
    );
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.touched && simpleChanges.touched.currentValue) {
      this.personalform.markAllAsTouched();
    }
  }

  saveForm(): void {
    if (this.personalform.invalid) {
      this.alert_message = "Required fields are invalid!"
      this.show_alert()
      return;
    }
    // TODO: save before summit to server js
    /*this.service.saveFormToDataBase(this.personalform.value).subscribe(
      (result: HttpResponse<any>) => this.router.navigate(['/doctororstudent']),
      error => this.openDialog()
    );*/

    this.service.saveDoctorToSystem(this.personalform.getRawValue()).subscribe(
      (result) => this.check_doctor_save_status(result),
      (error) => console.log(error)
    );

    /*if (this.personalform.get('doctorOrPatient').value === 0) {
      this.router.navigate(['/doctor']);
    } else if (this.personalform.get('doctorOrPatient').value === 1) {
      this.router.navigate(['/hasta']);
    }*/
  }

  async show_alert(){
    this.alert_flag = true;
    await this.delay(5000);
    this.alert_flag = false;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  check_doctor_save_status(result){
    if(result == "This mail address already exists!"){
      this.alert_message = "This mail is already in use!"
      this.show_alert()
    }
    else{
      this.router.navigate(['/'])
    }
  }

  openDialog(): void {
    this.dialog.open(DialogElementsExampleDialogComponent);
  }

  formDisabled(): boolean {
    return false;
  }

}

export interface PersonalInfoForm {
  name: string;
  surname: string;
  email: string;
  age: string;
  phonenumber: string;
  birthdate: string;
  gender: string;
  doctorArea: string;
}


@Component({
  selector: 'app-dialog-for-wrong-form',
  templateUrl: './dialog-for-wrong-form.html',
})
export class DialogElementsExampleDialogComponent {
}

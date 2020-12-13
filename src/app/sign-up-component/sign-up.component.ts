import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DoctorRoomService} from '../services/covid.service';

@Component({
  selector: 'app-well-come-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnChanges {

  submitted = false;

  genders: any = [{name: 'male', value: 0}, {name: 'female', value: 1}];
  doctorOrPatient: any = [{name: 'doctor', value: 0}, {name: 'hasta', value: 1}];

  personalform = this.fb.group({
    name: ['', Validators.required],
    surname: [''],
    email: [''],
    age: [''],
    phonenumber: [''],
    birthdate: [''],
    gender: [''],
    doctorOrPatient: [''],
  });

  private subscription = new Subscription();

  onChange: any = (_: PersonalInfoForm) => {
  }
  onTouch: any = () => {
  }


  constructor(private fb: FormBuilder, private router: Router, public dialog: MatDialog, private service: DoctorRoomService) {
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
    console.log('submitted');
    // TODO: save before summit to server js
    /*this.service.saveFormToDataBase(this.personalform.value).subscribe(
      (result: HttpResponse<any>) => this.router.navigate(['/doctororstudent']),
      error => this.openDialog()
    );*/
    if (this.personalform.get('doctorOrPatient').value === 0) {
      this.router.navigate(['/doctor']);
    } else if (this.personalform.get('doctorOrPatient').value === 1) {
      this.router.navigate(['/hasta']);
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
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
}


@Component({
  selector: 'app-dialog-for-wrong-form',
  templateUrl: './dialog-for-wrong-form.html',
})
export class DialogElementsExampleDialogComponent {
}

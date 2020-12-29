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
  doctorArea: any = [{name: 'dahiliye', value: 'iç hastalıkları'}];
  personalform = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
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
    if (this.personalform.invalid) {
      this.openDialog();
      return;
    }
    // TODO: save before summit to server js
    /*this.service.saveFormToDataBase(this.personalform.value).subscribe(
      (result: HttpResponse<any>) => this.router.navigate(['/doctororstudent']),
      error => this.openDialog()
    );*/

    this.service.saveDoctorToSystem(this.personalform.getRawValue()).subscribe(
      (result) => this.router.navigate(['/chatroom'], {
        queryParams: {
          email: this.personalform.get('email'),
          userId: this.personalform.get('name').value + ' ' + this.personalform.get('surname').value,
          roomID: result
        }
      }),
      (error) => console.log(error)
    );

    /*if (this.personalform.get('doctorOrPatient').value === 0) {
      this.router.navigate(['/doctor']);
    } else if (this.personalform.get('doctorOrPatient').value === 1) {
      this.router.navigate(['/hasta']);
    }*/
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

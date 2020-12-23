import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {DoctorRoomService} from "../services/covid.service";

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnChanges {
  signInForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
  });

  private subscription = new Subscription();

  onChange: any = (_: SignInForm) => {
  }

  constructor(private fb: FormBuilder, private service: DoctorRoomService) {
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.touched && simpleChanges.touched.currentValue) {
      this.signInForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.subscription.add(
      this.signInForm.valueChanges.subscribe((value: SignInForm) => {
        this.onChange(value);
      })
    );
  }

  // tslint:disable-next-line:typedef
  saveForm() {
    if (this.signInForm.invalid) {
      return;
    }

    this.service.doctorValidationForSignIn(this.signInForm.getRawValue()).subscribe(
      (result) => this.checkSignInResponse(result),
      (error) => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  checkSignInResponse(value) {
    console.log(value);
  };
}

export interface SignInForm {
  firstName: string;
  lastName: string;
  email: string;
}

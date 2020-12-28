const Doctor = class {
  constructor(input) {
    this._name = input.name;
    this._surname = input.surname;
    this._email = input.email;
    this._age = input.age;
    this._phonenumber = input.phonenumber;
    this._birthdate = input.birthdate;
    this._gender = input.gender;
    this._doctorArea = input.doctorArea;
    this._password = input.password;
  }
  get doctorArea() {
    return this._doctorArea;
  }

  set doctorArea(value) {
    this._doctorArea = value;
  }

  /*constructor(name, surname, email, age, phonenumber, birthdate, gender,doctorArea) {
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._age = age;
    this._phonenumber = phonenumber;
    this._birthdate = birthdate;
    this._gender = gender;
    this.doctorArea = doctorArea;
  }*/

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get surname() {
    return this._surname;
  }

  set surname(value) {
    this._surname = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get phonenumber() {
    return this._phonenumber;
  }

  set phonenumber(value) {
    this._phonenumber = value;
  }

  get birthdate() {
    return this._birthdate;
  }

  set birthdate(value) {
    this._birthdate = value;
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value;
  }

  get doctorOrPatient() {
    return this._doctorOrPatient;
  }

  set doctorOrPatient(value) {
    this._doctorOrPatient = value;
  }

  print() {
    console.log('Name is :' + this._name);
  }
}
module.exports = Doctor;

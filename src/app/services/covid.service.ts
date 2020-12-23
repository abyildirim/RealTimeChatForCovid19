import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorRoomService {
  private baseURL = 'http://localhost:3000/api/';
  private endpoint = this.baseURL + 'doctorRoomList';
  private endpointForUserID = this.baseURL + 'userIDForRandom';
  private endpointForSaveDoctor = this.baseURL + 'saveDoctor';
  private endpointForDoctorValidationForSignIn = this.baseURL + 'doctorValidationForSignIn';
  private endpointForCheckRoomIsActive = this.baseURL + 'checkRoomIsActive';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  saveFormToDataBase(value: string) {
    const body = JSON.stringify(value);
    return this.http.post(this.endpoint, body, {headers: this.headers});
  }

  // tslint:disable-next-line:typedef
  getAllDoctorRooms() {
    return this.http.get(this.endpoint, {headers: this.headers});
  }

  // tslint:disable-next-line:typedef
  getUserID() {
    return this.http.get(this.endpointForUserID, {headers: this.headers});
  }

  // tslint:disable-next-line:typedef
  saveDoctorToSystem(value) {
    const body = JSON.stringify({data: JSON.stringify(value)});
    return this.http.post(this.endpointForSaveDoctor, body, {headers: this.headers});
  }

  // tslint:disable-next-line:typedef
  doctorValidationForSignIn(value) {
    const body = JSON.stringify({data: JSON.stringify(value)});
    return this.http.post(this.endpointForDoctorValidationForSignIn, body, {headers: this.headers});

  }

  // tslint:disable-next-line:typedef
  checkRoomActiveOrNot(value) {
    const body = JSON.stringify({data: value});
    return this.http.post(this.endpointForCheckRoomIsActive, body, {headers: this.headers});
  }
}

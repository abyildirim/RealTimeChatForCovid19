import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorRoomService {
  private baseURL = 'http://127.0.0.1:3000/api/';
  private endpoint = this.baseURL + 'doctorRoomList';
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

}

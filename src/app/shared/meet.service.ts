import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Meet } from '../models/meet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  path = '/meets';

  URL = environment.URL + this.path;


  constructor(private http: HttpClient) { }

  getAllMeets(): Observable<Meet[]> {
    return this.http.get<Meet[]>(this.URL);
  }

  postMeet(meet: Meet): Observable<Meet> {
    return this.http.post<Meet>(this.URL, meet);
  }

  updateMeet(meet: Meet): Observable<Meet> {
    return this.http.post<Meet>(this.URL, meet);
  }

  deleteMeet(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

}

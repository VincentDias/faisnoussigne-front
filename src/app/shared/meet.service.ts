import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
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

  deleteMeet(id: string) {
    return this.http.delete(this.URL, { params: { id } });
  }

}

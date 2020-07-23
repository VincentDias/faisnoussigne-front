import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../models/mail';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  path = '/send-mail';

  URL = environment.URL + this.path;

  constructor(private http: HttpClient) { }

  sendEmail(mail: Mail): Observable<Mail> {
    return this.http.post<Mail>(this.URL, mail);
  }
}

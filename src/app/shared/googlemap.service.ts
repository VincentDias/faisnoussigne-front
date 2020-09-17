import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GoogleMapGeocode } from '../models/google-map-geocode';
import { Address } from 'cluster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglemapService {

  path = '/map-api';

  URL = environment.URL + this.path;

  constructor(private http: HttpClient) { }

  getListGeocode(address: string) {
    return this.http.get<GoogleMapGeocode>(this.URL, { params: { address } });
  }

  postAdress(adress: Address): Observable<Address> {
    return this.http.post<Address>(this.URL, adress);
  }

}

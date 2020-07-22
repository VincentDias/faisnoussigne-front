import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GoogleMapGeocode } from '../models/google-map-geocode';

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

}

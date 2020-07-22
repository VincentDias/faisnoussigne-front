import { GoogleMapGeocode } from './google-map-geocode';

export class Meet {

  id: number;
  title: string;
  address: string;
  date: Date;
  lat: number;
  lng: number;
  googleMapGeocode: GoogleMapGeocode[];


}

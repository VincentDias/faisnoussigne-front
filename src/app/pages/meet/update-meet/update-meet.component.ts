import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MeetService } from 'src/app/shared/meet.service';
import { TokenStorageService } from 'src/app/jwt-auth/_services/token-storage.service';
import { Meet } from 'src/app/models/meet';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GoogleMapGeocode } from 'src/app/models/google-map-geocode';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-update-meet',
  templateUrl: './update-meet.component.html',
  styleUrls: ['./update-meet.component.scss']
})
export class UpdateMeetComponent implements OnInit {

  currentUser: any;
  meet = new Meet();
  private roles: string[];
  isLoggedIn = false;
  moderator = false;
  admin = false;
  meetToUpdate: Meet;
  latitude: number;
  longitude: number;
  zoom: number;
  googleMapGeocode: GoogleMapGeocode;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private meetService: MeetService, private tokenStorageService: TokenStorageService,
    // tslint:disable-next-line: align
    private router: Router, private route: ActivatedRoute, private mapsAPILoader: MapsAPILoader,
    // tslint:disable-next-line: align
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.moderator = this.roles.includes('ROLE_MODERATOR');
      this.admin = this.roles.includes('ROLE_ADMIN');

    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      this.meet.id = parseInt(params.get('id'));
    });
    this.meetService.getMeetById(this.meet.id).subscribe((meet: Meet) => {
      this.meet = meet;
    });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line: new-parens
      this.geoCoder = new google.maps.Geocoder;

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {

      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  deleteMeet(id: number) {
    this.meetService.deleteMeet(id).subscribe();
    this.router.navigateByUrl('meet');
  }

  onSubmit() {
    this.meetService.updateMeet(this.meet).subscribe((meetToUpdate: Meet) => {
      this.meet = { ...meetToUpdate };
      this.router.navigateByUrl('meet');
    });
  }

}

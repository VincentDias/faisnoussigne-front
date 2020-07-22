import { Component, OnInit } from '@angular/core';
import { GoogleMapGeocode } from 'src/app/models/google-map-geocode';
import { Meet } from 'src/app/models/meet';
import { MeetService } from 'src/app/shared/meet.service';
import { TokenStorageService } from 'src/app/jwt-auth/_services/token-storage.service';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss']
})
export class MeetComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  moderator = false;
  meets: Meet[] = [];

  googleMapGeocode: GoogleMapGeocode;

  constructor(private meetService: MeetService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.moderator = this.roles.includes('ROLE_MODERATOR');
    }

    this.meetService.getAllMeets().subscribe(meets => {
      this.meets = meets;
    });

  }
}



import { Component, OnInit } from '@angular/core';
import { MeetService } from 'src/app/shared/meet.service';
import { Meet } from 'src/app/models/meet';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/jwt-auth/_services/token-storage.service';

@Component({
  selector: 'app-create-meet',
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.scss']
})
export class CreateMeetComponent implements OnInit {

  currentUser: any;
  meet = new Meet();

  constructor(private meetService: MeetService, private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  onSubmit() {
    this.meetService.postMeet(this.meet).subscribe((meet: Meet) => {
      this.meet = meet;
      this.router.navigateByUrl('meet');
    });
  }

}

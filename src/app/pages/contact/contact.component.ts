import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/shared/mail.service';
import { Mail } from 'src/app/models/mail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mail = new Mail();


  constructor(private mailService: MailService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.mailService.sendEmail(this.mail).subscribe((mail: Mail) => {
      this.mail = mail;
      this.router.navigateByUrl('contact');
    });
  }

}

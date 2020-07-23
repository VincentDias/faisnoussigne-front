import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';
import { TokenStorageService } from 'src/app/jwt-auth/_services/token-storage.service';
import { Router } from '@angular/router';
import { FileService } from 'src/app/shared/file.service';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.scss']
})
export class FileFormComponent implements OnInit {

  currentUser: any;
  file: any = {};

  constructor(private fileService: FileService, private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  onSubmit() {
    this.fileService.postFile(this.file).subscribe((file: File) => {
      this.file = file;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/article.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/jwt-auth/_services/token-storage.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  currentUser: any;
  article: any = {};

  constructor(private articleService: ArticleService, private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  onSubmit() {
    this.articleService.create(this.article).subscribe((article: Article) => {
      this.article = article;
      this.router.navigateByUrl('blog');
    });
  }

}

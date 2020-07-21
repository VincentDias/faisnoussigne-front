import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/article.service';
import { TokenStorageService } from 'src/app/jwt-auth/_services/token-storage.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  moderator = false;
  articles: Article = new Article();
  article: Article[] = [];

  constructor(private articleService: ArticleService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.articleService.getAllArticle().subscribe(articleFromServer => {
      this.articles = articleFromServer;
    });

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.moderator = this.roles.includes('ROLE_MODERATOR');

    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: Article = new Article();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {

    this.articleService.getAllArticle().subscribe(articleFromServer => {
      this.articles = articleFromServer;
    });
  }

}

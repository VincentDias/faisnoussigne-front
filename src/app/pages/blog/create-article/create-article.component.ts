import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/shared/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  article = new Article();

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.articleService.create(this.article).subscribe((article) => {
      this.router.navigateByUrl('blog');
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  path = '/articles';

  URL = environment.URL + this.path;

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.URL);
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.URL, article);
  }

  deleteArticle(id: string) {
    return this.http.delete(this.URL, { params: { id } });
  }


}

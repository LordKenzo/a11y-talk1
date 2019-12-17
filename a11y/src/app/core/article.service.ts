import { Injectable } from '@angular/core';
import { of , Observable} from 'rxjs';
import { delay } from 'rxjs/operators';
import { Article } from '../shared/articles';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Array<Article> = [
    {
      id: 1,
      title: 'Intro Angular',
      // tslint:disable-next-line: max-line-length
      short: 'Introduzione al framework Angular.',
      text: 'Angular è un framework creato da Google',
      author: 'Lorenzo Franceschini',
      likes: 10
    },
    {
      id: 2,
      title: 'Angular CLI',
      // tslint:disable-next-line: max-line-length
      short: 'Crea Applicazioni con Angular Command Line Interface',
      text: 'Grazie al Command Line Interface, detto CLI, possiamo creare facilmente applicazioni Angular',
      author: 'Fabio Biondi',
      likes: 3
    }
  ];
  constructor() { }

  getArticle(): Observable<Array<Article>> {
    return of(this.articles).pipe(
      delay(1000)
    );
  }

  getArticleById(id: number): Observable<Article> {
    return of(this.articles.filter(article => article.id === id)[0]);
  }
}

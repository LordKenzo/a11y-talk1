import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/shared/articles';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, AfterViewInit, OnDestroy {

  article: Article;
  @ViewChild('articolo', { static: false }) articolo;
  private routeSub: Subscription;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
    setTimeout(() => this.article.likes += 3, 5000);
  }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const idArticle = +params.id;
      this.articleService.getArticleById(idArticle).subscribe(
        article => this.article = article
      );
    });
  }
  ngAfterViewInit() {
    this.articolo.nativeElement.focus();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}

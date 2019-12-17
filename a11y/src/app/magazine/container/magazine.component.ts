import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Article } from '../../shared/articles';
import { ArticleService } from '../../core/article.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit, AfterViewInit {

  articles: Array<Article> = [];
  isLoading = false;

  @ViewChild('titolo', { static: false }) titolo;

  constructor(private articleService: ArticleService, private router: Router, private titleService: Title) {
      router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
          // document.getElementsByTagName('h1')[1].focus();
          this.titleService.setTitle('Magazine');
      });
   }
  ngAfterViewInit() {
    this.titolo.nativeElement.focus();
  }
  ngOnInit() {
    this.isLoading = true;
    this.articleService.getArticle().subscribe(
      articles => {
        this.articles = articles;
        this.isLoading = false;
      }
    );
  }

}

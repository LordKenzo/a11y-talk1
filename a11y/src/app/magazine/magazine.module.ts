import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MagazineRoutingModule } from './magazine-routing.module';
import { MagazineComponent } from './container/magazine.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    MagazineComponent,
    ArticleComponent
  ],
  imports: [
    SharedModule,
    MagazineRoutingModule
  ]
})
export class MagazineModule { }

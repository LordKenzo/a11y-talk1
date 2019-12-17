import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MagazineComponent } from './container/magazine.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [{
    path: '', component: MagazineComponent
}, {
    path: 'article/:id', component: ArticleComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MagazineRoutingModule { }

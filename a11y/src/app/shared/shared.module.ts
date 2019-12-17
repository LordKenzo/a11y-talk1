import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components and Directives
import { LikerComponent } from './liker/liker.component';
import { EyeBlurDirective } from './eye-blur.directive';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LikerComponent,
    EyeBlurDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    EyeBlurDirective,
    LikerComponent,
    MatSliderModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }

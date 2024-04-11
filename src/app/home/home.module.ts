import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ThreeJsComponent } from '../three-js/three-js.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NzCarouselModule,
    ThreeJsComponent
  ]
})
export class HomeModule { }

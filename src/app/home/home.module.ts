import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ThreeJsComponent } from '../three-js/three-js.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NzCarouselModule,
    ThreeJsComponent,
    BrowserAnimationsModule,
  ]
})
export class HomeModule { }

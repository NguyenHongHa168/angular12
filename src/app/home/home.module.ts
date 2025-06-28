import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ThreeJsComponent } from '../three-js/three-js.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NzCarouselModule,
    ThreeJsComponent,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ]
})
export class HomeModule { }

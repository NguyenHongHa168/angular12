import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  formData: any = {};
  checkScreen : boolean = false;

  ngOnInit(): void {

  }
  constructor(
    private notification: NzNotificationService,
    private nzMessageService: NzMessageService
  ) { }

  createNotify(type: string): void {
    this.notification.create(
      type,
      'Thông báo',
      'Bạn đã gửi thành công !!!'
    );
  }

  onSubmit() {
  }

  iconHeader() {
    var screenWidth = window.innerWidth;
    if(screenWidth <= 812){
      this.checkScreen = !this.checkScreen
    }
  }
}

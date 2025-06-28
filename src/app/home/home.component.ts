import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
interface ContactForm {
  email: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  formData: ContactForm = { email: '', message: '' };
  private storageKey = 'contact-form';
  // formData: any = {};
  checkScreen : boolean = false;

  ngOnInit(): void {
const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.formData = JSON.parse(saved);
    }
  }
  constructor(
    private notification: NzNotificationService,
    private nzMessageService: NzMessageService,
    private message: NzMessageService
  ) { }

  createNotify(type: 'success' | 'info' | 'warning' | 'error'): void {
  this.notification[type](
    'Thông báo',
    'Bạn đã gửi thành công !!!'
  );
}

  iconHeader() {
    var screenWidth = window.innerWidth;
    if(screenWidth <= 812){
      this.checkScreen = !this.checkScreen
    }
  }

 onSubmit() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.formData));
    this.createNotify('success');
  }

}

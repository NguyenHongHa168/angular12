import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
interface ContactForm {
  email: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule,CommonModule,CarouselModule,ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  formData: ContactForm = { email: '', message: '' };
  private storageKey = 'contact-form';
  checkScreen : boolean = false;
  responsiveOptions = [
  { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
  { breakpoint: '768px', numVisible: 1, numScroll: 1 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 }
];
  project:any=[
    {
      name:'Rune Chữa Lành',
      link:'https://runechualanh.com/',
      img:'/assets/images/runechualanh.jpg',
      datetime:' 07/2024',
      description:"The website is an outsourced project handled by the team. It is designed to calculate a user's zodiac sign and personality traits based on their date of birth.",
      technical:[
        'ANGULAR','TypeScript','CSS','HTML'
      ]
    },
    {
      name:'Netflix',
      link:'https://nguyenhongha.netlify.app',
      img:'/assets/images/netflix.jpg',
      datetime:'04/2024',
      description:"Use APIs to fetch data, split movie categories into components for easy management. Create a router to redirect pages, create login and logout functions, services like login, movie",
      technical:[
       'ANGULAR','TypeScript','CSS','HTML'
      ]
    },
    {
       name:'ADE',
        link:'https://erp.ade.vn/',
        img:'/assets/images/ade.jpg',
       datetime:'06/2024',
      description:"The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical:[
        'Odoo','Python','JS','SQL'
      ]
    },
    {
       name:'ADEC',
        link:'https://adec.vn/',
        img:'/assets/images/Adec.jpg',
       datetime:'06/2024',
      description:"The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical:[
        'Odoo','Python','JS','SQL'
      ]
    },
  ]

  ngOnInit(): void {
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


}

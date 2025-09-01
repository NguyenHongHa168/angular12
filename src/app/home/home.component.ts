import { CommonModule } from '@angular/common';
import { Component, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzNotificationService } from 'ng-zorro-antd/notification';
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
  schemas: [NO_ERRORS_SCHEMA],
  
})
export class HomeComponent {
  formData: ContactForm = { email: '', message: '' };
  checkScreen : boolean = false;
  responsiveOptions = [
  { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
  { breakpoint: '768px', numVisible: 1, numScroll: 1 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 }
];
  project=[
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
      description:"Use APIs to fetch data, split movie categories into components for easy management. Create a router to redirect pages, services like login, movie",
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
    {
       name:'ADEC334',
        link:'https://adec.vn/',
        img:'/assets/images/Adec.jpg',
       datetime:'06/2024',
      description:"The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical:[
        'Odoo','Python','JS','SQL'
      ]
    },
    {
       name:'ADEC334',
        link:'https://adec.vn/',
        img:'/assets/images/Adec.jpg',
       datetime:'06/2024',
      description:"The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical:[
        'Odoo','Python','JS','SQL'
      ]
    },
  ]

   currentPage = 0;
  itemsPerPage = 3;

  get totalPages(): number {
    return Math.ceil(this.project.length / this.itemsPerPage);
  }

  prev() {
    console.log(1);
    if (this.currentPage > 0) this.currentPage--;
  }
  next() {
    console.log(2);
    if (this.currentPage < this.totalPages - 1) this.currentPage++;
  }

  ngOnInit(){
  }

  constructor(
    private notification: NzNotificationService,
  ) { }

  iconHeader() {
    var screenWidth = window.innerWidth;
    if(screenWidth <= 812){
      this.checkScreen = !this.checkScreen
    }
  }


}

import { CommonModule, NgFor } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { CarouselModule } from 'primeng/carousel';

interface ContactForm {
  email: string;
  message: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzCarouselModule, CommonModule, NgFor, ButtonModule, RouterLink,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA],

})
export class HomeComponent implements OnInit {
  formData: ContactForm = { email: '', message: '' };
  checkScreen: boolean = false;
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];
  projects = [
    {
      id: 1,
      name: 'Rune Chữa Lành',
      link: 'https://runechualanh.com/',
      img: '/assets/images/runechualanh.jpg',
      datetime: ' 07/2024',
      description: "The website is an outsourced project handled by the team. It is designed to calculate a user's zodiac sign and personality traits based on their date of birth.",
      technical: [
        'ANGULAR', 'TS', 'CSS', 'HTML'
      ]
    },
    {
       id: 2,
      name: 'Netflix',
      link: 'https://nguyenhongha.netlify.app',
      img: '/assets/images/netflix.jpg',
      datetime: '04/2024',
      description: "Use APIs to fetch data, split movie categories into components for easy management. Create a router to redirect pages, services like login, movie",
      technical: [
        'ANGULAR', 'TS', 'CSS', 'HTML'
      ]
    },
    {
      id: 6,
      name: 'No Sugar No Lie',
      link: 'https://github.com/NguyenHongHa168/healthy-food',
      img: '/assets/images/nosugarnolie.jpg',
      datetime: '09/2025',
      description: "The website is built with framework Angular to create a user-friendly interface that displays a list of dishes along with calorie information. Users can view calorie details, and filter items based on their dietary goals",
      technical: [
         'ANGULAR', 'TS', 'CSS', 'HTML','json'
      ]
    },
    {
      id: 7,
      name: '160CStore',
      link: 'https://github.com/NguyenHongHa168/shop_thoi_trang',
      img: '/assets/images/blog-3.jpg',
      datetime: '10/2025',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'PHP', 'SQL'
      ]
    },
    {
      id: 8,
      name: 'Japanese learning website',
      link: '',
      img: '/assets/images/blog-2.jpg',
      datetime: '06/2024',
      description: "A Japanese-learning web app using PHP, helping learners practice listening and writing, take quizzes, track their progress, and get suggestions for the next lesson.",
      technical: [
        'PHP', 'TS', 'CSS', 'SQL'
      ]
    },
    {
      id: 9,
      name: 'Fashion Shop Management',
      link: 'https://adec.vn/',
      img: '/assets/images/blog-2.jpg',
      datetime: '08/2025',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'ReactJS', 'JavaScript', 'NodeJS'
      ]
    },
    {
      id: 3,
      name: 'ADE',
      link: 'https://erp.ade.vn/',
      img: '/assets/images/ade.jpg',
      datetime: '06/2024',
      description: " Collaborated with the team to build, edit, and develop the website for project, sales, employee, and CRM, Repair modules...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
    {
      id: 4,
      name: 'ADEC',
      link: 'https://adec.vn/',
      img: '/assets/images/Adec.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
    {
      id: 5,
      name: 'ADECSOL',
      link: 'https://adecsol.vn/',
      img: '/assets/images/adecsol.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    }
  ]

  currentPage = 0;
  itemsPerPage = 3;

  ngOnInit() {

  }
  ngDestroy() {
    console.log('itemsPerPage', this.itemsPerPage);
    console.log("this.currentPage", this.currentPage);
  }

  constructor(
    private notification: NzNotificationService,
  ) { }

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.itemsPerPage);
  }

  prev() {
    if (this.currentPage > 3) {
      this.currentPage--;
    }

  }
  next() {
    if (this.currentPage < this.totalPages - 1){
      this.currentPage++;
    } 
  }


  iconHeader() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 812) {
      this.checkScreen = !this.checkScreen
    }
  }
  onSubmit() {
    this.notification.success('Success', 'Your message has been sent successfully!');
    this.formData = { email: '', message: '' };
    alert('Your message has been sent successfully!');
  }


}

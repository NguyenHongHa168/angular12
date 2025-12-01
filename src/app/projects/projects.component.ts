import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  responsiveOptions: any[] | undefined;
projects = [
    {
      id: 1,
      name: 'Rune Chữa Lành',
      link: 'https://runechualanh.com/',
      img: '/assets/images/runechualanh.jpg',
      datetime: ' 07/2024',
      description: "The website is an outsourced project handled by the team. It is designed to calculate a user's zodiac sign and personality traits based on their date of birth.",
      technical: [
        'ANGULAR', 'TypeScript', 'CSS', 'HTML'
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
        'ANGULAR', 'TypeScript', 'CSS', 'HTML'
      ]
    },
    {
      id: 3,
      name: 'ADE',
      link: 'https://erp.ade.vn/',
      img: '/assets/images/ade.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
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
      name: 'ADEC5',
      link: 'https://adec.vn/',
      img: '/assets/images/Adec.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
    {
      id: 6,
      name: 'ADEC6',
      link: 'https://adec.vn/',
      img: '/assets/images/Adec.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
    {
      id: 7,
      name: 'ADEC7',
      link: 'https://adec.vn/',
      img: '/assets/images/Adec.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
    {
      id: 8,
      name: 'ADEC8',
      link: 'https://adec.vn/',
      img: '/assets/images/Adec.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
    {
      id: 9,
      name: 'ADEC9',
      link: 'https://adec.vn/',
      img: '/assets/images/Adec.jpg',
      datetime: '06/2024',
      description: "The project was customized based on the enterprise's specific needs, using core modules such as Sales, Purchase, Project, CRM, Inventory, Employee...",
      technical: [
        'Odoo', 'Python', 'JS', 'SQL'
      ]
    },
  ]
}

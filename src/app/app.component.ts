import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HomeComponent, CommonModule, RouterOutlet,ProjectsComponent]
})
export class AppComponent {
  title = 'profile';
  ngOnInit(): void {
  }
}

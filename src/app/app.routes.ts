import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
   { path: 'home', component: HomeComponent },
      { path: 'products', component: ProjectsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
      { path: '**', component: HomeComponent }
];

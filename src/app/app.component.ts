import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ThreeJsComponent } from './three-js/three-js.component';
import { CarouselModule } from 'primeng/carousel';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent,ThreeJsComponent,CarouselModule]
})
export class AppComponent {
  title = 'profile';
  ngOnInit(): void {
  }
}

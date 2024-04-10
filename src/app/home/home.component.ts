import { Component, ElementRef,NO_ERRORS_SCHEMA  } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NzCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class HomeComponent {
ngOnInit(): void {
}
constructor(
) { }

toggleIconMenu(){
}





}

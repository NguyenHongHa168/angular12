import { Component, ElementRef,NO_ERRORS_SCHEMA  } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NzCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class HomeComponent {
  formData: any = {};
ngOnInit(): void {
}
constructor(
  private notification: NzNotificationService
) { }

toggleIconMenu(){
}

createNotify(type: string): void {
  this.notification.create(
    type,
    'Thông báo',
    'Bạn đã gửi thành công !!!'
  );
}

onSubmit() {
}


}

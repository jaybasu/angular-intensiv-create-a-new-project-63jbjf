import { Component } from '@angular/core';
import { Slide } from './carousel/carousel.component'; // Import the Slide interface

@Component({
  selector: 'my-app',
  template: `
    <app-carousel [slides]="slides"
                  [transitionDuration]="0.8" 
                  [autoplayInterval]="3000"></app-carousel>
  `,
})
export class AppComponent {
  slides: Slide[] = [
    { imageUrl: 'path/to/your/image1.jpg' },
    { imageUrl: 'path/to/your/image2.jpg' },
    { imageUrl: 'path/to/your/image3.jpg' },
  ];
}

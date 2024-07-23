import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  animation,
  useAnimation,
  group,
} from '@angular/animations';

interface Slide {
  imageUrl: string;
}

const slideOutLeft = animation([
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ transform: 'translateX(-100%)' })
  ),
]);

const slideInRight = animation([
  style({ transform: 'translateX(100%)' }),
  animate(
    '{{time}} cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    style({ transform: 'translateX(0%)' })
  ),
]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(
        ':increment',
        group([
          useAnimation(slideOutLeft, { params: { time: '{{duration}}s' } }),
          useAnimation(slideInRight, { params: { time: '{{duration}}s' } }),
        ])
      ),
      transition(
        ':decrement',
        group([
          useAnimation(slideInRight, { params: { time: '{{duration}}s' } }),
          useAnimation(slideOutLeft, { params: { time: '{{duration}}s' } }),
        ])
      ),
    ]),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Input() transitionDuration: number = 0.8; // Default to 0.8 seconds
  @Input() autoplayInterval: number = 3000; // Default to 3 seconds

  currentSlideIndex = 0;
  private autoplayTimer: any;

  ngOnInit() {
    if (this.autoplayInterval > 0) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  stopAutoplay() {
    clearInterval(this.autoplayTimer);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}

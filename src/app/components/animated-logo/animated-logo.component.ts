import {
  Component,
  ElementRef,
  QueryList,
  inject,
  ViewChildren,
  signal,
  HostListener,
} from '@angular/core';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-animated-logo',
  standalone: true,
  imports: [],
  templateUrl: './animated-logo.component.html',
  styleUrl: './animated-logo.component.scss',
})
export class AnimatedLogoComponent {
  letters = [
    'assets/images/P.svg',
    'assets/images/R.svg',
    'assets/images/I.svg',
    'assets/images/S.svg',
    'assets/images/M.svg',
    'assets/images/A.svg',
  ];

  gsapService = inject(GsapService);
  timeline!: GSAPTimeline;

  @ViewChildren('letter') lettersElements!: QueryList<ElementRef<HTMLElement>>;

  scrollPosition = signal(0);

  animation() {
    if (!this.timeline) {
      const tl = this.gsapService.gsap.timeline();
      const { smoothEase } = this.gsapService.gsapEase;

      const elements = this.lettersElements
        .map((e) => e.nativeElement)
        .slice(1);

      tl.to(elements, {
        xPercent: -110,
        duration: 0.7,
        ease: smoothEase,
      });

      this.timeline = tl;
    }

    return this.timeline;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const lastPosition = window.scrollY;

    if (lastPosition > this.scrollPosition()) {
      this.animation().play();
    } else {
      this.animation().reverse();
    }

    this.scrollPosition.set(lastPosition);
  }
}

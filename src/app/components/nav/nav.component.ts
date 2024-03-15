import {
  Component,
  ElementRef,
  HostListener,
  inject,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AnimatedLogoComponent } from '../animated-logo/animated-logo.component';
import { GsapService } from '../../services/gsap.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AnimatedLogoComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  gsapService = inject(GsapService);

  options = ['objetivos', 'sobre nosotros', 'testimonios', 'planes'];
  timeline!: GSAPTimeline;
  scrollPosition = signal(0);

  @ViewChild('nav', { static: true }) nav!: ElementRef<HTMLDivElement>;
  @ViewChildren('option') option!: QueryList<ElementRef<HTMLElement>>;

  animation() {
    if (!this.timeline) {
      const tl = this.gsapService.gsap.timeline();
      const { smoothEase } = this.gsapService.gsapEase;
      const options = this.option.map((e) => e.nativeElement);

      tl.to(
        this.nav.nativeElement,
        {
          // backgroundColor: '#042d5c63',
          // duration: 0.8,
          // ease: smoothEase,
        },
        '0',
      )
        .to(
          options,
          {
            yPercent: -100,
            duration: 0.7,
            stagger: 0.1,
            ease: smoothEase,
          },
          '0',
        )
        .to(
          this.nav.nativeElement,
          {
          // backdropFilter: 'blur(.5em)',
          //   duration: 0,
          },
          '0',
        );

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

import { Injectable, NgZone } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  constructor(private ngZone: NgZone) {}

  init() {
    this.ngZone.runOutsideAngular(() => {
      const lenis = new Lenis();

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    });
  }
}

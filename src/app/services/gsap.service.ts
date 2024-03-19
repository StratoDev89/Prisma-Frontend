import { Injectable, NgZone } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  private constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger, CustomEase);
    });
    CustomEase.create('smooth', '0.5, 0.5, 0, 1');
  }

  get gsap() {
    return gsap;
  }

  get scrollTrigger() {
    return ScrollTrigger;
  }

  get gsapEase() {
    const smoothEase = CustomEase.get('smooth');
    return { smoothEase };
  }
}

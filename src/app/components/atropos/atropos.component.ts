import { Component, ElementRef, NgZone, ViewChild, input } from '@angular/core';
import Atropos from 'atropos';
import { Testimonial } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-atropos',
  standalone: true,
  imports: [],
  templateUrl: './atropos.component.html',
  styleUrl: './atropos.component.scss',
})
export class AtroposComponent {
  @ViewChild('myAtropos', { static: true })
  myAtropos!: ElementRef<HTMLDivElement>;

  testimonial = input<Testimonial>();

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const myAtropos = Atropos({
        el: this.myAtropos.nativeElement,
      });
    });
  }
}

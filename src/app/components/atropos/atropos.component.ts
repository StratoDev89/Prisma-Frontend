import { Component, ElementRef, ViewChild, input } from '@angular/core';
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

  ngAfterViewInit() {
    const myAtropos = Atropos({
      el: this.myAtropos.nativeElement,
      // rest of parameters
    });
  }
}

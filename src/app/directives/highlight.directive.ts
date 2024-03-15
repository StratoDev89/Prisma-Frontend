import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = '#042d5c';
  }
}

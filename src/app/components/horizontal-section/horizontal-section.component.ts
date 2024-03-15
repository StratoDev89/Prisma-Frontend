import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { GsapService } from '../../services/gsap.service';
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-horizontal-section',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './horizontal-section.component.html',
  styleUrl: './horizontal-section.component.scss',
})
export class HorizontalSectionComponent {
  gsap = inject(GsapService).gsap;

  @ViewChild('trigger', { static: true }) trigger!: ElementRef<HTMLDivElement>;
  @ViewChild('horizontal', { static: true })
  horizontal!: ElementRef<HTMLDivElement>;
  @ViewChildren('text') text!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit() {
    this.animation();
    // this.textFade();
  }

  info = [
    {
      id: '01',
      title: 'hablamos tu idioma para potenciar tu éxito',
      text: 'Nos destacamos por comunicarnos de manera clara y accesible evitando tecnicismos confusos. Tu éxito es nuestra prioridad, y la simplicidad en la comunicación es clave para lograrlo.',
      srcImg: '../../../assets/images/img-doc-1.webp',
    },
    {
      id: '02',
      title: 'enfoque personalizado',
      text: 'cada estrategia es única. trabajamos estrechamente contigo para entender tus objetivos y crear campañas que puedan lograrlos.',
      srcImg: '../../../assets/images/img-doc-2.webp',
    },
    {
      id: '03',
      title: 'resultados medibles',
      text: 'nos comprometemos a obtener resultados tangibles. utilizamos análisis y métricas para evaluar el éxito de cada campaña.',
      srcImg: '../../../assets/images/img-doc-3.webp',
    },
  ];

  animation() {
    this.gsap.to(this.horizontal.nativeElement, {
      scrollTrigger: {
        trigger: this.trigger.nativeElement,
        start: 'top top',
        end: () => '+=' + this.horizontal.nativeElement.offsetWidth,
        pin: true,
        scrub: true,
      },
      x: () =>
        -(
          this.horizontal.nativeElement.scrollWidth -
          document.documentElement.clientWidth
        ) + 'px',
      ease: 'none',
    });
  }

  textFade() {
    const textElements = this.text.map((e) => e.nativeElement);

    textElements.forEach((element) => {
      this.gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'left center',
          end: 'right center',
          markers: true,
          scrub: true,
        },
        opacity: 0,
      });
    });
  }
}

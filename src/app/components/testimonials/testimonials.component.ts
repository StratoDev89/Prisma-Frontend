import { Component } from '@angular/core';
import { AtroposComponent } from '../atropos/atropos.component';

export interface Testimonial {
  name: string;
  area: string;
  title: string;
  achievements: string[];
}
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AtroposComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Dr. Andrés Parra Petit',
      area: 'Medicina Física y Rehabilitación',
      title: 'Resultados a 7 días del segundo anuncio',
      achievements: [
        'Conversaciones iniciadas a partir del anuncio: 154',
        'Personas Alcanzadas: 45.217',
        'Importe gastado: 0,04$ por conversación',
        'Presupuesto: 1$ diario',
        'Agenda llena',
      ],
    },
    {
      name: 'Dra. Yraida Peña',
      area: 'Cirugía Plástica',
      title: 'Resultados a 7 días del segundo anuncio',
      achievements: [
        'Conversaciones iniciadas a partir del anuncio: 154',
        'Personas Alcanzadas: 45.217',
        'Importe gastado: 0,04$ por conversación',
        'Presupuesto: 1$ diario',
        'Agenda llena',
      ],
    },
    {
      name: 'Ft. Dana Visconti',
      area: 'Fisioterapia',
      title: 'Resultados a 7 días del segundo anuncio',
      achievements: [
        'Conversaciones iniciadas a partir del anuncio: 154',
        'Personas Alcanzadas: 45.217',
        'Importe gastado: 0,04$ por conversación',
        'Presupuesto: 1$ diario',
        'Agenda llena',
      ],
    },
  ];
}

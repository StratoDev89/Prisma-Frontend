import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  info = [
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

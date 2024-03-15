import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  services = [
    {
      service: 'Estudio de mercado',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Análisis de la competencia',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Estudio del público objetivo',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Creación de cuentas publicitarias',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Diseño de estrategia publicitaria',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Plan de presupuesto y metas',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Búsqueda de ideas para anuncios',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Elaboración de textos llamativos para anuncios',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Diseño de creativos (gráficos/videos)',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Implementación de estrategia',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Diseño de anuncios de testeo A/B',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Monitoreo continuo',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Optimización',
      basic: '✓',
      premium: '✓',
    },
    {
      service: 'Responder mensajes',
      basic: '-',
      premium: '✓',
    },
    {
      service: 'Concretar agendas',
      basic: '-',
      premium: '✓',
    },
    {
      service: 'Organizar agendas semanalmente',
      basic: '-',
      premium: '✓',
    },
    {
      service: 'Confirmación de citas',
      basic: '-',
      premium: '✓',
    },
    {
      service: 'Auditoría de redes sociales',
      basic: '-',
      premium: '✓',
    },
  ];
}

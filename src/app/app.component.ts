import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { GoalsComponent } from './components/goals/goals.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlansComponent } from './components/plans/plans.component';
import { LenisService } from './services/lenis.service';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    HeroComponent,
    GoalsComponent,
    AboutComponent,
    ContactComponent,
    PlansComponent,
    TestimonialsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prisma';
  lenisService = inject(LenisService);

  constructor() {
    this.lenisService.init();
  }
}

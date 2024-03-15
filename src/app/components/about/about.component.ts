import { Component } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { DividerComponent } from '../divider/divider.component';
import { HorizontalSectionComponent } from '../horizontal-section/horizontal-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MainContainerComponent,
    HighlightDirective,
    DividerComponent,
    HorizontalSectionComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}

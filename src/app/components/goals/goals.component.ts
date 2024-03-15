import { Component } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [MainContainerComponent, HighlightDirective],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss',

})
export class GoalsComponent {

}

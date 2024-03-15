import { Component } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';
import { TableComponent } from '../table/table.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [MainContainerComponent, TableComponent, HighlightDirective],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {

}

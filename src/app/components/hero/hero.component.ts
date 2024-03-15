import { Component } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';
import { ButtomComponent } from '../buttom/buttom.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MainContainerComponent, ButtomComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

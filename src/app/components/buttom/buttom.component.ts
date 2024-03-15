import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  standalone: true,
  imports: [],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.scss'
})
export class ButtomComponent {
@Input('text') text = ''
@Input('type') type: 'button' | 'submit' = 'button'

}

import { Component } from '@angular/core';
import { MainContainerComponent } from '../main-container/main-container.component';
import { LogoComponent } from '../logo/logo.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MainContainerComponent, LogoComponent, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  socialIcons = [
    'assets/images/instagram.svg',
    'assets/images/facebook.svg',
    'assets/images/tiktok.svg',
    'assets/images/whatsapp.svg',
  ];
}

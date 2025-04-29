import { Component } from '@angular/core';
import { LogoInicioComponent } from '../logo-inicio/logo-inicio.component';

@Component({
  selector: 'app-header',
  imports: [LogoInicioComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

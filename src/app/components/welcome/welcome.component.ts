import { Component } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}

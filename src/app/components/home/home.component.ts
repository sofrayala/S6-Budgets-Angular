import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BudgetsListComponent } from '../budgets-list/budgets-list.component';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BudgetsListComponent, QuotesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

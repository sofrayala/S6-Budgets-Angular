import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-quotes-list',
  imports: [CommonModule],
  templateUrl: './quotes-list.component.html',
  styleUrl: './quotes-list.component.scss',
})
export class QuotesListComponent {
  quotesSignal: Signal<any[]>;
  showQuotes: Signal<boolean>;
  sortedQuotes: any[] = [];

  constructor(private budgetService: BudgetService) {
    this.quotesSignal = this.budgetService.getQuotes();
    this.showQuotes = this.budgetService.getShowQuotes();
    this.sortedQuotes = [...this.quotesSignal()];
  }
  sortByPrice(): void {
    this.sortedQuotes = [...this.quotesSignal()].sort(
      (a: any, b: any) => b.totalBudget - a.totalBudget
    );
    this.budgetService.updateQuotes(this.sortedQuotes);
  }

  sortAlphabetically(): void {
    this.sortedQuotes = [...this.quotesSignal()].sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
    this.budgetService.updateQuotes(this.sortedQuotes);
  }
}

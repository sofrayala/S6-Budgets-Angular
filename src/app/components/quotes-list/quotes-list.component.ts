import { Component, Signal, WritableSignal, signal } from '@angular/core';
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
  sortedQuotes: Signal<any[]>;

  constructor(private budgetService: BudgetService) {
    this.quotesSignal = this.budgetService.getQuotes();
    this.showQuotes = this.budgetService.getShowQuotes();
    this.sortedQuotes = this.quotesSignal;
  }

  sortByPrice(): void {
    const sorted = [...this.sortedQuotes()].sort(
      (a: any, b: any) => b.totalBudget - a.totalBudget
    );
    this.budgetService.updateQuotes(sorted);
  }

  sortAlphabetically(): void {
    const sorted = [...this.sortedQuotes()].sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
    this.budgetService.updateQuotes(sorted);
  }

  sortByDate(): void {
    const sorted = [...this.sortedQuotes()].sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
    this.budgetService.updateQuotes(sorted);
  }
}

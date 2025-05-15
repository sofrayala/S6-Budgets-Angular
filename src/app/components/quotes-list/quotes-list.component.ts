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
  filteredQuotes: Signal<any[]>;

  constructor(private budgetService: BudgetService) {
    this.quotesSignal = this.budgetService.getQuotes();
    this.showQuotes = this.budgetService.getShowQuotes();
    this.filteredQuotes = this.budgetService.getfilteredQuotes();
  }

  sortByPrice(): void {
    const sorted = [...this.filteredQuotes()].sort(
      (a: any, b: any) => b.totalBudget - a.totalBudget
    );
    this.budgetService.updateFilteredQuotes(sorted);
  }

  sortAlphabetically(): void {
    const sorted = [...this.filteredQuotes()].sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
    this.budgetService.updateFilteredQuotes(sorted);
  }

  sortByDate(): void {
    const sorted = [...this.filteredQuotes()].sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
    this.budgetService.updateFilteredQuotes(sorted);
  }

  filterByName(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    if (!searchValue) {
      this.budgetService.updateFilteredQuotes(this.quotesSignal());
      return;
    }
    this.budgetService.updateFilteredQuotes(
      [...this.quotesSignal()].filter((user: any) =>
        user.name.toLowerCase().includes(searchValue)
      )
    );
  }
}

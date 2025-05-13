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

  constructor(private budgetService: BudgetService) {
    this.quotesSignal = this.budgetService.getQuotes();
    this.showQuotes = this.budgetService.getShowQuotes();
  }
  sortByPrice() {
    const sortedQuotes = [...this.quotesSignal()].sort(
      (a: any, b: any) => b.totalBudget - a.totalBudget
    );
    this.budgetService.updateQuotes(sortedQuotes);
  }
}

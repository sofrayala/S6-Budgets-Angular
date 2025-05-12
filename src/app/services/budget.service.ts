import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private quotes = signal<any[]>([]);
  calculateWebsitePrice(pages: number, languages: number): number {
    return pages * languages * 30;
  }

  calculateTotalBudget(subTotal: number, websitePrice: number): number {
    return subTotal + websitePrice;
  }

  getQuotes() {
    return this.quotes.asReadonly();
  }

  addQuote(quote: any) {
    this.quotes.update((currentQuotes) => [...currentQuotes, quote]);
    console.log('Quotes array', this.quotes());
  }
}

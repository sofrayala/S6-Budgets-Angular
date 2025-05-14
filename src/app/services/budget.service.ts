import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private quotes = signal<any[]>([]);
  private selectedServices = signal<string[]>([]);
  private totalBudget = signal<number>(0);
  private showQuotes = signal(false);

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
    const quoteWithDate = {
      ...quote,
      date: new Date().toISOString(),
    };
    this.quotes.update((currentQuotes) => [...currentQuotes, quoteWithDate]);
    this.showQuotes.set(true);
  }

  getShowQuotes() {
    return this.showQuotes.asReadonly();
  }

  setSelectedServices(services: string[]) {
    this.selectedServices.set(services);
  }

  getSelectedServices() {
    return this.selectedServices();
  }

  setTotalBudget(budget: number) {
    this.totalBudget.set(budget);
  }

  getTotalBudget() {
    return this.totalBudget();
  }

  updateQuotes(sortedQuotes: any[]): void {
    console.log('updated quotes', sortedQuotes);
    this.quotes.set(sortedQuotes);
  }
}

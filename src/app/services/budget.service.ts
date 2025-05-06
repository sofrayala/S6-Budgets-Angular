import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  calculateWebsitePrice(pages: number, languages: number): number {
    return pages * languages * 30;
  }

  calculateTotalBudget(subTotal: number, websitePrice: number): number {
    return subTotal + websitePrice;
  }

  constructor() {}
}

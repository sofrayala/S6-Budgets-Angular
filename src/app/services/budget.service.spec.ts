import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate website panel price correctly', () => {
    const pages = 2;
    const languages = 3;
    const expectedPrice = pages * languages * 30;

    const result = service.calculateWebsitePrice(pages, languages);

    expect(result).toBe(expectedPrice);
  });

  it('should calculate the total budget correctly', () => {
    const subTotal = 1000;
    const websitePrice = 350;
    const expectedTotal = subTotal + websitePrice;

    const result = service.calculateTotalBudget(subTotal, websitePrice);

    expect(result).toBe(expectedTotal);
  });
});

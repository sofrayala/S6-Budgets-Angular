import { Component } from '@angular/core';

import { BudgetList } from '../../interface/budget-list.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budgets-list',
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss',
})
export class BudgetsListComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;
  websitePrice: number = 0;
  selectedServices: string[] = [];

  budgetList: BudgetList[] = [
    {
      title: 'SEO',
      description: 'Program a complete responsive web',
      price: 300,
      controlName: 'seo',
    },
    {
      title: 'Advertising',
      description: 'Program a complete responsive web',
      price: 400,
      controlName: 'advertising',
    },
    {
      title: 'Website Development',
      description: 'Program a complete responsive web',
      price: 500,
      controlName: 'website',
    },
  ];

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
    });

    this.budgetForm.valueChanges.subscribe((values) => {
      this.recalculateTotalBudget(values);
    });
  }

  recalculateTotalBudget(values: any): void {
    const subTotal = this.budgetList.reduce((total, budgetListItem) => {
      return (
        total + (values[budgetListItem.controlName] ? budgetListItem.price : 0)
      );
    }, 0);

    this.totalBudget = this.budgetService.calculateTotalBudget(
      subTotal,
      this.websitePrice
    );
  }

  updateWebsitePrice(price: number): void {
    this.websitePrice = price;
    this.recalculateTotalBudget(this.budgetForm.value);
  }
}

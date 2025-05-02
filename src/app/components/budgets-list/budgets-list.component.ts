import { Component } from '@angular/core';
import { BudgetList } from '../../interface/budget-list.interface';
import {
  ReactiveFormsModule,
  FormControl,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-budgets-list',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss',
})
export class BudgetsListComponent {
  budgetForm: FormGroup;
  totalBudget: number = 0;

  budgetList = [
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

  constructor(private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      seo: false,
      advertising: false,
      website: false,
    });

    this.budgetForm.valueChanges.subscribe((values) => {
      this.calculateTotalBudget(values);
    });
  }

  calculateTotalBudget(values: any): void {
    this.totalBudget = this.budgetList.reduce((total, service) => {
      return total + (values[service.controlName] ? service.price : 0);
    }, 0);
  }
}

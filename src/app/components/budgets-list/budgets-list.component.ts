import { Component } from '@angular/core';
import { BudgetList } from '../../interface/budget-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-budgets-list',
  imports: [CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss',
})
export class BudgetsListComponent {
  budgetList: BudgetList[] = [
    {
      title: 'SEO',
      description: 'Program a complete responsive web',
      price: 300,
    },
    {
      title: 'Advertising',
      description: 'Program a complete responsive web',
      price: 400,
    },
    {
      title: 'Website Development',
      description: 'Program a complete responsive web',
      price: 500,
    },
  ];
}

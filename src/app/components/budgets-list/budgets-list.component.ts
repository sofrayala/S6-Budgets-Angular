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
      description: 'Programació de una web responsive completa',
      price: 300,
    },
    {
      title: 'Advertising',
      description: 'Programació de una web responsive completa',
      price: 400,
    },
    {
      title: 'Website Development',
      description: 'Programació de una web responsive completa',
      price: 500,
    },
  ];
}

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-quotes',
  imports: [ReactiveFormsModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent {
  quotesForm: FormGroup;
  selectedServices: string[] = [];
  totalBudget: number = 0;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.quotesForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.quotesForm.valid) {
      const quote = {
        ...this.quotesForm.value,
        services: this.budgetService.getSelectedServices(),
        totalBudget: this.budgetService.getTotalBudget(),
      };

      this.budgetService.addQuote(quote);
      console.log('Submited quote', quote);
      console.log('updated quote', this.budgetService.getQuotes()());

      this.quotesForm.reset();
      this.selectedServices = [];
      this.totalBudget = 0;
    }
  }

  updateSelectedServices(services: string[]) {
    this.selectedServices = services;
  }

  updateTotalBudget(budget: number) {
    this.totalBudget = budget;
  }
}

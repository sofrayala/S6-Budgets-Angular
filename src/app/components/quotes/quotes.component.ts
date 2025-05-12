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

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.quotesForm = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
    });
  }

  onSubmit() {
    if (this.quotesForm.valid) {
      this.budgetService.addQuote(this.quotesForm.value);
      this.quotesForm.reset();
    }
  }
}

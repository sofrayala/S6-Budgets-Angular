import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Output() websitePricePersonalized = new EventEmitter<number>();
  panelForm: FormGroup;
  isPageModal: boolean = true;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.panelForm = this.fb.group({
      pages: [0, [Validators.required, Validators.min(0)]],
      languages: [0, [Validators.required, Validators.min(0)]],
    });

    this.panelForm.valueChanges.subscribe((values) => {
      const price = this.budgetService.calculateWebsitePrice(
        values.pages,
        values.languages
      );
      this.websitePricePersonalized.emit(price);
    });
  }

  addPages(): void {
    const currentPages = this.panelForm.get('pages')?.value || 0;
    this.panelForm.get('pages')?.setValue(currentPages + 1);
  }

  substractPages(): void {
    const currentPages = this.panelForm.get('pages')?.value || 0;
    if (currentPages > 0) {
      this.panelForm.get('pages')?.setValue(currentPages - 1);
    }
  }

  addLanguages(): void {
    const currentLanguages = this.panelForm.get('languages')?.value || 0;
    this.panelForm.get('languages')?.setValue(currentLanguages + 1);
  }

  substractLanguages(): void {
    const currentLanguages = this.panelForm.get('languages')?.value || 0;
    if (currentLanguages > 0) {
      this.panelForm.get('languages')?.setValue(currentLanguages - 1);
    }
  }

  openModalForPages(): void {
    this.isPageModal = true;
  }

  openModalForLanguages(): void {
    this.isPageModal = false;
  }
}

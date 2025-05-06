import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Output() websitePricePersonalized = new EventEmitter<number>();
  panelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.panelForm = this.fb.group({
      pages: [1, [Validators.required, Validators.min(1)]],
      languages: [1, [Validators.required, Validators.min(1)]],
    });

    this.panelForm.valueChanges.subscribe((values) => {
      const price = this.calculateWebsitePrice(values.pages, values.languages);
      this.websitePricePersonalized.emit(price);
    });
  }

  calculateWebsitePrice(pages: number, languages: number): number {
    return pages * languages * 30;
  }

  addPages(): void {
    const currentPages = this.panelForm.get('pages')?.value || 1;
    this.panelForm.get('pages')?.setValue(currentPages + 1);
  }

  substractPages(): void {
    const currentPages = this.panelForm.get('pages')?.value || 1;
    if (currentPages > 1) {
      this.panelForm.get('pages')?.setValue(currentPages - 1);
    }
  }

  addLanguages(): void {
    const currentLanguages = this.panelForm.get('languages')?.value || 1;
    this.panelForm.get('languages')?.setValue(currentLanguages + 1);
  }

  substractLanguages(): void {
    const currentLanguages = this.panelForm.get('languages')?.value || 1;
    if (currentLanguages > 1) {
      this.panelForm.get('languages')?.setValue(currentLanguages - 1);
    }
  }
}

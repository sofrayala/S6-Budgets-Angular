import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a page when addPages is called', () => {
    component.panelForm.get('pages')?.setValue(1);
    component.addPages();
    const updatedPages = component.panelForm.get('pages')?.value;
    expect(updatedPages).toBe(2);
  });

  it('should handle undefined pages withour breaking the page', () => {
    component.panelForm.get('pages')?.setValue(undefined);
    component.addPages();
    const updatedPages = component.panelForm.get('pages')?.value;
    expect(updatedPages).toBe(2);
  });
});

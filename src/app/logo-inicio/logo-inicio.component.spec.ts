import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoInicioComponent } from './logo-inicio.component';

describe('LogoInicioComponent', () => {
  let component: LogoInicioComponent;
  let fixture: ComponentFixture<LogoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

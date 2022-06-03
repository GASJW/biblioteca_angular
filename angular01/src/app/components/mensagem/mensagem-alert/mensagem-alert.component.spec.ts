import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemAlertComponent } from './mensagem-alert.component';

describe('MensagemAlertComponent', () => {
  let component: MensagemAlertComponent;
  let fixture: ComponentFixture<MensagemAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

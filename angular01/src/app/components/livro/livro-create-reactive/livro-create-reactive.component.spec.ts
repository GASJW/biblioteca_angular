import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCreateReactiveComponent } from './livro-create-reactive.component';

describe('LivroCreateReactiveComponent', () => {
  let component: LivroCreateReactiveComponent;
  let fixture: ComponentFixture<LivroCreateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroCreateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

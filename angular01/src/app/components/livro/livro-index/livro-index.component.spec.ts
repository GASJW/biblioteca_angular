import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroIndexComponent } from './livro-index.component';

describe('LivroIndexComponent', () => {
  let component: LivroIndexComponent;
  let fixture: ComponentFixture<LivroIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

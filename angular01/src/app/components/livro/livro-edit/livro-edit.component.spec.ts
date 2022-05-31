import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroEditComponent } from './livro-edit.component';

describe('LivroEditComponent', () => {
  let component: LivroEditComponent;
  let fixture: ComponentFixture<LivroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

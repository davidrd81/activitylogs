import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoperatorComponent } from './formoperator.component';

describe('FormoperatorComponent', () => {
  let component: FormoperatorComponent;
  let fixture: ComponentFixture<FormoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

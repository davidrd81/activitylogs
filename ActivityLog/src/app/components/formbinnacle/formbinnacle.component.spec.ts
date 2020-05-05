import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbinnacleComponent } from './formbinnacle.component';

describe('FormbinnacleComponent', () => {
  let component: FormbinnacleComponent;
  let fixture: ComponentFixture<FormbinnacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbinnacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbinnacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

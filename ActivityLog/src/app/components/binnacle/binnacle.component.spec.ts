import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinnacleComponent } from './binnacle.component';

describe('BinnacleComponent', () => {
  let component: BinnacleComponent;
  let fixture: ComponentFixture<BinnacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinnacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinnacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

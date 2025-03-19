import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrameComponent } from './borrame.component';

describe('BorrameComponent', () => {
  let component: BorrameComponent;
  let fixture: ComponentFixture<BorrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

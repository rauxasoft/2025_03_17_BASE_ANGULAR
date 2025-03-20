import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanceIconComponent } from './lance-icon.component';

describe('LanceIconComponent', () => {
  let component: LanceIconComponent;
  let fixture: ComponentFixture<LanceIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanceIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

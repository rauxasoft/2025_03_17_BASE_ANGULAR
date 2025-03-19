import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaArbitroComponent } from './ficha-arbitro.component';

describe('FichaArbitroComponent', () => {
  let component: FichaArbitroComponent;
  let fixture: ComponentFixture<FichaArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaArbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArbitrosComponent } from './listado-arbitros.component';

describe('ListadoArbitrosComponent', () => {
  let component: ListadoArbitrosComponent;
  let fixture: ComponentFixture<ListadoArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoArbitrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoArbitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

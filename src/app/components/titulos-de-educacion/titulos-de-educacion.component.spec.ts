import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulosDeEducacionComponent } from './titulos-de-educacion.component';

describe('TitulosDeEducacionComponent', () => {
  let component: TitulosDeEducacionComponent;
  let fixture: ComponentFixture<TitulosDeEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulosDeEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulosDeEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageLeadesComponent } from './mortgage-leades.component';

describe('MortgageLeadesComponent', () => {
  let component: MortgageLeadesComponent;
  let fixture: ComponentFixture<MortgageLeadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageLeadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageLeadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McaLeadsComponent } from './mca-leads.component';

describe('McaLeadsComponent', () => {
  let component: McaLeadsComponent;
  let fixture: ComponentFixture<McaLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McaLeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McaLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedCountryComponent } from './confirmed-country.component';

describe('ConfirmedCountryComponent', () => {
  let component: ConfirmedCountryComponent;
  let fixture: ComponentFixture<ConfirmedCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

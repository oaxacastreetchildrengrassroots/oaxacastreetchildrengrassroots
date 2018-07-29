import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationpageComponent } from './donationpage.component';

describe('DonationpageComponent', () => {
  let component: DonationpageComponent;
  let fixture: ComponentFixture<DonationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandShopsComponent } from './brand-shops.component';

describe('BrandShopsComponent', () => {
  let component: BrandShopsComponent;
  let fixture: ComponentFixture<BrandShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

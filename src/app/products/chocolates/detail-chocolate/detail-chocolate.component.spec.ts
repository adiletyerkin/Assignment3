import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChocolateComponent } from './detail-chocolate.component';

describe('DetailChocolateComponent', () => {
  let component: DetailChocolateComponent;
  let fixture: ComponentFixture<DetailChocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChocolateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

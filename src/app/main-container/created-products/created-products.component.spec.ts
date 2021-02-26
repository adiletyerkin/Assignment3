import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedProductsComponent } from './created-products.component';

describe('CreatedProductsComponent', () => {
  let component: CreatedProductsComponent;
  let fixture: ComponentFixture<CreatedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductDetailsComponent } from './show-product-details.component';

describe('ShowProductDetailsComponent', () => {
  let component: ShowProductDetailsComponent;
  let fixture: ComponentFixture<ShowProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

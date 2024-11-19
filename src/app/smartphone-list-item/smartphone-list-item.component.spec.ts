import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneListItemComponent } from './smartphone-list-item.component';

describe('SmartphoneListItemComponent', () => {
  let component: SmartphoneListItemComponent;
  let fixture: ComponentFixture<SmartphoneListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartphoneListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartphoneListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

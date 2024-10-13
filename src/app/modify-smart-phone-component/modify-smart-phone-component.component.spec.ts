import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySmartPhoneComponentComponent } from './modify-smart-phone-component.component';

describe('ModifySmartPhoneComponentComponent', () => {
  let component: ModifySmartPhoneComponentComponent;
  let fixture: ComponentFixture<ModifySmartPhoneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifySmartPhoneComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifySmartPhoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderregistrationComponent } from './serviceproviderregistration.component';

describe('ServiceproviderregistrationComponent', () => {
  let component: ServiceproviderregistrationComponent;
  let fixture: ComponentFixture<ServiceproviderregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceproviderregistrationComponent]
    });
    fixture = TestBed.createComponent(ServiceproviderregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

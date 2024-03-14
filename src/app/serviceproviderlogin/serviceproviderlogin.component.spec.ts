import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderloginComponent } from './serviceproviderlogin.component';

describe('ServiceproviderloginComponent', () => {
  let component: ServiceproviderloginComponent;
  let fixture: ComponentFixture<ServiceproviderloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceproviderloginComponent]
    });
    fixture = TestBed.createComponent(ServiceproviderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

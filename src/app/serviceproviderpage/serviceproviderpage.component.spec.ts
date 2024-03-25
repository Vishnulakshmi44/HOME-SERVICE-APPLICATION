import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderpageComponent } from './serviceproviderpage.component';

describe('ServiceproviderpageComponent', () => {
  let component: ServiceproviderpageComponent;
  let fixture: ComponentFixture<ServiceproviderpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceproviderpageComponent]
    });
    fixture = TestBed.createComponent(ServiceproviderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderlistComponent } from './serviceproviderlist.component';

describe('ServiceproviderlistComponent', () => {
  let component: ServiceproviderlistComponent;
  let fixture: ComponentFixture<ServiceproviderlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceproviderlistComponent]
    });
    fixture = TestBed.createComponent(ServiceproviderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

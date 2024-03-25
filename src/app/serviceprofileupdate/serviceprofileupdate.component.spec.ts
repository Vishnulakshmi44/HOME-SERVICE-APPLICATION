import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprofileupdateComponent } from './serviceprofileupdate.component';

describe('ServiceprofileupdateComponent', () => {
  let component: ServiceprofileupdateComponent;
  let fixture: ComponentFixture<ServiceprofileupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceprofileupdateComponent]
    });
    fixture = TestBed.createComponent(ServiceprofileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

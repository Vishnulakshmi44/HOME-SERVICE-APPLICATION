import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpackagesComponent } from './viewpackages.component';

describe('ViewpackagesComponent', () => {
  let component: ViewpackagesComponent;
  let fixture: ComponentFixture<ViewpackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpackagesComponent]
    });
    fixture = TestBed.createComponent(ViewpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

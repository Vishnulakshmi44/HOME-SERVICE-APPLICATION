import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpackageformComponent } from './addpackageform.component';

describe('AddpackageformComponent', () => {
  let component: AddpackageformComponent;
  let fixture: ComponentFixture<AddpackageformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpackageformComponent]
    });
    fixture = TestBed.createComponent(AddpackageformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

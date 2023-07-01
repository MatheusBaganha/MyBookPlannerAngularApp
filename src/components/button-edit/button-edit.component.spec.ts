import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditComponent } from './button-edit.component';

describe('ButtonEditComponent', () => {
  let component: ButtonEditComponent;
  let fixture: ComponentFixture<ButtonEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonEditComponent]
    });
    fixture = TestBed.createComponent(ButtonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserByCategoryComponent } from './user-by-category.component';

describe('UserByCategoryComponent', () => {
  let component: UserByCategoryComponent;
  let fixture: ComponentFixture<UserByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserByCategoryComponent]
    });
    fixture = TestBed.createComponent(UserByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

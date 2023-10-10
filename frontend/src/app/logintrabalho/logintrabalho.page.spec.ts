import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogintrabalhoPage } from './logintrabalho.page';

describe('LogintrabalhoPage', () => {
  let component: LogintrabalhoPage;
  let fixture: ComponentFixture<LogintrabalhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogintrabalhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

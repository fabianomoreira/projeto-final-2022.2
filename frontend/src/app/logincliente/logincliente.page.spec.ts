import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginclientePage } from './logincliente.page';

describe('LoginclientePage', () => {
  let component: LoginclientePage;
  let fixture: ComponentFixture<LoginclientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

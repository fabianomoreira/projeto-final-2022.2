import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfileditarPage } from './perfileditar.page';

describe('PerfileditarPage', () => {
  let component: PerfileditarPage;
  let fixture: ComponentFixture<PerfileditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfileditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

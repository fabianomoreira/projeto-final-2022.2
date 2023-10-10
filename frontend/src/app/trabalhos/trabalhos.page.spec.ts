import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrabalhosPage } from './trabalhos.page';

describe('TrabalhosPage', () => {
  let component: TrabalhosPage;
  let fixture: ComponentFixture<TrabalhosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrabalhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

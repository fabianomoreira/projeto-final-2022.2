import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanoPage } from './plano.page';

describe('PlanoPage', () => {
  let component: PlanoPage;
  let fixture: ComponentFixture<PlanoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

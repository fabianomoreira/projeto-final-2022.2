import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuPage } from './meu.page';

describe('MeuPage', () => {
  let component: MeuPage;
  let fixture: ComponentFixture<MeuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

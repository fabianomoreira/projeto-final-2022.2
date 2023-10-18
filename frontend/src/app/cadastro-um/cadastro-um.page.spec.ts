import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroUmPage } from './cadastro-um.page';

describe('CadastroUmPage', () => {
  let component: CadastroUmPage;
  let fixture: ComponentFixture<CadastroUmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroUmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

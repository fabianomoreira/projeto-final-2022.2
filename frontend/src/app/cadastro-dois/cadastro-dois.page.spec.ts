import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDoisPage } from './cadastro-dois.page';

describe('CadastroDoisPage', () => {
  let component: CadastroDoisPage;
  let fixture: ComponentFixture<CadastroDoisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

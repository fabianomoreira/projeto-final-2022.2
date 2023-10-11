import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosfuncPage } from './dadosfunc.page';

describe('DadosfuncPage', () => {
  let component: DadosfuncPage;
  let fixture: ComponentFixture<DadosfuncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosfuncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

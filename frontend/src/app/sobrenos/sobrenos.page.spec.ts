import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobrenosPage } from './sobrenos.page';

describe('SobrenosPage', () => {
  let component: SobrenosPage;
  let fixture: ComponentFixture<SobrenosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SobrenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

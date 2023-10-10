import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnuncioPage } from './anuncio.page';

describe('AnuncioPage', () => {
  let component: AnuncioPage;
  let fixture: ComponentFixture<AnuncioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

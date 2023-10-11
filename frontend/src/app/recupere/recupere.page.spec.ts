import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperePage } from './recupere.page';

describe('RecuperePage', () => {
  let component: RecuperePage;
  let fixture: ComponentFixture<RecuperePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

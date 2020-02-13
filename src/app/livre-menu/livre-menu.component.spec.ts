import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreMenuComponent } from './livre-menu.component';

describe('LivreMenuComponent', () => {
  let component: LivreMenuComponent;
  let fixture: ComponentFixture<LivreMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

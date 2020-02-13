import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMenuComponent } from './collection-menu.component';

describe('CollectionMenuComponent', () => {
  let component: CollectionMenuComponent;
  let fixture: ComponentFixture<CollectionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingOneComponent } from './sibling-one.component';

describe('SiblingOneComponent', () => {
  let component: SiblingOneComponent;
  let fixture: ComponentFixture<SiblingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingTwoComponent } from './sibling-two.component';

describe('SiblingTwoComponent', () => {
  let component: SiblingTwoComponent;
  let fixture: ComponentFixture<SiblingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomContactsComponent } from './random-contacts.component';

describe('RandomContactsComponent', () => {
  let component: RandomContactsComponent;
  let fixture: ComponentFixture<RandomContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

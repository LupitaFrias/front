import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAptitudComponent } from './add-aptitud.component';

describe('AddAptitudComponent', () => {
  let component: AddAptitudComponent;
  let fixture: ComponentFixture<AddAptitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAptitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAptitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

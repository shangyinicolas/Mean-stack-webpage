import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactormovieComponent } from './addactormovie.component';

describe('AddactormovieComponent', () => {
  let component: AddactormovieComponent;
  let fixture: ComponentFixture<AddactormovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddactormovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactormovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardDialogComponent } from './create-card-dialog.component';

describe('CreateCardDialogComponent', () => {
  let component: CreateCardDialogComponent;
  let fixture: ComponentFixture<CreateCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

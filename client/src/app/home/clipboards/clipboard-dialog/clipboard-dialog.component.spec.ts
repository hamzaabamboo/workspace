import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardDialogComponent } from './clipboard-dialog.component';

describe('ClipboardDialogComponent', () => {
  let component: ClipboardDialogComponent;
  let fixture: ComponentFixture<ClipboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

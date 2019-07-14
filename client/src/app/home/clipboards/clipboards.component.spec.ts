import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardsComponent } from './clipboards.component';

describe('ClipboardsComponent', () => {
  let component: ClipboardsComponent;
  let fixture: ComponentFixture<ClipboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

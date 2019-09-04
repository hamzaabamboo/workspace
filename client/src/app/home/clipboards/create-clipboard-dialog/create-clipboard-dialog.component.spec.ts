import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateClipboardDialogComponent } from "./create-clipboard-dialog.component";

describe("CreateClipboardDialogComponent", () => {
  let component: CreateClipboardDialogComponent;
  let fixture: ComponentFixture<CreateClipboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClipboardDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClipboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

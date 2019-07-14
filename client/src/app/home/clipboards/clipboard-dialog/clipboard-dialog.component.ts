import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ClipboardDialogData } from "../clipboards.component";

@Component({
  selector: "app-clipboard-dialog",
  templateUrl: "./clipboard-dialog.component.html",
  styleUrls: ["./clipboard-dialog.component.scss"]
})
export class ClipboardDialogComponent {
  constructor(
    private dialogService: MatDialog,
    public dialogRef: MatDialogRef<ClipboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClipboardDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit() {
    this.dialogRef.close();
    // this.dialogService.open();
  }
}

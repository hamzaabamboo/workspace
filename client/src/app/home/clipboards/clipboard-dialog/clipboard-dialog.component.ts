import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ClipboardDialogData } from "../clipboards.component";
import { NgNavigatorShareService } from "ng-navigator-share";

@Component({
  selector: "app-clipboard-dialog",
  templateUrl: "./clipboard-dialog.component.html",
  styleUrls: ["./clipboard-dialog.component.scss"]
})
export class ClipboardDialogComponent {
  navigator: { share?: any } & Navigator = navigator;

  constructor(
    private dialogService: MatDialog,
    public dialogRef: MatDialogRef<ClipboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClipboardDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async share() {
    if (this.navigator.share) {
      const res = await this.navigator.share({
        title: "Clipboard from Workspace",
        text: this.data.clipboard.content
      });
      this.dialogRef.close();
    }
  }
  edit() {
    this.dialogRef.close();
    // this.dialogService.open();
  }
}

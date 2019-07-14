import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from "@angular/material/dialog";
import { CardDialogData } from "../cards.component";

@Component({
  selector: "app-card-dialog",
  templateUrl: "./card-dialog.component.html",
  styleUrls: ["./card-dialog.component.scss"]
})
export class CardDialogComponent {
  constructor(
    private dialogService: MatDialog,
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  edit() {
    this.dialogRef.close();
    // this.dialogService.open();
  }
}

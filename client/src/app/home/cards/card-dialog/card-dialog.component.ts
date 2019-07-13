import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CardDialogData } from "../cards.component";

@Component({
  selector: "app-card-dialog",
  templateUrl: "./card-dialog.component.html",
  styleUrls: ["./card-dialog.component.scss"]
})
export class CardDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

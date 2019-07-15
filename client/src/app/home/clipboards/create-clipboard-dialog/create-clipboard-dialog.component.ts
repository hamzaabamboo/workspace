import { Component, OnInit, Inject } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DeleteClipboardGQL } from "src/app/generated/graphql";
import { ClipboardDialogData } from "../clipboards.component";

@Component({
  selector: "app-create-clipboard-dialog",
  templateUrl: "./create-clipboard-dialog.component.html",
  styleUrls: ["./create-clipboard-dialog.component.scss"]
})
export class CreateClipboardDialogComponent {
  message: string;

  constructor(
    private dialogService: MatDialog,
    public dialogRef: MatDialogRef<CreateClipboardDialogComponent>,
    public snackbarService: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async delete() {
    if (this.message) {
      console.log(this.message);
    }
  }
}

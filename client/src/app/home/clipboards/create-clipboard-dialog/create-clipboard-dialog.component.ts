import { Component, OnInit, Inject } from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  DeleteClipboardGQL,
  CreateClipboardGQL,
  GetCardsDocument,
  GetClipboardsDocument
} from "src/app/generated/graphql";

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
    public snackbarService: MatSnackBar,
    public createCardboardgql: CreateClipboardGQL
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async create() {
    await this.createCardboardgql
      .mutate(
        { data: { content: this.message } },
        { refetchQueries: [{ query: GetClipboardsDocument }] }
      )
      .toPromise();
    this.dialogRef.close();
  }
  async delete() {
    if (this.message) {
      console.log(this.message);
    }
  }
}
